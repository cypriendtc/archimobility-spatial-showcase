export type Language = "fr" | "en";

const fr = {
  home: "Accueil", services: "Services", projects: "Réalisations", studio: "Le cabinet", contact: "Contact",
  start: "Démarrer un projet", menu: "Ouvrir le menu", closeMenu: "Fermer le menu", language: "Langue du site",
  footer: "Architecture, urbanisme et mobilité urbaine. Cabinet basé à Yaoundé, Cameroun, depuis 2017.",
  navigation: "Navigation", rights: "Tous droits réservés",
  disciplines: "Architecture · Urbanisme · Mobilité", headlineStart: "Bâtir des lieux", headlineAccent: "qui relient", headlineEnd: "la ville.",
  intro: "Cabinet d'architecture basé à Yaoundé. Nous concevons hôtels, immeubles et maisons — de l'esquisse au suivi de chantier — avec un double regard architecture et mobilité urbaine.",
  viewProjects: "Voir nos réalisations", model: "MAQUETTE 3D · ÉCH. 1:500",
  founded: "année de création", studied: "projets étudiés en 2025–2026", hotelScale: "gabarit hôtelier maîtrisé", cities: "villes : Douala, Yaoundé, Bansoa, Obala",
  ourServices: "Nos services", expertise: "Une expertise intégrée, du plan à la ville.", allServices: "Tous les services",
  recent: "Réalisations récentes", projectIntro: "Chaque projet répond à une parcelle, un programme, un budget.",
  potential: "Votre terrain a un potentiel.", reveal: "Révélons-le.", ctaText: "Esquisse, APS, APD, plans d'exécution, devis, DAO et suivi des travaux : parlons de votre projet.", appointment: "Prendre rendez-vous",
  servicesTitle: "Penser chaque bâtiment avec ses accès et sa ville.", servicesIntro: "Notre double compétence architecture et mobilité urbaine guide chaque mission, du premier croquis à la réception.", missions: "Nos missions", quote: "Demander un devis",
  portfolio: "Portfolio", projectsTitle: "Nos réalisations.", projectsIntro: "Hôtels, immeubles de rapport, logements collectifs et maisons à étage, souvent sur des terrains étroits ou en pente.",
  all: "Tous", hotels: "Hôtellerie", buildings: "Immeubles", duplex: "Duplex",
  studioTitle: "Une équipe d'architectes au service de votre projet.", studioIntro: "Depuis 2017, ArchMobility accompagne particuliers, investisseurs et collectivités en combinant architecture, urbanisme et mobilité urbaine.",
  approach: "Notre approche", approachText: "« Notre double regard architecture et mobilité urbaine nous pousse à penser chaque bâtiment avec ses accès, son stationnement et son insertion dans la ville. »",
  contactTitle: "Parlons de votre projet.", contactIntro: "Décrivez votre terrain, votre programme et votre budget : nous revenons vers vous rapidement.",
  name: "Votre nom", subject: "Type de projet (villa, immeuble, hôtel…)", message: "Votre message", send: "Envoyer par e-mail", defaultSubject: "Projet", location: "Yaoundé, Cameroun",
  notFound: "Page introuvable", notFoundText: "La page que vous recherchez n'existe pas ou a été déplacée.", goHome: "Retour à l'accueil", error: "Cette page n'a pas pu être chargée", errorText: "Une erreur est survenue. Réessayez ou revenez à l'accueil.", retry: "Réessayer",
};

