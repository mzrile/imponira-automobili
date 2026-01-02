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

// VW Tiguan images
import tiguan1 from "@/assets/cars/vw-tiguan/1.jpg";
import tiguan2 from "@/assets/cars/vw-tiguan/2.jpg";
import tiguan3 from "@/assets/cars/vw-tiguan/3.jpg";
import tiguan4 from "@/assets/cars/vw-tiguan/4.jpg";
import tiguan5 from "@/assets/cars/vw-tiguan/5.jpg";
import tiguan6 from "@/assets/cars/vw-tiguan/6.jpg";
import tiguan7 from "@/assets/cars/vw-tiguan/7.jpg";
import tiguan8 from "@/assets/cars/vw-tiguan/8.jpg";
import tiguan9 from "@/assets/cars/vw-tiguan/9.jpg";
import tiguan10 from "@/assets/cars/vw-tiguan/10.jpg";
import tiguan11 from "@/assets/cars/vw-tiguan/11.jpg";
import tiguan12 from "@/assets/cars/vw-tiguan/12.jpg";
import tiguan13 from "@/assets/cars/vw-tiguan/13.jpg";
import tiguan14 from "@/assets/cars/vw-tiguan/14.jpg";
import tiguan15 from "@/assets/cars/vw-tiguan/15.jpg";
import tiguan16 from "@/assets/cars/vw-tiguan/16.jpg";
import tiguan17 from "@/assets/cars/vw-tiguan/17.jpg";
import tiguan18 from "@/assets/cars/vw-tiguan/18.jpg";
import tiguan19 from "@/assets/cars/vw-tiguan/19.jpg";
import tiguan20 from "@/assets/cars/vw-tiguan/20.jpg";
import tiguan21 from "@/assets/cars/vw-tiguan/21.jpg";
import tiguan22 from "@/assets/cars/vw-tiguan/22.jpg";
import tiguan23 from "@/assets/cars/vw-tiguan/23.jpg";
import tiguan24 from "@/assets/cars/vw-tiguan/24.jpg";
import tiguan25 from "@/assets/cars/vw-tiguan/25.jpg";
import tiguan26 from "@/assets/cars/vw-tiguan/26.jpg";
import tiguan27 from "@/assets/cars/vw-tiguan/27.jpg";
import tiguan28 from "@/assets/cars/vw-tiguan/28.jpg";
import tiguan29 from "@/assets/cars/vw-tiguan/29.jpg";
import tiguan30 from "@/assets/cars/vw-tiguan/30.jpg";

// BMW M440i images
import m440i_1 from "@/assets/cars/bmw-m440i/1.jpg";
import m440i_2 from "@/assets/cars/bmw-m440i/2.jpg";
import m440i_3 from "@/assets/cars/bmw-m440i/3.jpg";
import m440i_4 from "@/assets/cars/bmw-m440i/4.jpg";
import m440i_5 from "@/assets/cars/bmw-m440i/5.jpg";
import m440i_6 from "@/assets/cars/bmw-m440i/6.jpg";
import m440i_7 from "@/assets/cars/bmw-m440i/7.jpg";
import m440i_8 from "@/assets/cars/bmw-m440i/8.jpg";
import m440i_9 from "@/assets/cars/bmw-m440i/9.jpg";
import m440i_10 from "@/assets/cars/bmw-m440i/10.jpg";
import m440i_11 from "@/assets/cars/bmw-m440i/11.jpg";
import m440i_12 from "@/assets/cars/bmw-m440i/12.jpg";
import m440i_13 from "@/assets/cars/bmw-m440i/13.jpg";
import m440i_14 from "@/assets/cars/bmw-m440i/14.jpg";
import m440i_15 from "@/assets/cars/bmw-m440i/15.jpg";
import m440i_16 from "@/assets/cars/bmw-m440i/16.jpg";
import m440i_17 from "@/assets/cars/bmw-m440i/17.jpg";
import m440i_18 from "@/assets/cars/bmw-m440i/18.jpg";
import m440i_19 from "@/assets/cars/bmw-m440i/19.jpg";
import m440i_20 from "@/assets/cars/bmw-m440i/20.jpg";
import m440i_21 from "@/assets/cars/bmw-m440i/21.jpg";
import m440i_22 from "@/assets/cars/bmw-m440i/22.jpg";
import m440i_23 from "@/assets/cars/bmw-m440i/23.jpg";
import m440i_24 from "@/assets/cars/bmw-m440i/24.jpg";
import m440i_25 from "@/assets/cars/bmw-m440i/25.jpg";
import m440i_26 from "@/assets/cars/bmw-m440i/26.jpg";
import m440i_27 from "@/assets/cars/bmw-m440i/27.jpg";
import m440i_28 from "@/assets/cars/bmw-m440i/28.jpg";
import m440i_29 from "@/assets/cars/bmw-m440i/29.jpg";
import m440i_30 from "@/assets/cars/bmw-m440i/30.jpg";

