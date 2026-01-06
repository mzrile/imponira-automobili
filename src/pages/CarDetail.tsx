import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, Gauge, Fuel, Settings, Zap, FileCheck, ChevronLeft, ChevronRight, PhoneCall } from "lucide-react";
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

// BMW X5 images
import x5_1 from "@/assets/cars/bmw-x5-xdrive-45e/1.jpg";
import x5_2 from "@/assets/cars/bmw-x5-xdrive-45e/2.jpg";
import x5_3 from "@/assets/cars/bmw-x5-xdrive-45e/3.jpg";
import x5_4 from "@/assets/cars/bmw-x5-xdrive-45e/4.jpg";
import x5_5 from "@/assets/cars/bmw-x5-xdrive-45e/5.jpg";
import x5_6 from "@/assets/cars/bmw-x5-xdrive-45e/6.jpg";
import x5_7 from "@/assets/cars/bmw-x5-xdrive-45e/7.jpg";
import x5_8 from "@/assets/cars/bmw-x5-xdrive-45e/8.jpg";
import x5_9 from "@/assets/cars/bmw-x5-xdrive-45e/9.jpg";
import x5_10 from "@/assets/cars/bmw-x5-xdrive-45e/10.jpg";
import x5_11 from "@/assets/cars/bmw-x5-xdrive-45e/11.jpg";
import x5_12 from "@/assets/cars/bmw-x5-xdrive-45e/12.jpg";
import x5_13 from "@/assets/cars/bmw-x5-xdrive-45e/13.jpg";
import x5_14 from "@/assets/cars/bmw-x5-xdrive-45e/14.jpg";
import x5_15 from "@/assets/cars/bmw-x5-xdrive-45e/15.jpg";
import x5_16 from "@/assets/cars/bmw-x5-xdrive-45e/16.jpg";
import x5_17 from "@/assets/cars/bmw-x5-xdrive-45e/17.jpg";
import x5_18 from "@/assets/cars/bmw-x5-xdrive-45e/18.jpg";
import x5_19 from "@/assets/cars/bmw-x5-xdrive-45e/19.jpg";
import x5_20 from "@/assets/cars/bmw-x5-xdrive-45e/20.jpg";
import x5_21 from "@/assets/cars/bmw-x5-xdrive-45e/21.jpg";
import x5_22 from "@/assets/cars/bmw-x5-xdrive-45e/22.jpg";
import x5_23 from "@/assets/cars/bmw-x5-xdrive-45e/23.jpg";
import x5_24 from "@/assets/cars/bmw-x5-xdrive-45e/24.jpg";
import x5_25 from "@/assets/cars/bmw-x5-xdrive-45e/25.jpg";

// Mercedes C220d AMG images
import c220d_1 from "@/assets/cars/mercedes-c220d-amg/1.jpg";
import c220d_2 from "@/assets/cars/mercedes-c220d-amg/2.jpg";
import c220d_3 from "@/assets/cars/mercedes-c220d-amg/3.jpg";
import c220d_4 from "@/assets/cars/mercedes-c220d-amg/4.jpg";
import c220d_5 from "@/assets/cars/mercedes-c220d-amg/5.jpg";
import c220d_6 from "@/assets/cars/mercedes-c220d-amg/6.jpg";
import c220d_7 from "@/assets/cars/mercedes-c220d-amg/7.jpg";
import c220d_8 from "@/assets/cars/mercedes-c220d-amg/8.jpg";
import c220d_9 from "@/assets/cars/mercedes-c220d-amg/9.jpg";
import c220d_10 from "@/assets/cars/mercedes-c220d-amg/10.jpg";
import c220d_11 from "@/assets/cars/mercedes-c220d-amg/11.jpg";
import c220d_12 from "@/assets/cars/mercedes-c220d-amg/12.jpg";
import c220d_13 from "@/assets/cars/mercedes-c220d-amg/13.jpg";
import c220d_14 from "@/assets/cars/mercedes-c220d-amg/14.jpg";
import c220d_15 from "@/assets/cars/mercedes-c220d-amg/15.jpg";
import c220d_16 from "@/assets/cars/mercedes-c220d-amg/16.jpg";
import c220d_17 from "@/assets/cars/mercedes-c220d-amg/17.jpg";
import c220d_18 from "@/assets/cars/mercedes-c220d-amg/18.jpg";
import c220d_19 from "@/assets/cars/mercedes-c220d-amg/19.jpg";
import c220d_20 from "@/assets/cars/mercedes-c220d-amg/20.jpg";
import c220d_21 from "@/assets/cars/mercedes-c220d-amg/21.jpg";
import c220d_22 from "@/assets/cars/mercedes-c220d-amg/22.jpg";
import c220d_23 from "@/assets/cars/mercedes-c220d-amg/23.jpg";
import c220d_24 from "@/assets/cars/mercedes-c220d-amg/24.jpg";
import c220d_25 from "@/assets/cars/mercedes-c220d-amg/25.jpg";
import c220d_26 from "@/assets/cars/mercedes-c220d-amg/26.jpg";
import c220d_27 from "@/assets/cars/mercedes-c220d-amg/27.jpg";
import c220d_28 from "@/assets/cars/mercedes-c220d-amg/28.jpg";
import c220d_29 from "@/assets/cars/mercedes-c220d-amg/29.jpg";

