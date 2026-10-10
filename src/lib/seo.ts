import type { Metadata } from "next";

const siteUrl = "https://vetnology.com";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl + path;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Vetnology",
      title: title + " | Vetnology",
      description,
      url,
      images: [{ url: siteUrl + "/og-image.png", width: 1200, height: 630, alt: "Vetnology — software and AI development" }],
    },
    twitter: {
      card: "summary_large_image",
      title: title + " | Vetnology",
      description,
      images: [siteUrl + "/og-image.png"],
    },
  };
}
