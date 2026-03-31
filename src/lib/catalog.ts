export type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
};

export type Category = {
  id: number;
  name: string;
};

export type HomeCategorySection = {
  category: Category;
  products: Product[];
};

export type HomePageData = {
  categories: Category[];
  recentProducts: Product[];
  featuredProducts: Product[];
  categorySections: HomeCategorySection[];
  allProducts: Product[];
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isRating(value: unknown): value is ProductRating {
  return (
    isRecord(value) &&
    typeof value.rate === "number" &&
    typeof value.count === "number"
  );
}

export function isProduct(value: unknown): value is Product {
  return (
    isRecord(value) &&
    typeof value.id === "number" &&
    typeof value.title === "string" &&
    typeof value.price === "number" &&
    typeof value.description === "string" &&
    typeof value.category === "string" &&
    typeof value.image === "string" &&
    isRating(value.rating)
  );
}

export function isProductArray(value: unknown): value is Product[] {
  return Array.isArray(value) && value.every(isProduct);
}

export function isCategory(value: unknown): value is Category {
  return (
    isRecord(value) &&
    typeof value.id === "number" &&
    typeof value.name === "string"
  );
}

export function isCategoryArray(value: unknown): value is Category[] {
  return Array.isArray(value) && value.every(isCategory);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price);
}

export function formatCategoryLabel(category: string): string {
  return category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
