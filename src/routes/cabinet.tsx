import { useLanguage } from "@/lib/i18n";
import { localizedHead } from "@/lib/translations";
import { projects } from "@/lib/data";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Layout";
import { getTeam } from "@/lib/data";

export const Route = createFileRoute("/cabinet")({
  head: () => localizedHead("/cabinet"),
  component: Cabinet,
});

function Cabinet() {
  const { language, t } = useLanguage();
  const team = getTeam(language);
  return (
    <>
      <PageHero image={projects[9]?.img} eyebrow={t("studio")} title={t("studioTitle")} text={t("studioIntro")} />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2">
        {team.map((m) => (
          <div key={m.name} className="rounded-sm border border-border bg-card p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-sm bg-primary font-display text-2xl font-bold text-primary-foreground">{m.initials}</div>
            <h2 className="mt-8 text-2xl font-bold">{m.name}</h2>
            <p className="eyebrow mt-3">{m.role}</p>
            <p className="mt-4 text-muted-foreground">{m.bio}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-3">
        {(["mission", "vision", "values"] as const).map((k, i) => (
          <div key={k} className="rounded-sm border border-border bg-card p-8">
            <p className="font-mono text-sm text-primary">0{i + 1}</p>
            <h2 className="mt-6 text-2xl font-bold">{t(k)}</h2>
            <p className="mt-3 text-muted-foreground">{t(`${k}Text`)}</p>
          </div>
        ))}
      </section>
      <section className="bg-paper py-24 text-paper-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">{t("approach")}</p>
          <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
            {t("approachText")}
          </p>
        </div>
      </section>
    </>
  );
}
