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

const carDetails = {
  1: {
    brand: "BMW",
    model: "M440i xDrive",
    year: 2023,
    mileage: 15000,
    fuelType: "Benzin",
    transmission: "Automatski",
    power: "374 KS",
    engine: "3.0L Turbo",
    registration: "12/2025",
    driveType: "xDrive (AWD)",
    status: "Rabljeno",
    bodyType: "Coupe",
    images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6],
    description: "Vrhunski sportski automobil u besprijekornom stanju. Redovno održavan s kompletnom servisnom knjigom. Vozilo je uvezeno iz Njemačke i prošlo je detaljnu provjeru. Opremljeno sa Sport Chrono paketom, Bose audio sistemom, adaptivnim ovjesom i brojnim drugim opcijama. Idealno za ljubitelje vožnje i performansi.",
  },
};

const CarDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carId = parseInt(id || "1") as keyof typeof carDetails;
  const car = carDetails[carId] || carDetails[1];
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
          <p className="text-2xl text-primary font-bold">€{car.mileage > 10000 ? 89500 : 125000}</p>
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
            <p className="text-muted-foreground leading-relaxed">{car.description}</p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetail;
