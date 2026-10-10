import Link from "next/link";
import { ProjectCTA } from "@/components/ProjectCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Veterinary Technology & Digital Health",
  "Digital products for veterinary telehealth, pet-care services, consultation workflows, client communication, and clinical information management.",
  "/veterinary-technology/"
);

export default function VeterinaryTechnology() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-vet">
        <div className="container page-hero-inner">
          <p className="eyebrow">Veterinary technology &amp; digital health</p>
          <h1>Digital tools shaped by the realities of animal care.</h1>
          <p>We combine software engineering with practical veterinary knowledge to design better experiences for veterinary professionals, pet owners, and animal-care businesses.</p>
          <Link className="button button-dark" href="/contact/">Discuss a veterinary project</Link>
        </div>
        <div className="vet-hero-motif" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="section vet-intro" aria-labelledby="vet-intro-title">
        <div className="container vet-intro-layout">
          <div><p className="eyebrow">Built around care</p><h2 id="vet-intro-title">The workflow matters as much as the interface.</h2></div>
          <div><p>A veterinary platform must do more than connect two people on a screen. It needs to support the steps before, during, and after an interaction: relevant history, clear communication, organized records, and appropriate follow-up.</p><p>Our domain perspective draws on real clinical experience with companion animals, preventive care, dermatology, nutrition, behavior, and animal welfare. That helps us ask better questions when shaping digital health products.</p></div>
        </div>
      </section>

      <section className="section vet-workflow" aria-labelledby="vet-workflow-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow eyebrow-light">Veterinary telehealth</p><h2 id="vet-workflow-title">A more complete consultation journey.</h2></div>
            <p>For non-emergency services, good software can make each step clearer for pet owners and easier to manage for professionals.</p>
          </div>
          <div className="workflow-grid">
            <article><span>01</span><h3>Before the visit</h3><p>Collect the reason for the consultation, pet details, relevant history, photos, and reports so the veterinarian has useful context.</p></article>
            <article><span>02</span><h3>During the visit</h3><p>Support secure video conversations, note-taking, and access to the information shared before the appointment.</p></article>
            <article><span>03</span><h3>After the visit</h3><p>Make summaries, next steps, and follow-up communication easy to find and understand.</p></article>
            <article><span>04</span><h3>When in-person care is needed</h3><p>Help communicate the limits of virtual care and guide the owner toward appropriate local or emergency services.</p></article>
          </div>
        </div>
      </section>

      <section className="section vet-opportunities" aria-labelledby="vet-opportunities-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Areas of focus</p><h2 id="vet-opportunities-title">Practical products for connected pet care.</h2></div>
            <p>These are areas where thoughtful software can support established veterinary services. They describe development capabilities, not launched Vetnology products or clinical services.</p>
          </div>
          <div className="vet-opportunity-grid">
            <article><span className="opportunity-index">01 / Platforms</span><h3>Pet health platforms</h3><p>Help pet owners manage profiles, appointment information, educational resources, reminders, and communication in one place.</p></article>
            <article><span className="opportunity-index">02 / Consultations</span><h3>Clinical review workflows</h3><p>Organize second-opinion requests and report reviews so submitted records, questions, and follow-up guidance stay connected.</p></article>
            <article><span className="opportunity-index">03 / Communication</span><h3>Client communication</h3><p>Make it easier to share clear information about common concerns such as skin issues, nutrition, behavior, and preventive care.</p></article>
            <article><span className="opportunity-index">04 / Operations</span><h3>Practice information</h3><p>Reduce scattered notes and repetitive administration with structured intake, records, and appropriate integrations.</p></article>
          </div>
        </div>
      </section>

      <section className="section vet-ai" aria-labelledby="vet-ai-title">
        <div className="container vet-ai-layout">
          <div><p className="eyebrow eyebrow-light">The role of AI</p><h2 id="vet-ai-title">Support the professional. Respect the limits.</h2></div>
          <div><p>AI can help organize intake information, locate approved resources, draft routine communications, and surface details for review. In a veterinary setting, those functions need careful source control, privacy considerations, and a clear point for professional oversight.</p><p>Clinical assessment, treatment decisions, and urgent care belong with qualified veterinary professionals. Vetnology develops technology; it is not a veterinary clinic and does not provide medical consultations.</p><Link className="text-link text-link-light" href="/ai-solutions/">Explore our AI approach</Link></div>
        </div>
      </section>
      <ProjectCTA eyebrow="Veterinary technology" title="Building a better digital care experience?" description="Tell us about the veterinary workflow or pet-care service you want to improve. We can help shape the technology around it." />
    </main>
  );
}
