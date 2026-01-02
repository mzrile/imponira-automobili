import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";

// Car first images from their folders
import x5_1 from "@/assets/cars/bmw-x5-xdrive-45e/1.jpg";
import m440i_1 from "@/assets/cars/bmw-m440i/1.jpg";
import tiguan1 from "@/assets/cars/vw-tiguan/1.jpg";
import c220d_1 from "@/assets/cars/mercedes-c220d-amg/1.jpg";
import a200d_1 from "@/assets/cars/mercedes-a200d/1.jpg";
import octaviaRs_1 from "@/assets/cars/skoda-octavia-rs/1.jpg";
import octaviaCombiRs_1 from "@/assets/cars/skoda-octavia-combi-rs/1.jpg";
import octaviaFe_1 from "@/assets/cars/skoda-octavia-combi-first-edition/1.jpg";
import karoq_1 from "@/assets/cars/skoda-karoq-sportline/1.jpg";
import clio_1 from "@/assets/cars/renault-clio/1.jpg";
import megane_1 from "@/assets/cars/renault-megane/1.jpg";
import golf_1 from "@/assets/cars/vw-golf/1.jpg";

// BMW X1 images
import x1_2022_1 from "@/assets/cars/bmw-x1-2022/1.jpg";
import x1_2016_1 from "@/assets/cars/bmw-x1-2016/1.jpg";

// Brand logos
import bmwLogo from "@/assets/brands/bmw-logo.png";
import mercedesLogo from "@/assets/brands/mercedes-logo.png";
import volkswagenLogo from "@/assets/brands/volkswagen-logo.png";
import skodaLogo from "@/assets/brands/skoda-logo.png";
import renaultLogo from "@/assets/brands/renault-logo.png";

const allCars = [
  { id: 1, slug: "bmw-x5-xdrive-45e-m-sport", image: x5_1, brand: "BMW", model: "X5 xDrive 45e M-Sport", year: 2020, mileage: 85000, fuelType: "Hibrid", price: 59990, brandLogo: bmwLogo },
  { id: 2, slug: "bmw-m440i-xdrive", image: m440i_1, brand: "BMW", model: "M440i xDrive", year: 2020, mileage: 92000, fuelType: "Benzin", price: 51990, brandLogo: bmwLogo },
  { id: 3, slug: "vw-tiguan-r-line", image: tiguan1, brand: "VW", model: "Tiguan 2.0 TDI DSG R-Line", year: 2024, mileage: 16900, fuelType: "Dizel", price: 47890, brandLogo: volkswagenLogo },
  { id: 4, slug: "mercedes-c220d-amg", image: c220d_1, brand: "Mercedes", model: "C220d AMG", year: 2021, mileage: 59000, fuelType: "Dizel", price: 44990, brandLogo: mercedesLogo },
  { id: 5, slug: "bmw-x1-sdrive18d", image: x1_2022_1, brand: "BMW", model: "X1 sDrive18d", year: 2022, mileage: 82900, fuelType: "Dizel", price: 39990, brandLogo: bmwLogo },
  { id: 6, slug: "skoda-octavia-rs", image: octaviaRs_1, brand: "Škoda", model: "Octavia RS 2.0TDI DSG", year: 2021, mileage: 88000, fuelType: "Dizel", price: 31990, brandLogo: skodaLogo },
  { id: 7, slug: "skoda-octavia-combi-rs", image: octaviaCombiRs_1, brand: "Škoda", model: "Octavia Combi RS 2.0TDI DSG", year: 2022, mileage: 117500, fuelType: "Dizel", price: 28690, brandLogo: skodaLogo },
  { id: 8, slug: "mercedes-a200d", image: a200d_1, brand: "Mercedes", model: "A200d", year: 2020, mileage: 110000, fuelType: "Dizel", price: 24490, brandLogo: mercedesLogo },
  { id: 9, slug: "skoda-octavia-combi-first-edition", image: octaviaFe_1, brand: "Škoda", model: "Octavia Combi 2.0TDI DSG First Edition", year: 2020, mileage: 126600, fuelType: "Dizel", price: 23790, brandLogo: skodaLogo },
  { id: 10, slug: "skoda-karoq-sportline", image: karoq_1, brand: "Škoda", model: "Karoq 2.0TDI 4x4 DSG Sportline", year: 2021, mileage: 202000, fuelType: "Dizel", price: 21990, brandLogo: skodaLogo },
  { id: 11, slug: "bmw-x1-sdrive18d-m-paket", image: x1_2016_1, brand: "BMW", model: "X1 sDrive18d M-Paket", year: 2016, mileage: 209000, fuelType: "Dizel", price: 17490, brandLogo: bmwLogo },
  { id: 12, slug: "renault-clio-edition-one", image: clio_1, brand: "Renault", model: "Clio Edition One TCe 130KS", year: 2020, mileage: 108500, fuelType: "Benzin", price: 15990, brandLogo: renaultLogo },
  { id: 13, slug: "renault-megane-bose", image: megane_1, brand: "Renault", model: "Megane Bose 130dCi", year: 2019, mileage: 130000, fuelType: "Dizel", price: 13990, brandLogo: renaultLogo },
  { id: 14, slug: "vw-golf-7", image: golf_1, brand: "VW", model: "Golf 7 1.6TDI DSG", year: 2017, mileage: 275000, fuelType: "Dizel", price: 10990, brandLogo: volkswagenLogo },
];

const UsedCars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground">Ponuda vozila</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UsedCars;
