import { useParams } from "react-router-dom";
import { useState } from "react";
import { Calendar, Gauge, Fuel, Settings, Zap, FileCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import bmw1 from "@/assets/bmw-1.jpg";
import bmw2 from "@/assets/bmw-2.jpg";
import bmw3 from "@/assets/bmw-3.jpg";
import bmw4 from "@/assets/bmw-4.jpg";
import bmw5 from "@/assets/bmw-5.jpg";
import bmw6 from "@/assets/bmw-6.jpg";

const carDetails: Record<string, {
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  power: string;
  engine: string;
  registration: string;
  driveType: string;
  status: string;
  bodyType: string;
  price: number;
  images: string[];
  description: string;
}> = {
  "bmw-x5-xdrive-45e-m-sport": {
    brand: "BMW", 
    model: "X5 xDrive 45e M-Sport", 
    year: 2020, 
    mileage: 85000, 
    fuelType: "Plug-in hibrid", 
    transmission: "Automatski", 
    power: "210 kW", 
    engine: "Plug-in hibrid", 
    registration: "-", 
    driveType: "xDrive", 
    status: "Rabljeno", 
    bodyType: "SUV", 
    price: 59990, 
    images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], 
    description: `Vozilo je u sustavu PDV-a

Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

Vozilo u odličnom stanju, održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
M sportski paket, M Kožni upravljač, M Aerodinamički paket, Kristalni mjenjač, xDrive, Zračni ovjes, Modovi vožnje, Panoramski stakleni krov, Mreža za prtljažnik, Podne prostirke od velura, Komforno sjedalo s memorijom, Sjedala na struju, Grijanje sjedala (prednja/zadnja), Hlađenje sjedala (prednja), Paket toplinske udobnosti, sprijeda, Grijanje volana, 4 zone klima, Keyless, Line asistent, Adaptivni Tempomat, Virtual cockpit, Soft close, Head-up, Vanjski retrovizor s automatskim prigušivanjem, Tonirana stakla, Akustična zaštita pješaka, Ambijentalno unutarnje svjetlo, DAB tuner, Harman/Kardon surround zvučni sustav, Povezani paket Professional, Active Guard Plus, Laser farovi, Automatska kratka i duga svjetla, Sustav pomoći pri parkiranju Plus, 360 kamera, M Sportska kočnica (plave), Prikaz tlaka u gumama, El. kuka, El. vrata prtljažnika, El. podešavanje volana, Armatura od kože individual, Digitalni ključ, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE!`,
  },
  "bmw-m440i-xdrive": {
    brand: "BMW", model: "M440i xDrive", year: 2020, mileage: 92000, fuelType: "Benzin", transmission: "Automatski", power: "374 KS", engine: "3.0L Turbo", registration: "06/2025", driveType: "xDrive (AWD)", status: "Rabljeno", bodyType: "Coupe", price: 51990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Sportski coupe s iznimnim performansama. Opremljen M-Sport paketom i svim dodacima.",
  },
  "vw-tiguan-r-line": {
    brand: "VW", model: "Tiguan 2.0 TDI DSG R-Line", year: 2024, mileage: 16900, fuelType: "Dizel", transmission: "Automatski DSG", power: "150 KS", engine: "2.0 TDI", registration: "03/2026", driveType: "Prednji", status: "Rabljeno", bodyType: "SUV", price: 47890, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Gotovo novo vozilo s R-Line paketom. Minimalna kilometraža i jamstvo.",
  },
  "mercedes-c220d-amg": {
    brand: "Mercedes", model: "C220d AMG", year: 2021, mileage: 59000, fuelType: "Dizel", transmission: "Automatski 9G-Tronic", power: "200 KS", engine: "2.0 Diesel", registration: "09/2025", driveType: "Stražnji", status: "Rabljeno", bodyType: "Limuzina", price: 44990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Elegantna limuzina s AMG paketom opreme. Izvrsno održavana.",
  },
  "bmw-x1-sdrive18d": {
    brand: "BMW", model: "X1 sDrive18d", year: 2022, mileage: 82900, fuelType: "Dizel", transmission: "Automatski", power: "150 KS", engine: "2.0 Diesel", registration: "08/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "SUV", price: 39990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Kompaktni SUV idealan za gradsku vožnju i obiteljska putovanja.",
  },
  "skoda-octavia-rs": {
    brand: "Škoda", model: "Octavia RS 2.0TDI DSG", year: 2021, mileage: 88000, fuelType: "Dizel", transmission: "Automatski DSG", power: "200 KS", engine: "2.0 TDI", registration: "07/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "Limuzina", price: 31990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Sportska limuzina s RS paketom. Izvrsne performanse i ekonomičnost.",
  },
  "skoda-octavia-combi-rs": {
    brand: "Škoda", model: "Octavia Combi RS 2.0TDI DSG", year: 2022, mileage: 117500, fuelType: "Dizel", transmission: "Automatski DSG", power: "200 KS", engine: "2.0 TDI", registration: "05/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "Karavan", price: 28690, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Prostrani karavan s RS sportskim paketom. Idealan za obitelj.",
  },
  "mercedes-a200d": {
    brand: "Mercedes", model: "A200d", year: 2020, mileage: 110000, fuelType: "Dizel", transmission: "Automatski 7G-DCT", power: "150 KS", engine: "2.0 Diesel", registration: "04/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "Hatchback", price: 24490, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Kompaktni premium hatchback s modernim dizajnom i opremom.",
  },
  "skoda-octavia-combi-first-edition": {
    brand: "Škoda", model: "Octavia Combi 2.0TDI DSG First Edition", year: 2020, mileage: 126600, fuelType: "Dizel", transmission: "Automatski DSG", power: "150 KS", engine: "2.0 TDI", registration: "02/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "Karavan", price: 23790, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Prostrani karavan s First Edition opremom. Ekonomičan i pouzdan.",
  },
  "skoda-karoq-sportline": {
    brand: "Škoda", model: "Karoq 2.0TDI 4x4 DSG Sportline", year: 2021, mileage: 202000, fuelType: "Dizel", transmission: "Automatski DSG", power: "150 KS", engine: "2.0 TDI", registration: "06/2025", driveType: "4x4", status: "Rabljeno", bodyType: "SUV", price: 21990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Kompaktni SUV s 4x4 pogonom i Sportline opremom.",
  },
  "bmw-x1-sdrive18d-m-paket": {
    brand: "BMW", model: "X1 sDrive18d M-Paket", year: 2016, mileage: 209000, fuelType: "Dizel", transmission: "Automatski", power: "150 KS", engine: "2.0 Diesel", registration: "03/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "SUV", price: 17490, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Kompaktni SUV s M-Paket opremom. Dobro održavan.",
  },
  "renault-clio-edition-one": {
    brand: "Renault", model: "Clio Edition One TCe 130KS", year: 2020, mileage: 108500, fuelType: "Benzin", transmission: "Automatski EDC", power: "130 KS", engine: "1.3 TCe", registration: "05/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "Hatchback", price: 15990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Kompaktni gradski automobil s Edition One opremom.",
  },
  "renault-megane-bose": {
    brand: "Renault", model: "Megane Bose 130dCi", year: 2019, mileage: 130000, fuelType: "Dizel", transmission: "Manuelni", power: "130 KS", engine: "1.5 dCi", registration: "04/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "Hatchback", price: 13990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Kompaktni hatchback s Bose audio sistemom.",
  },
  "vw-golf-7": {
    brand: "VW", model: "Golf 7 1.6TDI DSG", year: 2017, mileage: 275000, fuelType: "Dizel", transmission: "Automatski DSG", power: "115 KS", engine: "1.6 TDI", registration: "02/2025", driveType: "Prednji", status: "Rabljeno", bodyType: "Hatchback", price: 10990, images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6], description: "Pouzdan i ekonomičan automobil. Redovno servisiran.",
  },
};

