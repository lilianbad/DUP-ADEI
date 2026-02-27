import { Shield, FileText, CheckCircle } from "lucide-react";

const docs = [
  {
    icon: Shield,
    title: "Personnalité Juridique",
    desc: "Arrêté Ministériel N° 16/CAB/ME/MIN/J&GS/2017 du 26 avril 2017 — L'ADEI est reconnue comme ONG avec personnalité juridique en RDC.",
  },
  {
    icon: FileText,
    title: "Enregistrement Fiscal",
    desc: "L'ADEI est enregistrée auprès des services fiscaux de la RDC et dispose d'un numéro d'impôt valide.",
  },
  {
    icon: CheckCircle,
    title: "Enregistrement CNSS",
    desc: "L'organisation est enregistrée auprès de la Caisse Nationale de Sécurité Sociale (CNSS) pour la protection sociale de ses employés.",
  },
];

const Legal = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Confiance</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Légalité & Transparence</h1>
        <p className="text-muted-foreground text-lg">
          L'ADEI opère en toute conformité avec les lois congolaises et s'engage à une transparence totale envers ses partenaires et donateurs.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="grid gap-6">
          {docs.map((d) => (
            <div key={d.title} className="bg-card rounded-xl p-8 shadow-sm border flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <d.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Map placeholder */}
    <section className="py-20 bg-muted">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Présence</p>
          <h2 className="font-display text-3xl font-bold text-foreground">Zones d'Intervention</h2>
        </div>
        <div className="bg-card rounded-xl p-8 border shadow-sm">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {["Kongo Central", "Lukula & Tshela", "Kinshasa"].map((zone) => (
              <div key={zone} className="p-6 rounded-lg bg-muted">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm">📍</span>
                </div>
                <p className="font-semibold text-foreground">{zone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Legal;
