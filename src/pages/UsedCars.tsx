import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import SEO from "@/components/SEO";

// Car first images from their folders
import m440i_21 from "@/assets/cars/bmw-m440i/21.jpg";
import tiguan9 from "@/assets/cars/vw-tiguan/9.jpg";

// BMW X1 image
import x1_2016_1 from "@/assets/cars/bmw-x1-2016/1.jpg";

// BMW M5 Competition image

// New cars images
import e300e_1 from "@/assets/cars/mercedes-e300e-amg/1.jpg";
import glb220d_1 from "@/assets/cars/mercedes-glb-220d/1.jpg";
import bmw840i_1 from "@/assets/cars/bmw-840i-xdrive-individual/1.jpg";
import octaviaCombi2020_1 from "@/assets/cars/skoda-octavia-combi-2-0tdi-dsg-2020/1.jpg";
import octaviaCombiFirstDsg2020_1 from "@/assets/cars/skoda-octavia-combi-first-edition-dsg-2020/1.jpg";
import audiA5_1 from "@/assets/cars/audi-a5-sportback-2-0tdi/1.jpg";

// Brand logos
import bmwLogo from "@/assets/brands/bmw-new.png";
import mercedesLogo from "@/assets/brands/mercedes-new.png";
import volkswagenLogo from "@/assets/brands/volkswagen-new.png";
import skodaLogo from "@/assets/brands/skoda-new.png";
import audiLogo from "@/assets/brands/audi-new.png";
import peugeotLogo from "@/assets/brands/peugeot-new.png";

const allCars = [
  { id: 17, slug: "mercedes-e300e-amg", image: e300e_1, brand: "Mercedes", model: "E300e AMG", year: 2025, mileage: 9000, fuelType: "Plug-in hibrid", price: 72900, brandLogo: mercedesLogo },
  { id: 30, slug: "bmw-840i-xdrive-individual", image: bmw840i_1, brand: "BMW", model: "840i xDrive Individual M-Sport", year: 2022, mileage: 108900, fuelType: "Benzin", price: 65990, brandLogo: bmwLogo },
  { id: 2, slug: "bmw-m440i-xdrive", image: m440i_21, brand: "BMW", model: "M440i xDrive", year: 2020, mileage: 92000, fuelType: "Benzin", price: 49990, brandLogo: bmwLogo },
  { id: 3, slug: "vw-tiguan-r-line", image: tiguan9, brand: "VW", model: "Tiguan 2.0 TDI DSG R-Line", year: 2024, mileage: 26900, fuelType: "Dizel", price: 44500, brandLogo: volkswagenLogo },
  { id: 19, slug: "mercedes-glb-220d-4matic", image: glb220d_1, brand: "Mercedes", model: "GLB 220d 4Matic", year: 2022, mileage: 85800, fuelType: "Dizel", price: 37900, brandLogo: mercedesLogo },
  { id: 32, slug: "skoda-octavia-combi-2-0tdi-dsg-2020", image: octaviaCombi2020_1, brand: "Škoda", model: "Octavia Combi 2.0TDI DSG", year: 2020, mileage: 118000, fuelType: "Dizel", price: 21990, brandLogo: skodaLogo },
  { id: 33, slug: "skoda-octavia-combi-first-edition-dsg-2020", image: octaviaCombiFirstDsg2020_1, brand: "Škoda", model: "Octavia Combi 2.0TDI First Edition", year: 2020, mileage: 123900, fuelType: "Dizel", price: 21690, brandLogo: skodaLogo },
  { id: 34, slug: "audi-a5-sportback-2-0tdi", image: audiA5_1, brand: "Audi", model: "A5 Sportback 2.0TDI", year: 2017, mileage: 205000, fuelType: "Dizel", price: 19290, brandLogo: audiLogo },
  { id: 11, slug: "bmw-x1-sdrive18d-m-paket", image: x1_2016_1, brand: "BMW", model: "X1 sDrive18d M-Paket", year: 2016, mileage: 209000, fuelType: "Dizel", price: 15490, brandLogo: bmwLogo },
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
