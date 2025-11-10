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
import porscheLogo from "@/assets/brands/porsche-logo.png";
import bmwLogo from "@/assets/brands/bmw-logo.png";
import mercedesLogo from "@/assets/brands/mercedes-logo.png";
import astonMartinLogo from "@/assets/brands/aston-martin-logo.png";
import volkswagenLogo from "@/assets/brands/volkswagen-logo.png";
import ferrariLogo from "@/assets/brands/ferrari-logo.png";
import lamborghiniLogo from "@/assets/brands/lamborghini-logo.png";
import lexusLogo from "@/assets/brands/lexus-logo.png";
import skodaLogo from "@/assets/brands/skoda-logo.png";
import audiLogo from "@/assets/brands/audi-logo.png";

const featuredCars = [
  { id: 1, image: car1, brand: "Porsche", model: "911 Turbo", year: 2023, mileage: 15000, fuelType: "Benzin", price: 89500, brandLogo: porscheLogo },
  { id: 2, image: car2, brand: "BMW", model: "7 Series", year: 2024, mileage: 5000, fuelType: "Dizel", price: 75000, brandLogo: bmwLogo },
  { id: 3, image: car3, brand: "Mercedes", model: "GLE 63 AMG", year: 2023, mileage: 12000, fuelType: "Benzin", price: 92000, brandLogo: mercedesLogo },
  { id: 4, image: car4, brand: "BMW", model: "M8 Coupe", year: 2022, mileage: 25000, fuelType: "Benzin", price: 68000, brandLogo: bmwLogo },
  { id: 5, image: car5, brand: "Aston Martin", model: "Vantage", year: 2023, mileage: 8000, fuelType: "Benzin", price: 125000, brandLogo: astonMartinLogo },
  { id: 6, image: car6, brand: "Volkswagen", model: "Golf R", year: 2024, mileage: 3000, fuelType: "Benzin", price: 45000, brandLogo: volkswagenLogo },
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
                Dobro došli na web stranicu Imponira Automobili - Vašeg pouzdanog partnera za kupovinu kvalitetnih rabljenih vozila.
                S dugogodišnjim iskustvom u automobilskoj industriji, ponosimo se što možemo pružiti vrhunsku uslugu i najkvalitetnija vozila na tržištu.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Naša misija je da vam pomognemo da pronađete savršeno vozilo koje odgovara vašim potrebama i budžetu. 
                Svako vozilo u našoj ponudi je pažljivo odabrano i provjereno kako bismo osigurali najviše standarde.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Zašto odabrati nas? Transparentnost, kvaliteta i profesionalnost su temelji našeg poslovanja.
                Nudimo detaljnu dokumentaciju o svakom vozilu i profesionalne savjete koji će vam pomoći da donesete najbolju odluku.
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Mercedes-Benz", logo: mercedesLogo },
              { name: "BMW", logo: bmwLogo },
              { name: "Audi", logo: audiLogo },
              { name: "Volkswagen", logo: volkswagenLogo },
              { name: "Porsche", logo: porscheLogo },
              { name: "Ferrari", logo: ferrariLogo },
              { name: "Lamborghini", logo: lamborghiniLogo },
              { name: "Lexus", logo: lexusLogo },
              { name: "Škoda", logo: skodaLogo },
              { name: "Aston Martin", logo: astonMartinLogo },
            ].map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-6 bg-card border border-border rounded-lg hover-scale">
                <img src={brand.logo} alt={`${brand.name} logo`} className="h-12 w-auto object-contain" />
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
