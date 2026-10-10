import Link from "next/link";

export function ProjectCTA({ eyebrow = "Start a project", title = "Let’s build what comes next.", description = "Tell us what you need to improve, create, or connect. We’ll help shape a practical way forward." }: { eyebrow?: string; title?: string; description?: string }) {
  return (
    <section className="project-cta" aria-labelledby="project-cta-title">
      <div className="container project-cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2 id="project-cta-title">{title}</h2>
          <p>{description}</p>
        </div>
        <Link className="button button-light" href="/contact/">Discuss your project</Link>
      </div>
    </section>
  );
}
