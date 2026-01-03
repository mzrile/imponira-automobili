import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import logo from "@/assets/logo.png";

const SportCarIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 60" 
    fill="currentColor" 
    className={className}
  >
    {/* Windshield */}
    <path d="M20 25 Q25 5 50 5 Q75 5 80 25 L75 28 Q50 15 25 28 Z" />
    {/* Body */}
    <path d="M5 35 Q8 28 20 25 L25 28 Q50 15 75 28 L80 25 Q92 28 95 35 L95 45 Q90 50 85 50 L15 50 Q10 50 5 45 Z" />
    {/* Side mirrors */}
    <path d="M8 30 Q2 28 3 32 Q4 36 10 35 Z" />
    <path d="M92 30 Q98 28 97 32 Q96 36 90 35 Z" />
    {/* Front grille */}
    <rect x="35" y="48" width="30" height="4" rx="1" fill="currentColor" opacity="0.7" />
    {/* Air intakes */}
    <path d="M22 38 Q28 42 35 40 L32 45 Q25 46 20 42 Z" opacity="0.6" />
    <path d="M78 38 Q72 42 65 40 L68 45 Q75 46 80 42 Z" opacity="0.6" />
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
            <img src={logo} alt="Imponira Automobili" className="h-16 md:h-14 w-auto" />
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
