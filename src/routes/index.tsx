import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Scene3D } from "@/components/Layout";
import { services, projects } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArchMobility — Architecture, urbanisme & mobilité à Yaoundé" },
      { name: "description", content: "Cabinet d'architecture à Yaoundé : hôtels, immeubles, duplex, architecture intérieure, suivi de chantier et mobilité urbaine." },
      { property: "og:title", content: "ArchMobility — Architecture, urbanisme & mobilité" },
      { property: "og:description", content: "Des bâtiments pensés avec leur ville : de l'esquisse au suivi de chantier." },
    ],
  }),
  component: Index,
});

const stats = [
  ["2017", "année de création"],
  ["13+", "projets étudiés en 2025–2026"],
  ["R+5", "gabarit hôtelier maîtrisé"],
  ["4", "villes : Douala, Yaoundé, Bansoa, Obala"],
];

function Index() {
  return (
    <>
      <section className="blueprint relative min-h-screen overflow-hidden pt-16">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10 animate-rise py-16">
            <p className="eyebrow">Architecture · Urbanisme · Mobilité</p>
            <h1 className="mt-6 text-5xl font-bold leading-[0.98] md:text-7xl xl:text-8xl">
              Bâtir des lieux <span className="text-primary">qui relient</span> la ville.
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Cabinet d'architecture basé à Yaoundé. Nous concevons hôtels, immeubles et maisons — de l'esquisse au
              suivi de chantier — avec un double regard architecture et mobilité urbaine.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="glow inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90">
                Démarrer un projet <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-sm border border-input px-6 py-3.5 font-semibold transition hover:bg-secondary">
                Voir nos réalisations
              </Link>
            </div>
          </div>
          <div className="relative h-[480px] lg:h-[720px]">
            <Scene3D />
            <p className="pointer-events-none absolute bottom-6 right-0 font-mono text-[10px] tracking-widest text-muted-foreground">
              MAQUETTE 3D · ÉCH. 1:500
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="border-border p-8 md:border-r last:border-r-0">
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">{v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Nos services</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-6xl">Une expertise intégrée, du plan à la ville.</h2>
          </div>
          <Link to="/services" className="text-sm text-primary hover:underline">Tous les services →</Link>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <div key={s.n} className="group bg-background p-8 transition-colors hover:bg-card">
              <p className="font-mono text-sm text-primary">{s.n}</p>
              <h3 className="mt-10 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-28 text-paper-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Réalisations récentes</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl">Chaque projet répond à une parcelle, un programme, un budget.</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-6">
            {[projects[0], projects[3], projects[9], projects[1], projects[4]].map((p, i) => (
              <Link
                to="/realisations"
                key={p.title}
                className={`group relative overflow-hidden rounded-sm ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
              >
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6 text-foreground">
                  <p className="eyebrow">{p.type}</p>
                  <p className="mt-1 font-display text-xl font-bold">{p.title}</p>
                  <p className="text-sm text-muted-foreground">{p.place}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-6xl">Votre terrain a un potentiel. <span className="text-primary">Révélons-le.</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Esquisse, APS, APD, plans d'exécution, devis, DAO et suivi des travaux : parlons de votre projet.</p>
          <Link to="/contact" className="glow mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground">
            Prendre rendez-vous <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
