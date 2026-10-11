import Link from "next/link";
import { BrandMark } from "@/components/Brand";
import { ProjectCTA } from "@/components/ProjectCTA";

const services = [
  {
    number: "01",
    name: "AI Development & Automation",
    description: "Make your information easier to use and your workflows easier to run, with AI designed around a specific job.",
    details: "Assistants · Knowledge search · Automation",
    href: "/ai-solutions/",
    className: "service-card service-card-ai",
  },
  {
    number: "02",
    name: "Mobile App Development",
    description: "Give customers and teams a reliable mobile experience, from first interaction to ongoing support.",
    details: "iOS & Android · Commerce · Integrations",
    href: "/services/#mobile",
    className: "service-card service-card-mobile",
  },
  {
    number: "03",
    name: "Web & Custom Software",
    description: "Build the websites, portals, and connected systems that keep your business moving.",
    details: "Web platforms · Dashboards · APIs",
    href: "/services/#web",
    className: "service-card service-card-web",
  },
  {
    number: "04",
    name: "Veterinary Technology",
    description: "Apply practical veterinary insight to digital tools for animal healthcare and pet services.",
    details: "Telehealth · Pet care · Clinical workflows",
    href: "/veterinary-technology/",
    className: "service-card service-card-vet",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">Software &amp; AI development</p>
            <h1>Build what your business <em>needs next.</em></h1>
            <p className="hero-lead">We design and develop software, mobile apps, and AI solutions that solve operational problems and create better experiences for the people you serve.</p>
            <div className="hero-actions">
              <Link className="button button-accent" href="/contact/">Discuss your project</Link>
              <Link className="text-link text-link-light" href="/services/">Explore our services</Link>
            </div>
            <p className="hero-note">For businesses across industries. Built around your goals.</p>
          </div>
          <div className="hero-art" role="img" aria-label="Illustration of connected business software">
            <div className="art-glow" />
            <div className="art-plane art-plane-back" />
            <div className="art-plane art-plane-front">
              <div className="art-top"><span className="art-dots"><i /><i /><i /></span><span>Connected by design</span></div>
              <div className="art-content">
                <div className="art-mark"><BrandMark /></div>
                <div className="art-title">Ideas into<br />working systems.</div>
                <div className="art-rule" />
                <div className="art-row"><span className="art-row-icon">01</span><span>Customer experience</span><span className="art-row-signal" /></div>
                <div className="art-row"><span className="art-row-icon">02</span><span>Business operations</span><span className="art-row-signal" /></div>
                <div className="art-row"><span className="art-row-icon">03</span><span>Intelligent assistance</span><span className="art-row-signal" /></div>
              </div>
            </div>
            <div className="art-caption">One thoughtful digital ecosystem</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>Strategy</span><span>Design</span><span>Engineering</span><span>Evolution</span></div>
      </section>

      <section className="section services-overview" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">What we do</p><h2 id="services-title">Solutions for real business challenges.</h2></div>
            <p>Whether you need a new product or a better way to operate, we connect business needs with sound design and engineering.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link href={service.href} className={service.className} key={service.number}>
                <div className="service-card-top"><span>{service.number} / 04</span><span className="service-card-action">Explore</span></div>
                <div><h3>{service.name}</h3><p>{service.description}</p></div>
                <span className="service-details">{service.details}</span>
              </Link>
            ))}
          </div>
          <div className="section-foot"><Link className="text-link" href="/services/">Explore all services</Link></div>
        </div>
      </section>

      <section className="section capability-section" aria-labelledby="capabilities-title">
        <div className="container capability-layout">
          <div className="capability-intro">
            <p className="eyebrow eyebrow-light">Beyond the build</p>
            <h2 id="capabilities-title">Good software fits the whole business.</h2>
            <p>We think through the people, systems, and decisions around a product, then build technology that belongs in that wider picture.</p>
            <Link className="text-link text-link-light" href="/about/">How we work</Link>
          </div>
          <div className="capability-list">
            <div><span>01</span><div><h3>Connected systems</h3><p>Bring payments, business data, and third-party services into one coherent experience.</p></div></div>
            <div><span>02</span><div><h3>Useful intelligence</h3><p>Put AI to work where it can help people find information, complete tasks, or make better-informed decisions.</p></div></div>
            <div><span>03</span><div><h3>Built to evolve</h3><p>Plan for maintainability, performance, and change from the start, so your product can grow with your needs.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Our approach</p>
            <h2 id="process-title">A clear path from problem to product.</h2>
            <p>Every engagement starts with understanding what needs to change and who the solution is for.</p>
          </div>
          <div className="process-grid">
            <article><span className="process-number">01</span><h3>Understand</h3><p>Define the goals, users, existing systems, and constraints before deciding what to build.</p></article>
            <article><span className="process-number">02</span><h3>Shape</h3><p>Turn the brief into a workable scope, user experience, and technical plan.</p></article>
            <article><span className="process-number">03</span><h3>Build & refine</h3><p>Develop in clear stages, test the important paths, and improve the product with feedback.</p></article>
          </div>
        </div>
      </section>

      <section className="section specialty-section" aria-labelledby="specialty-title">
        <div className="container specialty-layout">
          <div className="specialty-visual" aria-hidden="true">
            <div className="specialty-arc specialty-arc-one" />
            <div className="specialty-arc specialty-arc-two" />
            <div className="specialty-panel"><span>Care, connected</span><div className="specialty-panel-lines"><i /><i /><i /></div><b>People. Pets. Information.</b></div>
          </div>
          <div className="specialty-copy">
            <p className="eyebrow">A focused area of expertise</p>
            <h2 id="specialty-title">Technology informed by veterinary practice.</h2>
            <p>Alongside our work across industries, we bring practical veterinary knowledge to digital health. That perspective helps us design tools for real consultation, communication, and information workflows.</p>
            <Link className="text-link" href="/veterinary-technology/">Explore veterinary technology</Link>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </main>
  );
}
