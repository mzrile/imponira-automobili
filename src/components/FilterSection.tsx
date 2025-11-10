import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FilterSectionProps {
  onFilterChange?: (filters: any) => void;
}

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-xl font-bold mb-6 text-foreground">Odaberi vozilo</h3>
      
      <div className="space-y-4">
        <div>
          <Label className="text-foreground">Godina</Label>
          <Select>
            <SelectTrigger className="bg-input border-border text-foreground">
              <SelectValue placeholder="Izaberite godinu" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-foreground">Marka</Label>
          <Select>
            <SelectTrigger className="bg-input border-border text-foreground">
              <SelectValue placeholder="Izaberite marku" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="volkswagen">Volkswagen</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-foreground">Model</Label>
          <Select>
            <SelectTrigger className="bg-input border-border text-foreground">
              <SelectValue placeholder="Izaberite model" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="model1">Model 1</SelectItem>
              <SelectItem value="model2">Model 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-foreground">Vrsta Goriva</Label>
          <Select>
            <SelectTrigger className="bg-input border-border text-foreground">
              <SelectValue placeholder="Tip goriva" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="petrol">Benzin</SelectItem>
              <SelectItem value="diesel">Dizel</SelectItem>
              <SelectItem value="hybrid">Hibrid</SelectItem>
              <SelectItem value="electric">Električni</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-foreground">Mjenjač</Label>
          <Select>
            <SelectTrigger className="bg-input border-border text-foreground">
              <SelectValue placeholder="Tip mjenjača" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="manual">Manuelni</SelectItem>
              <SelectItem value="automatic">Automatski</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-foreground">Prijeđena kilometraža</Label>
          <Select>
            <SelectTrigger className="bg-input border-border text-foreground">
              <SelectValue placeholder="Maksimalna kilometraža" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="50000">Do 50,000 km</SelectItem>
              <SelectItem value="100000">Do 100,000 km</SelectItem>
              <SelectItem value="150000">Do 150,000 km</SelectItem>
              <SelectItem value="200000">Do 200,000 km</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Prikaži rezultate
        </Button>
      </div>
    </Card>
  );
};

export default FilterSection;