// BMW X5 images (placeholder - will be replaced when images are added)
const bmwX5Images = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Mercedes C220d AMG images (placeholder - will be replaced when images are added)
const mercedesC220dImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// BMW X1 images (placeholder - will be replaced when images are added)
const bmwX1Images = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Škoda Octavia RS images (placeholder - will be replaced when images are added)
const skodaOctaviaRsImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Škoda Octavia Combi RS images (placeholder - will be replaced when images are added)
const skodaOctaviaCombiRsImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Mercedes A200d images (placeholder - will be replaced when images are added)
const mercedesA200dImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Škoda Octavia Combi First Edition images (placeholder - will be replaced when images are added)
const skodaOctaviaCombiFirstEditionImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Škoda Karoq Sportline images (placeholder - will be replaced when images are added)
const skodaKaroqSportlineImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// BMW X1 M-Paket images (placeholder - will be replaced when images are added)
const bmwX1MPaketImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Renault Clio images (placeholder - will be replaced when images are added)
const renaultClioImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// Renault Megane images (placeholder - will be replaced when images are added)
const renaultMeganeImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

// VW Golf images (placeholder - will be replaced when images are added)
const vwGolfImages = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6];

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
    images: bmwX5Images, 
    description: `Vozilo je u sustavu PDV-a

Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

Vozilo u odličnom stanju, održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
M sportski paket, M Kožni upravljač, M Aerodinamički paket, Kristalni mjenjač, xDrive, Zračni ovjes, Modovi vožnje, Panoramski stakleni krov, Mreža za prtljažnik, Podne prostirke od velura, Komforno sjedalo s memorijom, Sjedala na struju, Grijanje sjedala (prednja/zadnja), Hlađenje sjedala (prednja), Paket toplinske udobnosti, sprijeda, Grijanje volana, 4 zone klima, Keyless, Line asistent, Adaptivni Tempomat, Virtual cockpit, Soft close, Head-up, Vanjski retrovizor s automatskim prigušivanjem, Tonirana stakla, Akustična zaštita pješaka, Ambijentalno unutarnje svjetlo, DAB tuner, Harman/Kardon surround zvučni sustav, Povezani paket Professional, Active Guard Plus, Laser farovi, Automatska kratka i duga svjetla, Sustav pomoći pri parkiranju Plus, 360 kamera, M Sportska kočnica (plave), Prikaz tlaka u gumama, El. kuka, El. vrata prtljažnika, El. podešavanje volana, Armatura od kože individual, Digitalni ključ, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE!`,
  },
  "bmw-m440i-xdrive": {
    brand: "BMW", 
    model: "M440i", 
    year: 2020, 
    mileage: 92000, 
    fuelType: "Benzin", 
    transmission: "Automatski", 
    power: "275 kW", 
    engine: "Benzin", 
    registration: "-", 
    driveType: "xDrive", 
    status: "Rabljeno", 
    bodyType: "Coupe", 
    price: 51990, 
    images: [m440i_1, m440i_2, m440i_3, m440i_4, m440i_5, m440i_6, m440i_7, m440i_8, m440i_9, m440i_10, m440i_11, m440i_12, m440i_13, m440i_14, m440i_15, m440i_16, m440i_17, m440i_18, m440i_19, m440i_20, m440i_21, m440i_22, m440i_23, m440i_24, m440i_25, m440i_26, m440i_27, m440i_28, m440i_29, m440i_30], 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

BMW M440i : održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, zadnji servis napravljen na 91.983 km, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

CIJENA U ZAMJENI IZNOSI: 52.990€

Dodatna oprema:
Dravit grey perla boja, M individual, xDrive pogon, Laser svjetla, Plave kočione čeljusti, Aluminijske 19" felge, Električni šiber, Head Up display, Harman Kardon, Gesture control, 360° kamera, Parkpilot, Reversing assistant, Adaptivni tempomat, Zadržavanje vozila u traci, Prepoznavanje znakova, Autopilot, Modovi vožnje, Keyless Go, Ambient light, El. podešavanje sjedala, Memorija sjedala, Dodavač sigurnosnog pojasa, Lumbalna potpora sjedala, Grijanje sjedala, 3-zonska automatska klima, Sustav za praćenje mrtvog kuta, Automatsko zatamnjivanje ogledala, Zatamnjena stakla, Armatura i obloge vrata od kože, Bežično punjenje mobitela, Bluetooth, Apple CarPlay/Android Auto, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "vw-tiguan-r-line": {
    brand: "VW", 
    model: "Tiguan", 
    year: 2024, 
    mileage: 16900, 
    fuelType: "Diesel", 
    transmission: "Automatski DSG", 
    power: "110 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "SUV", 
    price: 47890, 
    images: [tiguan1, tiguan2, tiguan3, tiguan4, tiguan5, tiguan6, tiguan7, tiguan8, tiguan9, tiguan10, tiguan11, tiguan12, tiguan13, tiguan14, tiguan15, tiguan16, tiguan17, tiguan18, tiguan19, tiguan20, tiguan21, tiguan22, tiguan23, tiguan24, tiguan25, tiguan26, tiguan27, tiguan28, tiguan29, tiguan30],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

VW TIGUAN 2.0 TDI:Garancija, održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
R-line, IQ light, LED Plus glavna svjetla, 3D stražnja LED svjetla, Automatska duga svjetla, LED logo projektor u vratima, Tonirana stakla, Harman kardon ozvučenje, Armatura od kože sa prošivenim koncem, Boja vozila Oryx Weiss, Perlmutteffekt, Lakometalni naplaci "Leeds" 20", Presvlake sjedala "R-Line", R oznake na vozilu, Krovni nosači, Višenamjenski sportski upravljač presvučen kožom, Grijanje volana, Grijanje prednjih sjedala, Grijanje stražnjih sjedala, Ergo active sjedala, Masaža sjedala (3 moda), Front Assist, Sustav prepoznavanja pješaka i biciklista, Lane Assist, Side Assist, Autopilot, Mrtvi kut, Rear Traffic Alert, Automatsko održavanje razmaka ACC "Stop & Go", Automatsko zatamnjivanje unutarnjeg osvrtnog zrcala, El. pojačavanje glasa, El. sklopivi retrovizori, Upozorenje na umor, Upozorenje na dekoncentraciju, Upozorenje na brzinu, Čitanje prometnih znakova, 4xUSB priključak (Type C), 2x bežična punjača, Grijane mlaznice za pranje vjetrobranskog stakla, 8 zvučnika, Aluminijske papučice, Aluminijske ulazne letvice R-line, Ambijentalno osvjetljenje -30 boja, App-Connect, Automatski klima uređaj, Air Care Climatronic, Webasto, Električna parkirna kočnica s "Auto Hold" funkcijom, Isofix priprema za dječje sjedalice, Kamera za vožnju unatrag, 12,9" ekran (32 cm), 2 ključa + webasto

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "mercedes-c220d-amg": {
    brand: "Mercedes", 
    model: "C220d", 
    year: 2021, 
    mileage: 59000, 
    fuelType: "Diesel", 
    transmission: "Automatski", 
    power: "147 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Zadnji", 
    status: "Rabljeno", 
    bodyType: "Limuzina", 
    price: 44990, 
    images: mercedesC220dImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

MERCEDES-BENZ C KLASA: vozilo u odličnom stanju, održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, servis napravljen na 50.000 km, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
AMG paket, AMG 18" alu, LED high performance svjetla, AMG sportska sjedala u izvedbi koža alcantara, Stražnja kamera, Adaptivni tempomat, Aktivna pomoć pri upravljanju, Modovi vožnje, Ambient light, Widescreen Navigacija, Keyless start, Sustav za praćenje mrtvog kuta, Sustav za prepoznavanje znakova, Prednji/Stražnji parking senzori, El. podešavanje sjedala, Automatska klima u 2 zone, Grijanje sjedala, Senzori za kišu i svjetla, Senzori za tlak u gumama, Start/Stop sistem, Zatamnjivanje retrovizora, Zatamnjena stakla, Dva ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "bmw-x1-sdrive18d": {
    brand: "BMW", 
    model: "X1", 
    year: 2022, 
    mileage: 82900, 
    fuelType: "Diesel", 
    transmission: "Automatski", 
    power: "110 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "SUV", 
    price: 39990, 
    images: bmwX1Images, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

BMW X1:BMW Premium selection garancija 24 mj do 16.12.2027., održavan u ovlaštenom servisu, zamjenjeni diskovi i kočione pločice, zamjena ulja i filtera (15.12.2025.) posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
M-Paket, Black sapphire metalik boja, INDIVIDUAL maska crni sjaj, Shadow line, Adaptivna LED svjetla, Tonirana stakla, 18" M felge, Virtual cockpit, Navigacija, M volan, F1 mjenjač, Parking kamera, Park pilot, Reversing asistent, Driving assistent, Active guard, Connect drive, Upozorenje na sudar, Automatsko kočenje u nuždi, Prepoznavanje prometnih znakova, Keyless go, El. vozačevo sjedalo, Memorija sjedala, Alcantara M sjedala, Prošiveni plavi konac, Armatura od kože, Ambient light, Modovi vožnje, Personalizirane teme, Antracit obloga krova, El. vrata pretljažnika, Bežično punjenje mobitela, Tempomat, Mrtvi kut, El. kuka, Auto hold, DAB radio, USB C, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "skoda-octavia-rs": {
    brand: "Škoda", 
    model: "Octavia RS", 
    year: 2021, 
    mileage: 88000, 
    fuelType: "Diesel", 
    transmission: "Automatski DSG", 
    power: "147 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "Limuzina", 
    price: 31990, 
    images: skodaOctaviaRsImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

ŠKODA OCTAVIA RS: održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

CIJENA U ZAMJENI IZNOSI: 32.990€

Dodatna oprema:
Race blue metallic boja, Black paket, Tonirana stakla, RS felge, Crvene kočione čeljusti, Active sound, LED crystal svjetla, LED putujući žmigavci, Velika navigacija, Virtualni kokpit, Prednji i stražnji parking senzori, Stražnja parking kamera, Grijanje volana, Park pilot, Autopilot, Adaptive tempomat, Modovi vožnje, Upozorenje na pospanost, Pomoć pri održavanju trake, Pomoć pri kočenju u nuždi, Asistent za duga svjetla, Upozorenje mrtvog kuta, Armatura od alcantare, Sjedala RS, Grijanje sjedala (prednja), Centralno zaključavanje bez ključa, Keyless go, Bežično punjenje mobitela, Ambijentalna rasvjeta, LED logo projektor u vratima, Servotronic, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "skoda-octavia-combi-rs": {
    brand: "Škoda", 
    model: "Octavia RS", 
    year: 2022, 
    mileage: 117500, 
    fuelType: "Diesel", 
    transmission: "Automatski DSG", 
    power: "147 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "Karavan", 
    price: 28690, 
    images: skodaOctaviaCombiRsImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

ŠKODA OCTAVIA RS: 2 seta felgi RS sa gumama (ljeto/zima) održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
Black magic perla boja, Black paket, Tonirana stakla, RS felge, Crvene kočione čeljusti, Crystal LED svjetla, LED putujući žmigavci, Active sound, LED Matrix svjetla, Velika navigacija, Virtualni kokpit, Prednji i stražnji parking senzori, Autopilot, Head-up, Park asist, Front assist, Auto hold, Sustan za ograničenje brzine, Adaptive tempomat, Modovi vožnje, Upozorenje na pospanost, Pomoć pri održavanju trake, Pomoć pri kočenju u nuždi, Asistent za duga svjetla, Armatura od alcantare, Crno nebo, Carbon, Sjedala RS, Grijanje sjedala (prednja), Centralno zaključavanje bez ključa, Keyless go, DAB, Ambijentalna rasvjeta, LED logo projektor u vratima, Sustav za kontrolu tlaka u gumama, Servotronic, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "mercedes-a200d": {
    brand: "Mercedes", 
    model: "A200d", 
    year: 2020, 
    mileage: 110000, 
    fuelType: "Diesel", 
    transmission: "Automatski", 
    power: "110 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "Hatchback", 
    price: 24490, 
    images: mercedesA200dImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

MERCEDES-BENZ A200d : održavan u ovlaštenom servisu, zadnji servis napravljen na 107.531km, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
Multibeam LED svjetla, Animacija svjetla, Alu felge, Burmester ozvučenje, Grijanje volana, Virtual cockpit, Parking senzori, Navigacija, Automatska klima, Interijer koža, Full ambientalno osvjetljenje, Carbon, Grijanje prednjih sjedala, Dynamic select(modovi vožnje), Lane Keep Assist, Park Assist, Radari, Prikaz semafora (kamera), Mrtvi kut, Čitanje prometnih znakova, Pomoć pri kočenju, Start/Stop sistem, Adaptivni tempomat, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "skoda-octavia-combi-first-edition": {
    brand: "Škoda", 
    model: "Octavia", 
    year: 2020, 
    mileage: 126600, 
    fuelType: "Diesel", 
    transmission: "Automatski DSG", 
    power: "110 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "Karavan", 
    price: 23790, 
    images: skodaOctaviaCombiFirstEditionImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

ŠKODA OCTAVIA 2,0 TDI DSG: Održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

DOSTUPNO VIŠE SLIČNIH VOZILA NA LAGERU.

CIJENA U ZAMJENI IZNOSI: 24.790€

Dodatna oprema:
E. Panoramski krov, El. zavjesa panoramskog krova, Metalik boja, Felge 17", Tonirana stakla, LED Matrix svjetla, Velika navigacija, Virtualni kokpit, Prednji i stražnji parking senzori, Stražnja parking kamera, Park pilot, Autopilot, Adaptive tempomat, Modovi vožnje, Upozorenje na pospanost, Pomoć pri održavanju trake, Pomoć pri kočenju u nuždi, Asistent za duga svjetla, Upozorenje mrtvog kuta, El. vrata prtljažnika, Otvaranje prtljažnika na senzor, Sjedala na struju, Kožna ERGO sjedala, Memorija sjedala, Grijanje sjedala (prednja,zadnja), Hlađenje sjedala (prednja), Masaža sjedala, Grijanje volana, Centralno zaključavanje bez ključa, Keyless go, Bežično punjenje mobitela, Ambijentalna rasvjeta, Piano black dekori, LED logo projektor u vratima, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "skoda-karoq-sportline": {
    brand: "Škoda", 
    model: "Karoq", 
    year: 2021, 
    mileage: 202000, 
    fuelType: "Diesel", 
    transmission: "Automatski DSG", 
    power: "110 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "SUV", 
    price: 21990, 
    images: skodaKaroqSportlineImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

ŠKODA KAROQ 2.0 TDI: Nove gume, održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

DOSTUPNO VIŠE SLIČNIH VOZILA NA LAGERU.

CIJENA U ZAMJENI IZNOSI: 23.990€

Dodatna oprema:
Sportline, Metalik boja, Felge 19, Tonirana stakla, LED svjetla, Velika navigacija, Stražnji parking senzori, Adaptive tempomat, Modovi vožnje, Off road mode, Pomoć pri održavanju trake, Pomoć pri kočenju u nuždi, Asistent za duga svjetla, Upozorenje mrtvog kuta, Sportska sjedala, Grijanje sjedala (prednja,zadnja), Automatska klima, Ambijentalna rasvjeta, Centralno zaključavanje bez ključa, Keyless go, LED logo projektor u vratima, 3 ključa, El. kuka

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "bmw-x1-sdrive18d-m-paket": {
    brand: "BMW", 
    model: "X1", 
    year: 2016, 
    mileage: 209000, 
    fuelType: "Diesel", 
    transmission: "Automatski", 
    power: "110 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "SUV", 
    price: 17490, 
    images: bmwX1MPaketImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

BMW X1: Redovno održavan svakih 15ak tisuća kilometara, zadnji servis na 206.764km, zamjenjeni zadnji diskovi, zamjena ulja i filtera, bez apsolutno ikakvih dodatnih ulaganja, zimske gume Bridgestone, moguća provjera bilo gdje po želji kupca ...

VOZILO GLASI NA FIRMU, NEMA PRIJEPISA

Dodatna oprema:
M-Paket, M-volan, Multifunkcionalni volan, M sjedala alcantara, Alu felge 18", LED svjetla, Automatik, Crna metalik boja, Shadow line, El. Panoramski krov, Automatska klima, Tempomat, Modovi vožnje, Parking senzori, Čitanje prometnih znakova, Ambient light, El. Parking kočnica, El. vrata prtljažnika, Navigacija, Putno računalo, Bluetooth, Senzor za kišu, Start/Stop sistem, Kuka, Tepisi od velura, Gumeni tepisi, Zimske gume, 2 ključa`,
  },
  "renault-clio-edition-one": {
    brand: "Renault", 
    model: "Clio", 
    year: 2020, 
    mileage: 108500, 
    fuelType: "Benzin", 
    transmission: "Automatski", 
    power: "96 kW", 
    engine: "Benzin", 
    registration: "12/2026", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "Hatchback", 
    price: 15990, 
    images: renaultClioImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

RENAULT CLIO: održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, dva seta felgi i guma (ljeto/zima), bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
Automatski mjenjač sa 7 brzina, Boja Valencia narančasta, Crna krovna obloga, Paket jednostavnog parkiranja, Sigurnosni paket Plus, Rezervni kotač, Pomoćn za autocestu i prometne gužve (0-160 km/h), Pomoć pri kočenju u nuždi s detekcijom pješaka, Pomoć pri kočenju s automatskim uključivanjem pokazivača smjera u slučaju naglog kočenja, Prepoznavanje prometnih znakova, Upozorenje na brzinu, Upozorenje na mrtvi kut, Upozorenje o napuštanju trake, Upozorenje o sigurnosnoj udaljenosti, ESP s pomoći pri kretanju na uzbrdici, ISOFIX nosači na stražnjim vanjskim sjedalima, Pomoćnik za duga svjetla, eCall sustav za hitne pozive, Prilagodljivi krstareći pilot ACC (30-170 km/h), Sustav nadzora tlaka u gumama, Senzor za svjetlo i kišu, 360° kamera, BOSE ozvučenje, Automatska kontrola klime, Ručice mjenjača na upravljaču, Unutarnja rasvjeta LED, Modovi vožnje, Elektronička parkirna kočnica s funkcijom auto-hold, Senzori udaljenosti sprijeda, straga i sa strane sa zvučnim i vizualnim povratnim informacijama, Grijani stražnji prozor, Digitalna instrument tabla 7 inča, MULTI-SENSE s ambijentalnim osvjetljenjem, Nadzorna ploča "Soft Touch", Grijana sjedala za prednja sjedala, Kožni volan, Grijani volan

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "renault-megane-bose": {
    brand: "Renault", 
    model: "Megane", 
    year: 2019, 
    mileage: 130000, 
    fuelType: "Diesel", 
    transmission: "Manuelni", 
    power: "96 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "Hatchback", 
    price: 13990, 
    images: renaultMeganeImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

RENAULT MEGANE : Redovno održavan u ovlaštenom servisu, zadnji servis na 125.000km, posjeduje servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, dobre zimske gume na vozilu, moguća provjera bilo gdje po želji kupca 

Dodatna oprema:
BOSE paket, BOSE ozvučenje, LED pure vision prednja svjetla, LED zadnja svjetla, ALU 17 felge, Ambijentalno osvjetljenje, Najeveca moguca NAVIGACIJA, Keyless, Kamera, Virtualni kokpit, Mrtvi kut, Start stop sistem, Automatska klima, Automatska svjetla, MF volan, Grijanje sjedišta, Tempomat, Samoparkiranje, Modovi vožnje, Blind spot, Lane assist, Parking senzori prednji i zadnji, 2 ključa`,
  },
  "vw-golf-7": {
    brand: "VW", 
    model: "Golf 7", 
    year: 2017, 
    mileage: 275000, 
    fuelType: "Diesel", 
    transmission: "Automatski DSG", 
    power: "85 kW", 
    engine: "Diesel", 
    registration: "05/2026", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "Hatchback", 
    price: 10990, 
    images: vwGolfImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

GOLF 7 1,6 TDI: Registriran do 5/2026, uredno održavan, bez apsolutno ikakvih dodatnih ulaganja, na vozilu su zimske gume, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
Alu Felge 18", Sportaka sjedala alcantara, Veliki infotainment sustav, Tempomat, Multifunkcionalni volan, Parking senzori, Park pilot, Front assist, Električna parkirna kočnica, Auto hold funkcija, ACC (automatska regulacija razmaka), USB priključak, Metalne pedale`,
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
