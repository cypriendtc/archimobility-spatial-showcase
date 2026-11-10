import { Link } from "@tanstack/react-router";
import { useEffect, useState, lazy, Suspense } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.json";
import { contact } from "@/lib/data";

const Building3D = lazy(() => import("./Building3D"));

export function Scene3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <Building3D />
    </Suspense>
  );
}

const nav = [
  { to: "/services", label: "Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/cabinet", label: "Le cabinet" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="ArchMobility" className="h-9 w-9 rounded-sm object-cover" />
          <span className="font-display text-lg font-bold tracking-tight">
            Arch<span className="text-primary">Mobility</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            Démarrer un projet
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-2xl">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">
            Arch<span className="text-primary">Mobility</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Architecture, urbanisme et mobilité urbaine. Cabinet basé à {contact.city}, depuis 2017.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow mb-3">Contact</p>
          <p>{contact.email}</p>
          {contact.phones.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-1">Navigation</p>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ArchMobility — Tous droits réservés
      </p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="blueprint relative overflow-hidden border-b border-border pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-6 animate-rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}
