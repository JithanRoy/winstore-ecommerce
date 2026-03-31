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
    <section id={id} className="mt-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-[30px] leading-none text-[#2b2b2b]">
            <span className="text-[var(--brand-500)]">{accent}</span> {title}
          </h2>
          <p className="sr-only">{subtitle}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
