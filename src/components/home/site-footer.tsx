import Image from "next/image";
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
    links: [
      "Installments",
      "Electronics",
      "Grocery",
      "Health & Beauty",
      "Home Appliances",
      "Mobile Accessories",
    ],
  },
  {
    title: "Information",
    links: [
      "About Us",
      "Contact Us",
      "FAQs",
      "Shipping & Return",
      "Privacy policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "My Account",
      "Track Your Order",
      "Recently Viewed",
      "Wishlist",
      "Compare",
      "Become a Vendor",
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer id="site-footer" className="mt-12 bg-[#3b3b3b] text-white sm:mt-14">
      <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12 xl:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-[290px] shrink-0">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-winstore.svg"
                alt="Winstore logo"
                width={132}
                height={48}
                className="h-[42px] w-auto brightness-0 invert"
              />
            </Link>

            <p className="mt-6 text-[17px] leading-none text-[var(--brand-400)]">
              Got questions? Call us 24/7!
            </p>

            <div className="mt-4 space-y-0.5 text-[12px] leading-[1.7] text-white">
              <p>03 111 666 144</p>
              <p>0317 1777015.</p>
            </div>

            <p className="mt-6 text-[17px] leading-none text-[var(--brand-400)]">
              Contact info
            </p>

            <p className="mt-2 text-[12px] text-white">info@winstore.pk</p>

            <div className="mt-4 flex items-center gap-4 text-white">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="transition hover:text-white"
              >
                <FacebookIcon className="size-6" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="transition hover:text-white"
              >
                <TwitterIcon className="size-6" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="transition hover:text-white"
              >
                <LinkedInIcon className="size-6" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="transition hover:text-white"
              >
                <InstagramIcon className="size-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 lg:max-w-[760px]">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {footerColumns.map((column) => (
                <div key={column.title} className="lg:pt-[4px]">
                  <h3 className="text-[17px] font-medium leading-none text-[var(--brand-400)]">
                    {column.title}
                  </h3>
                  <ul className="mt-5 space-y-1.5 text-[12px] leading-[1.65] text-white">
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link
                          href="/"
                          className="transition hover:text-[var(--brand-400)]"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-start lg:justify-end">
              <div className="w-full lg:w-auto">
                <Image
                  src="/footer-payments.png"
                  alt="Accepted payment methods"
                  width={430}
                  height={73}
                  className="h-auto w-[240px] sm:w-[300px] lg:ml-auto lg:w-[412px] pr-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#171717] px-6 py-4 text-[11px] text-white sm:px-8 lg:px-10 xl:px-12">
        © 2021 Winstore. All Rights Reserved.
      </div>
    </footer>
  );
}
