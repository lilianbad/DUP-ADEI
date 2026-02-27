import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-muted">
        <div className="container text-center max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">Parlons-en</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Contactez-nous</h1>
          <p className="text-muted-foreground text-lg">
            Nous sommes à votre disposition pour toute question ou proposition de partenariat.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 max-w-5xl">
          {/* Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Nos Coordonnées</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Adresse</p>
                  <p className="text-muted-foreground text-sm">Av. Kitsiela n°13, Cité de Nsioni, Territoire de Lukula, Province du Kongo Central, RDC</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <p className="text-muted-foreground text-sm">adeiongdrdc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Téléphone</p>
                  <p className="text-muted-foreground text-sm">+243 89 27 98 908 / +243 998424058</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden border bg-muted h-48 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">📍 Carte Google Maps — Lukula, Kongo Central</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Envoyez-nous un message</h2>
            {submitted ? (
              <div className="bg-primary/10 rounded-xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground">Merci pour votre message. Nous vous répondrons dans les meilleurs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet</label>
                  <input required type="text" className="w-full rounded-lg border bg-card px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input required type="email" className="w-full rounded-lg border bg-card px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Objet</label>
                  <input required type="text" className="w-full rounded-lg border bg-card px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Objet du message" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea required rows={5} className="w-full rounded-lg border bg-card px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Votre message..." />
                </div>
                <button type="submit" className="w-full rounded-lg bg-primary text-primary-foreground py-3.5 font-semibold hover:opacity-90 transition-opacity">
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
