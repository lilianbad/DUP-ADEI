import { Leaf, Users, Heart, GraduationCap, Hammer } from "lucide-react";
import agricultureImg from "@/assets/agriculture.jpg";

const areas = [
  {
    icon: Leaf,
    title: "Environnement & Agriculture Durable",
    desc: "L'ADEI met en œuvre des programmes d'agroforesterie, de gestion durable des terres et de promotion de l'agriculture biologique. Nous soutenons les communautés dans la conservation des forêts et la valorisation des produits forestiers non ligneux.",
  },
  {
    icon: Users,
    title: "Organisation Communautaire Rurale",
    desc: "Nous accompagnons les communautés dans la structuration de leurs organisations de base, le renforcement des capacités de gouvernance locale et la promotion de la participation citoyenne au développement.",
  },
  {
    icon: Heart,
    title: "Santé Communautaire & Nutrition",
    desc: "Nos interventions en santé visent la prévention des maladies, la nutrition infantile et maternelle, l'accès à l'eau potable et l'assainissement. Nous formons des relais communautaires de santé.",
  },
  {
    icon: GraduationCap,
    title: "Formation Agricole Professionnelle",
    desc: "L'ADEI offre des formations techniques aux agriculteurs et jeunes entrepreneurs ruraux : techniques culturales améliorées, gestion de micro-entreprises, transformation et conservation des produits agricoles.",
  },
  {
    icon: Hammer,
    title: "Construction & Réhabilitation d'Infrastructures",
    desc: "Nous contribuons à la construction et réhabilitation de routes rurales, écoles, centres de santé et points d'eau, améliorant ainsi les conditions de vie des communautés bénéficiaires.",
  },
];

const Interventions = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Nos Activités</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Domaines d'Intervention</h1>
        <p className="text-muted-foreground text-lg">
          L'ADEI intervient dans cinq domaines clés pour un développement intégré et durable.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-8">
          {areas.map((a, i) => (
            <div
              key={a.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <a.icon size={28} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{a.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-md ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <img src={agricultureImg} alt={a.title} className="w-full h-64 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Interventions;
