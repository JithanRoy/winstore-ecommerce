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
    <div className="min-h-screen bg-[var(--page-bg)] px-3 py-3 sm:px-4">
      <div className="mx-auto max-w-[1048px] px-1 text-[11px] text-[#b8b8b8]">
        Home Page
      </div>
      <div className="site-shell mx-auto mt-1 max-w-[1048px] overflow-hidden bg-white">
        <SiteHeader categories={homePageData.categories} />
        <HeroBanner
          products={
            heroProducts.length > 0
              ? heroProducts
              : homePageData.featuredProducts.slice(0, 3)
          }
        />
        <CategoryShowcase cards={showcaseCards} />
        <main className="px-8 pb-16 pt-8 sm:px-10">
          <ProductSection
            id="new-arrivals"
            accent="New"
            title="Arrivals"
            subtitle="This section uses the all-products endpoint and intentionally caps the list at 10 recent items, matching the assessment note."
            products={homePageData.recentProducts}
          />
          <CategoryDeals sections={homePageData.categorySections} />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
