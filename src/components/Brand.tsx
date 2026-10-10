import Link from "next/link";
import Image from "next/image";

export const brandLogos = {
  active: "/assets/images/vetnology-logo-test.png",
  alternate: "/assets/images/new_logo.png",
} as const;

export function BrandMark({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return <Image className={className} src={brandLogos.active} alt="" width={1254} height={1254} priority={priority} aria-hidden="true" />;
}

// Kept for a quick return to the original mark after the logo test.
export function OriginalBrandMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <path d="M10 20 24 7h25L35 20H10Z" fill="currentColor" />
      <path d="M49 7 58 18v25L45 29V18L49 7Z" fill="currentColor" opacity=".76" />
      <path d="M58 43 44 57H19l14-13h25Z" fill="currentColor" />
      <path d="M19 57 6 45V20l13 14v11Z" fill="currentColor" opacity=".76" />
      <path d="m23 29 9-9 9 9-9 9-9-9Z" fill="currentColor" opacity=".5" />
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={"brand" + (light ? " brand-light" : "")} href="/" aria-label="Vetnology home">
      <span className="brand-symbol"><BrandMark priority={!light} /></span>
      <span className="brand-word">vetnology<span className="brand-period">.</span></span>
    </Link>
  );
}

