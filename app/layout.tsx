import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";

import { BackToTop } from "@/components/layout/back-to-top";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { FloatingContact } from "@/components/layout/floating-contact";
import { PageLoader } from "@/components/layout/page-loader";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = createMetadata({
  title: siteConfig.displayName,
  description: siteConfig.description,
  path: "/"
});

export const viewport: Viewport = {
  themeColor: "#1389C6",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <PageLoader />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <FloatingContact />
          <BackToTop />
          <CookieBanner />
        </Providers>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
