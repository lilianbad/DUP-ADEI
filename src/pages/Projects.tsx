import { Calendar, DollarSign, Target, TrendingUp } from "lucide-react";

const totalBudget = "$1,526,906";

const projects = [
  {
    title: "Projet de Gestion Améliorée du Paysage Forestier (PGAPF)",
    period: "2015 – 2019",
    duration: "4 ans",
    budget: "$1,301,453",
    focus: "Agroforesterie",
    desc: "Projet phare de l'ADEI visant la gestion durable des paysages forestiers dans le Kongo Central. Ce projet a permis la mise en place de systèmes agroforestiers, la formation de centaines d'agriculteurs et la conservation de milliers d'hectares de forêt.",
    highlights: ["Gestion durable des paysages forestiers", "Formation d'agriculteurs", "Conservation forestière au Kongo Central"],
  },
  {
    title: "Projet Chaîne de Valeur des Produits Forestiers FAO/UE",
    period: "2008 – 2010",
    duration: "2 ans",
    budget: "$225,453",
    focus: "Micro-entreprises forestières",
    desc: "En partenariat avec la FAO et l'Union Européenne, ce projet a développé des micro-entreprises basées sur les produits forestiers non ligneux, créant des opportunités économiques durables pour les communautés rurales.",
    highlights: ["Partenariat FAO & Union Européenne", "Micro-entreprises communautaires", "Produits forestiers non ligneux"],
  },
];

const Projects = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Notre Impact</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Projets & Expérience</h1>
        <p className="text-muted-foreground text-lg">
          Plus de <strong className="text-foreground">{totalBudget}</strong> investis dans des projets de développement intégré depuis 2007.
        </p>
      </div>
    </section>

    {/* Summary Stats */}
    <section className="py-12 border-b">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl">
        <div>
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">{totalBudget}</p>
          <p className="text-muted-foreground text-sm mt-1">Budget total</p>
        </div>
        <div>
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">2</p>
          <p className="text-muted-foreground text-sm mt-1">Projets majeurs</p>
        </div>
        <div>
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">6 ans</p>
          <p className="text-muted-foreground text-sm mt-1">Durée cumulée</p>
        </div>
        <div>
          <p className="font-display text-2xl md:text-3xl font-bold text-primary">FAO & UE</p>
          <p className="text-muted-foreground text-sm mt-1">Partenaires internationaux</p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-4xl">
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
          {projects.map((p, i) => (
            <div key={p.title} className={`relative mb-16 last:mb-0 md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 top-6 z-10" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card rounded-xl p-8 shadow-sm border">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{p.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar size={14} /> {p.period} ({p.duration})
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-primary">
                      <DollarSign size={14} /> {p.budget}
                    </span>
                    <span className="flex items-center gap-1.5 text-accent font-semibold">
                      <Target size={14} /> {p.focus}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <TrendingUp size={12} /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
