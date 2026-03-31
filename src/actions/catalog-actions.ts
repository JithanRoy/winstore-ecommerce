"use server";

import "server-only";

import { cache } from "react";

import {
  isCategoryArray,
  isProduct,
  isProductArray,
  type HomePageData,
  type Product,
} from "@/lib/catalog";

const API_BASE_URL =
  process.env.ASSESSMENT_API_BASE_URL ??
  "https://mm-assesment-server.vercel.app/api/v1";

type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isApiEnvelope(value: unknown): value is ApiEnvelope<unknown> {
  return (
    isRecord(value) &&
    typeof value.success === "boolean" &&
    typeof value.message === "string" &&
    "data" in value
  );
}

async function fetchAssessmentData<T>(
  path: string,
  validator: (value: unknown) => value is T,
  options?: {
    allowNotFound?: boolean;
  },
): Promise<T | null> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
  });

  if (response.status === 404 && options?.allowNotFound) {
    return null;
  }

  const payload: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    const message = isApiEnvelope(payload)
      ? payload.message
      : `Request failed with status ${response.status}.`;

    throw new Error(message);
  }

  if (!isApiEnvelope(payload) || !payload.success || !validator(payload.data)) {
    throw new Error("Unexpected API response shape received from assessment API.");
  }

  return payload.data;
}

const loadAllProducts = cache(async () => {
  const products = await fetchAssessmentData("/products", isProductArray);

  if (!products) {
    throw new Error("Products response was empty.");
  }

  return products;
});

const loadCategories = cache(async () => {
  const categories = await fetchAssessmentData(
    "/products/categories",
    isCategoryArray,
  );

  if (!categories) {
    throw new Error("Categories response was empty.");
  }

  return categories;
});

const loadProductsByCategory = cache(async (categoryName: string) => {
  const products = await fetchAssessmentData(
    `/products/category/${encodeURIComponent(categoryName)}`,
    isProductArray,
  );

  if (!products) {
    throw new Error(`Category response for "${categoryName}" was empty.`);
  }

  return products;
});

const loadProductById = cache(async (productId: number) => {
  return fetchAssessmentData<Product>(`/products/${productId}`, isProduct, {
    allowNotFound: true,
  });
});

export async function getAllProductsAction() {
  return loadAllProducts();
}

export async function getCategoriesAction() {
  return loadCategories();
}

export async function getProductsByCategoryAction(categoryName: string) {
  return loadProductsByCategory(categoryName);
}

export async function getProductByIdAction(productId: number) {
  if (!Number.isInteger(productId) || productId <= 0) {
    return null;
  }

  return loadProductById(productId);
}

export async function getHomePageDataAction(): Promise<HomePageData> {
  const [allProducts, categories] = await Promise.all([
    loadAllProducts(),
    loadCategories(),
  ]);

  const categorySections = await Promise.all(
    categories.map(async (category) => ({
      category,
      products: (await loadProductsByCategory(category.name)).slice(0, 8),
    })),
  );

  return {
    categories,
    recentProducts: allProducts.slice(0, 10),
    featuredProducts: [...allProducts]
      .sort((left, right) => right.rating.rate - left.rating.rate)
      .slice(0, 6),
    categorySections,
    allProducts,
  };
}
