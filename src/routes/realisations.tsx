import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/Layout";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — ArchMobility" },
      { name: "description", content: "Portfolio : hôtels, immeubles d'habitation et mixtes, duplex et villas au Cameroun." },
      { property: "og:title", content: "Réalisations — ArchMobility" },
      { property: "og:description", content: "Hôtellerie, immeubles et duplex conçus par ArchMobility." },
    ],
  }),
  component: Realisations,
});

const filters = ["Tous", "Hôtellerie", "Immeubles", "Duplex"] as const;

function Realisations() {
  const [f, setF] = useState<(typeof filters)[number]>("Tous");
  const list = f === "Tous" ? projects : projects.filter((p) => p.type === f);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Nos réalisations." text="Hôtels, immeubles de rapport, logements collectifs et maisons à étage, souvent sur des terrains étroits ou en pente." />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap gap-2">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`rounded-sm border px-5 py-2 text-sm transition ${f === x ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-secondary"}`}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden rounded-sm">
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-5">{p.type} · {p.place}</p>
              <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
