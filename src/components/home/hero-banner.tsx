import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/catalog";

export function HeroBanner({ products }: { products: Product[] }) {
  const [primary] = products;

  return (
    <section className="relative overflow-hidden border-b border-[#efe5ba] bg-[#fff8df]">
      <Image
        src="/hero-banner.png"
        alt="Banner artwork featuring a laptop, headphones, and accessories"
        width={1400}
        height={318}
        priority
        className="block h-auto w-full"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,223,0.94)_0%,rgba(255,248,223,0.74)_20%,rgba(255,248,223,0.3)_36%,rgba(255,248,223,0.06)_52%,rgba(255,248,223,0)_70%)]" />

      <div className="absolute inset-y-0 left-0 z-10 flex w-[44%] items-center">
        <div className="pl-12">
          <h1 className="text-[59px] font-light leading-[0.94] text-[#1f1f1f]">
            <span className="block">Shop</span>
            <span className="block text-[var(--brand-500)]">Computer</span>
            <span className="block text-[var(--brand-500)]">
              & experience
            </span>
          </h1>

          <p className="mt-3 max-w-[300px] text-[11px] leading-[1.3] text-[#333]">
            You Cannot Inspect Quality Into The Product; It Is Already There.
            <br />
            I Am Not A Product Of My Circumstances. I Am A Product Of My
            Decisions.
          </p>

          <Link
            href={primary ? `/products/${primary.id}` : "/"}
            className="mt-5 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-[var(--brand-500)] px-5 text-[13px] text-white transition hover:bg-[#1a9ec0]"
          >
            View More
          </Link>
        </div>
      </div>

      <div className="absolute right-[86px] top-[25px] z-20 flex h-[112px] w-[112px] items-center justify-center rounded-full bg-[#ff9d2f] text-center text-white">
        <div className="leading-none">
          <div className="text-[25px] font-light">40%</div>
          <div className="mt-2 text-[24px] font-light">Off</div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[11px] z-20 flex items-center justify-center gap-[10px]">
        <span className="h-[6px] w-[27px] rounded-full bg-[#0b6969]" />
        <span className="h-[6px] w-[22px] rounded-full bg-[#b7a6bb]" />
        <span className="h-[6px] w-[22px] rounded-full bg-[#c1ad8b]" />
      </div>
    </section>
  );
}
