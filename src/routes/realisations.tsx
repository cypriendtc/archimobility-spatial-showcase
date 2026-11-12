import { useLanguage } from "@/lib/i18n";
import { localizedHead } from "@/lib/translations";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PageHero } from "@/components/Layout";
import { getProjects } from "@/lib/data";

export const Route = createFileRoute("/realisations")({
  head: () => localizedHead("/realisations"),
  component: Realisations,
});

const filters = ["Tous", "Hôtellerie", "Immeubles", "Duplex"] as const;

function Realisations() {
  const { language, t } = useLanguage();
  const [f, setF] = useState<(typeof filters)[number]>("Tous");
  const projects = getProjects(language);
  const list = f === "Tous" ? projects : projects.filter((p) => p.type === f);
  return (
    <>
      <PageHero eyebrow={t("portfolio")} title={t("projectsTitle")} text={t("projectsIntro")} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap gap-2">
          {filters.map((x) => (
            <Button
              key={t(x === "Tous" ? "all" : x === "Hôtellerie" ? "hotels" : x === "Immeubles" ? "buildings" : "duplex")}
              variant="ghost"
              aria-pressed={f === x}
              onClick={() => setF(x)}
              className={`rounded-sm border px-5 py-2 text-sm transition ${f === x ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-secondary"}`}
            >
              {t(x === "Tous" ? "all" : x === "Hôtellerie" ? "hotels" : x === "Immeubles" ? "buildings" : "duplex")}
            </Button>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden rounded-sm">
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-5">{t(p.type === "Hôtellerie" ? "hotels" : p.type === "Immeubles" ? "buildings" : "duplex")} · {p.place}</p>
              <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
