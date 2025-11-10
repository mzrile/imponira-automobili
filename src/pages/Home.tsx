import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CarCard from "@/components/CarCard";
import FilterSection from "@/components/FilterSection";
import { Button } from "@/components/ui/button";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

const featuredCars = [
  { id: 1, image: car1, brand: "Porsche", model: "911 Turbo", year: 2023, mileage: 15000, fuelType: "Benzin", price: 89500 },
  { id: 2, image: car2, brand: "BMW", model: "7 Series", year: 2024, mileage: 5000, fuelType: "Dizel", price: 75000 },
  { id: 3, image: car3, brand: "Mercedes", model: "GLE 63 AMG", year: 2023, mileage: 12000, fuelType: "Benzin", price: 92000 },
  { id: 4, image: car4, brand: "BMW", model: "M8 Coupe", year: 2022, mileage: 25000, fuelType: "Benzin", price: 68000 },
  { id: 5, image: car5, brand: "Aston Martin", model: "Vantage", year: 2023, mileage: 8000, fuelType: "Benzin", price: 125000 },
  { id: 6, image: car6, brand: "Volkswagen", model: "Golf R", year: 2024, mileage: 3000, fuelType: "Benzin", price: 45000 },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroCarousel />

      <main className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Novo u ponudi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-1">
            <FilterSection />
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-foreground">O nama</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dobrodošli u Imponira Automobili - vašeg pouzdanog partnera za kupovinu kvalitetnih polovnih vozila. 
                Sa dugogodišnjim iskustvom u automobilskoj industriji, ponosimo se time što pružamo vrhunsku uslugu 
                i najkvalitetnija vozila na tržištu.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Naša misija je da vam pomognemo da pronađete savršeno vozilo koje odgovara vašim potrebama i budžetu. 
                Svako vozilo u našoj ponudi je pažljivo odabrano i provereno kako bismo osigurali najviše standarde kvaliteta.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Zašto odabrati nas? Transparentnost, kvalitet i profesionalnost su stub našeg poslovanja. 
                Nudimo detaljnu dokumentaciju o svakom vozilu, mogućnost testne vožnje i profesionalne savete 
                koji će vam pomoći da donesete najbolju odluku.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-20">
          <Link to="/used-cars">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg">
              Ponuda vozila
            </Button>
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Brendovi koje zastupamo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {["Mercedes-Benz", "BMW", "Audi", "Volkswagen", "Porsche", "Tesla"].map((brand) => (
              <div key={brand} className="text-center p-6 bg-card border border-border rounded-lg hover-scale">
                <p className="text-muted-foreground font-semibold">{brand}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