// Mercedes A200d images
import a200d_1 from "@/assets/cars/mercedes-a200d/1.jpg";
import a200d_2 from "@/assets/cars/mercedes-a200d/2.jpg";
import a200d_3 from "@/assets/cars/mercedes-a200d/3.jpg";
import a200d_4 from "@/assets/cars/mercedes-a200d/4.jpg";
import a200d_5 from "@/assets/cars/mercedes-a200d/5.jpg";
import a200d_6 from "@/assets/cars/mercedes-a200d/6.jpg";
import a200d_7 from "@/assets/cars/mercedes-a200d/7.jpg";
import a200d_8 from "@/assets/cars/mercedes-a200d/8.jpg";
import a200d_9 from "@/assets/cars/mercedes-a200d/9.jpg";
import a200d_10 from "@/assets/cars/mercedes-a200d/10.jpg";
import a200d_11 from "@/assets/cars/mercedes-a200d/11.jpg";
import a200d_12 from "@/assets/cars/mercedes-a200d/12.jpg";
import a200d_13 from "@/assets/cars/mercedes-a200d/13.jpg";
import a200d_14 from "@/assets/cars/mercedes-a200d/14.jpg";
import a200d_15 from "@/assets/cars/mercedes-a200d/15.jpg";
import a200d_16 from "@/assets/cars/mercedes-a200d/16.jpg";
import a200d_17 from "@/assets/cars/mercedes-a200d/17.jpg";
import a200d_18 from "@/assets/cars/mercedes-a200d/18.jpg";
import a200d_19 from "@/assets/cars/mercedes-a200d/19.jpg";
import a200d_20 from "@/assets/cars/mercedes-a200d/20.jpg";
import a200d_21 from "@/assets/cars/mercedes-a200d/21.jpg";
import a200d_22 from "@/assets/cars/mercedes-a200d/22.jpg";
import a200d_23 from "@/assets/cars/mercedes-a200d/23.jpg";
import a200d_24 from "@/assets/cars/mercedes-a200d/24.jpg";
import a200d_25 from "@/assets/cars/mercedes-a200d/25.jpg";
import a200d_26 from "@/assets/cars/mercedes-a200d/26.jpg";
import a200d_27 from "@/assets/cars/mercedes-a200d/27.jpg";
import a200d_28 from "@/assets/cars/mercedes-a200d/28.jpg";

// Škoda Octavia RS images
import octaviaRs_1 from "@/assets/cars/skoda-octavia-rs/1.jpg";
import octaviaRs_2 from "@/assets/cars/skoda-octavia-rs/2.jpg";
import octaviaRs_3 from "@/assets/cars/skoda-octavia-rs/3.jpg";
import octaviaRs_4 from "@/assets/cars/skoda-octavia-rs/4.jpg";
import octaviaRs_5 from "@/assets/cars/skoda-octavia-rs/5.jpg";
import octaviaRs_6 from "@/assets/cars/skoda-octavia-rs/6.jpg";
import octaviaRs_7 from "@/assets/cars/skoda-octavia-rs/7.jpg";
import octaviaRs_8 from "@/assets/cars/skoda-octavia-rs/8.jpg";
import octaviaRs_9 from "@/assets/cars/skoda-octavia-rs/9.jpg";
import octaviaRs_10 from "@/assets/cars/skoda-octavia-rs/10.jpg";
import octaviaRs_11 from "@/assets/cars/skoda-octavia-rs/11.jpg";
import octaviaRs_12 from "@/assets/cars/skoda-octavia-rs/12.jpg";
import octaviaRs_13 from "@/assets/cars/skoda-octavia-rs/13.jpg";
import octaviaRs_14 from "@/assets/cars/skoda-octavia-rs/14.jpg";
import octaviaRs_15 from "@/assets/cars/skoda-octavia-rs/15.jpg";
import octaviaRs_16 from "@/assets/cars/skoda-octavia-rs/16.jpg";
import octaviaRs_17 from "@/assets/cars/skoda-octavia-rs/17.jpg";
import octaviaRs_18 from "@/assets/cars/skoda-octavia-rs/18.jpg";
import octaviaRs_19 from "@/assets/cars/skoda-octavia-rs/19.jpg";
import octaviaRs_20 from "@/assets/cars/skoda-octavia-rs/20.jpg";
import octaviaRs_21 from "@/assets/cars/skoda-octavia-rs/21.jpg";
import octaviaRs_22 from "@/assets/cars/skoda-octavia-rs/22.jpg";
import octaviaRs_23 from "@/assets/cars/skoda-octavia-rs/23.jpg";
import octaviaRs_24 from "@/assets/cars/skoda-octavia-rs/24.jpg";
import octaviaRs_25 from "@/assets/cars/skoda-octavia-rs/25.jpg";
import octaviaRs_26 from "@/assets/cars/skoda-octavia-rs/26.jpg";
import octaviaRs_27 from "@/assets/cars/skoda-octavia-rs/27.jpg";
import octaviaRs_28 from "@/assets/cars/skoda-octavia-rs/28.jpg";
import octaviaRs_29 from "@/assets/cars/skoda-octavia-rs/29.jpg";
import octaviaRs_30 from "@/assets/cars/skoda-octavia-rs/30.jpg";

