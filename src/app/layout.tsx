import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const siteUrl = "https://vetnology.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Vetnology | Software, Mobile Apps & AI Development", template: "%s | Vetnology" },
  description: "Vetnology designs and develops AI solutions, mobile apps, websites, and custom software for businesses across industries.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Vetnology",
    title: "Vetnology | Software, Mobile Apps & AI Development",
    description: "Digital products and intelligent systems built around real business needs.",
    url: siteUrl,
    images: [{ url: siteUrl + "/og-image.png", width: 1200, height: 630, alt: "Vetnology — software and AI development" }],
  },
  twitter: { card: "summary_large_image", images: [siteUrl + "/og-image.png"] },
  icons: {
    icon: [{ url: "/assets/images/vetnology-logo-test.png", type: "image/png", sizes: "1254x1254" }],
    apple: [{ url: "/assets/images/vetnology-logo-test.png", sizes: "1254x1254", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};

const footerLinks = [
  { label: "Services", href: "/services/" },
  { label: "AI Solutions", href: "/ai-solutions/" },
  { label: "Veterinary Technology", href: "/veterinary-technology/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vetnology",
  url: siteUrl,
  logo: siteUrl + "/assets/images/vetnology-logo-test.png",
  description: "Technology company providing AI development, mobile app development, and web and custom software development for businesses across industries.",
  email: "info@vetnology.com",
  knowsAbout: ["AI development", "Mobile app development", "Custom software development", "Veterinary technology"],
}).replace(/</g, "\\u003c");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/dm-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="container footer-main">
            <div className="footer-intro">
              <Brand light />
              <p>Software, AI, and digital products built for the way your business works.</p>
            </div>
            <div className="footer-column">
              <h2>Explore</h2>
              {footerLinks.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}
            </div>
            <div className="footer-column">
              <h2>Get in touch</h2>
              <a className="footer-email" href="mailto:info@vetnology.com">info@vetnology.com</a>
              <p>Have a product, platform, or process in mind? Tell us about it.</p>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} Vetnology. All rights reserved.</span>
            <span>Technology with a clear purpose.</span>
          </div>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationSchema }} />
      </body>
    </html>
  );
}
