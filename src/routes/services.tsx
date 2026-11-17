import { useLanguage } from "@/lib/i18n";
import { localizedHead } from "@/lib/translations";
import { projects } from "@/lib/data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/Layout";
import { getServices, missionLabels } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => localizedHead("/services"),
  component: Services,
});

function Services() {
  const { language, t } = useLanguage();
  const services = getServices(language);
  const missions = missionLabels[language];
  return (
    <>
      <PageHero image={projects[7].img} eyebrow={t("services")} title={t("servicesTitle")} text={t("servicesIntro")} />
      <section className="mx-auto max-w-7xl px-6 py-24">
        {services.map((s, i) => (
          <div key={s.n} className="grid items-center gap-8 border-b border-border py-12 md:grid-cols-2">
            <img src={projects[[3, 11, 6, 1, 8][i] ?? 0].img} alt={s.title} loading="lazy" className={`aspect-[16/10] w-full rounded-sm object-cover ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <p className="font-mono text-primary">{s.n}</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">{t("missions")}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {missions.map((m, i) => (
              <span key={m} className="rounded-sm border border-border px-5 py-3 font-display text-lg">
                <span className="mr-3 font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                {m}
              </span>
            ))}
          </div>
          <Link to="/contact" className="mt-14 inline-block rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground">{t("quote")}</Link>
        </div>
      </section>
    </>
  );
}
