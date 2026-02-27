import { Building2, Globe, Handshake, Award } from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  {
    icon: Building2,
    title: "Ministères Congolais",
    orgs: ["Ministère de l'Agriculture", "Ministère de l'Environnement", "Ministère du Développement Durable"],
    desc: "L'ADEI collabore étroitement avec les Ministères congolais pour aligner ses interventions sur les priorités nationales de développement.",
  },
  {
    icon: Handshake,
    title: "Secteur Agricole & Forestier",
    orgs: ["Institutions agricoles nationales", "Services de vulgarisation"],
    desc: "Partenariats pour la formation, la recherche et la vulgarisation des techniques agricoles améliorées — incluant le projet PGAPF de $1,301,453.",
  },
  {
    icon: Globe,
    title: "Partenaires Internationaux",
    orgs: ["FAO (Organisation des Nations Unies)", "Union Européenne"],
    desc: "Collaboration vérifiée avec la FAO et l'UE pour la mise en œuvre du projet Chaîne de Valeur des Produits Forestiers ($225,453, 2008–2010).",
  },
];

const Partnerships = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Collaboration</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Nos Partenariats</h1>
        <p className="text-muted-foreground text-lg">
          L'ADEI a géré plus de <strong className="text-foreground">$1,5 million</strong> en partenariat avec des institutions nationales et internationales.
        </p>
      </div>
    </section>

    {/* Partner trust badges */}
    <section className="py-12 border-b">
      <div className="container flex flex-wrap justify-center gap-6">
        {["FAO", "Union Européenne", "Min. Agriculture", "Min. Environnement"].map((p) => (
          <span key={p} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Award size={14} /> {p}
          </span>
        ))}
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
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.orgs.map((o) => (
                    <span key={o} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-medium">{o}</span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
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
          18+ ans d'expérience — $1,5M+ de projets — 3 provinces en RDC
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Nous Contacter
        </Link>
      </div>
    </section>
  </div>
);

export default Partnerships;
