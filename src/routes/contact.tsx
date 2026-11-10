import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/Layout";
import { contact } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ArchMobility" },
      { name: "description", content: "Contactez le cabinet ArchMobility à Yaoundé pour votre projet d'architecture." },
      { property: "og:title", content: "Contact — ArchMobility" },
      { property: "og:description", content: "Parlons de votre projet d'architecture." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const href = `mailto:${contact.email}?subject=${encodeURIComponent(form.subject || "Projet")}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name}`)}`;
  const field = "w-full rounded-sm border border-input bg-background px-4 py-3 outline-none focus:border-primary";
  return (
    <>
      <PageHero eyebrow="Contact" title="Parlons de votre projet." text="Décrivez votre terrain, votre programme et votre budget : nous revenons vers vous rapidement." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <p className="flex items-center gap-4"><Mail className="text-primary" /> {contact.email}</p>
          <div className="flex gap-4"><Phone className="text-primary" /><div>{contact.phones.map((p) => <p key={p}>{p}</p>)}</div></div>
          <p className="flex items-center gap-4"><MapPin className="text-primary" /> {contact.city}</p>
        </div>
        <div className="space-y-4 rounded-sm border border-border bg-card p-8">
          <input className={field} placeholder="Votre nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className={field} placeholder="Type de projet (villa, immeuble, hôtel…)" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          <textarea className={field} rows={6} placeholder="Votre message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <a href={href} className="inline-block rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground">Envoyer par e-mail</a>
        </div>
      </section>
    </>
  );
}
