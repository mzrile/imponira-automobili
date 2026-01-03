import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";

// Car first images
import x5_1 from "@/assets/cars/bmw-x5-xdrive-45e/1.jpg";
import m440i_21 from "@/assets/cars/bmw-m440i/21.jpg";
import tiguan9 from "@/assets/cars/vw-tiguan/9.jpg";
import c220d_1 from "@/assets/cars/mercedes-c220d-amg/1.jpg";
import x1_2022_1 from "@/assets/cars/bmw-x1-2022/1.jpg";
import octaviaRs_1 from "@/assets/cars/skoda-octavia-rs/1.jpg";

// Brand logos
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
  { id: 1, slug: "bmw-x5-xdrive-45e-m-sport", image: x5_1, brand: "BMW", model: "X5 xDrive 45e M-Sport", year: 2020, mileage: 85000, fuelType: "Hibrid", price: 59990, brandLogo: bmwLogo },
  { id: 2, slug: "bmw-m440i-xdrive", image: m440i_21, brand: "BMW", model: "M440i xDrive", year: 2020, mileage: 92000, fuelType: "Benzin", price: 51990, brandLogo: bmwLogo },
  { id: 3, slug: "vw-tiguan-r-line", image: tiguan9, brand: "VW", model: "Tiguan 2.0 TDI DSG R-Line", year: 2024, mileage: 16900, fuelType: "Dizel", price: 47890, brandLogo: volkswagenLogo },
  { id: 4, slug: "mercedes-c220d-amg", image: c220d_1, brand: "Mercedes", model: "C220d AMG", year: 2021, mileage: 59000, fuelType: "Dizel", price: 44990, brandLogo: mercedesLogo },
  { id: 5, slug: "bmw-x1-sdrive18d", image: x1_2022_1, brand: "BMW", model: "X1 sDrive18d", year: 2022, mileage: 82900, fuelType: "Dizel", price: 39990, brandLogo: bmwLogo },
  { id: 6, slug: "skoda-octavia-rs", image: octaviaRs_1, brand: "Škoda", model: "Octavia RS 2.0TDI DSG", year: 2021, mileage: 88000, fuelType: "Dizel", price: 31990, brandLogo: skodaLogo },
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

        <section className="mb-20">
          <div className="bg-card border border-border p-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">O nama</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Dobro došli na web stranicu Imponira Automobili - Vašeg pouzdanog partnera za kupovinu kvalitetnih rabljenih vozila.
                S dugogodišnjim iskustvom u automobilskoj industriji, ponosimo se što možemo pružiti vrhunsku uslugu i najkvalitetnija vozila na tržištu.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Naša misija je da vam pomognemo da pronađete savršeno vozilo koje odgovara vašim potrebama i budžetu. 
                Svako vozilo u našoj ponudi je pažljivo odabrano i provjereno kako bismo osigurali najviše standarde.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Zašto odabrati nas? Transparentnost, kvaliteta i profesionalnost su temelji našeg poslovanja.
                Nudimo detaljnu dokumentaciju o svakom vozilu i profesionalne savjete koji će vam pomoći da donesete najbolju odluku.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Bilo da tražite sportski automobil, luksuzni sedan ili praktični obiteljski automobil, naš tim stručnjaka je tu da vam pomogne u svakom koraku procesa kupnje.
                Vjerujemo u izgradnju dugoročnih odnosa s našim klijentima temeljenih na povjerenju i zadovoljstvu.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Posjetite nas i uvjerite se sami u kvalitetu naše ponude. Radujemo se što ćemo vam pomoći pronaći automobil vaših snova!
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-20">
          <Link to="/ponuda-vozila">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg">
              Ponuda vozila
            </Button>
          </Link>
        </section>

        <section className="mb-20">
          <div className="bg-zinc-900 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
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
                <div 
                  key={brand.name} 
                  className="flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300"
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Lokacija</h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-6 text-center">
              <p className="text-lg text-foreground font-medium">Ivana Šimunovića 11/1</p>
              <p className="text-muted-foreground">10360 Sesvete, Hrvatska</p>
            </div>
            <div className="flex justify-center p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.8!2d16.1166!3d45.8286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766a76f89e3e16b%3A0x1234567890abcdef!2sIvana%20%C5%A0imunovi%C4%87a%2011%2C%2010360%20Sesvete!5e0!3m2!1shr!2shr!4v1704200000000!5m2!1shr!2shr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija - Imponira Automobili"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
