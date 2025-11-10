import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import FilterSection from "@/components/FilterSection";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";
import porscheLogo from "@/assets/brands/porsche-logo.png";
import bmwLogo from "@/assets/brands/bmw-logo.png";
import mercedesLogo from "@/assets/brands/mercedes-logo.png";
import astonMartinLogo from "@/assets/brands/aston-martin-logo.png";
import audiLogo from "@/assets/brands/audi-logo.png";
import volkswagenLogo from "@/assets/brands/volkswagen-logo.png";

const allCars = [
  { id: 1, image: car1, brand: "Porsche", model: "911 Turbo", year: 2023, mileage: 15000, fuelType: "Benzin", transmission: "Automatski", price: 89500, brandLogo: porscheLogo },
  { id: 2, image: car2, brand: "BMW", model: "7 Series", year: 2024, mileage: 5000, fuelType: "Dizel", transmission: "Automatski", price: 75000, brandLogo: bmwLogo },
  { id: 3, image: car3, brand: "Mercedes", model: "GLE 63 AMG", year: 2023, mileage: 12000, fuelType: "Benzin", transmission: "Automatski", price: 92000, brandLogo: mercedesLogo },
  { id: 4, image: car4, brand: "BMW", model: "M8 Coupe", year: 2022, mileage: 25000, fuelType: "Benzin", transmission: "Automatski", price: 68000, brandLogo: bmwLogo },
  { id: 5, image: car5, brand: "Aston Martin", model: "Vantage", year: 2023, mileage: 8000, fuelType: "Benzin", transmission: "Manuelni", price: 125000, brandLogo: astonMartinLogo },
  { id: 6, image: car6, brand: "Volkswagen", model: "Golf R", year: 2024, mileage: 3000, fuelType: "Benzin", transmission: "Automatski", price: 45000, brandLogo: volkswagenLogo },
  { id: 7, image: car1, brand: "Audi", model: "RS6 Avant", year: 2023, mileage: 18000, fuelType: "Benzin", transmission: "Automatski", price: 82000, brandLogo: audiLogo },
  { id: 8, image: car2, brand: "Mercedes", model: "S 500", year: 2022, mileage: 32000, fuelType: "Hibrid", transmission: "Automatski", price: 71000, brandLogo: mercedesLogo },
  { id: 9, image: car3, brand: "Porsche", model: "Cayenne Turbo", year: 2024, mileage: 7000, fuelType: "Benzin", transmission: "Automatski", price: 98000, brandLogo: porscheLogo },
];

const UsedCars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground">Ponuda vozila</h1>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterSection />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allCars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UsedCars;
