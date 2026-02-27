import { ShieldCheck, Award, Building2 } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const objectives = [
  "Appuyer la promotion de la femme",
  "Appuyer la promotion et création des PME locales (produits ligneux et non ligneux)",
  "Renforcer les capacités techniques et organisationnelles des groupes de base",
  "Appuyer le secteur de la santé : assainissement, eau potable, sensibilisation VIH/SIDA",
  "Augmenter et améliorer la production agricole et agroforestière",
  "Améliorer les conditions de vie des communautés de producteurs locaux",
  "Réhabiliter les infrastructures de base : routes, dalots, ponts, entrepôts",
  "Reconstituer le capital forestier et promouvoir les pratiques agro-écologiques",
  "Promouvoir la santé et la nutrition communautaire",
];

const keyFacts = [
  { label: "Date de création", value: "22 avril 2007" },
  { label: "Personnalité juridique", value: "Arrêté N° 16/2017" },
  { label: "Journal Officiel", value: "N° 14, 15 juillet 2017" },
  { label: "Budget total projets", value: "$1,526,906" },
  { label: "Provinces d'intervention", value: "Kongo Central, Kinshasa" },
  { label: "Coordinateur", value: "NLANDU MBELE Willy" },
  { label: "Ministères partenaires", value: "5 ministères" },
  { label: "Agréments officiels", value: "6 enregistrements" },
  { label: "Domaines d'expertise", value: "10 expertises techniques" },
];

const About = () => (
  <div className="pt-20">
    {/* Header */}
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">À Propos</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Qui sommes-nous</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          L'ADEI est une ASBL/ONGD créée le <strong className="text-foreground">22 avril 2007</strong> par une équipe de techniciens engagés dans le développement communautaire, dotée de la personnalité juridique (J.O. N° 14 du 15 juillet 2017). Budget total géré : <strong className="text-foreground">$1,526,906</strong>.
        </p>
      </div>
    </section>

    {/* Key Facts */}
    <section className="py-14 border-b">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-3 gap-6">
          {keyFacts.map((f) => (
            <div key={f.label} className="text-center p-3">
              <p className="font-display text-base md:text-lg font-bold text-primary">{f.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={communityImg} alt="Communauté ADEI" className="w-full h-96 object-cover" />
        </div>
        <div>
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Notre Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Renforcer les capacités opérationnelles des paysans et faciliter les échanges et analyses des actions de développement endogène — à travers 5 domaines d'intervention et 10 expertises techniques vérifiées.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Notre Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Promouvoir un développement durable par une approche concertée, participative et fondée sur un partenariat responsable et constructif dans un environnement vivable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <ShieldCheck size={14} /> N° Impôt : A1803902M
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Award size={14} /> CNSS : 130019460
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Building2 size={14} /> ID NAT : 1-825-N30050D
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Objectives */}
    <section className="py-20 bg-muted">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Nos 9 Objectifs Stratégiques</h2>
        <div className="grid gap-4">
          {objectives.map((obj, i) => (
            <div key={i} className="bg-card rounded-lg p-5 flex items-start gap-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm font-bold">{i + 1}</span>
              </div>
              <p className="text-foreground font-medium text-sm">{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* History */}
    <section className="py-20">
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">Notre Histoire</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Créée le <strong className="text-foreground">22 avril 2007</strong>, l'ADEI a été officiellement reconnue par l'Arrêté Ministériel N° 16/CAB/ME/MIN/J&GS/2017 du 26 avril 2017, publié au <strong className="text-foreground">Journal Officiel N° 14</strong> du 15 juillet 2017. Depuis plus de <strong className="text-foreground">18 ans</strong>, nous intervenons dans les territoires de <strong className="text-foreground">Lukula, Tshela</strong> et <strong className="text-foreground">Kinshasa</strong>, avec un budget cumulé de <strong className="text-foreground">$1,526,906</strong>, en collaboration avec <strong className="text-foreground">5 ministères</strong> et des partenaires internationaux (FAO, UE).
        </p>
      </div>
    </section>
  </div>
);

export default About;