// Škoda Octavia Combi RS images
import octaviaCombiRs_1 from "@/assets/cars/skoda-octavia-combi-rs/1.jpg";
import octaviaCombiRs_2 from "@/assets/cars/skoda-octavia-combi-rs/2.jpg";
import octaviaCombiRs_3 from "@/assets/cars/skoda-octavia-combi-rs/3.jpg";
import octaviaCombiRs_4 from "@/assets/cars/skoda-octavia-combi-rs/4.jpg";
import octaviaCombiRs_5 from "@/assets/cars/skoda-octavia-combi-rs/5.jpg";
import octaviaCombiRs_6 from "@/assets/cars/skoda-octavia-combi-rs/6.jpg";
import octaviaCombiRs_7 from "@/assets/cars/skoda-octavia-combi-rs/7.jpg";
import octaviaCombiRs_8 from "@/assets/cars/skoda-octavia-combi-rs/8.jpg";
import octaviaCombiRs_9 from "@/assets/cars/skoda-octavia-combi-rs/9.jpg";
import octaviaCombiRs_10 from "@/assets/cars/skoda-octavia-combi-rs/10.jpg";
import octaviaCombiRs_11 from "@/assets/cars/skoda-octavia-combi-rs/11.jpg";
import octaviaCombiRs_12 from "@/assets/cars/skoda-octavia-combi-rs/12.jpg";
import octaviaCombiRs_13 from "@/assets/cars/skoda-octavia-combi-rs/13.jpg";
import octaviaCombiRs_14 from "@/assets/cars/skoda-octavia-combi-rs/14.jpg";
import octaviaCombiRs_15 from "@/assets/cars/skoda-octavia-combi-rs/15.jpg";
import octaviaCombiRs_16 from "@/assets/cars/skoda-octavia-combi-rs/16.jpg";
import octaviaCombiRs_17 from "@/assets/cars/skoda-octavia-combi-rs/17.jpg";
import octaviaCombiRs_18 from "@/assets/cars/skoda-octavia-combi-rs/18.jpg";
import octaviaCombiRs_19 from "@/assets/cars/skoda-octavia-combi-rs/19.jpg";
import octaviaCombiRs_20 from "@/assets/cars/skoda-octavia-combi-rs/20.jpg";
import octaviaCombiRs_21 from "@/assets/cars/skoda-octavia-combi-rs/21.jpg";
import octaviaCombiRs_22 from "@/assets/cars/skoda-octavia-combi-rs/22.jpg";
import octaviaCombiRs_23 from "@/assets/cars/skoda-octavia-combi-rs/23.jpg";
import octaviaCombiRs_24 from "@/assets/cars/skoda-octavia-combi-rs/24.jpg";
import octaviaCombiRs_25 from "@/assets/cars/skoda-octavia-combi-rs/25.jpg";
import octaviaCombiRs_26 from "@/assets/cars/skoda-octavia-combi-rs/26.jpg";
import octaviaCombiRs_27 from "@/assets/cars/skoda-octavia-combi-rs/27.jpg";
import octaviaCombiRs_28 from "@/assets/cars/skoda-octavia-combi-rs/28.jpg";
import octaviaCombiRs_29 from "@/assets/cars/skoda-octavia-combi-rs/29.jpg";

