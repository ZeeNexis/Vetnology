import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact Vetnology",
  "Contact Vetnology about AI development, mobile apps, websites, custom software, or veterinary technology projects.",
  "/contact/"
);

export default function Contact() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-dark contact-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow eyebrow-light">Contact us</p>
          <h1>Tell us what you’re working on.</h1>
          <p>Have a product to build, a process to improve, or an AI idea to explore? We’d be glad to hear the context and help consider the next step.</p>
        </div>
      </section>

      <section className="section contact-section" aria-labelledby="contact-title">
        <div className="container contact-layout">
          <div className="contact-primary">
            <p className="eyebrow">Start a conversation</p>
            <h2 id="contact-title">A useful first message is all it takes.</h2>
            <p>Send us a short outline of the challenge, your goals, and any timing you already have in mind. You do not need a finished brief.</p>
            <a className="contact-email" href="mailto:info@vetnology.com?subject=Project%20inquiry%20%7C%20Vetnology">info@vetnology.com</a>
            <p className="contact-note">This link opens your email app. There is no form or account required.</p>
          </div>
          <aside className="contact-aside" aria-label="What to include in a project inquiry">
            <span className="contact-aside-number">01 — 04</span>
            <h3>What helps us understand your project</h3>
            <ul>
              <li><span>01</span>What your business does and who the product serves</li>
              <li><span>02</span>The problem or opportunity you want to address</li>
              <li><span>03</span>Any existing tools or systems it should connect to</li>
              <li><span>04</span>Your preferred timing and next step</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