const defaultCar = carDetails["bmw-m440i-xdrive"];

const CarDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const car = id && carDetails[id] ? carDetails[id] : defaultCar;
  const images = car.images;

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">{car.brand} {car.model}</h1>
          <p className="text-2xl text-primary font-bold">€{car.price.toLocaleString()}</p>
        </div>

        <div className="mb-8">
          {/* Main Image Display */}
          <div className="relative h-[70vh] mb-4 rounded-lg overflow-hidden bg-muted">
            <img 
              src={images[currentImageIndex]} 
              alt={`${car.brand} ${car.model} - Slika ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button
                variant="secondary"
                size="icon"
                onClick={goToPrevious}
                className="bg-background/90 hover:bg-background text-foreground shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={goToNext}
                className="bg-background/90 hover:bg-background text-foreground shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-6 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-video rounded-md overflow-hidden border-2 transition-all hover:scale-105 hover:shadow-lg ${
                  index === currentImageIndex 
                    ? "border-primary ring-2 ring-primary/30" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-6 gap-6 mb-12">
          <Card className="p-6 text-center bg-card border-border">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{car.year}</p>
            <p className="text-sm text-muted-foreground">Godina proizvodnje</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <Gauge className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{car.mileage.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Prijeđena kilometraža</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <Fuel className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{car.fuelType}</p>
            <p className="text-sm text-muted-foreground">Vrsta goriva</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <Settings className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{car.transmission}</p>
            <p className="text-sm text-muted-foreground">Mjenjač</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{car.power}</p>
            <p className="text-sm text-muted-foreground">Snaga motora</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <FileCheck className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{car.registration}</p>
            <p className="text-sm text-muted-foreground">Registriran do</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Specifikacije</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Marka:</span>
                <span className="text-foreground font-semibold">{car.brand}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Model:</span>
                <span className="text-foreground font-semibold">{car.model}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Godina:</span>
                <span className="text-foreground font-semibold">{car.year}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Prijeđena kilometraža:</span>
                <span className="text-foreground font-semibold">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Snaga motora:</span>
                <span className="text-foreground font-semibold">{car.power}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Motor:</span>
                <span className="text-foreground font-semibold">{car.engine}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Pogon:</span>
                <span className="text-foreground font-semibold">{car.driveType}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Stanje vozila:</span>
                <span className="text-foreground font-semibold">{car.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Karoserija:</span>
                <span className="text-foreground font-semibold">{car.bodyType}</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Opis vozila</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{car.description}</p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetail;
