import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons";

const footerColumns = [
  {
    title: "Trending",
    links: ["Installments", "Tech Notes", "Grocery", "Health & Beauty"],
  },
  {
    title: "Information",
    links: ["About Us", "Contact Us", "FAQs", "Shipping & Return"],
  },
  {
    title: "Customer Care",
    links: ["My Account", "Track Your Order", "Wishlist", "Become a Vendor"],
  },
] as const;

const paymentBadges = [
  { label: "Visa", className: "bg-white text-[#1a4fa1]" },
  { label: "Master", className: "bg-white text-[#ef6b1d]" },
  { label: "Cash", className: "bg-white text-[#303030]" },
  { label: "PayPal", className: "bg-white text-[#1598d6]" },
] as const;

export function SiteFooter() {
  return (
    <footer id="site-footer" className="mt-14 bg-[var(--footer)] text-white">
      <div className="px-8 py-10 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.45fr,1fr,1fr,1fr]">
          <div>
            <div className="flex items-end gap-1">
              <span className="font-display text-[28px] font-bold leading-none">
                WiN
              </span>
              <span className="pb-[3px] text-[10px] font-semibold text-white/60">
                store
              </span>
            </div>
            <p className="mt-4 text-[15px] text-[var(--brand-400)]">
              Get questions? Call us 24/7
            </p>
            <div className="mt-3 space-y-1 text-[11px] leading-5 text-white/60">
              <p>+01 111 444 888</p>
              <p>contact@winstore.dev</p>
              <p>Monitored support.</p>
            </div>
            <p className="mt-5 text-[15px] text-[var(--brand-400)]">
              Contact info
            </p>
            <div className="mt-2 flex items-center gap-3 text-white/75">
              <a href="https://facebook.com" aria-label="Facebook">
                <FacebookIcon className="size-4" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <TwitterIcon className="size-4" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <LinkedInIcon className="size-4" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[16px] text-[var(--brand-400)]">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-2 text-[11px] leading-5 text-white/60">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="/" className="transition hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-2">
          {paymentBadges.map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex h-8 items-center rounded-[3px] px-3 text-[11px] font-semibold uppercase ${badge.className}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[#161616] px-8 py-3 text-[11px] text-white/55 sm:px-10">
        © 2021 Winstore. All Right Reserved.
      </div>
    </footer>
  );
}
