import { Calendar, DollarSign, Target } from "lucide-react";

const projects = [
  {
    title: "Projet de Gestion Améliorée du Paysage Forestier (PGAPF)",
    period: "2015 – 2019",
    budget: "$1,301,453",
    focus: "Agroforesterie",
    desc: "Projet phare de l'ADEI visant la gestion durable des paysages forestiers dans le Kongo Central. Ce projet a permis la mise en place de systèmes agroforestiers, la formation de centaines d'agriculteurs et la conservation de milliers d'hectares de forêt.",
  },
  {
    title: "Projet Chaîne de Valeur des Produits Forestiers FAO/UE",
    period: "2008 – 2010",
    budget: "$225,453",
    focus: "Micro-entreprises forestières",
    desc: "En partenariat avec la FAO et l'Union Européenne, ce projet a développé des micro-entreprises basées sur les produits forestiers non ligneux, créant des opportunités économiques durables pour les communautés rurales.",
  },
];

const Projects = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Notre Impact</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Projets & Expérience</h1>
        <p className="text-muted-foreground text-lg">
          Découvrez les projets majeurs réalisés par l'ADEI au fil des années.
        </p>
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
                      <Calendar size={14} /> {p.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <DollarSign size={14} /> {p.budget}
                    </span>
                    <span className="flex items-center gap-1.5 text-primary font-semibold">
                      <Target size={14} /> {p.focus}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
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
