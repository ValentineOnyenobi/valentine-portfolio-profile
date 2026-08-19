import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-data.jpg";
import { Reveal, CountUp } from "@/components/reveal";
import { metrics, profile, projects, services, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valentine Onyenobi — Data Analyst & Business Consultant" },
      {
        name: "description",
        content:
          "Portfolio of Valentine Onyenobi: SQL, Python, Power BI and Tableau work turning operational data into decisions. London-based data analyst and business consultant.",
      },
      { property: "og:title", content: "Valentine Onyenobi — Data Analyst & Business Consultant" },
      {
        property: "og:description",
        content:
          "Machine learning, BI dashboards and process consulting across the UK, UAE and Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="grid-canvas pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <Reveal>
            <p className="mono-label flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
              London, UK · Available for roles & consulting
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              <span className="text-signal-gradient">Data analyst</span> with a consultant&apos;s
              instinct for the question behind the number.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {profile.tagline} SQL, Python, Power BI and Tableau — applied to real operations
              across the UK, UAE and Nigeria.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-signal/60 hover:text-signal"
              >
                Work with me
              </Link>
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/60 hover:text-signal"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-signal/60 hover:text-signal"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="bg-background">
              <div className="px-6 py-8">
                <p className="font-display text-4xl font-bold text-signal">
                  <CountUp value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium">{m.label}</p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="mono-label">01 — Capability</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            The stack I actually work in
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 90}>
              <div className="card-surface h-full p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold">{group.name}</h3>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border bg-surface-strong px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <p className="mono-label">02 — Selected work</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
                Models and dashboards, with the reasoning attached
              </h2>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal"
              >
                All {projects.length} projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="card-surface flex h-full flex-col p-6"
                >
                  <span className="mono-label">{p.category}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.problem}
                  </p>
                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 font-mono text-[11px] text-signal">
                    Read case study
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="mono-label">03 — Services</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">How I can help</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="card-surface flex h-full flex-col p-6">
                <span className="font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {s.points.map((pt) => (
                    <li key={pt} className="font-mono text-[11px] text-muted-foreground">
                      <span className="mr-2 text-signal">/</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="scanline mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Got a dataset nobody has time to make sense of?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              I&apos;m open to data analyst roles and consulting engagements. Tell me what decision
              you&apos;re trying to make.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-sm bg-signal px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
