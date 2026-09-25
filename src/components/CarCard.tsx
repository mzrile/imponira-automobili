import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface CarCardProps {
  id: number;
  slug?: string;
  image: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuelType: string;
  transmission?: string;
  price: number;
  brandLogo?: string;
}

const CarCard = ({ id, slug, image, brand, model, year, mileage, fuelType, transmission, price, brandLogo }: CarCardProps) => {
  const carUrl = slug ? `/car/${slug}` : `/car/${id}`;
  return (
    <Link to={carUrl} className="block h-full">
      <Card className="overflow-hidden hover-scale hover-glow cursor-pointer bg-card border-border h-full flex flex-col">
        <div className="aspect-[4/3] overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={`${brand} ${model}`} 
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-3 gap-3">
            {brandLogo && (
              <img src={brandLogo} alt={`${brand} logo`} className="h-8 w-8 object-contain flex-shrink-0" />
            )}
            <h3 className="text-lg font-bold text-foreground text-right line-clamp-2">{brand} {model}</h3>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3 flex-wrap gap-y-1">
            <span>{year}</span>
            <span>{mileage.toLocaleString()} km</span>
            <span>{fuelType}</span>
            {transmission && <span>{transmission}</span>}
          </div>
          <div className="mt-auto">
            <div className="text-2xl font-bold text-primary">{price.toLocaleString()} €</div>
            <p className="text-sm text-foreground mt-1">Sidrena cijena (10.09.2026.): {price.toLocaleString()} €</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CarCard;
