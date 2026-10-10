import Link from "next/link";
import { Brand } from "./Brand";

const navigation = [
  { label: "Services", href: "/services/" },
  { label: "AI Solutions", href: "/ai-solutions/" },
  { label: "Veterinary Technology", href: "/veterinary-technology/" },
  { label: "About", href: "/about/" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="header-contact" href="/contact/">Let&apos;s talk</Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/contact/">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
