import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Layout";
import { team } from "@/lib/data";

export const Route = createFileRoute("/cabinet")({
  head: () => ({
    meta: [
      { title: "Le cabinet — ArchMobility" },
      { name: "description", content: "Une équipe d'architectes ONAC à Yaoundé, experts en architecture et mobilité urbaine depuis 2017." },
      { property: "og:title", content: "Le cabinet — ArchMobility" },
      { property: "og:description", content: "Architectes ONAC, architecture et mobilité urbaine durable." },
    ],
  }),
  component: Cabinet,
});

function Cabinet() {
  return (
    <>
      <PageHero eyebrow="Le cabinet" title="Une équipe d'architectes au service de votre projet." text="Depuis 2017, ArchMobility accompagne particuliers, investisseurs et collectivités en combinant architecture, urbanisme et mobilité urbaine." />
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-2">
        {team.map((t) => (
          <div key={t.name} className="rounded-sm border border-border bg-card p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-sm bg-primary font-display text-2xl font-bold text-primary-foreground">{t.initials}</div>
            <h2 className="mt-8 text-2xl font-bold">{t.name}</h2>
            <p className="eyebrow mt-3">{t.role}</p>
            <p className="mt-4 text-muted-foreground">{t.bio}</p>
          </div>
        ))}
      </section>
      <section className="bg-paper py-24 text-paper-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow">Notre approche</p>
          <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
            « Notre double regard architecture et mobilité urbaine nous pousse à penser chaque bâtiment avec ses accès, son
            stationnement et son insertion dans la ville. »
          </p>
        </div>
      </section>
    </>
  );
}
