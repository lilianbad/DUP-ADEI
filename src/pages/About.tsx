import communityImg from "@/assets/community.jpg";

const objectives = [
  "Autonomisation des femmes et promotion du genre",
  "Entrepreneuriat local et développement des micro-entreprises",
  "Agriculture durable et sécurité alimentaire",
  "Santé communautaire et nutrition",
  "Protection de l'environnement et gestion des ressources naturelles",
  "Réhabilitation d'infrastructures communautaires",
];

const About = () => (
  <div className="pt-20">
    {/* Header */}
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">À Propos</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Qui sommes-nous</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          L'ADEI est une organisation non gouvernementale de développement fondée en 2007 en République Démocratique du Congo, engagée pour le développement intégré des communautés rurales.
        </p>
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
              Contribuer au développement durable des communautés rurales congolaises par des interventions participatives dans les domaines de l'agriculture, la santé, l'environnement, l'éducation et les infrastructures.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Notre Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Des communautés rurales autonomes, résilientes et prospères, capables de prendre en charge leur propre développement de manière durable.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Objectives */}
    <section className="py-20 bg-muted">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Nos Objectifs</h2>
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
          Créée en 2007, l'ADEI a été officiellement reconnue par l'arrêté ministériel N° 16/CAB/ME/MIN/J&GS/2017 du 26 avril 2017. Depuis plus de 18 ans, nous intervenons dans les provinces du Kongo Central et de Kinshasa, aux côtés des communautés les plus vulnérables, pour promouvoir un développement intégré et durable.
        </p>
      </div>
    </section>
  </div>
);

export default About;