// Škoda Octavia Combi First Edition images
import octaviaFe_1 from "@/assets/cars/skoda-octavia-combi-first-edition/1.jpg";
import octaviaFe_2 from "@/assets/cars/skoda-octavia-combi-first-edition/2.jpg";
import octaviaFe_3 from "@/assets/cars/skoda-octavia-combi-first-edition/3.jpg";
import octaviaFe_4 from "@/assets/cars/skoda-octavia-combi-first-edition/4.jpg";
import octaviaFe_5 from "@/assets/cars/skoda-octavia-combi-first-edition/5.jpg";
import octaviaFe_6 from "@/assets/cars/skoda-octavia-combi-first-edition/6.jpg";
import octaviaFe_7 from "@/assets/cars/skoda-octavia-combi-first-edition/7.jpg";
import octaviaFe_8 from "@/assets/cars/skoda-octavia-combi-first-edition/8.jpg";
import octaviaFe_9 from "@/assets/cars/skoda-octavia-combi-first-edition/9.jpg";
import octaviaFe_10 from "@/assets/cars/skoda-octavia-combi-first-edition/10.jpg";
import octaviaFe_11 from "@/assets/cars/skoda-octavia-combi-first-edition/11.jpg";
import octaviaFe_12 from "@/assets/cars/skoda-octavia-combi-first-edition/12.jpg";
import octaviaFe_13 from "@/assets/cars/skoda-octavia-combi-first-edition/13.jpg";
import octaviaFe_14 from "@/assets/cars/skoda-octavia-combi-first-edition/14.jpg";
import octaviaFe_15 from "@/assets/cars/skoda-octavia-combi-first-edition/15.jpg";
import octaviaFe_16 from "@/assets/cars/skoda-octavia-combi-first-edition/16.jpg";
import octaviaFe_17 from "@/assets/cars/skoda-octavia-combi-first-edition/17.jpg";
import octaviaFe_18 from "@/assets/cars/skoda-octavia-combi-first-edition/18.jpg";
import octaviaFe_19 from "@/assets/cars/skoda-octavia-combi-first-edition/19.jpg";
import octaviaFe_20 from "@/assets/cars/skoda-octavia-combi-first-edition/20.jpg";
import octaviaFe_21 from "@/assets/cars/skoda-octavia-combi-first-edition/21.jpg";
import octaviaFe_22 from "@/assets/cars/skoda-octavia-combi-first-edition/22.jpg";
import octaviaFe_23 from "@/assets/cars/skoda-octavia-combi-first-edition/23.jpg";
import octaviaFe_24 from "@/assets/cars/skoda-octavia-combi-first-edition/24.jpg";
import octaviaFe_25 from "@/assets/cars/skoda-octavia-combi-first-edition/25.jpg";
import octaviaFe_26 from "@/assets/cars/skoda-octavia-combi-first-edition/26.jpg";
import octaviaFe_27 from "@/assets/cars/skoda-octavia-combi-first-edition/27.jpg";
import octaviaFe_28 from "@/assets/cars/skoda-octavia-combi-first-edition/28.jpg";
import octaviaFe_29 from "@/assets/cars/skoda-octavia-combi-first-edition/29.jpg";

// Škoda Karoq Sportline images
import karoq_1 from "@/assets/cars/skoda-karoq-sportline/1.jpg";
import karoq_2 from "@/assets/cars/skoda-karoq-sportline/2.jpg";
import karoq_3 from "@/assets/cars/skoda-karoq-sportline/3.jpg";
import karoq_4 from "@/assets/cars/skoda-karoq-sportline/4.jpg";
import karoq_5 from "@/assets/cars/skoda-karoq-sportline/5.jpg";
import karoq_6 from "@/assets/cars/skoda-karoq-sportline/6.jpg";
import karoq_7 from "@/assets/cars/skoda-karoq-sportline/7.jpg";
import karoq_8 from "@/assets/cars/skoda-karoq-sportline/8.jpg";
import karoq_9 from "@/assets/cars/skoda-karoq-sportline/9.jpg";
import karoq_10 from "@/assets/cars/skoda-karoq-sportline/10.jpg";
import karoq_11 from "@/assets/cars/skoda-karoq-sportline/11.jpg";
import karoq_12 from "@/assets/cars/skoda-karoq-sportline/12.jpg";
import karoq_13 from "@/assets/cars/skoda-karoq-sportline/13.jpg";
import karoq_14 from "@/assets/cars/skoda-karoq-sportline/14.jpg";
import karoq_15 from "@/assets/cars/skoda-karoq-sportline/15.jpg";
import karoq_16 from "@/assets/cars/skoda-karoq-sportline/16.jpg";
import karoq_17 from "@/assets/cars/skoda-karoq-sportline/17.jpg";
import karoq_18 from "@/assets/cars/skoda-karoq-sportline/18.jpg";
import karoq_19 from "@/assets/cars/skoda-karoq-sportline/19.jpg";
import karoq_20 from "@/assets/cars/skoda-karoq-sportline/20.jpg";
import karoq_21 from "@/assets/cars/skoda-karoq-sportline/21.jpg";
import karoq_22 from "@/assets/cars/skoda-karoq-sportline/22.jpg";
import karoq_23 from "@/assets/cars/skoda-karoq-sportline/23.jpg";
import karoq_24 from "@/assets/cars/skoda-karoq-sportline/24.jpg";
import karoq_25 from "@/assets/cars/skoda-karoq-sportline/25.jpg";
import karoq_26 from "@/assets/cars/skoda-karoq-sportline/26.jpg";
import karoq_27 from "@/assets/cars/skoda-karoq-sportline/27.jpg";
import karoq_28 from "@/assets/cars/skoda-karoq-sportline/28.jpg";
import karoq_29 from "@/assets/cars/skoda-karoq-sportline/29.jpg";

