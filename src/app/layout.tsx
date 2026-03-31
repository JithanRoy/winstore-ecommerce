import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Winstore Commerce",
    template: "%s | Winstore Commerce",
  },
  description:
    "Assessment-ready e-commerce storefront built with Next.js App Router, React Server Components, and Server Actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
