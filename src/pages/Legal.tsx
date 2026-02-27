import { Shield, FileText, CheckCircle, Award, Building2, BookOpen, Stamp } from "lucide-react";

const legalDocs = [
  {
    icon: Shield,
    title: "Personnalité Juridique",
    ref: "Arrêté Ministériel N° 16/CAB/ME/MIN/J&GS/2017",
    date: "26 avril 2017",
    extra: "Journal Officiel N° 14 du 15 juillet 2017, pages 3, 89 et 90",
    desc: "L'ADEI est reconnue comme ONG avec personnalité juridique en RDC par le Ministère de la Justice et Garde des Sceaux.",
  },
  {
    icon: Building2,
    title: "Agrément Ministère de l'Agriculture",
    ref: "Arrêté Ministériel N° 79/CAB/MIN/AGRI/MKS/MKK/2022",
    date: "01 avril 2022",
    extra: null,
    desc: "Agrément officiel du Ministère de l'Agriculture, Pêche et Élevage pour les interventions en développement agricole.",
  },
  {
    icon: Award,
    title: "Agrément Ministère de l'Environnement",
    ref: "Avis Favorable N° 0152/CAB/MIN/MEDD/01/00/AKK/2017",
    date: "2017",
    extra: "Certificat d'Enregistrement N° 13/CJ/SG/MEDD/017",
    desc: "Avis favorable et certificat d'enregistrement du Ministère de l'Environnement et Développement Durable.",
  },
  {
    icon: BookOpen,
    title: "Enregistrement Ministère du Plan",
    ref: "Certificat N° 1341/PL/DCRE/23",
    date: "2023",
    extra: null,
    desc: "Enregistrement officiel auprès du Ministère du Plan, attestant la conformité institutionnelle de l'ADEI.",
  },
  {
    icon: FileText,
    title: "Enregistrement Fiscal (DGI)",
    ref: "N° Impôt : A1803902M",
    date: "En vigueur",
    extra: "ID National : 1-825-N30050D | Import/Export : PM/PP/0022/AV-18/I000084KC/OG",
    desc: "L'ADEI est enregistrée auprès de la Direction Générale des Impôts avec numéro d'impôt, identification nationale et agrément import/export.",
  },
  {
    icon: CheckCircle,
    title: "Sécurité Sociale (CNSS)",
    ref: "N° CNSS : 130019460",
    date: "En vigueur",
    extra: "Statuts et Règlement intérieur notariés",
    desc: "L'organisation est enregistrée auprès de la Caisse Nationale de Sécurité Sociale pour la protection sociale de ses employés.",
  },
];

const Legal = () => (
  <div className="pt-20">
    <section className="py-16 md:py-24 bg-muted">
      <div className="container text-center max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Confiance & Transparence</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Légalité & Transparence</h1>
        <p className="text-muted-foreground text-lg">
          L'ADEI dispose de <strong className="text-foreground">6 enregistrements et agréments officiels</strong> délivrés par les autorités congolaises, garantissant une conformité légale totale.
        </p>
      </div>
    </section>

    {/* Trust summary */}
    <section className="py-12 border-b bg-card">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "6", label: "Agréments officiels" },
            { value: "4", label: "Ministères de tutelle" },
            { value: "2017", label: "Personnalité juridique" },
            { value: "2022", label: "Agrément Agriculture" },
            { value: "J.O. N°14", label: "Publication officielle" },
            { value: "Notarié", label: "Statuts certifiés" },
          ].map((s) => (
            <div key={s.label} className="p-3">
              <p className="font-display text-xl font-bold text-primary">{s.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="grid gap-6">
          {legalDocs.map((d) => (
            <div key={d.title} className="bg-card rounded-xl p-8 shadow-sm border flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <d.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{d.title}</h3>
                <p className="text-primary text-sm font-semibold mb-1">{d.ref} — {d.date}</p>
                {d.extra && (
                  <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded inline-block mb-2">{d.extra}</p>
                )}
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
              { zone: "Kongo Central", detail: "Siège — Territoire de Lukula" },
              { zone: "Lukula & Tshela", detail: "Zones rurales principales" },
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
