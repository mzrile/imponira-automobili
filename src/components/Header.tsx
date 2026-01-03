import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import logo from "@/assets/logo.png";

const SportCarIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 12h1l1.5-4.5c.3-.9 1.1-1.5 2-1.5h9c.9 0 1.7.6 2 1.5L20 12h1" />
    <path d="M5 12v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5" />
    <path d="M5 12h14a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2z" />
    <circle cx="7.5" cy="15.5" r="1.5" />
    <circle cx="16.5" cy="15.5" r="1.5" />
    <path d="M9 9h6" />
  </svg>
);

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:justify-center md:gap-12">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            <span className="hidden md:inline">Početna</span>
            <Home className="md:hidden w-6 h-6" />
          </Link>
          
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Imponira Automobili" className="h-14 md:h-12 w-auto" />
          </Link>
          
          <Link to="/ponuda-vozila" className="text-foreground hover:text-primary transition-colors">
            <span className="hidden md:inline">Ponuda vozila</span>
            <SportCarIcon className="md:hidden w-7 h-7" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
