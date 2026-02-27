import { Link } from "react-router-dom";
import { Leaf, Users, Heart, Hammer, GraduationCap, Award, MapPin, Calendar, TrendingUp, ShieldCheck, DollarSign, Building2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import communityImg from "@/assets/community.jpg";

const stats = [
  { value: "18+", label: "Années d'expérience", icon: Calendar, suffix: "depuis 2007" },
  { value: "$1.5M+", label: "Budget projets gérés", icon: DollarSign, suffix: "investis dans les communautés" },
  { value: "5", label: "Domaines d'intervention", icon: TrendingUp, suffix: "secteurs stratégiques" },
  { value: "3", label: "Provinces couvertes", icon: MapPin, suffix: "en RDC" },
];

const impactHighlights = [
  {
    icon: Award,
    value: "Arrêté N° 16/2017",
    label: "Personnalité juridique",
    desc: "Reconnue par le Ministère de la Justice — Arrêté Ministériel N° 16/CAB/ME/MIN/J&GS/2017 du 26 avril 2017.",
  },
  {
    icon: DollarSign,
    value: "$1,301,453",
    label: "Projet PGAPF (2015–2019)",
    desc: "Gestion Améliorée du Paysage Forestier — agroforesterie, conservation forestière, formation d'agriculteurs au Kongo Central.",
  },
  {
    icon: Building2,
    value: "$225,453",
    label: "Projet FAO/UE (2008–2010)",
    desc: "Chaîne de valeur des produits forestiers — micro-entreprises communautaires, produits forestiers non ligneux.",
  },
  {
    icon: ShieldCheck,
    value: "3 enregistrements",
    label: "Conformité légale complète",
    desc: "Enregistrement fiscal, CNSS et personnalité juridique — transparence totale envers les partenaires.",
  },
];

const domains = [
  { icon: Leaf, title: "Environnement & Agriculture Durable", desc: "Agroforesterie, gestion des ressources naturelles et conservation de milliers d'hectares de forêt." },
  { icon: Users, title: "Organisation Communautaire Rurale", desc: "Renforcement des capacités locales et structuration des communautés de base dans 3 provinces." },
  { icon: Heart, title: "Santé Communautaire & Nutrition", desc: "Programmes de santé préventive, nutrition infantile et maternelle, accès à l'eau potable." },
  { icon: GraduationCap, title: "Formation Agricole Professionnelle", desc: "Formations techniques pour agriculteurs et entrepreneurs ruraux — techniques culturales améliorées." },
  { icon: Hammer, title: "Construction & Réhabilitation", desc: "Infrastructures rurales : routes, écoles, centres de santé et points d'eau communautaires." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Paysage rural RDC" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.75)]" />
        <div className="relative z-10 container text-center text-primary-foreground py-20">
          <p className="text-sm uppercase tracking-[0.25em] mb-4 opacity-80 animate-fade-in">Association pour le Développement Intégré — Depuis 2007</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6 animate-fade-in-up">
            Promouvoir le développement communautaire durable
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            18+ années d'expertise au service des communautés rurales en RDC — Plus de $1,5 million investis dans des projets de développement intégré.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/partenariats" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
              Devenir Partenaire
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <s.icon size={22} className="mb-2 opacity-70" />
              <p className="font-display text-3xl md:text-4xl font-bold">{s.value}</p>
              <p className="text-sm mt-1 font-semibold">{s.label}</p>
              <p className="text-xs mt-0.5 opacity-60">{s.suffix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Données Vérifiées</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Notre Impact en Chiffres</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Des résultats concrets et mesurables, fondés sur 18 années d'interventions communautaires en République Démocratique du Congo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactHighlights.map((h) => (
              <div key={h.label} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <h.icon size={24} className="text-primary" />
                </div>
                <p className="font-display text-xl font-bold text-primary mb-1">{h.value}</p>
                <p className="font-semibold text-foreground text-sm mb-2">{h.label}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Qui sommes-nous</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Une ONG reconnue au service des communautés depuis 2007
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'ADEI est une organisation non gouvernementale de développement créée en 2007 en RDC, dotée de la personnalité juridique par Arrêté Ministériel N° 16/CAB/ME/MIN/J&GS/2017. Avec plus de <strong className="text-foreground">$1,5 million</strong> de projets gérés et une présence dans <strong className="text-foreground">3 provinces</strong>, nous œuvrons pour l'autonomisation des femmes, l'agriculture durable, la santé communautaire et la protection de l'environnement.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <ShieldCheck size={14} /> Personnalité juridique
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Award size={14} /> Enregistrée CNSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Building2 size={14} /> Partenaire FAO & UE
              </span>
            </div>
            <Link to="/a-propos" className="inline-flex items-center text-primary font-semibold hover:underline">
              En savoir plus →
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={communityImg} alt="Communauté rurale ADEI" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">5 Secteurs Stratégiques</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Domaines d'Intervention</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d) => (
              <div key={d.title} className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <d.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ensemble, construisons un avenir durable</h2>
          <p className="opacity-80 mb-4 text-lg">
            Rejoignez une ONG avec 18+ ans d'expérience et plus de $1,5M de projets réalisés.
          </p>
          <p className="opacity-60 mb-10 text-sm">
            Partenaire de la FAO, de l'Union Européenne et des Ministères congolais.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
