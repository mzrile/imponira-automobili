import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Poruka je uspešno poslata!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground">Kontaktirajte nas</h1>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Radno vreme</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex justify-between">
                <span>Ponedeljak - Petak:</span>
                <span className="text-foreground font-semibold">08:00 - 16:00h</span>
              </div>
              <div className="flex justify-between">
                <span>Subota:</span>
                <span className="text-foreground font-semibold">08:00 - 13:00h</span>
              </div>
              <div className="flex justify-between">
                <span>Nedelja:</span>
                <span className="text-foreground font-semibold">Zatvoreno</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Kontakt informacije</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@imponira.com" className="text-foreground hover:text-primary transition-colors">
                    info@imponira.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <a href="tel:+381234567890" className="text-foreground hover:text-primary transition-colors">
                    +381 23 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Adresa</p>
                  <p className="text-foreground">Bulevar oslobođenja 123, Beograd 11000</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card border-border max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Pošaljite nam poruku</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground">Ime i prezime</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-input border-border text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-input border-border text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground">Poruka</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-input border-border text-foreground"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Pošalji poruku
            </Button>
          </form>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
