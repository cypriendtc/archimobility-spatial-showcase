import villa from "@/assets/p/villa-contemporaine.json";
import duplexNuit from "@/assets/p/duplex-nuit.json";
import villaFam from "@/assets/p/villa-familiale.json";
import fido from "@/assets/p/fido-complexe.json";
import fidoTour from "@/assets/p/fido-tour.json";
import fidoTour2 from "@/assets/p/fido-tour-2.json";
import jdc from "@/assets/p/immeuble-jdc.json";
import r4 from "@/assets/p/immeuble-r4-douala.json";
import bansoa from "@/assets/p/immeuble-bansoa.json";
import simbock from "@/assets/p/immeuble-simbock.json";
import mixte from "@/assets/p/immeuble-mixte.json";
import nyalla from "@/assets/p/immeuble-nyalla.json";

export const contact = {
  email: "contact@archimobility.com",
  phones: ["+237 674 00 65 37", "+237 699 13 49 50", "+237 677 28 41 52"],
  city: "Yaoundé, Cameroun",
};

export const services = [
  {
    n: "01",
    title: "Études architecturales",
    text: "Esquisse, avant-projet sommaire et détaillé, plans d'exécution, notices descriptives, devis quantitatif et estimatif, DAO.",
  },
  {
    n: "02",
    title: "Architecture intérieure",
    text: "Aménagement et décoration des logements, boutiques, parties communes et espaces extérieurs.",
  },
  {
    n: "03",
    title: "Construction & suivi",
    text: "Suivi de chantier et accompagnement du maître d'ouvrage jusqu'à la réception des travaux.",
  },
  {
    n: "04",
    title: "Mobilité & transport",
    text: "Conseil en transport et mobilité urbaine durable pour les collectivités et les opérateurs.",
  },
  {
    n: "05",
    title: "Urbanisme",
    text: "Projets urbains intégrant accès, stationnement et insertion dans la ville, au service des collectivités.",
  },
];

export type Project = { title: string; place: string; type: "Hôtellerie" | "Immeubles" | "Duplex"; desc: string; img: string };

export const projects: Project[] = [
  { title: "FIDO Hôtel — Complexe", place: "Cameroun", type: "Hôtellerie", desc: "Hôtel R+5 avec salle de fêtes, conférence, restaurant panoramique et piscine.", img: fido.url },
  { title: "FIDO Hôtel — Tour R+5", place: "Cameroun", type: "Hôtellerie", desc: "Hôtel compact sur terrain en pente, bar-lounge en rooftop.", img: fidoTour.url },
  { title: "FIDO Hôtel — Variante", place: "Cameroun", type: "Hôtellerie", desc: "Étude de façade et d'exploitation pour la tour hôtelière.", img: fidoTour2.url },
  { title: "Immeuble JDC", place: "Douala", type: "Immeubles", desc: "Immeuble R+3 sur parcelle de 171 m² · Avant-projet détaillé.", img: jdc.url },
  { title: "Immeuble R+4 d'habitation", place: "Douala", type: "Immeubles", desc: "Immeuble de rapport R+4 sur parcelle étroite.", img: r4.url },
  { title: "Immeuble résidentiel R+4", place: "Bansoa", type: "Immeubles", desc: "Logements collectifs adaptés au terrain et au budget.", img: bansoa.url },
  { title: "Immeuble duplex et studios", place: "Simbock, Yaoundé VI", type: "Immeubles", desc: "Duplex et studios locatifs.", img: simbock.url },
  { title: "Immeuble mixte avec boutiques", place: "Cameroun", type: "Immeubles", desc: "Immeuble mixte R+4 sur sous-sol · Dossier d'études techniques.", img: mixte.url },
  { title: "Immeuble RDJ-R+3", place: "Douala – Nyalla Génie", type: "Immeubles", desc: "Immeuble sur rez-de-jardin, terrain en pente.", img: nyalla.url },
  { title: "Villa duplex contemporaine", place: "Cameroun", type: "Duplex", desc: "Perspectives 3D · APS et APD.", img: villa.url },
  { title: "Duplex d'habitation", place: "Dschang", type: "Duplex", desc: "Duplex à usage d'habitation, mise en lumière nocturne.", img: duplexNuit.url },
  { title: "Villa familiale", place: "Cameroun", type: "Duplex", desc: "Maison à étage associant logement et locatif.", img: villaFam.url },
];

export const team = [
  { initials: "HY", name: "Hermine MBOGNING ép. YOUNDA", role: "Architecte en chef · ONAC n° 398", bio: "Masters en mobilité urbaine durable et en gestion de projets de développement." },
  { initials: "GN", name: "Guy Gerlain YOUNDA NKENNE", role: "Architecte consultant · ONAC n° 420", bio: "Conception, plans d'exécution et suivi des travaux." },
];
