import Image from "next/image";
import Link from "next/link";

import { formatCategoryLabel, formatPrice, type Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  const compareAtPrice = product.price * 1.18;

  return (
    <article className="group flex h-full flex-col border border-[#e6e6e6] bg-white px-3 pb-3 pt-2">
      <p className="text-[8px] uppercase leading-none text-[#b0b0b0]">
        Win store {formatCategoryLabel(product.category)}
      </p>

      <Link href={`/products/${product.id}`} className="mt-2 block">
        <span className="line-clamp-2 min-h-[34px] text-[11px] leading-[1.35] text-[#3d3d3d] transition group-hover:text-[var(--brand-500)]">
          {product.title}
        </span>
      </Link>

      <Link href={`/products/${product.id}`} className="mt-2 block">
        <div className="relative flex h-[108px] items-center justify-center overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, 220px"
            className="object-contain p-2 transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex items-end gap-1 text-[9px]">
          <span className="text-[#b9b9b9] line-through">
            {formatPrice(compareAtPrice)}
          </span>
          <span className="text-[11px] font-medium text-[var(--brand-500)]">
            {formatPrice(product.price)}
          </span>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="mt-3 inline-flex h-7 items-center justify-center bg-[var(--brand-500)] text-[11px] text-white transition hover:bg-[#159fc1]"
        >
          Add to cart
        </Link>
      </div>
    </article>
  );
}
