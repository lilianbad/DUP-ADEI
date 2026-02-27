import { Building2, Globe, Handshake, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const ministries = [
  "Agriculture, Pêche et Élevage",
  "Environnement, Développement Durable et Nouvelle Économie du Climat",
  "Développement Rural",
  "Plan",
  "Affaires Sociales",
];

const partners = [
  {
    icon: Building2,
    title: "Ministères de l'État Congolais",
    desc: "L'ADEI collabore officiellement avec 5 ministères congolais, attesté par des agréments ministériels (Arrêté N° 79/2022 Agriculture, Certificat N° 13/MEDD/017 Environnement, Certificat N° 1341/Plan/2023).",
  },
  {
    icon: Handshake,
    title: "Réseaux & Consortiums",
    desc: "L'ADEI est membre de plusieurs réseaux et consortiums œuvrant dans les domaines du développement communautaire, de la gouvernance forestière et de l'agroforesterie en RDC.",
  },
  {
    icon: Globe,
    title: "FAO & Union Européenne",
    desc: "Partenariat vérifié avec la FAO et l'UE pour le Projet GCP/408/EC/RAV — Développement de filière produits forestiers non ligneux ($225,453, 2008–2010).",
  },
  {
    icon: Briefcase,
    title: "Partenaires Locaux de Terrain",
    desc: "Collaboration directe avec les Comités Locaux de Développement (CLD), les Conseils Agricoles Ruraux de Gestion (CARG) et les Concessions Forestières des Communautés Locales (CFCL).",
  },
];

const expertise = [
  "Gouvernance et aménagement des territoires",
  "Agroforesterie et agro-écologie",
  "Reboisement communautaire",
  "Agriculture sans déforestation",
  "Régénération naturelle assistée",
  "Gestion durable des forêts",
  "Conservation des forêts et biodiversité",
  "Cartographie participative",
  "Inventaires multi-ressources",
  "Élaboration de PGRN, PSG et PDL",
];

const Partnerships = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Collaboration</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Nos Partenariats</h1>
        <p className="text-muted-foreground text-lg">
          L'ADEI collabore avec <strong className="text-foreground">5 ministères</strong>, des partenaires internationaux (FAO, UE) et de multiples réseaux locaux — plus de <strong className="text-foreground">$1,5 million</strong> de projets gérés conjointement.
        </p>
      </div>
    </section>

    {/* Ministry badges */}
    <section className="py-12 border-b">
      <div className="container max-w-4xl">
        <p className="text-center text-sm font-semibold text-foreground mb-4">Ministères partenaires officiels</p>
        <div className="flex flex-wrap justify-center gap-3">
          {ministries.map((m) => (
            <span key={m} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Award size={12} /> Min. {m}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="grid gap-8">
          {partners.map((p) => (
            <div key={p.title} className="bg-card rounded-xl p-8 shadow-sm border flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Expertise */}
    <section className="py-20 bg-muted">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">10 Domaines d'Expertise</p>
          <h2 className="font-display text-3xl font-bold text-foreground">Expertise Technique Vérifiée</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {expertise.map((e, i) => (
            <div key={i} className="bg-card rounded-lg px-5 py-3.5 flex items-center gap-3 shadow-sm border">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-primary-foreground text-xs font-bold">{i + 1}</span>
              </div>
              <p className="text-foreground text-sm font-medium">{e}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container max-w-2xl">
        <h2 className="font-display text-3xl font-bold mb-4">Devenez notre partenaire</h2>
        <p className="opacity-80 mb-2">
          Rejoignez la FAO et l'Union Européenne parmi nos partenaires de développement.
        </p>
        <p className="opacity-60 mb-8 text-sm">
          18+ ans d'expérience — $1,5M+ de projets — 5 ministères partenaires — 10 domaines d'expertise
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Nous Contacter
        </Link>
      </div>
    </section>
  </div>
);

export default Partnerships;