// Renault Clio images
import clio_1 from "@/assets/cars/renault-clio/1.jpg";
import clio_2 from "@/assets/cars/renault-clio/2.jpg";
import clio_3 from "@/assets/cars/renault-clio/3.jpg";
import clio_4 from "@/assets/cars/renault-clio/4.jpg";
import clio_5 from "@/assets/cars/renault-clio/5.jpg";
import clio_6 from "@/assets/cars/renault-clio/6.jpg";
import clio_7 from "@/assets/cars/renault-clio/7.jpg";
import clio_8 from "@/assets/cars/renault-clio/8.jpg";
import clio_9 from "@/assets/cars/renault-clio/9.jpg";
import clio_10 from "@/assets/cars/renault-clio/10.jpg";
import clio_11 from "@/assets/cars/renault-clio/11.jpg";
import clio_12 from "@/assets/cars/renault-clio/12.jpg";
import clio_13 from "@/assets/cars/renault-clio/13.jpg";
import clio_14 from "@/assets/cars/renault-clio/14.jpg";
import clio_15 from "@/assets/cars/renault-clio/15.jpg";
import clio_16 from "@/assets/cars/renault-clio/16.jpg";
import clio_17 from "@/assets/cars/renault-clio/17.jpg";
import clio_18 from "@/assets/cars/renault-clio/18.jpg";
import clio_19 from "@/assets/cars/renault-clio/19.jpg";
import clio_20 from "@/assets/cars/renault-clio/20.jpg";

// Renault Megane images
import megane_1 from "@/assets/cars/renault-megane/1.jpg";
import megane_2 from "@/assets/cars/renault-megane/2.jpg";
import megane_3 from "@/assets/cars/renault-megane/3.jpg";
import megane_4 from "@/assets/cars/renault-megane/4.jpg";
import megane_5 from "@/assets/cars/renault-megane/5.jpg";
import megane_6 from "@/assets/cars/renault-megane/6.jpg";
import megane_7 from "@/assets/cars/renault-megane/7.jpg";
import megane_8 from "@/assets/cars/renault-megane/8.jpg";
import megane_9 from "@/assets/cars/renault-megane/9.jpg";
import megane_10 from "@/assets/cars/renault-megane/10.jpg";
import megane_11 from "@/assets/cars/renault-megane/11.jpg";
import megane_12 from "@/assets/cars/renault-megane/12.jpg";
import megane_13 from "@/assets/cars/renault-megane/13.jpg";
import megane_14 from "@/assets/cars/renault-megane/14.jpg";
import megane_15 from "@/assets/cars/renault-megane/15.jpg";
import megane_16 from "@/assets/cars/renault-megane/16.jpg";
import megane_17 from "@/assets/cars/renault-megane/17.jpg";
import megane_18 from "@/assets/cars/renault-megane/18.jpg";
import megane_19 from "@/assets/cars/renault-megane/19.jpg";
import megane_20 from "@/assets/cars/renault-megane/20.jpg";
import megane_21 from "@/assets/cars/renault-megane/21.jpg";
import megane_22 from "@/assets/cars/renault-megane/22.jpg";
import megane_23 from "@/assets/cars/renault-megane/23.jpg";
import megane_24 from "@/assets/cars/renault-megane/24.jpg";
import megane_25 from "@/assets/cars/renault-megane/25.jpg";
import megane_26 from "@/assets/cars/renault-megane/26.jpg";
import megane_27 from "@/assets/cars/renault-megane/27.jpg";
import megane_28 from "@/assets/cars/renault-megane/28.jpg";
import megane_29 from "@/assets/cars/renault-megane/29.jpg";
import megane_30 from "@/assets/cars/renault-megane/30.jpg";

