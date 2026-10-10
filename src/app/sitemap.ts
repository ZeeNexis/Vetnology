import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return ["","services","ai-solutions","veterinary-technology","about","contact"].map(path=>({url:`https://vetnology.com/${path}${path?"/":""}`,changeFrequency:"monthly",priority:path?0.7:1})); }
