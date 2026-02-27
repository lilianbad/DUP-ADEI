import { Link } from "react-router-dom";
import { Leaf, Users, Heart, Hammer, GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import communityImg from "@/assets/community.jpg";

const stats = [
  { value: "18+", label: "Années d'expérience" },
  { value: "5", label: "Domaines d'intervention" },
  { value: "3", label: "Provinces couvertes" },
  { value: "$1.5M+", label: "Budget projets gérés" },
];

const domains = [
  { icon: Leaf, title: "Environnement & Agriculture Durable", desc: "Agroforesterie, gestion des ressources naturelles et agriculture communautaire." },
  { icon: Users, title: "Organisation Communautaire Rurale", desc: "Renforcement des capacités locales et structuration des communautés de base." },
  { icon: Heart, title: "Santé Communautaire & Nutrition", desc: "Programmes de santé préventive, nutrition infantile et maternelle." },
  { icon: GraduationCap, title: "Formation Agricole Professionnelle", desc: "Formations techniques pour les agriculteurs et entrepreneurs ruraux." },
  { icon: Hammer, title: "Construction & Réhabilitation", desc: "Infrastructures rurales : routes, écoles, centres de santé." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Paysage rural RDC" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.75)]" />
        <div className="relative z-10 container text-center text-primary-foreground py-20">
          <p className="text-sm uppercase tracking-[0.25em] mb-4 opacity-80 animate-fade-in">Association pour le Développement Intégré</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6 animate-fade-in-up">
            Promouvoir le développement communautaire durable
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Par la participation et le partenariat, nous transformons les communautés rurales en RDC.
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
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-bold">{s.value}</p>
              <p className="text-sm mt-1 opacity-80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Qui sommes-nous</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Une ONG au service des communautés depuis 2007
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'ADEI est une organisation non gouvernementale de développement créée en 2007 en République Démocratique du Congo. Nous œuvrons pour l'autonomisation des femmes, l'entrepreneuriat local, l'agriculture durable, la santé communautaire et la protection de l'environnement.
            </p>
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
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Nos Domaines</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Domaines d'Intervention</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d) => (
              <div key={d.title} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
          <p className="opacity-80 mb-10 text-lg">
            Rejoignez-nous en tant que partenaire pour soutenir le développement communautaire en RDC.
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
