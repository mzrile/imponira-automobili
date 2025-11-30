import { Mail, Phone } from "lucide-react";

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
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Imponira Automobili. Sva prava zadržana.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
