import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { Product } from "@/lib/catalog";

type ShowcaseCard = {
  title: string;
  backgroundImage: string;
  backgroundPosition: string;
  product: Product | null;
};

function ShowcaseArrow({ direction }: { direction: "left" | "right" }) {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;
  const positionClass =
    direction === "left" ? "left-[-28px]" : "right-[-28px]";

  return (
    <div
      aria-hidden="true"
      className={`absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[#1b1b1b] shadow-[0_8px_18px_-14px_rgba(0,0,0,0.45)] xl:flex ${positionClass}`}
    >
      <Icon className="size-7 stroke-[1.4]" />
    </div>
  );
}

export function CategoryShowcase({ cards }: { cards: ShowcaseCard[] }) {
  return (
    <section
      id="category-showcase"
      className="relative border-b border-[#ececec] py-3"
    >
      <div className="relative">
        <ShowcaseArrow direction="left" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.product ? `/products/${card.product.id}` : "/"}
              className="group relative overflow-hidden border border-[#dbdbdb] bg-[#f8f8f8]"
            >
              <div
                className="relative h-[150px] bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundPosition: card.backgroundPosition,
                }}
              />
              <div className="absolute inset-x-[10px] bottom-[10px] flex items-center justify-between bg-white/92 px-3 py-2 shadow-[0_4px_12px_-10px_rgba(0,0,0,0.5)]">
                <h3 className="font-display text-[19px] leading-none text-[#222]">
                  {card.title}
                </h3>
                <span className="text-[14px] text-[var(--brand-500)]">Shop</span>
              </div>
            </Link>
          ))}
        </div>
        <ShowcaseArrow direction="right" />
      </div>
    </section>
  );
}
