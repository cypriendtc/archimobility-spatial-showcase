import { useLanguage } from "@/lib/i18n";
import { localizedHead } from "@/lib/translations";
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
      <PageHero eyebrow={t("services")} title={t("servicesTitle")} text={t("servicesIntro")} />
      <section className="mx-auto max-w-7xl px-6 py-24">
        {services.map((s) => (
          <div key={s.n} className="grid gap-6 border-b border-border py-12 md:grid-cols-[120px_1fr_1.2fr]">
            <p className="font-mono text-primary">{s.n}</p>
            <h2 className="text-3xl font-bold md:text-4xl">{s.title}</h2>
            <p className="text-lg text-muted-foreground">{s.text}</p>
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
