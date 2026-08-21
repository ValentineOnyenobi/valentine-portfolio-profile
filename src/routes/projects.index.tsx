import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { LiveDashboard } from "@/components/live-dashboard";
import { projects, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const filters = ["All", "Machine Learning", "Power BI", "Tableau"] as const;

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Machine Learning, Power BI & Tableau | Valentine Onyenobi" },
      {
        name: "description",
        content:
          "Nine analytics projects: XGBoost forecasting and classification models, Power BI supply chain and sales dashboards, and interactive Tableau market dashboards.",
      },
      { property: "og:title", content: "Projects — Valentine Onyenobi" },
      {
        property: "og:description",
        content: "Machine learning models and BI dashboards, with the reasoning attached.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.category === active);

  const counts = (c: (typeof filters)[number]) =>
    c === "All"
      ? projects.length
      : projects.filter((p) => p.category === (c as ProjectCategory)).length;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="mono-label">Portfolio</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Projects, and the decisions behind them
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Each case study follows the same shape: the problem, the approach, the tools, and what it
          actually changed.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                "rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors",
                active === f
                  ? "border-signal bg-signal text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-signal/50 hover:text-signal",
              )}
            >
              {f}
              <span className="ml-2 opacity-60">{counts(f)}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="card-surface flex h-full flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="mono-label">{p.category}</span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.problem}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tools.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border bg-surface-strong px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 font-mono text-[11px] text-signal">
                Case study
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <Reveal>
          <p className="mono-label">Interactive</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            A dashboard you can actually click
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Built here in the browser on a sample retail dataset - filter by region, channel and
            period and every KPI and chart recalculates live. Same thinking I apply in Power BI and
            Tableau.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10">
            <LiveDashboard />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