const en: Record<keyof typeof fr, string> = {
  home: "Home", services: "Services", projects: "Projects", studio: "Our studio", contact: "Contact",
  start: "Start a project", menu: "Open menu", closeMenu: "Close menu", language: "Site language",
  footer: "Architecture, urban planning and urban mobility. Based in Yaoundé, Cameroon, since 2017.", navigation: "Navigation", rights: "All rights reserved",
  disciplines: "Architecture · Urban planning · Mobility", headlineStart: "Creating places", headlineAccent: "that connect", headlineEnd: "the city.",
  intro: "An architecture studio based in Yaoundé. We design hotels, apartment buildings and homes — from initial sketches to construction supervision — combining architecture with urban mobility expertise.",
  viewProjects: "Explore our projects", model: "3D MODEL · SCALE 1:500", founded: "year established", studied: "projects studied in 2025–2026", hotelScale: "hotel design up to five storeys above ground", cities: "cities: Douala, Yaoundé, Bansoa, Obala",
  ourServices: "Our services", expertise: "Integrated expertise, from building plans to the city.", allServices: "All services",
  recent: "Recent projects", projectIntro: "Every project responds to a site, a brief and a budget.", potential: "Your land has potential.", reveal: "Let's reveal it.", ctaText: "Concept sketches, preliminary and detailed design, construction drawings, cost estimates, tender documents and site supervision: let's discuss your project.", appointment: "Book a consultation",
  servicesTitle: "Designing each building around its access and its city.", servicesIntro: "Our expertise in architecture and urban mobility guides every assignment, from the first sketch to handover.", missions: "Our assignments", quote: "Request a quote",
  portfolio: "Portfolio", projectsTitle: "Our projects.", projectsIntro: "Hotels, investment properties, apartment buildings and multi-storey homes, often on narrow or sloping sites.", all: "All", hotels: "Hospitality", buildings: "Apartment buildings", duplex: "Duplex homes",
  studioTitle: "A team of architects dedicated to your project.", studioIntro: "Since 2017, ArchMobility has supported homeowners, investors and local authorities by bringing together architecture, urban planning and urban mobility.", approach: "Our approach", approachText: "“Our combined perspective on architecture and urban mobility leads us to design every building with its access, parking and integration into the city in mind.”",
  contactTitle: "Let's discuss your project.", contactIntro: "Tell us about your site, requirements and budget: we'll get back to you promptly.", name: "Your name", subject: "Project type (villa, apartment building, hotel…)", message: "Your message", send: "Send by email", defaultSubject: "Project", location: "Yaoundé, Cameroon",
  notFound: "Page not found", notFoundText: "The page you're looking for doesn't exist or has been moved.", goHome: "Back to home", error: "This page couldn't be loaded", errorText: "Something went wrong. Please try again or return to the home page.", retry: "Try again",
};

export const translations = { fr, en };
export type TranslationKey = keyof typeof fr;

export const pageMetadata = {
  fr: {
    "/": ["ArchMobility — Architecture, urbanisme & mobilité à Yaoundé", "Cabinet d'architecture à Yaoundé : hôtels, immeubles, duplex, architecture intérieure, suivi de chantier et mobilité urbaine."],
    "/services": ["Services — ArchMobility", "Études architecturales, architecture intérieure, suivi de chantier, mobilité et urbanisme."],
    "/realisations": ["Réalisations — ArchMobility", "Portfolio : hôtels, immeubles d'habitation et mixtes, duplex et villas au Cameroun."],
    "/cabinet": ["Le cabinet — ArchMobility", "Une équipe d'architectes ONAC à Yaoundé, experts en architecture et mobilité urbaine depuis 2017."],
    "/contact": ["Contact — ArchMobility", "Contactez le cabinet ArchMobility à Yaoundé pour votre projet d'architecture."],
  },
  en: {
    "/": ["ArchMobility — Architecture, urban planning & mobility in Yaoundé", "Architecture studio in Yaoundé: hotels, apartment buildings, duplex homes, interior architecture, construction supervision and urban mobility."],
    "/services": ["Services — ArchMobility", "Architectural design, interior architecture, construction supervision, mobility and urban planning."],
    "/realisations": ["Projects — ArchMobility", "Portfolio: hotels, residential and mixed-use buildings, duplex homes and villas in Cameroon."],
    "/cabinet": ["Our studio — ArchMobility", "A team of ONAC-registered architects in Yaoundé, specialising in architecture and urban mobility since 2017."],
    "/contact": ["Contact — ArchMobility", "Contact ArchMobility in Yaoundé to discuss your architecture project."],
  },
} satisfies Record<Language, Record<string, string[]>>;

export function localizedHead(path: keyof typeof pageMetadata.fr) {
  const [title, description] = pageMetadata.fr[path];
  return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}