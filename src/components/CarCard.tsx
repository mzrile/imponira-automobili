import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface CarCardProps {
  id: number;
  image: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuelType: string;
  transmission?: string;
  price: number;
}

const CarCard = ({ id, image, brand, model, year, mileage, fuelType, transmission, price }: CarCardProps) => {
  return (
    <Link to={`/car/${id}`}>
      <Card className="overflow-hidden hover-scale hover-glow cursor-pointer bg-card border-border">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={image} alt={`${brand} ${model}`} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-muted-foreground">{brand}</div>
            <h3 className="text-lg font-bold text-foreground">{brand} {model}</h3>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <span>{year}</span>
            <span>{mileage.toLocaleString()} km</span>
            <span>{fuelType}</span>
            {transmission && <span>{transmission}</span>}
          </div>
          <div className="text-2xl font-bold text-primary">€{price.toLocaleString()}</div>
        </div>
      </Card>
    </Link>
  );
};

export default CarCard;
