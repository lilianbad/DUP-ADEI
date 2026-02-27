import { ShieldCheck, Award, Building2 } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const objectives = [
  "Autonomisation des femmes et promotion du genre",
  "Entrepreneuriat local et développement des micro-entreprises",
  "Agriculture durable et sécurité alimentaire",
  "Santé communautaire et nutrition",
  "Protection de l'environnement et gestion des ressources naturelles",
  "Réhabilitation d'infrastructures communautaires",
];

const keyFacts = [
  { label: "Fondée en", value: "2007" },
  { label: "Personnalité juridique", value: "Arrêté N° 16/2017" },
  { label: "Budget total projets", value: "$1,526,906" },
  { label: "Provinces d'intervention", value: "3 (Kongo Central, Kinshasa)" },
  { label: "Domaines d'expertise", value: "5 secteurs stratégiques" },
  { label: "Coordinateur", value: "NLANDU MBELE Willy" },
];

const About = () => (
  <div className="pt-20">
    {/* Header */}
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">À Propos</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Qui sommes-nous</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          L'ADEI est une ONG de développement fondée en 2007 en RDC, dotée de la personnalité juridique par Arrêté Ministériel N° 16/CAB/ME/MIN/J&GS/2017. Plus de <strong className="text-foreground">$1,5 million</strong> investis dans le développement intégré des communautés rurales.
        </p>
      </div>
    </section>

    {/* Key Facts */}
    <section className="py-14 border-b">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {keyFacts.map((f) => (
            <div key={f.label} className="text-center p-4">
              <p className="font-display text-lg md:text-xl font-bold text-primary">{f.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{f.label}</p>
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
              Contribuer au développement durable des communautés rurales congolaises par des interventions participatives dans 5 domaines stratégiques : agriculture, santé, environnement, éducation et infrastructures.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Notre Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Des communautés rurales autonomes, résilientes et prospères, capables de prendre en charge leur propre développement de manière durable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <ShieldCheck size={14} /> Enregistrée fiscalement
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Award size={14} /> CNSS
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Building2 size={14} /> Partenaire FAO & UE
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Objectives */}
    <section className="py-20 bg-muted">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Nos 6 Objectifs Stratégiques</h2>
        <div className="grid gap-4">
          {objectives.map((obj, i) => (
            <div key={i} className="bg-card rounded-lg p-5 flex items-start gap-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary-foreground text-sm font-bold">{i + 1}</span>
              </div>
              <p className="text-foreground font-medium">{obj}</p>
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
          Créée en <strong className="text-foreground">2007</strong>, l'ADEI a été officiellement reconnue par l'Arrêté Ministériel N° 16/CAB/ME/MIN/J&GS/2017 du 26 avril 2017. Depuis plus de <strong className="text-foreground">18 ans</strong>, nous intervenons dans les provinces du <strong className="text-foreground">Kongo Central</strong> et de <strong className="text-foreground">Kinshasa</strong>, avec un budget cumulé de plus de <strong className="text-foreground">$1,5 million</strong>, aux côtés des communautés les plus vulnérables.
        </p>
      </div>
    </section>
  </div>
);

export default About;
