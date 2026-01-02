import { Link } from "react-router-dom";
import { Home, CarFront } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-12">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            <span className="hidden md:inline">Početna</span>
            <Home className="md:hidden w-6 h-6" />
          </Link>
          
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Imponira Automobili" className="h-12 w-auto" />
          </Link>
          
          <Link to="/ponuda-vozila" className="text-foreground hover:text-primary transition-colors">
            <span className="hidden md:inline">Ponuda vozila</span>
            <CarFront className="md:hidden w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
