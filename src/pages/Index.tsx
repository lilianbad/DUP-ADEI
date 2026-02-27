import { Link } from "react-router-dom";
import { Leaf, Users, Heart, Hammer, GraduationCap, Award, MapPin, Calendar, TrendingUp, ShieldCheck, DollarSign, Building2, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import communityImg from "@/assets/community.jpg";

const stats = [
  { value: "18+", label: "Années d'expérience", icon: Calendar, suffix: "Fondée le 22 avril 2007" },
  { value: "$1.5M+", label: "Budget projets gérés", icon: DollarSign, suffix: "$1,526,906 vérifiés" },
  { value: "5", label: "Ministères partenaires", icon: Building2, suffix: "Agréments officiels" },
  { value: "6", label: "Enregistrements légaux", icon: ShieldCheck, suffix: "Conformité totale" },
];

const impactHighlights = [
  {
    icon: Award,
    value: "Arrêté N° 16/2017",
    label: "Personnalité juridique",
    desc: "Ministère de la Justice — Journal Officiel N° 14 du 15 juillet 2017, pages 3, 89 et 90.",
  },
  {
    icon: DollarSign,
    value: "$1,301,453",
    label: "Projet PGAPF (2015–2019)",
    desc: "Gestion Améliorée du Paysage Forestier — agroforesterie, reboisement communautaire, cartographie participative.",
  },
  {
    icon: Briefcase,
    value: "$225,453",
    label: "Projet FAO/UE (2008–2010)",
    desc: "GCP/408/EC/RAV — Filière produits forestiers non ligneux, approche ADM, micro-entreprises.",
  },
  {
    icon: TrendingUp,
    value: "10 expertises",
    label: "Domaines techniques",
    desc: "Gouvernance, agroforesterie, reboisement, cartographie participative, inventaires multi-ressources.",
  },
];

const domains = [
  { icon: Leaf, title: "Environnement & Agriculture Durable", desc: "Agroforesterie, agro-écologie, domestication des ressources, reboisement communautaire et cartographie participative." },
  { icon: Users, title: "Organisation du Monde Rural", desc: "Structuration communautaire : CLD, CARG, organisations paysannes. Élaboration de PGRN, PSG et PDL." },
  { icon: Heart, title: "Santé Communautaire & Nutrition", desc: "Santé préventive et curative, nutrition communautaire, assainissement, sources d'eau potable, sensibilisation VIH/SIDA." },
  { icon: GraduationCap, title: "Formation Agricole Professionnelle", desc: "Champs écoles paysans, sessions villages, visites guidées, appui-conseil. Apiculture, maraîchage, élevage." },
  { icon: Hammer, title: "Construction & Réhabilitation", desc: "Infrastructures de base : bâtiments, routes de desserte agricole, dalots, ponts et entrepôts." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Paysage rural RDC" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.75)]" />
        <div className="relative z-10 container text-center text-primary-foreground py-20">
          <p className="text-sm uppercase tracking-[0.25em] mb-4 opacity-80 animate-fade-in">ONG de Développement — Fondée le 22 avril 2007</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6 animate-fade-in-up">
            Promouvoir le développement communautaire durable
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            18+ années d'expertise — $1,526,906 de projets gérés — 5 ministères partenaires — Personnalité juridique reconnue.
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
              Des résultats concrets et mesurables, fondés sur 18 années d'interventions en République Démocratique du Congo.
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
              Créée le <strong className="text-foreground">22 avril 2007</strong>, l'ADEI est dotée de la personnalité juridique (Arrêté N° 16/2017, J.O. N° 14). Avec <strong className="text-foreground">$1,526,906</strong> de projets gérés, <strong className="text-foreground">5 ministères partenaires</strong> et <strong className="text-foreground">6 enregistrements officiels</strong>, nous œuvrons dans 3 provinces pour l'autonomisation des communautés rurales.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <ShieldCheck size={14} /> N° Impôt : A1803902M
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Award size={14} /> CNSS : 130019460
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
            Rejoignez une ONG avec 18+ ans d'expérience, $1,526,906 de projets et 6 agréments officiels.
          </p>
          <p className="opacity-60 mb-10 text-sm">
            Partenaire de la FAO, de l'Union Européenne et de 5 ministères congolais.
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
