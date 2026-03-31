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

      <main className="mx-auto max-w-[1152px] px-4 py-8 sm:px-6 lg:py-10">
        <nav className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
          <Link href="/" className="transition hover:text-slate-800">
            Home
          </Link>
          <ChevronRightIcon className="size-3.5" />
          <span>{formatCategoryLabel(product.category)}</span>
          <ChevronRightIcon className="size-3.5" />
          <span className="text-slate-700">{product.title}</span>
        </nav>

        <section className="mt-6 overflow-hidden rounded-[28px] border border-[#e5e8eb] bg-white shadow-[0_18px_38px_-32px_rgba(15,32,48,0.35)]">
          <div className="grid lg:grid-cols-[0.92fr,1.08fr]">
            <div className="border-b border-[#eef1f3] bg-[#fbfdfe] p-5 lg:min-h-[620px] lg:border-b-0 lg:border-r lg:p-6">
              <div className="relative flex h-full min-h-[420px] items-center justify-center overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#eff7fb_0%,#f8fbfd_48%,#eef4f8_100%)] p-6 lg:min-h-[560px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_36%)]" />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain p-8 lg:p-10"
                />
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--brand-500)]">
                {formatCategoryLabel(product.category)}
              </p>

              <h1 className="mt-3 text-[34px] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-[#132032] sm:text-[42px]">
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
                <span className="text-[34px] font-semibold text-[var(--brand-900)]">
                  {formatPrice(product.price)}
                </span>
                <span className="pb-1 text-[12px] text-slate-400 line-through">
                  {formatPrice(product.price * 1.18)}
                </span>
              </div>

              <p className="mt-7 max-w-[720px] text-[13px] leading-7 text-slate-600">
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

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--brand-500)] px-5 text-[12px] font-semibold text-white transition hover:bg-[#129dbc]"
                >
                  Back To Home
                </Link>
                <a
                  href={`https://mm-assesment-server.vercel.app/api/v1/products/${product.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[#d8dfe4] px-5 text-[12px] font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Open API Record
                </a>
              </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 ? (
          <section className="mt-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--brand-500)]">
                  Same Category
                </p>
                <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] text-[#132032]">
                  Related Products
                </h2>
              </div>
              <p className="text-[13px] text-slate-500">
                More items from {formatCategoryLabel(product.category)}.
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
