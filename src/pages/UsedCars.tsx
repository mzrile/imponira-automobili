import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import SEO from "@/components/SEO";

// Car first images from their folders
import x5_1 from "@/assets/cars/bmw-x5-xdrive-45e/1.jpg";
import m440i_21 from "@/assets/cars/bmw-m440i/21.jpg";
import tiguan9 from "@/assets/cars/vw-tiguan/9.jpg";
import karoq_1 from "@/assets/cars/skoda-karoq-sportline/1.jpg";

// BMW X1 image
import x1_2016_1 from "@/assets/cars/bmw-x1-2016/1.jpg";

// BMW M5 Competition image
import m5_1 from "@/assets/cars/bmw-m5-competition/1.jpg";

// New cars images
import e300e_1 from "@/assets/cars/mercedes-e300e-amg/1.jpg";
import x5_30d_1 from "@/assets/cars/bmw-x5-30d-xdrive-m-sport/1.jpg";
import glb220d_1 from "@/assets/cars/mercedes-glb-220d/1.jpg";
import octaviaCombiRs2021_1 from "@/assets/cars/skoda-octavia-combi-rs-2021/1.jpg";
import audiA5_1 from "@/assets/cars/audi-a5-sportback/1.jpg";
import peugeot3008_1 from "@/assets/cars/peugeot-3008-gt/1.jpg";

// Brand logos
import bmwLogo from "@/assets/brands/bmw-new.png";
import mercedesLogo from "@/assets/brands/mercedes-new.png";
import volkswagenLogo from "@/assets/brands/volkswagen-new.png";
import skodaLogo from "@/assets/brands/skoda-new.png";
import audiLogo from "@/assets/brands/audi-new.png";
import peugeotLogo from "@/assets/brands/peugeot-new.png";

const allCars = [
  { id: 16, slug: "bmw-m5-competition", image: m5_1, brand: "BMW", model: "M5 Competition", year: 2021, mileage: 106900, fuelType: "Benzin", price: 84990, brandLogo: bmwLogo },
  { id: 17, slug: "mercedes-e300e-amg", image: e300e_1, brand: "Mercedes", model: "E300e AMG", year: 2025, mileage: 9000, fuelType: "Plug-in hibrid", price: 74900, brandLogo: mercedesLogo },
  { id: 1, slug: "bmw-x5-xdrive-45e-m-sport", image: x5_1, brand: "BMW", model: "X5 xDrive 45e M-Sport", year: 2020, mileage: 85000, fuelType: "Hibrid", price: 58990, brandLogo: bmwLogo },
  { id: 18, slug: "bmw-x5-30d-xdrive-m-sport", image: x5_30d_1, brand: "BMW", model: "X5 3.0d xDrive M-Sportpaket", year: 2019, mileage: 120000, fuelType: "Dizel", price: 58490, brandLogo: bmwLogo },
  { id: 2, slug: "bmw-m440i-xdrive", image: m440i_21, brand: "BMW", model: "M440i xDrive", year: 2020, mileage: 92000, fuelType: "Benzin", price: 51990, brandLogo: bmwLogo },
  { id: 3, slug: "vw-tiguan-r-line", image: tiguan9, brand: "VW", model: "Tiguan 2.0 TDI DSG R-Line", year: 2024, mileage: 16900, fuelType: "Dizel", price: 45490, brandLogo: volkswagenLogo },
  { id: 19, slug: "mercedes-glb-220d-4matic", image: glb220d_1, brand: "Mercedes", model: "GLB 220d 4Matic", year: 2022, mileage: 85800, fuelType: "Dizel", price: 39990, brandLogo: mercedesLogo },
  { id: 20, slug: "skoda-octavia-combi-rs-2021", image: octaviaCombiRs2021_1, brand: "Škoda", model: "Octavia Combi RS 2.0TDI DSG", year: 2021, mileage: 149900, fuelType: "Dizel", price: 26490, brandLogo: skodaLogo },
  { id: 21, slug: "audi-a5-sportback-20tdi", image: audiA5_1, brand: "Audi", model: "A5 Sportback 2.0TDI", year: 2018, mileage: 163000, fuelType: "Dizel", price: 23790, brandLogo: audiLogo },
  { id: 22, slug: "peugeot-3008-gt-black", image: peugeot3008_1, brand: "Peugeot", model: "3008 1.5HDI GT Black paket", year: 2022, mileage: 99850, fuelType: "Dizel", price: 23490, brandLogo: peugeotLogo },
  { id: 10, slug: "skoda-karoq-sportline", image: karoq_1, brand: "Škoda", model: "Karoq 2.0TDI 4x4 DSG Sportline", year: 2021, mileage: 202000, fuelType: "Dizel", price: 20990, brandLogo: skodaLogo },
  { id: 11, slug: "bmw-x1-sdrive18d-m-paket", image: x1_2016_1, brand: "BMW", model: "X1 sDrive18d M-Paket", year: 2016, mileage: 209000, fuelType: "Dizel", price: 16790, brandLogo: bmwLogo },
];

const carsListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ponuda polovnih vozila - ImpoNira Automobili",
  "description": "Kompletna ponuda kvalitetnih polovnih vozila",
  "itemListElement": allCars.map((car, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Car",
      "name": `${car.brand} ${car.model}`,
      "vehicleModelDate": car.year.toString(),
      "mileageFromOdometer": {
        "@type": "QuantitativeValue",
        "value": car.mileage,
        "unitCode": "KMT"
      },
      "fuelType": car.fuelType,
      "offers": {
        "@type": "Offer",
        "price": car.price,
        "priceCurrency": "EUR"
      }
    }
  }))
};

const UsedCars = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Ponuda vozila - Kvalitetna polovna vozila"
        description="Pregledajte našu kompletnu ponudu kvalitetnih polovnih vozila. BMW, Mercedes, VW, Škoda - svi automobili s detaljnom dokumentacijom i garancijom kvalitete."
        keywords="polovna vozila, rabljeni automobili, BMW, Mercedes, Volkswagen, Škoda, uvoz automobila Hrvatska"
        url="https://imponira.eu/ponuda-vozila"
        jsonLd={carsListJsonLd}
      />
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