// VW Golf images
import golf_1 from "@/assets/cars/vw-golf/1.jpg";
import golf_2 from "@/assets/cars/vw-golf/2.jpg";
import golf_3 from "@/assets/cars/vw-golf/3.jpg";
import golf_4 from "@/assets/cars/vw-golf/4.jpg";
import golf_5 from "@/assets/cars/vw-golf/5.jpg";
import golf_6 from "@/assets/cars/vw-golf/6.jpg";
import golf_7 from "@/assets/cars/vw-golf/7.jpg";
import golf_8 from "@/assets/cars/vw-golf/8.jpg";
import golf_9 from "@/assets/cars/vw-golf/9.jpg";
import golf_10 from "@/assets/cars/vw-golf/10.jpg";
import golf_11 from "@/assets/cars/vw-golf/11.jpg";
import golf_12 from "@/assets/cars/vw-golf/12.jpg";
import golf_13 from "@/assets/cars/vw-golf/13.jpg";
import golf_14 from "@/assets/cars/vw-golf/14.jpg";
import golf_15 from "@/assets/cars/vw-golf/15.jpg";
import golf_16 from "@/assets/cars/vw-golf/16.jpg";
import golf_17 from "@/assets/cars/vw-golf/17.jpg";
import golf_18 from "@/assets/cars/vw-golf/18.jpg";
import golf_19 from "@/assets/cars/vw-golf/19.jpg";
import golf_20 from "@/assets/cars/vw-golf/20.jpg";
import golf_21 from "@/assets/cars/vw-golf/21.jpg";
import golf_22 from "@/assets/cars/vw-golf/22.jpg";
import golf_23 from "@/assets/cars/vw-golf/23.jpg";

// BMW X1 2022 images
import x1_2022_1 from "@/assets/cars/bmw-x1-2022/1.jpg";
import x1_2022_2 from "@/assets/cars/bmw-x1-2022/2.jpg";
import x1_2022_3 from "@/assets/cars/bmw-x1-2022/3.jpg";
import x1_2022_4 from "@/assets/cars/bmw-x1-2022/4.jpg";
import x1_2022_5 from "@/assets/cars/bmw-x1-2022/5.jpg";
import x1_2022_6 from "@/assets/cars/bmw-x1-2022/6.jpg";
import x1_2022_7 from "@/assets/cars/bmw-x1-2022/7.jpg";
import x1_2022_8 from "@/assets/cars/bmw-x1-2022/8.jpg";
import x1_2022_9 from "@/assets/cars/bmw-x1-2022/9.jpg";
import x1_2022_10 from "@/assets/cars/bmw-x1-2022/10.jpg";
import x1_2022_11 from "@/assets/cars/bmw-x1-2022/11.jpg";
import x1_2022_12 from "@/assets/cars/bmw-x1-2022/12.jpg";
import x1_2022_13 from "@/assets/cars/bmw-x1-2022/13.jpg";
import x1_2022_14 from "@/assets/cars/bmw-x1-2022/14.jpg";
import x1_2022_15 from "@/assets/cars/bmw-x1-2022/15.jpg";
import x1_2022_16 from "@/assets/cars/bmw-x1-2022/16.jpg";
import x1_2022_17 from "@/assets/cars/bmw-x1-2022/17.jpg";
import x1_2022_18 from "@/assets/cars/bmw-x1-2022/18.jpg";
import x1_2022_19 from "@/assets/cars/bmw-x1-2022/19.jpg";
import x1_2022_20 from "@/assets/cars/bmw-x1-2022/20.jpg";
import x1_2022_21 from "@/assets/cars/bmw-x1-2022/21.jpg";
import x1_2022_22 from "@/assets/cars/bmw-x1-2022/22.jpg";
import x1_2022_23 from "@/assets/cars/bmw-x1-2022/23.jpg";
import x1_2022_24 from "@/assets/cars/bmw-x1-2022/24.jpg";
import x1_2022_25 from "@/assets/cars/bmw-x1-2022/25.jpg";
import x1_2022_26 from "@/assets/cars/bmw-x1-2022/26.jpg";
import x1_2022_27 from "@/assets/cars/bmw-x1-2022/27.jpg";
import x1_2022_28 from "@/assets/cars/bmw-x1-2022/28.jpg";
import x1_2022_29 from "@/assets/cars/bmw-x1-2022/29.jpg";

