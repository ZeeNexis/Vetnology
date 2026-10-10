import Link from "next/link";
import { ProjectCTA } from "@/components/ProjectCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Software Development Services",
  "Explore Vetnology's AI development, mobile app development, web platforms, custom software, and veterinary technology services.",
  "/services/"
);

export default function Services() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-dark">
        <div className="container page-hero-inner">
          <p className="eyebrow eyebrow-light">Services</p>
          <h1>Technology built around the work you need to do.</h1>
          <p>From a customer-facing app to the systems behind your operations, we help businesses plan, build, and improve digital products.</p>
          <Link className="button button-accent" href="/contact/">Tell us what you need</Link>
        </div>
        <span className="page-hero-index" aria-hidden="true">01 / 05</span>
      </section>

      <section className="section service-detail-section" aria-labelledby="service-detail-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Core services</p><h2 id="service-detail-title">The right product for the right problem.</h2></div>
            <p>We work from the business need outward: who will use it, what it must connect to, and how it should keep working after launch.</p>
          </div>
          <div className="service-detail-list">
            <article id="ai" className="service-detail">
              <div className="detail-label"><span>01</span><span>Intelligence</span></div>
              <div className="detail-body"><h3>AI Development &amp; Automation</h3><p>Give people faster access to the information and actions they need. We design assistants, AI features, and workflows for defined use cases, with attention to source quality, oversight, and clear boundaries.</p><ul><li>Conversational assistants and customer support experiences</li><li>Business knowledge search and document-based answers</li><li>Task automation and AI features within existing products</li></ul><Link className="text-link" href="/ai-solutions/">Explore AI solutions</Link></div>
            </article>
            <article id="mobile" className="service-detail">
              <div className="detail-label"><span>02</span><span>On the move</span></div>
              <div className="detail-body"><h3>Mobile App Development</h3><p>Make your service accessible wherever your customers or staff are. We build iOS and Android applications with clear journeys, dependable integrations, and room for future improvements.</p><ul><li>Customer and business mobile applications</li><li>E-commerce, payments, and account experiences</li><li>Notifications, connected services, and ongoing maintenance</li></ul></div>
            </article>
            <article id="web" className="service-detail">
              <div className="detail-label"><span>03</span><span>Connected business</span></div>
              <div className="detail-body"><h3>Web &amp; Custom Software Development</h3><p>Replace fragmented processes with software designed for how your organization works. We create business websites, web applications, and internal systems that make information easier to manage and services easier to deliver.</p><ul><li>Business websites and customer portals</li><li>Dashboards, internal tools, and operational platforms</li><li>API integrations and scalable software foundations</li></ul></div>
            </article>
          </div>
        </div>
      </section>

      <section id="veterinary" className="section service-specialty" aria-labelledby="service-vet-title">
        <div className="container service-specialty-layout">
          <div><p className="eyebrow">Additional expertise</p><h2 id="service-vet-title">Veterinary Technology &amp; Digital Health</h2></div>
          <div><p>Our veterinary domain knowledge adds a practical perspective to digital solutions for animal care. We can help shape consultation platforms, pet-care services, and systems that support communication and clinical information management.</p><Link className="text-link" href="/veterinary-technology/">See our veterinary focus</Link></div>
        </div>
      </section>

      <section className="section delivery-section" aria-labelledby="delivery-title">
        <div className="container delivery-layout">
          <div><p className="eyebrow">How we work</p><h2 id="delivery-title">Thoughtful delivery, from the first conversation.</h2></div>
          <div className="delivery-points">
            <article><h3>Start with the real need</h3><p>We clarify the outcome, users, constraints, and existing tools before recommending a solution.</p></article>
            <article><h3>Make the plan visible</h3><p>Scope, priorities, and key decisions should be understandable to the people who will use and own the product.</p></article>
            <article><h3>Support what comes after</h3><p>Good digital products need testing, maintenance, and a sensible path for change as the business evolves.</p></article>
          </div>
        </div>
      </section>
      <ProjectCTA title="Have a specific challenge in mind?" description="Share the problem you want to solve. We’ll help identify the right place to begin." />
    </main>
  );
}
