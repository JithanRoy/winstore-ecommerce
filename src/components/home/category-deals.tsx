"use client";

import { useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { ProductCard } from "@/components/ui/product-card";
import {
  formatCategoryLabel,
  type HomeCategorySection,
} from "@/lib/catalog";

export function CategoryDeals({
  sections,
}: {
  sections: HomeCategorySection[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSection = sections[activeIndex] ?? sections[0];

  if (!activeSection) {
    return null;
  }

  return (
    <section id="best-deals" className="mt-16">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <h2 className="font-display text-[30px] leading-none text-[#2b2b2b]">
          <span className="text-[var(--brand-500)]">Best</span> Deals
        </h2>

        <div className="flex flex-col gap-3 xl:items-end">
          <div className="flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.03em] text-[#585858]">
            {sections.map((section, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={section.category.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`border-b pb-1 transition ${
                    isActive
                      ? "border-[var(--brand-500)] text-[var(--brand-500)]"
                      : "border-transparent text-[#5b5b5b] hover:text-[var(--brand-500)]"
                  }`}
                >
                  {formatCategoryLabel(section.category.name)}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1 text-[#6f6f6f]">
            <button
              type="button"
              aria-label="Previous category"
              onClick={() =>
                setActiveIndex((currentIndex) =>
                  currentIndex === 0 ? sections.length - 1 : currentIndex - 1,
                )
              }
              className="p-1 transition hover:text-[#1f1f1f]"
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next category"
              onClick={() =>
                setActiveIndex((currentIndex) =>
                  currentIndex === sections.length - 1 ? 0 : currentIndex + 1,
                )
              }
              className="p-1 transition hover:text-[#1f1f1f]"
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {activeSection.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
