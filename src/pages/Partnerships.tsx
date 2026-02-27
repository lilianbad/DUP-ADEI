import { Building2, Globe, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  {
    icon: Building2,
    title: "Ministères Congolais",
    desc: "L'ADEI collabore étroitement avec les Ministères de l'Agriculture, de l'Environnement et du Développement Durable pour aligner ses interventions sur les priorités nationales.",
  },
  {
    icon: Handshake,
    title: "Secteur Agricole",
    desc: "Partenariats avec les institutions du secteur agricole pour la formation, la recherche et la vulgarisation des techniques agricoles améliorées.",
  },
  {
    icon: Globe,
    title: "Partenaires Internationaux",
    desc: "Collaboration avec des organisations internationales de développement telles que la FAO et l'Union Européenne pour la mise en œuvre de projets à grande échelle.",
  },
];

const Partnerships = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Collaboration</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Nos Partenariats</h1>
        <p className="text-muted-foreground text-lg">
          L'ADEI travaille en collaboration avec des partenaires nationaux et internationaux pour maximiser son impact.
        </p>
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

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground text-center">
      <div className="container max-w-2xl">
        <h2 className="font-display text-3xl font-bold mb-4">Devenez notre partenaire</h2>
        <p className="opacity-80 mb-8">
          Vous souhaitez soutenir le développement communautaire en RDC ? Contactez-nous pour explorer les opportunités de collaboration.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Nous Contacter
        </Link>
      </div>
    </section>
  </div>
);

export default Partnerships;
