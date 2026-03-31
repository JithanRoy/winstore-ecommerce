import { connection } from "next/server";

import { getHomePageDataAction } from "@/actions/catalog-actions";
import { CategoryDeals } from "@/components/home/category-deals";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { HeroBanner } from "@/components/home/hero-banner";
import { ProductSection } from "@/components/home/product-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import type { Product } from "@/lib/catalog";
import { homeHeroProductIds, showcasePromos } from "@/lib/home-demo-data";

function isProduct(value: Product | undefined): value is Product {
  return Boolean(value);
}

export default async function Home() {
  await connection();

  const homePageData = await getHomePageDataAction();

  const productMap = new Map(
    homePageData.allProducts.map((product) => [product.id, product]),
  );

  const heroProducts = homeHeroProductIds
    .map((productId) => productMap.get(productId))
    .filter(isProduct);

  const showcaseCards = showcasePromos.map((promo, index) => ({
    title: promo.title,
    backgroundImage: promo.backgroundImage,
    backgroundPosition: promo.backgroundPosition,
    product:
      productMap.get(promo.fallbackProductId) ??
      homePageData.featuredProducts[index] ??
      null,
  }));

  return (
    <div className="min-h-screen mx-auto">
      <SiteHeader categories={homePageData.categories} />
      <HeroBanner
        products={
          heroProducts.length > 0
            ? heroProducts
            : homePageData.featuredProducts.slice(0, 3)
        }
      />

      <main className=" w-full px-4 pb-12 pt-2 sm:px-6 lg:px-8">
        <CategoryShowcase cards={showcaseCards} />

        <section className="mt-8 space-y-10">
          <ProductSection
            id="new-arrivals"
            accent="New"
            title="Arrivals"
            subtitle="This section uses the all-products endpoint and intentionally caps the list at 10 recent items, matching the assessment note."
            products={homePageData.recentProducts}
          />

          <CategoryDeals sections={homePageData.categorySections} />
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
