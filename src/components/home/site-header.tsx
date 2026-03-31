import Image from "next/image";
import Link from "next/link";

import type { Category } from "@/lib/catalog";
import { formatCategoryLabel } from "@/lib/catalog";
import {
  CartIcon,
  ChevronDownIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LinkedInIcon,
  MenuIcon,
  SearchIcon,
  TwitterIcon,
  UserIcon,
} from "@/components/icons";

const supportingLinks = [
  { label: "Home", href: "/" },
  { label: "Easy Monthly Installments", href: "#new-arrivals" },
  { label: "Shop by Brands", href: "#category-showcase" },
  { label: "Become a Vendor", href: "#site-footer" },
];

export function SiteHeader({ categories }: { categories: Category[] }) {
  return (
    <header className="bg-[#0a4a4c] text-white">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-[12px] lg:flex-nowrap">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo-winstore.svg"
            alt="Winstore logo"
            width={135}
            height={48}
            priority
            className="h-[32px] w-auto"
          />
        </Link>

        <div className="flex h-[32px] min-w-0 flex-1 overflow-hidden rounded-[3px] bg-white text-[12px] text-slate-500 lg:max-w-[430px]">
          <label className="relative flex w-[118px] shrink-0 items-center border-r border-[#e8e8e8]">
            <select
              aria-label="Browse product categories"
              className="h-full w-full appearance-none bg-transparent pl-4 pr-7 text-[#848484] outline-none"
              defaultValue=""
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {formatCategoryLabel(category.name)}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-2.5 size-3 text-[#bababa]" />
          </label>

          <input
            aria-label="Search products"
            className="h-full min-w-0 flex-1 px-4 outline-none placeholder:text-[#bbbbbb]"
            placeholder="Search for products"
          />

          <button
            type="button"
            aria-label="Submit search"
            className="flex w-[32px] items-center justify-center bg-[#dedede] text-[#6e6e6e]"
          >
            <SearchIcon className="size-4" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <div className="hidden text-right text-[10px] leading-[1.3] text-white/95 sm:block">
            <p className="text-white/80">Call Us Now</p>
            <p>+011 5827918</p>
            <Link href="/" className="mt-[3px] block">
              Sign In
            </Link>
          </div>

          <div className="flex items-center gap-[14px]">
            <Link href="/" aria-label="Account">
              <UserIcon className="size-[16px]" />
            </Link>
            <Link href="/" aria-label="Wishlist">
              <HeartIcon className="size-[16px]" />
            </Link>
            <Link href="/" aria-label="Cart" className="relative">
              <CartIcon className="size-[16px]" />
              <span className="absolute -right-[7px] -top-[6px] text-[9px] font-semibold">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex h-[36px] items-center justify-between bg-[#083d40] px-5 text-[12px]">
        <div className="flex min-w-0 items-center gap-5 overflow-hidden">
          <Link
            href="#best-deals"
            className="inline-flex shrink-0 items-center gap-2 font-medium"
          >
            <MenuIcon className="size-[13px]" />
            <span className="text-[13px]">Browse By Category</span>
          </Link>

          <nav className="flex min-w-0 items-center gap-5 overflow-hidden whitespace-nowrap text-white/90">
            {supportingLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="ml-4 flex shrink-0 items-center gap-4 text-white">
          <a href="https://facebook.com" aria-label="Facebook">
            <FacebookIcon className="size-[14px]" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <TwitterIcon className="size-[14px]" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <LinkedInIcon className="size-[14px]" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <InstagramIcon className="size-[14px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
