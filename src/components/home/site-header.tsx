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
      <div className="flex min-h-[52px] flex-wrap items-center gap-x-7 gap-y-3 px-6 py-[8px] lg:flex-nowrap">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo-winstore.svg"
            alt="Winstore logo"
            width={135}
            height={48}
            priority
            className="h-[36px] w-auto"
          />
        </Link>

        <div className="flex h-[31px] min-w-0 flex-1 overflow-hidden rounded-[3px] bg-white text-[11px] text-slate-500 lg:max-w-[440px]">
          <label className="relative flex w-[116px] shrink-0 items-center border-r border-[#e8e8e8]">
            <select
              aria-label="Browse product categories"
              className="h-full w-full appearance-none bg-transparent pl-4 pr-7 text-[#8a8a8a] outline-none"
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
            className="flex w-[31px] items-center justify-center bg-[#d8d8d8] text-[#6e6e6e]"
          >
            <SearchIcon className="size-[13px]" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-5">
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
            <Link href="/" aria-label="Cart" className="relative flex items-center gap-1">
              <span className="absolute -right-[4px] -top-[5px] text-[8px] font-semibold">
                3
              </span>
              <CartIcon className="size-[15px] stroke-[1.9]" />
              <span className="hidden text-[11px] text-white/95 lg:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex h-[28px] items-center justify-between bg-[#083d40] px-6 text-[10px]">
        <div className="flex min-w-0 items-center gap-5 overflow-hidden">
          <Link
            href="#best-deals"
            className="inline-flex shrink-0 items-center gap-2 font-medium text-white/95"
          >
            <MenuIcon className="size-[11px]" />
            <span className="text-[11px]">Browse By Category</span>
          </Link>

          <nav className="flex min-w-0 items-center gap-7 overflow-hidden whitespace-nowrap text-white/85">
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
    </header>
  );
}
