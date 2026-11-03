import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cjenikFileUrl } from "@/lib/cjenik";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:info@imponira.eu" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@imponira.eu</span>
            </a>
            <a href="tel:091266668" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>091 266 6668</span>
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm flex-wrap justify-center">
            <a href={cjenikFileUrl("cjenik.csv")} className="text-foreground hover:text-primary transition-colors">Cjenik (CSV)</a>
            <a href={cjenikFileUrl("cjenik.xml")} className="text-foreground hover:text-primary transition-colors">Cjenik (XML)</a>
            <Link to="/cjenik-arhiva" className="text-foreground hover:text-primary transition-colors">Arhiva cjenika</Link>
          </div>
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Imponira Automobili. Sva prava zadržana.</p>
            <p className="mt-1">
              Izradio i održava{" "}
              <a
                href="https://remarketing.hr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                Remarketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
