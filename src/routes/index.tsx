import { useLanguage } from "@/lib/i18n";
import { localizedHead } from "@/lib/translations";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Scene3D } from "@/components/Layout";
import { getServices, getProjects } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => localizedHead("/"),
  component: Index,
});

function Index() {
  const { language, t } = useLanguage();
  const services = getServices(language);
  const projects = getProjects(language);
  const stats = [["2017", t("founded")], ["13+", t("studied")], ["R+5", t("hotelScale")], ["4", t("cities")]];
  return (
    <>
      <section className="blueprint relative min-h-screen overflow-hidden pt-16">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10 animate-rise py-16">
            <p className="eyebrow">{t("disciplines")}</p>
            <h1 className="mt-6 text-5xl font-bold leading-[0.98] md:text-7xl xl:text-8xl">
              {t("headlineStart")} <span className="text-primary">{t("headlineAccent")}</span> {t("headlineEnd")}
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              {t("intro")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="glow inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90">
                {t("start")} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-sm border border-input px-6 py-3.5 font-semibold transition hover:bg-secondary">
                {t("viewProjects")}
              </Link>
            </div>
          </div>
          <div className="relative h-[480px] lg:h-[720px]">
            <Scene3D />
            <p className="pointer-events-none absolute bottom-6 right-0 font-mono text-[10px] tracking-widest text-muted-foreground">
              {t("model")}
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
            <p className="eyebrow">{t("ourServices")}</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-6xl">{t("expertise")}</h2>
          </div>
          <Link to="/services" className="text-sm text-primary hover:underline">{t("allServices")} →</Link>
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
          <p className="eyebrow">{t("recent")}</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl">{t("projectIntro")}</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-6">
            {[0, 3, 9, 1, 4].flatMap((k) => projects[k] ? [projects[k]] : []).map((p, i) => (
              <Link
                to="/realisations"
                key={p.title}
                className={`group relative overflow-hidden rounded-sm ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
              >
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6 text-foreground">
                  <p className="eyebrow">{t(p.type === "Hôtellerie" ? "hotels" : p.type === "Immeubles" ? "buildings" : "duplex")}</p>
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
          <h2 className="text-4xl font-bold md:text-6xl">{t("potential")} <span className="text-primary">{t("reveal")}</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{t("ctaText")}</p>
          <Link to="/contact" className="glow mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground">
            {t("appointment")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
