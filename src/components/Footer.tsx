import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-display font-bold text-xl">ADEI</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed">
            Association pour le Développement Intégré — Promouvoir le développement communautaire durable par la participation et le partenariat.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Liens Rapides</h4>
          <div className="flex flex-col gap-2">
            {[
              ["/a-propos", "À Propos"],
              ["/interventions", "Interventions"],
              ["/projets", "Projets"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <Link key={to} to={to} className="text-background/70 hover:text-background text-sm transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-background/70">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Av. Kitsiela n°13, Cité de Nsioni, Lukula, Kongo Central, RDC</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>adeiongdrdc@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+243 89 27 98 908</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
        © {new Date().getFullYear()} ADEI — Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
