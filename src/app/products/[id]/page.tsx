import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import {
  getCategoriesAction,
  getProductByIdAction,
  getProductsByCategoryAction,
} from "@/actions/catalog-actions";
import { ChevronRightIcon, StarIcon } from "@/components/icons";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { ProductCard } from "@/components/ui/product-card";
import { formatCategoryLabel, formatPrice } from "@/lib/catalog";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  await connection();

  const { id } = await params;
  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    notFound();
  }

  const [categories, product] = await Promise.all([
    getCategoriesAction(),
    getProductByIdAction(productId),
  ]);

  if (!product) {
    notFound();
  }

  const relatedProducts = (await getProductsByCategoryAction(product.category))
    .filter((relatedProduct) => relatedProduct.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader categories={categories} />

      <main className="mx-auto max-w-[1152px] px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        <nav className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500 sm:text-[11px]">
          <Link href="/" className="transition hover:text-slate-800">
            Home
          </Link>
          <ChevronRightIcon className="size-3.5" />
          <span>{formatCategoryLabel(product.category)}</span>
          <ChevronRightIcon className="size-3.5" />
          <span className="text-slate-700">{product.title}</span>
        </nav>

        <section className="mt-5 overflow-hidden rounded-[22px] border border-[#e5e8eb] bg-white shadow-[0_18px_38px_-32px_rgba(15,32,48,0.35)] sm:mt-6 sm:rounded-[28px]">
          <div className="grid lg:grid-cols-[0.92fr,1.08fr]">
            <div className="border-b border-[#eef1f3] bg-[#fbfdfe] p-4 sm:p-5 lg:min-h-[620px] lg:border-b-0 lg:border-r lg:p-6">
              <div className="relative flex h-full min-h-[290px] items-center justify-center overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#eff7fb_0%,#f8fbfd_48%,#eef4f8_100%)] p-4 sm:min-h-[420px] sm:rounded-[22px] sm:p-6 lg:min-h-[560px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_36%)]" />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain p-5 sm:p-8 lg:p-10"
                />
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--brand-500)]">
                {formatCategoryLabel(product.category)}
              </p>

              <h1 className="mt-3 text-[28px] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-[#132032] sm:text-[34px] lg:text-[42px]">
                {product.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-[12px] text-slate-500">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-amber-600">
                  <StarIcon className="size-3.5" />
                  {product.rating.rate.toFixed(1)} rating
                </span>
                <span>{product.rating.count} verified reviews</span>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-[28px] font-semibold text-[var(--brand-900)] sm:text-[34px]">
                  {formatPrice(product.price)}
                </span>
                <span className="pb-1 text-[12px] text-slate-400 line-through">
                  {formatPrice(product.price * 1.18)}
                </span>
              </div>

              <p className="mt-6 max-w-[720px] text-[13px] leading-6 text-slate-600 sm:mt-7 sm:leading-7">
                {product.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[16px] bg-[#f7fbfc] px-4 py-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Delivery
                  </p>
                  <p className="mt-2 text-[12px] font-semibold text-slate-800">
                    Free shipping over $50
                  </p>
                </div>
                <div className="rounded-[16px] bg-[#f7fbfc] px-4 py-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Support
                  </p>
                  <p className="mt-2 text-[12px] font-semibold text-slate-800">
                    Server-rendered product detail
                  </p>
                </div>
                <div className="rounded-[16px] bg-[#f7fbfc] px-4 py-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Source
                  </p>
                  <p className="mt-2 text-[12px] font-semibold text-slate-800">
                    Single product endpoint
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--brand-500)] px-5 text-[12px] font-semibold text-white transition hover:bg-[#129dbc]"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 ? (
          <section className="mt-12 sm:mt-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--brand-500)]">
                  Same Category
                </p>
                <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-[#132032] sm:text-[30px]">
                  Related Products
                </h2>
              </div>
              <p className="text-[13px] text-slate-500">
                More items from {formatCategoryLabel(product.category)}.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  );
}
