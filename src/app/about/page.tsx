import Link from "next/link";
import { ProjectCTA } from "@/components/ProjectCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Vetnology",
  "Learn how Vetnology approaches software engineering, AI development, digital products, and its additional veterinary technology expertise.",
  "/about/"
);

export default function About() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-dark about-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow eyebrow-light">About Vetnology</p>
          <h1>Technology should make the work easier, clearer, or better.</h1>
          <p>Vetnology is a technology company building digital products for businesses across industries. We bring software engineering and AI development together with a focus on practical outcomes.</p>
          <Link className="button button-accent" href="/services/">Explore our services</Link>
        </div>
      </section>

      <section className="section about-purpose" aria-labelledby="about-purpose-title">
        <div className="container about-purpose-layout">
          <div><p className="eyebrow">Our purpose</p><h2 id="about-purpose-title">Make technology useful in the real world.</h2></div>
          <div><p>New software should have a clear reason to exist. It might remove friction from an operation, give customers a better experience, or make important information easier to use. We start with that reason and let it guide the product.</p><p>Our work spans AI solutions, mobile applications, websites, and custom software. Veterinary technology is an additional area where clinical insight helps us understand the work behind the interface.</p></div>
        </div>
      </section>

      <section className="section about-principles" aria-labelledby="about-principles-title">
        <div className="container">
          <div className="section-heading"><p className="eyebrow eyebrow-light">How we think</p><h2 id="about-principles-title">Clear thinking. Careful execution.</h2></div>
          <div className="principles-grid">
            <article><span>01</span><h3>Understand before building</h3><p>We look at the people, processes, and constraints around the problem before choosing a solution.</p></article>
            <article><span>02</span><h3>Design for use</h3><p>An interface should help people complete real tasks, understand what happened, and know what to do next.</p></article>
            <article><span>03</span><h3>Engineer for change</h3><p>Sound foundations make it easier to maintain, connect, and improve a product over time.</p></article>
          </div>
        </div>
      </section>

      <section className="section about-breadth" aria-labelledby="about-breadth-title">
        <div className="container about-breadth-layout">
          <div><p className="eyebrow">Across industries</p><h2 id="about-breadth-title">Business first. Industry aware.</h2></div>
          <div><p>Businesses in different fields often face familiar problems: disconnected systems, repetitive work, and digital experiences that no longer fit. We apply our core software and AI capabilities across sectors, then bring in domain knowledge where it makes a material difference.</p><Link className="text-link" href="/veterinary-technology/">Our veterinary technology focus</Link></div>
        </div>
      </section>
      <ProjectCTA title="Let’s talk about the problem you’re solving." description="Whether the idea is still taking shape or you have a clear brief, we’d like to hear what you’re working toward." />
    </main>
  );
}
