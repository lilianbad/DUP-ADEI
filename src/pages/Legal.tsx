import { Shield, FileText, CheckCircle, Award } from "lucide-react";

const docs = [
  {
    icon: Shield,
    title: "Personnalité Juridique",
    ref: "Arrêté N° 16/CAB/ME/MIN/J&GS/2017",
    date: "26 avril 2017",
    desc: "L'ADEI est reconnue comme ONG avec personnalité juridique en RDC par le Ministère de la Justice et Garde des Sceaux.",
  },
  {
    icon: FileText,
    title: "Enregistrement Fiscal",
    ref: "Numéro d'impôt valide",
    date: "En vigueur",
    desc: "L'ADEI est enregistrée auprès des services fiscaux de la RDC et dispose d'un numéro d'impôt valide, garantissant la conformité fiscale.",
  },
  {
    icon: CheckCircle,
    title: "Enregistrement CNSS",
    ref: "Caisse Nationale de Sécurité Sociale",
    date: "En vigueur",
    desc: "L'organisation est enregistrée auprès de la CNSS pour la protection sociale de ses employés — preuve d'une gestion responsable.",
  },
];

const Legal = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Confiance & Transparence</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Légalité & Transparence</h1>
        <p className="text-muted-foreground text-lg">
          L'ADEI dispose de <strong className="text-foreground">3 enregistrements officiels</strong> garantissant sa conformité légale totale envers ses partenaires et donateurs.
        </p>
      </div>
    </section>

    {/* Trust badges */}
    <section className="py-12 border-b">
      <div className="container grid grid-cols-3 gap-6 text-center max-w-3xl">
        <div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
            <Award size={22} className="text-primary" />
          </div>
          <p className="font-display text-sm font-bold text-foreground">Personnalité juridique</p>
        </div>
        <div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
            <FileText size={22} className="text-primary" />
          </div>
          <p className="font-display text-sm font-bold text-foreground">Enregistrement fiscal</p>
        </div>
        <div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
            <CheckCircle size={22} className="text-primary" />
          </div>
          <p className="font-display text-sm font-bold text-foreground">CNSS</p>
        </div>
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
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{d.title}</h3>
                <p className="text-primary text-sm font-semibold mb-1">{d.ref} — {d.date}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Zones */}
    <section className="py-20 bg-muted">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">3 Provinces</p>
          <h2 className="font-display text-3xl font-bold text-foreground">Zones d'Intervention</h2>
        </div>
        <div className="bg-card rounded-xl p-8 border shadow-sm">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { zone: "Kongo Central", detail: "Siège principal" },
              { zone: "Lukula & Tshela", detail: "Zones rurales" },
              { zone: "Kinshasa", detail: "Bureau de liaison" },
            ].map((z) => (
              <div key={z.zone} className="p-6 rounded-lg bg-muted">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-sm">📍</span>
                </div>
                <p className="font-semibold text-foreground">{z.zone}</p>
                <p className="text-muted-foreground text-xs mt-1">{z.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Legal;
