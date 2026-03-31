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
        className="block h-[190px] w-full object-cover object-[72%_center] sm:h-[250px] sm:object-[70%_center] md:h-auto md:object-contain md:object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,223,0.97)_0%,rgba(255,248,223,0.92)_28%,rgba(255,248,223,0.62)_48%,rgba(255,248,223,0.16)_66%,rgba(255,248,223,0)_82%)] md:bg-[linear-gradient(90deg,rgba(255,248,223,0.96)_0%,rgba(255,248,223,0.83)_17%,rgba(255,248,223,0.55)_30%,rgba(255,248,223,0.16)_45%,rgba(255,248,223,0.02)_60%,rgba(255,248,223,0)_74%)]" />

      <div className="absolute inset-x-0 top-0 z-10 flex min-h-full items-start md:inset-y-0 md:left-0 md:w-[43%] md:items-center">
        <div className="w-[56%] max-w-[220px] px-4 pb-12 pt-4 sm:w-[50%] sm:max-w-[260px] sm:px-6 sm:pt-7 md:w-auto md:max-w-none md:pl-10 md:pt-1">
          <h1 className="text-[21px] font-light leading-[0.92] text-[#1f1f1f] sm:text-[34px] md:text-[54px]">
            <span className="block">Shop</span>
            <span className="block text-[var(--brand-500)]">Computer</span>
            <span className="block text-[var(--brand-500)]">& experience</span>
          </h1>

          <p className="mt-2 hidden max-w-[292px] text-[11px] leading-[1.28] text-[#333] sm:block sm:text-[12px]">
            You Cannot Inspect Quality Into The Product; It Is Already There.
            <br />I Am Not A Product Of My Circumstances. I Am A Product Of My
            Decisions.
          </p>

          <Link
            href={primary ? `/products/${primary.id}` : "/"}
            className="mt-3 inline-flex h-[28px] items-center justify-center rounded-[3px] bg-[var(--brand-500)] px-4 text-[11px] font-medium !text-white transition hover:bg-[#1a9ec0] sm:mt-5 sm:h-[32px] sm:px-5 sm:text-[12px]"
          >
            View More
          </Link>
        </div>
      </div>

      <div className="absolute right-3 top-3 z-20 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ff9d2f] text-center text-white shadow-[0_12px_18px_-14px_rgba(0,0,0,0.35)] sm:right-6 sm:top-5 sm:h-[82px] sm:w-[82px] md:right-[67px] md:top-[18px] md:h-[90px] md:w-[90px]">
        <div className="leading-none">
          <div className="text-[14px] font-light sm:text-[19px] md:text-[20px]">
            40%
          </div>
          <div className="mt-1 text-[13px] font-light sm:text-[17px] md:text-[18px]">
            Off
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[8px] z-20 flex items-center justify-center gap-[8px] sm:bottom-[12px] sm:gap-[10px]">
        <span className="h-[5px] w-[20px] rounded-full bg-[#0b6969] sm:h-[6px] sm:w-[24px]" />
        <span className="h-[5px] w-[16px] rounded-full bg-[#b7a6bb] sm:h-[6px] sm:w-[20px]" />
        <span className="h-[5px] w-[16px] rounded-full bg-[#c1ad8b] sm:h-[6px] sm:w-[20px]" />
      </div>
    </section>
  );
}
