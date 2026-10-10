import Link from "next/link";
import { ProjectCTA } from "@/components/ProjectCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "AI Development & Automation",
  "Custom AI assistants, knowledge-based search, workflow automation, and intelligent product features designed for practical business use.",
  "/ai-solutions/"
);

const applications = [
  { number: "01", title: "Conversational AI", body: "Help customers or staff ask questions, find the right next step, and reach a person when a conversation needs human attention." },
  { number: "02", title: "Knowledge-based assistants", body: "Make approved business content easier to search and use. Answers can be grounded in your documents and linked back to their sources." },
  { number: "03", title: "Workflow automation", body: "Reduce repetitive handoffs by connecting AI to clearly defined tasks, business rules, and existing systems." },
  { number: "04", title: "AI in your product", body: "Add useful functions such as guided search, summarization, classification, or drafting within an application people already use." },
];

export default function AISolutions() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero-dark ai-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow eyebrow-light">AI solutions</p>
          <h1>AI that earns its place in your business.</h1>
          <p>We develop AI assistants, automations, and product features for specific work, with a clear view of the data, people, and systems around them.</p>
          <Link className="button button-accent" href="/contact/">Discuss an AI project</Link>
        </div>
        <div className="ai-hero-orb" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="section ai-applications" aria-labelledby="ai-applications-title">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Where it helps</p><h2 id="ai-applications-title">Useful intelligence, applied with care.</h2></div>
            <p>The best use cases are specific: a question answered faster, a repetitive task reduced, or a product made easier to use.</p>
          </div>
          <div className="ai-grid">
            {applications.map((item) => <article className="ai-card" key={item.number}><span>{item.number} / 04</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section ai-method" aria-labelledby="ai-method-title">
        <div className="container ai-method-layout">
          <div>
            <p className="eyebrow eyebrow-light">A practical approach</p>
            <h2 id="ai-method-title">Start with the task. Design for the exceptions.</h2>
            <p>AI output can be incomplete or wrong. Reliable experiences set limits on what a system should do and give people a clear way to review or take over.</p>
          </div>
          <div className="ai-method-steps">
            <article><span>01</span><div><h3>Define the job</h3><p>Identify a useful task, the people it serves, and how success should be judged.</p></div></article>
            <article><span>02</span><div><h3>Connect the right information</h3><p>Use suitable business data and integrations, with appropriate access and source controls.</p></div></article>
            <article><span>03</span><div><h3>Test and supervise</h3><p>Check responses against real scenarios, handle uncertain results, and keep people in control of important decisions.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section ai-integration" aria-labelledby="ai-integration-title">
        <div className="container ai-integration-layout">
          <div><p className="eyebrow">Built into your workflow</p><h2 id="ai-integration-title">AI works best when it fits what you already do.</h2></div>
          <div><p>An assistant should not sit apart from your business. We consider how it will use your information, connect with your tools, protect sensitive data, and hand a task back to a person when needed.</p><Link className="text-link" href="/services/">See all development services</Link></div>
        </div>
      </section>
      <ProjectCTA eyebrow="Explore an idea" title="Where could AI help your team?" description="Tell us about the task, information, or customer experience you want to improve. We’ll help assess a practical starting point." />
    </main>
  );
}