// BMW X1 2016 images
import x1_2016_1 from "@/assets/cars/bmw-x1-2016/1.jpg";
import x1_2016_2 from "@/assets/cars/bmw-x1-2016/2.jpg";
import x1_2016_3 from "@/assets/cars/bmw-x1-2016/3.jpg";
import x1_2016_4 from "@/assets/cars/bmw-x1-2016/4.jpg";
import x1_2016_5 from "@/assets/cars/bmw-x1-2016/5.jpg";
import x1_2016_6 from "@/assets/cars/bmw-x1-2016/6.jpg";
import x1_2016_7 from "@/assets/cars/bmw-x1-2016/7.jpg";
import x1_2016_8 from "@/assets/cars/bmw-x1-2016/8.jpg";
import x1_2016_9 from "@/assets/cars/bmw-x1-2016/9.jpg";
import x1_2016_10 from "@/assets/cars/bmw-x1-2016/10.jpg";
import x1_2016_11 from "@/assets/cars/bmw-x1-2016/11.jpg";
import x1_2016_12 from "@/assets/cars/bmw-x1-2016/12.jpg";
import x1_2016_13 from "@/assets/cars/bmw-x1-2016/13.jpg";
import x1_2016_14 from "@/assets/cars/bmw-x1-2016/14.jpg";
import x1_2016_15 from "@/assets/cars/bmw-x1-2016/15.jpg";
import x1_2016_16 from "@/assets/cars/bmw-x1-2016/16.jpg";
import x1_2016_17 from "@/assets/cars/bmw-x1-2016/17.jpg";
import x1_2016_18 from "@/assets/cars/bmw-x1-2016/18.jpg";
import x1_2016_19 from "@/assets/cars/bmw-x1-2016/19.jpg";
import x1_2016_20 from "@/assets/cars/bmw-x1-2016/20.jpg";
import x1_2016_21 from "@/assets/cars/bmw-x1-2016/21.jpg";
import x1_2016_22 from "@/assets/cars/bmw-x1-2016/22.jpg";
import x1_2016_23 from "@/assets/cars/bmw-x1-2016/23.jpg";
import x1_2016_24 from "@/assets/cars/bmw-x1-2016/24.jpg";
import x1_2016_25 from "@/assets/cars/bmw-x1-2016/25.jpg";
import x1_2016_26 from "@/assets/cars/bmw-x1-2016/26.jpg";
import x1_2016_27 from "@/assets/cars/bmw-x1-2016/27.jpg";
import x1_2016_28 from "@/assets/cars/bmw-x1-2016/28.jpg";

