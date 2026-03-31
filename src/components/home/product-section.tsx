import { ProductCard } from "@/components/ui/product-card";
import type { Product } from "@/lib/catalog";

type ProductSectionProps = {
  id?: string;
  accent: string;
  title: string;
  subtitle: string;
  products: Product[];
};

export function ProductSection({
  id,
  accent,
  title,
  subtitle,
  products,
}: ProductSectionProps) {
  return (
    <section id={id} className="mt-10 sm:mt-12 lg:mt-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-[24px] leading-none text-[#2b2b2b] sm:text-[27px] lg:text-[30px]">
            <span className="text-[var(--brand-500)]">{accent}</span> {title}
          </h2>
          <p className="sr-only">{subtitle}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
