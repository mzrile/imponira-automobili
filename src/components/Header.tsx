import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Imponira Automobili" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Početna
            </Link>
            <Link to="/used-cars" className="text-foreground hover:text-primary transition-colors">
              Ponuda vozila
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:info@imponira.com" className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@imponira.com</span>
            </a>
            <a href="tel:+381234567890" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+381 23 456 7890</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