const bmwX1Images = [x1_2022_1, x1_2022_2, x1_2022_3, x1_2022_4, x1_2022_5, x1_2022_6, x1_2022_7, x1_2022_8, x1_2022_9, x1_2022_10, x1_2022_11, x1_2022_12, x1_2022_13, x1_2022_14, x1_2022_15, x1_2022_16, x1_2022_17, x1_2022_18, x1_2022_19, x1_2022_20, x1_2022_21, x1_2022_22, x1_2022_23, x1_2022_24, x1_2022_25, x1_2022_26, x1_2022_27, x1_2022_28, x1_2022_29];
const bmwX1MPaketImages = [x1_2016_1, x1_2016_2, x1_2016_3, x1_2016_4, x1_2016_5, x1_2016_6, x1_2016_7, x1_2016_8, x1_2016_9, x1_2016_10, x1_2016_11, x1_2016_12, x1_2016_13, x1_2016_14, x1_2016_15, x1_2016_16, x1_2016_17, x1_2016_18, x1_2016_19, x1_2016_20, x1_2016_21, x1_2016_22, x1_2016_23, x1_2016_24, x1_2016_25, x1_2016_26, x1_2016_27, x1_2016_28];

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
    images: [x5_1, x5_2, x5_3, x5_4, x5_5, x5_6, x5_7, x5_8, x5_9, x5_10, x5_11, x5_12, x5_13, x5_14, x5_15, x5_16, x5_17, x5_18, x5_19, x5_20, x5_21, x5_22, x5_23, x5_24, x5_25], 
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
    images: [c220d_1, c220d_2, c220d_3, c220d_4, c220d_5, c220d_6, c220d_7, c220d_8, c220d_9, c220d_10, c220d_11, c220d_12, c220d_13, c220d_14, c220d_15, c220d_16, c220d_17, c220d_18, c220d_19, c220d_20, c220d_21, c220d_22, c220d_23, c220d_24, c220d_25, c220d_26, c220d_27, c220d_28, c220d_29], 
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
    images: [octaviaRs_1, octaviaRs_2, octaviaRs_3, octaviaRs_4, octaviaRs_5, octaviaRs_6, octaviaRs_7, octaviaRs_8, octaviaRs_9, octaviaRs_10, octaviaRs_11, octaviaRs_12, octaviaRs_13, octaviaRs_14, octaviaRs_15, octaviaRs_16, octaviaRs_17, octaviaRs_18, octaviaRs_19, octaviaRs_20, octaviaRs_21, octaviaRs_22, octaviaRs_23, octaviaRs_24, octaviaRs_25, octaviaRs_26, octaviaRs_27, octaviaRs_28, octaviaRs_29, octaviaRs_30], 
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
    images: [octaviaCombiRs_1, octaviaCombiRs_2, octaviaCombiRs_3, octaviaCombiRs_4, octaviaCombiRs_5, octaviaCombiRs_6, octaviaCombiRs_7, octaviaCombiRs_8, octaviaCombiRs_9, octaviaCombiRs_10, octaviaCombiRs_11, octaviaCombiRs_12, octaviaCombiRs_13, octaviaCombiRs_14, octaviaCombiRs_15, octaviaCombiRs_16, octaviaCombiRs_17, octaviaCombiRs_18, octaviaCombiRs_19, octaviaCombiRs_20, octaviaCombiRs_21, octaviaCombiRs_22, octaviaCombiRs_23, octaviaCombiRs_24, octaviaCombiRs_25, octaviaCombiRs_26, octaviaCombiRs_27, octaviaCombiRs_28, octaviaCombiRs_29], 
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
    images: [a200d_1, a200d_2, a200d_3, a200d_4, a200d_5, a200d_6, a200d_7, a200d_8, a200d_9, a200d_10, a200d_11, a200d_12, a200d_13, a200d_14, a200d_15, a200d_16, a200d_17, a200d_18, a200d_19, a200d_20, a200d_21, a200d_22, a200d_23, a200d_24, a200d_25, a200d_26, a200d_27, a200d_28], 
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
    images: [octaviaFe_1, octaviaFe_2, octaviaFe_3, octaviaFe_4, octaviaFe_5, octaviaFe_6, octaviaFe_7, octaviaFe_8, octaviaFe_9, octaviaFe_10, octaviaFe_11, octaviaFe_12, octaviaFe_13, octaviaFe_14, octaviaFe_15, octaviaFe_16, octaviaFe_17, octaviaFe_18, octaviaFe_19, octaviaFe_20, octaviaFe_21, octaviaFe_22, octaviaFe_23, octaviaFe_24, octaviaFe_25, octaviaFe_26, octaviaFe_27, octaviaFe_28, octaviaFe_29], 
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
    images: [karoq_1, karoq_2, karoq_3, karoq_4, karoq_5, karoq_6, karoq_7, karoq_8, karoq_9, karoq_10, karoq_11, karoq_12, karoq_13, karoq_14, karoq_15, karoq_16, karoq_17, karoq_18, karoq_19, karoq_20, karoq_21, karoq_22, karoq_23, karoq_24, karoq_25, karoq_26, karoq_27, karoq_28, karoq_29], 
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
    images: [clio_1, clio_2, clio_3, clio_4, clio_5, clio_6, clio_7, clio_8, clio_9, clio_10, clio_11, clio_12, clio_13, clio_14, clio_15, clio_16, clio_17, clio_18, clio_19, clio_20], 
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
    images: [megane_1, megane_2, megane_3, megane_4, megane_5, megane_6, megane_7, megane_8, megane_9, megane_10, megane_11, megane_12, megane_13, megane_14, megane_15, megane_16, megane_17, megane_18, megane_19, megane_20, megane_21, megane_22, megane_23, megane_24, megane_25, megane_26, megane_27, megane_28, megane_29, megane_30], 
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
    images: [golf_1, golf_2, golf_3, golf_4, golf_5, golf_6, golf_7, golf_8, golf_9, golf_10, golf_11, golf_12, golf_13, golf_14, golf_15, golf_16, golf_17, golf_18, golf_19, golf_20, golf_21, golf_22, golf_23], 
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

  // Scroll to top when component mounts or car changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
          <div className="flex items-center justify-between">
            <p className="text-2xl text-primary font-bold">€{car.price.toLocaleString()}</p>
            <a 
              href="tel:0912666668" 
              className="md:hidden flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
              aria-label="Nazovi"
            >
              <PhoneCall className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mb-8">
          {/* Main Image Display */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-muted">
            <img 
              src={images[currentImageIndex]} 
              alt={`${car.brand} ${car.model} - Slika ${currentImageIndex + 1}`} 
              className="w-full h-full object-contain transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-between px-4">
            <Button
                variant="secondary"
                size="icon"
                onClick={goToPrevious}
                className="bg-white/30 hover:bg-white/50 text-primary shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={goToNext}
                className="bg-white/30 hover:bg-white/50 text-primary shadow-lg"
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
