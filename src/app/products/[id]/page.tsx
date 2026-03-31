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
    <div className="min-h-screen">
      <SiteHeader categories={categories} />
      <main className="mx-auto max-w-[1220px] px-4 py-10 sm:px-6">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-800">
            Home
          </Link>
          <ChevronRightIcon className="size-4" />
          <span>{formatCategoryLabel(product.category)}</span>
          <ChevronRightIcon className="size-4" />
          <span className="text-slate-800">{product.title}</span>
        </nav>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="rounded-[32px] border border-[var(--border)] bg-white p-6 card-shadow sm:p-8">
            <div className="relative flex min-h-[420px] items-center justify-center rounded-[26px] bg-[radial-gradient(circle_at_top,#f2fdff_0%,#f7fafb_45%,#e8f3f5_100%)] p-8">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-contain p-8"
              />
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--border)] bg-white p-6 card-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">
              {formatCategoryLabel(product.category)}
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-none text-slate-900 sm:text-6xl">
              {product.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 font-semibold text-amber-600">
                <StarIcon className="size-4" />
                {product.rating.rate.toFixed(1)} rating
              </span>
              <span>{product.rating.count} verified reviews</span>
            </div>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-4xl font-semibold text-[var(--brand-900)]">
                {formatPrice(product.price)}
              </span>
              <span className="text-lg text-slate-400 line-through">
                {formatPrice(product.price * 1.18)}
              </span>
            </div>

            <p className="mt-8 text-base leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] bg-[#f7fbfc] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Delivery
                </p>
                <p className="mt-2 font-semibold text-slate-800">
                  Free shipping over $50
                </p>
              </div>
              <div className="rounded-[24px] bg-[#f7fbfc] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Support
                </p>
                <p className="mt-2 font-semibold text-slate-800">
                  Server-rendered product detail
                </p>
              </div>
              <div className="rounded-[24px] bg-[#f7fbfc] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Source
                </p>
                <p className="mt-2 font-semibold text-slate-800">
                  Single product endpoint
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-500)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0ea7bf]"
              >
                Back To Home
              </Link>
              <a
                href={`https://mm-assesment-server.vercel.app/api/v1/products/${product.id}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Open API Record
              </a>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 ? (
          <section className="mt-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">
                  Same Category
                </p>
                <h2 className="mt-3 font-display text-5xl uppercase leading-none text-slate-900">
                  Related Products
                </h2>
              </div>
              <p className="text-sm text-slate-500">
                More items from {formatCategoryLabel(product.category)}.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
