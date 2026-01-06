import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import logo from "@/assets/logo.png";

const CarFrontIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    {/* Car body */}
    <path d="M5 11V15C5 15.5523 5.44772 16 6 16H7C7.55228 16 8 15.5523 8 15V14H16V15C16 15.5523 16.4477 16 17 16H18C18.5523 16 19 15.5523 19 15V11L17.5 7H6.5L5 11Z" />
    {/* Windshield */}
    <path d="M7 7L8.5 4H15.5L17 7H7Z" opacity="0.7" />
    {/* Headlights */}
    <rect x="5" y="9" width="2" height="2" rx="0.5" opacity="0.9" />
    <rect x="17" y="9" width="2" height="2" rx="0.5" opacity="0.9" />
    {/* Grille */}
    <rect x="9" y="11" width="6" height="2" rx="0.5" opacity="0.6" />
  </svg>
);

const Header = () => {
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCarsClick = (e: React.MouseEvent) => {
    if (location.pathname === "/ponuda-vozila") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:justify-center md:gap-12">
          <Link to="/" onClick={handleHomeClick} className="text-foreground hover:text-primary transition-colors">
            <span className="hidden md:inline">Početna</span>
            <Home className="md:hidden w-6 h-6" />
          </Link>
          
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Imponira Automobili" className="h-16 md:h-14 w-auto" />
          </Link>
          
          <Link to="/ponuda-vozila" onClick={handleCarsClick} className="text-foreground hover:text-primary transition-colors">
            <span className="hidden md:inline">Ponuda vozila</span>
            <CarFrontIcon className="md:hidden w-7 h-7" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
