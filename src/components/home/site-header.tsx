import Image from "next/image";
import Link from "next/link";

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
import type { Category } from "@/lib/catalog";
import { formatCategoryLabel } from "@/lib/catalog";

const supportingLinks = [
  { label: "Home", href: "/" },
  { label: "Easy Monthly Installments", href: "#new-arrivals" },
  { label: "Shop by Brands", href: "#category-showcase" },
  { label: "Become a Vendor", href: "#site-footer" },
];

export function SiteHeader({ categories }: { categories: Category[] }) {
  return (
    <header className="bg-[#0a4a4c] text-white">
      <div className="flex min-h-[52px] flex-col gap-3 px-4 py-3 sm:px-5 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-x-7 lg:gap-y-3 lg:px-6 lg:py-[8px]">
        <div className="flex items-center justify-between gap-4 lg:contents">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo-winstore.svg"
              alt="Winstore logo"
              width={135}
              height={48}
              priority
              className="h-[30px] w-auto sm:h-[34px] lg:h-[36px]"
            />
          </Link>

          <div className="flex items-center gap-4 lg:hidden">
            <Link href="/" aria-label="Account">
              <UserIcon className="size-[15px] stroke-[1.9]" />
            </Link>
            <Link href="/" aria-label="Wishlist">
              <HeartIcon className="size-[15px] stroke-[1.9]" />
            </Link>
            <Link href="/" aria-label="Cart" className="relative">
              <span className="absolute -right-[4px] -top-[5px] text-[8px] font-semibold">
                3
              </span>
              <CartIcon className="size-[15px] stroke-[1.9]" />
            </Link>
          </div>
        </div>

        <div className="flex h-[38px] min-w-0 w-full overflow-hidden rounded-[3px] bg-white text-[11px] text-slate-500 lg:h-[31px] lg:max-w-[440px]">
          <label className="relative flex w-[118px] shrink-0 items-center border-r border-[#e8e8e8] sm:w-[126px]">
            <select
              aria-label="Browse product categories"
              className="h-full w-full appearance-none bg-transparent pl-3 pr-7 text-[#8a8a8a] outline-none sm:pl-4"
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
            className="h-full min-w-0 flex-1 px-3 outline-none placeholder:text-[#bbbbbb] sm:px-4"
            placeholder="Search for products"
          />

          <button
            type="button"
            aria-label="Submit search"
            className="flex w-[38px] items-center justify-center bg-[#d8d8d8] text-[#6e6e6e] lg:w-[31px]"
          >
            <SearchIcon className="size-[13px]" />
          </button>
        </div>

        <div className="hidden ml-auto items-center gap-5 lg:flex">
          <div className="hidden text-right text-[9px] leading-[1.25] text-white/95 sm:block">
            <p className="text-white/70">Call Us Now</p>
            <p className="mt-[1px]">+011 5827918</p>
            <Link href="/" className="mt-[4px] block">
              Sign In
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" aria-label="Account">
              <UserIcon className="size-[15px] stroke-[1.9]" />
            </Link>
            <Link href="/" aria-label="Wishlist">
              <HeartIcon className="size-[15px] stroke-[1.9]" />
            </Link>
            <Link
              href="/"
              aria-label="Cart"
              className="relative flex items-center gap-1"
            >
              <span className="absolute -right-[4px] -top-[5px] text-[8px] font-semibold">
                3
              </span>
              <CartIcon className="size-[15px] stroke-[1.9]" />
              <span className="hidden text-[11px] text-white/95 lg:inline">
                Cart
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#083d40] px-4 py-2 text-[10px] sm:px-5 lg:h-[28px] lg:px-6 lg:py-0">
        <div className="flex flex-col pt-1.5 gap-2 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="#best-deals"
            className="inline-flex shrink-0 items-center gap-2 font-medium text-white/95"
          >
            <MenuIcon className="size-[11px]" />
            <span className="text-[11px]">Browse By Category</span>
          </Link>

          <nav className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2 text-white/85 lg:gap-7 lg:overflow-hidden lg:whitespace-nowrap">
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
          <div className="flex items-center gap-4 text-white lg:ml-4 lg:shrink-0">
            <a href="https://facebook.com" aria-label="Facebook">
              <FacebookIcon className="size-[12px]" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <TwitterIcon className="size-[12px]" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedInIcon className="size-[12px]" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <InstagramIcon className="size-[12px]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
