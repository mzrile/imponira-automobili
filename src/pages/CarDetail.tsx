import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, Gauge, Fuel, Settings, Zap, FileCheck, ChevronLeft, ChevronRight, PhoneCall, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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


// Škoda Karoq Sportline images

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

// BMW 320d M-Paket images
import bmw320d_1 from "@/assets/cars/bmw-320d-m-paket/1.jpg";
import bmw320d_2 from "@/assets/cars/bmw-320d-m-paket/2.jpg";
import bmw320d_3 from "@/assets/cars/bmw-320d-m-paket/3.jpg";
import bmw320d_4 from "@/assets/cars/bmw-320d-m-paket/4.jpg";
import bmw320d_5 from "@/assets/cars/bmw-320d-m-paket/5.jpg";
import bmw320d_6 from "@/assets/cars/bmw-320d-m-paket/6.jpg";
import bmw320d_7 from "@/assets/cars/bmw-320d-m-paket/7.jpg";
import bmw320d_8 from "@/assets/cars/bmw-320d-m-paket/8.jpg";
import bmw320d_9 from "@/assets/cars/bmw-320d-m-paket/9.jpg";
import bmw320d_10 from "@/assets/cars/bmw-320d-m-paket/10.jpg";
import bmw320d_11 from "@/assets/cars/bmw-320d-m-paket/11.jpg";
import bmw320d_12 from "@/assets/cars/bmw-320d-m-paket/12.jpg";
import bmw320d_13 from "@/assets/cars/bmw-320d-m-paket/13.jpg";
import bmw320d_14 from "@/assets/cars/bmw-320d-m-paket/14.jpg";
import bmw320d_15 from "@/assets/cars/bmw-320d-m-paket/15.jpg";
import bmw320d_16 from "@/assets/cars/bmw-320d-m-paket/16.jpg";
import bmw320d_17 from "@/assets/cars/bmw-320d-m-paket/17.jpg";
import bmw320d_18 from "@/assets/cars/bmw-320d-m-paket/18.jpg";
import bmw320d_19 from "@/assets/cars/bmw-320d-m-paket/19.jpg";
import bmw320d_20 from "@/assets/cars/bmw-320d-m-paket/20.jpg";
import bmw320d_21 from "@/assets/cars/bmw-320d-m-paket/21.jpg";
import bmw320d_22 from "@/assets/cars/bmw-320d-m-paket/22.jpg";
import bmw320d_23 from "@/assets/cars/bmw-320d-m-paket/23.jpg";
import bmw320d_24 from "@/assets/cars/bmw-320d-m-paket/24.jpg";
import bmw320d_25 from "@/assets/cars/bmw-320d-m-paket/25.jpg";
import bmw320d_26 from "@/assets/cars/bmw-320d-m-paket/26.jpg";
import bmw320d_27 from "@/assets/cars/bmw-320d-m-paket/27.jpg";
import bmw320d_28 from "@/assets/cars/bmw-320d-m-paket/28.jpg";

// BMW M5 Competition images

// Mercedes E300e AMG images (25)
import e300e_1 from "@/assets/cars/mercedes-e300e-amg/1.jpg";
import e300e_2 from "@/assets/cars/mercedes-e300e-amg/2.jpg";
import e300e_3 from "@/assets/cars/mercedes-e300e-amg/3.jpg";
import e300e_4 from "@/assets/cars/mercedes-e300e-amg/4.jpg";
import e300e_5 from "@/assets/cars/mercedes-e300e-amg/5.jpg";
import e300e_6 from "@/assets/cars/mercedes-e300e-amg/6.jpg";
import e300e_7 from "@/assets/cars/mercedes-e300e-amg/7.jpg";
import e300e_8 from "@/assets/cars/mercedes-e300e-amg/8.jpg";
import e300e_9 from "@/assets/cars/mercedes-e300e-amg/9.jpg";
import e300e_10 from "@/assets/cars/mercedes-e300e-amg/10.jpg";
import e300e_11 from "@/assets/cars/mercedes-e300e-amg/11.jpg";
import e300e_12 from "@/assets/cars/mercedes-e300e-amg/12.jpg";
import e300e_13 from "@/assets/cars/mercedes-e300e-amg/13.jpg";
import e300e_14 from "@/assets/cars/mercedes-e300e-amg/14.jpg";
import e300e_15 from "@/assets/cars/mercedes-e300e-amg/15.jpg";
import e300e_16 from "@/assets/cars/mercedes-e300e-amg/16.jpg";
import e300e_17 from "@/assets/cars/mercedes-e300e-amg/17.jpg";
import e300e_18 from "@/assets/cars/mercedes-e300e-amg/18.jpg";
import e300e_19 from "@/assets/cars/mercedes-e300e-amg/19.jpg";
import e300e_20 from "@/assets/cars/mercedes-e300e-amg/20.jpg";
import e300e_21 from "@/assets/cars/mercedes-e300e-amg/21.jpg";
import e300e_22 from "@/assets/cars/mercedes-e300e-amg/22.jpg";
import e300e_23 from "@/assets/cars/mercedes-e300e-amg/23.jpg";
import e300e_24 from "@/assets/cars/mercedes-e300e-amg/24.jpg";
import e300e_25 from "@/assets/cars/mercedes-e300e-amg/25.jpg";


// VW Golf 8 GTD images (29)
import golf8gtd_1 from "@/assets/cars/vw-golf-8-gtd/1.jpg";
import golf8gtd_2 from "@/assets/cars/vw-golf-8-gtd/2.jpg";
import golf8gtd_3 from "@/assets/cars/vw-golf-8-gtd/3.jpg";
import golf8gtd_4 from "@/assets/cars/vw-golf-8-gtd/4.jpg";
import golf8gtd_5 from "@/assets/cars/vw-golf-8-gtd/5.jpg";
import golf8gtd_6 from "@/assets/cars/vw-golf-8-gtd/6.jpg";
import golf8gtd_7 from "@/assets/cars/vw-golf-8-gtd/7.jpg";
import golf8gtd_8 from "@/assets/cars/vw-golf-8-gtd/8.jpg";
import golf8gtd_9 from "@/assets/cars/vw-golf-8-gtd/9.jpg";
import golf8gtd_10 from "@/assets/cars/vw-golf-8-gtd/10.jpg";
import golf8gtd_11 from "@/assets/cars/vw-golf-8-gtd/11.jpg";
import golf8gtd_12 from "@/assets/cars/vw-golf-8-gtd/12.jpg";
import golf8gtd_13 from "@/assets/cars/vw-golf-8-gtd/13.jpg";
import golf8gtd_14 from "@/assets/cars/vw-golf-8-gtd/14.jpg";
import golf8gtd_15 from "@/assets/cars/vw-golf-8-gtd/15.jpg";
import golf8gtd_16 from "@/assets/cars/vw-golf-8-gtd/16.jpg";
import golf8gtd_17 from "@/assets/cars/vw-golf-8-gtd/17.jpg";
import golf8gtd_18 from "@/assets/cars/vw-golf-8-gtd/18.jpg";
import golf8gtd_19 from "@/assets/cars/vw-golf-8-gtd/19.jpg";
import golf8gtd_20 from "@/assets/cars/vw-golf-8-gtd/20.jpg";
import golf8gtd_21 from "@/assets/cars/vw-golf-8-gtd/21.jpg";
import golf8gtd_22 from "@/assets/cars/vw-golf-8-gtd/22.jpg";
import golf8gtd_23 from "@/assets/cars/vw-golf-8-gtd/23.jpg";
import golf8gtd_24 from "@/assets/cars/vw-golf-8-gtd/24.jpg";
import golf8gtd_25 from "@/assets/cars/vw-golf-8-gtd/25.jpg";
import golf8gtd_26 from "@/assets/cars/vw-golf-8-gtd/26.jpg";
import golf8gtd_27 from "@/assets/cars/vw-golf-8-gtd/27.jpg";
import golf8gtd_28 from "@/assets/cars/vw-golf-8-gtd/28.jpg";
import golf8gtd_29 from "@/assets/cars/vw-golf-8-gtd/29.jpg";

// Škoda Octavia RS 2 images (28)
import octaviaRs2_1 from "@/assets/cars/skoda-octavia-rs-2/1.jpg";
import octaviaRs2_2 from "@/assets/cars/skoda-octavia-rs-2/2.jpg";
import octaviaRs2_3 from "@/assets/cars/skoda-octavia-rs-2/3.jpg";
import octaviaRs2_4 from "@/assets/cars/skoda-octavia-rs-2/4.jpg";
import octaviaRs2_5 from "@/assets/cars/skoda-octavia-rs-2/5.jpg";
import octaviaRs2_6 from "@/assets/cars/skoda-octavia-rs-2/6.jpg";
import octaviaRs2_7 from "@/assets/cars/skoda-octavia-rs-2/7.jpg";
import octaviaRs2_8 from "@/assets/cars/skoda-octavia-rs-2/8.jpg";
import octaviaRs2_9 from "@/assets/cars/skoda-octavia-rs-2/9.jpg";
import octaviaRs2_10 from "@/assets/cars/skoda-octavia-rs-2/10.jpg";
import octaviaRs2_11 from "@/assets/cars/skoda-octavia-rs-2/11.jpg";
import octaviaRs2_12 from "@/assets/cars/skoda-octavia-rs-2/12.jpg";
import octaviaRs2_13 from "@/assets/cars/skoda-octavia-rs-2/13.jpg";
import octaviaRs2_14 from "@/assets/cars/skoda-octavia-rs-2/14.jpg";
import octaviaRs2_15 from "@/assets/cars/skoda-octavia-rs-2/15.jpg";
import octaviaRs2_16 from "@/assets/cars/skoda-octavia-rs-2/16.jpg";
import octaviaRs2_17 from "@/assets/cars/skoda-octavia-rs-2/17.jpg";
import octaviaRs2_18 from "@/assets/cars/skoda-octavia-rs-2/18.jpg";
import octaviaRs2_19 from "@/assets/cars/skoda-octavia-rs-2/19.jpg";
import octaviaRs2_20 from "@/assets/cars/skoda-octavia-rs-2/20.jpg";
import octaviaRs2_21 from "@/assets/cars/skoda-octavia-rs-2/21.jpg";
import octaviaRs2_22 from "@/assets/cars/skoda-octavia-rs-2/22.jpg";
import octaviaRs2_23 from "@/assets/cars/skoda-octavia-rs-2/23.jpg";
import octaviaRs2_24 from "@/assets/cars/skoda-octavia-rs-2/24.jpg";
import octaviaRs2_25 from "@/assets/cars/skoda-octavia-rs-2/25.jpg";
import octaviaRs2_26 from "@/assets/cars/skoda-octavia-rs-2/26.jpg";
import octaviaRs2_27 from "@/assets/cars/skoda-octavia-rs-2/27.jpg";
import octaviaRs2_28 from "@/assets/cars/skoda-octavia-rs-2/28.jpg";

// VW Tiguan Join images (27)
import tiguanJoin_1 from "@/assets/cars/vw-tiguan-join/1.jpg";
import tiguanJoin_2 from "@/assets/cars/vw-tiguan-join/2.jpg";
import tiguanJoin_3 from "@/assets/cars/vw-tiguan-join/3.jpg";
import tiguanJoin_4 from "@/assets/cars/vw-tiguan-join/4.jpg";
import tiguanJoin_5 from "@/assets/cars/vw-tiguan-join/5.jpg";
import tiguanJoin_6 from "@/assets/cars/vw-tiguan-join/6.jpg";
import tiguanJoin_7 from "@/assets/cars/vw-tiguan-join/7.jpg";
import tiguanJoin_8 from "@/assets/cars/vw-tiguan-join/8.jpg";
import tiguanJoin_9 from "@/assets/cars/vw-tiguan-join/9.jpg";
import tiguanJoin_10 from "@/assets/cars/vw-tiguan-join/10.jpg";
import tiguanJoin_11 from "@/assets/cars/vw-tiguan-join/11.jpg";
import tiguanJoin_12 from "@/assets/cars/vw-tiguan-join/12.jpg";
import tiguanJoin_13 from "@/assets/cars/vw-tiguan-join/13.jpg";
import tiguanJoin_14 from "@/assets/cars/vw-tiguan-join/14.jpg";
import tiguanJoin_15 from "@/assets/cars/vw-tiguan-join/15.jpg";
import tiguanJoin_16 from "@/assets/cars/vw-tiguan-join/16.jpg";
import tiguanJoin_17 from "@/assets/cars/vw-tiguan-join/17.jpg";
import tiguanJoin_18 from "@/assets/cars/vw-tiguan-join/18.jpg";
import tiguanJoin_19 from "@/assets/cars/vw-tiguan-join/19.jpg";
import tiguanJoin_20 from "@/assets/cars/vw-tiguan-join/20.jpg";
import tiguanJoin_21 from "@/assets/cars/vw-tiguan-join/21.jpg";
import tiguanJoin_22 from "@/assets/cars/vw-tiguan-join/22.jpg";
import tiguanJoin_23 from "@/assets/cars/vw-tiguan-join/23.jpg";
import tiguanJoin_24 from "@/assets/cars/vw-tiguan-join/24.jpg";
import tiguanJoin_25 from "@/assets/cars/vw-tiguan-join/25.jpg";
import tiguanJoin_26 from "@/assets/cars/vw-tiguan-join/26.jpg";
import tiguanJoin_27 from "@/assets/cars/vw-tiguan-join/27.jpg";

const e300eImages = [e300e_1, e300e_2, e300e_3, e300e_4, e300e_5, e300e_6, e300e_7, e300e_8, e300e_9, e300e_10, e300e_11, e300e_12, e300e_13, e300e_14, e300e_15, e300e_16, e300e_17, e300e_18, e300e_19, e300e_20, e300e_21, e300e_22, e300e_23, e300e_24, e300e_25];

const golf8gtdImages = [golf8gtd_1, golf8gtd_2, golf8gtd_3, golf8gtd_4, golf8gtd_5, golf8gtd_6, golf8gtd_7, golf8gtd_8, golf8gtd_9, golf8gtd_10, golf8gtd_11, golf8gtd_12, golf8gtd_13, golf8gtd_14, golf8gtd_15, golf8gtd_16, golf8gtd_17, golf8gtd_18, golf8gtd_19, golf8gtd_20, golf8gtd_21, golf8gtd_22, golf8gtd_23, golf8gtd_24, golf8gtd_25, golf8gtd_26, golf8gtd_27, golf8gtd_28, golf8gtd_29];
const octaviaRs2Images = [octaviaRs2_1, octaviaRs2_2, octaviaRs2_3, octaviaRs2_4, octaviaRs2_5, octaviaRs2_6, octaviaRs2_7, octaviaRs2_8, octaviaRs2_9, octaviaRs2_10, octaviaRs2_11, octaviaRs2_12, octaviaRs2_13, octaviaRs2_14, octaviaRs2_15, octaviaRs2_16, octaviaRs2_17, octaviaRs2_18, octaviaRs2_19, octaviaRs2_20, octaviaRs2_21, octaviaRs2_22, octaviaRs2_23, octaviaRs2_24, octaviaRs2_25, octaviaRs2_26, octaviaRs2_27, octaviaRs2_28];
const tiguanJoinImages = [tiguanJoin_1, tiguanJoin_2, tiguanJoin_3, tiguanJoin_4, tiguanJoin_5, tiguanJoin_6, tiguanJoin_7, tiguanJoin_8, tiguanJoin_9, tiguanJoin_10, tiguanJoin_11, tiguanJoin_12, tiguanJoin_13, tiguanJoin_14, tiguanJoin_15, tiguanJoin_16, tiguanJoin_17, tiguanJoin_18, tiguanJoin_19, tiguanJoin_20, tiguanJoin_21, tiguanJoin_22, tiguanJoin_23, tiguanJoin_24, tiguanJoin_25, tiguanJoin_26, tiguanJoin_27];

const bmwX1Images = [x1_2022_1, x1_2022_2, x1_2022_3, x1_2022_4, x1_2022_5, x1_2022_6, x1_2022_7, x1_2022_8, x1_2022_9, x1_2022_10, x1_2022_11, x1_2022_12, x1_2022_13, x1_2022_14, x1_2022_15, x1_2022_16, x1_2022_17, x1_2022_18, x1_2022_19, x1_2022_20, x1_2022_21, x1_2022_22, x1_2022_23, x1_2022_24, x1_2022_25, x1_2022_26, x1_2022_27, x1_2022_28, x1_2022_29];
const bmw320dImages = [bmw320d_1, bmw320d_2, bmw320d_3, bmw320d_4, bmw320d_5, bmw320d_6, bmw320d_7, bmw320d_8, bmw320d_9, bmw320d_10, bmw320d_11, bmw320d_12, bmw320d_13, bmw320d_14, bmw320d_15, bmw320d_16, bmw320d_17, bmw320d_18, bmw320d_19, bmw320d_20, bmw320d_21, bmw320d_22, bmw320d_23, bmw320d_24, bmw320d_25, bmw320d_26, bmw320d_27, bmw320d_28];
const bmwX1MPaketImages = [x1_2016_1, x1_2016_2, x1_2016_3, x1_2016_4, x1_2016_5, x1_2016_6, x1_2016_7, x1_2016_8, x1_2016_9, x1_2016_10, x1_2016_11, x1_2016_12, x1_2016_13, x1_2016_14, x1_2016_15, x1_2016_16, x1_2016_17, x1_2016_18, x1_2016_19, x1_2016_20, x1_2016_21, x1_2016_22, x1_2016_23, x1_2016_24, x1_2016_25, x1_2016_26, x1_2016_27, x1_2016_28];

// New cars - single images
import glb220d_1 from "@/assets/cars/mercedes-glb-220d/1.jpg";


import bmw840i_1 from "@/assets/cars/bmw-840i-xdrive-individual/1.jpg";
import bmw840i_2 from "@/assets/cars/bmw-840i-xdrive-individual/2.jpg";
import bmw840i_3 from "@/assets/cars/bmw-840i-xdrive-individual/3.jpg";
import bmw840i_4 from "@/assets/cars/bmw-840i-xdrive-individual/4.jpg";
import bmw840i_5 from "@/assets/cars/bmw-840i-xdrive-individual/5.jpg";
import bmw840i_6 from "@/assets/cars/bmw-840i-xdrive-individual/6.jpg";
import bmw840i_7 from "@/assets/cars/bmw-840i-xdrive-individual/7.jpg";
import bmw840i_8 from "@/assets/cars/bmw-840i-xdrive-individual/8.jpg";
import bmw840i_9 from "@/assets/cars/bmw-840i-xdrive-individual/9.jpg";
import bmw840i_10 from "@/assets/cars/bmw-840i-xdrive-individual/10.jpg";
import bmw840i_11 from "@/assets/cars/bmw-840i-xdrive-individual/11.jpg";
import bmw840i_12 from "@/assets/cars/bmw-840i-xdrive-individual/12.jpg";
import bmw840i_13 from "@/assets/cars/bmw-840i-xdrive-individual/13.jpg";
import bmw840i_14 from "@/assets/cars/bmw-840i-xdrive-individual/14.jpg";
import bmw840i_15 from "@/assets/cars/bmw-840i-xdrive-individual/15.jpg";
import bmw840i_16 from "@/assets/cars/bmw-840i-xdrive-individual/16.jpg";
import bmw840i_17 from "@/assets/cars/bmw-840i-xdrive-individual/17.jpg";
import bmw840i_18 from "@/assets/cars/bmw-840i-xdrive-individual/18.jpg";
import bmw840i_19 from "@/assets/cars/bmw-840i-xdrive-individual/19.jpg";
import bmw840i_20 from "@/assets/cars/bmw-840i-xdrive-individual/20.jpg";
import bmw840i_21 from "@/assets/cars/bmw-840i-xdrive-individual/21.jpg";
import bmw840i_22 from "@/assets/cars/bmw-840i-xdrive-individual/22.jpg";
import bmw840i_23 from "@/assets/cars/bmw-840i-xdrive-individual/23.jpg";
import bmw840i_24 from "@/assets/cars/bmw-840i-xdrive-individual/24.jpg";
import bmw840i_25 from "@/assets/cars/bmw-840i-xdrive-individual/25.jpg";
import bmw840i_26 from "@/assets/cars/bmw-840i-xdrive-individual/26.jpg";
import bmw840i_27 from "@/assets/cars/bmw-840i-xdrive-individual/27.jpg";
import bmw840i_28 from "@/assets/cars/bmw-840i-xdrive-individual/28.jpg";
import bmw840i_29 from "@/assets/cars/bmw-840i-xdrive-individual/29.jpg";
import bmw840i_30 from "@/assets/cars/bmw-840i-xdrive-individual/30.jpg";

import audiA5_1 from "@/assets/cars/audi-a5-sportback-2-0tdi/1.jpg";
import audiA5_2 from "@/assets/cars/audi-a5-sportback-2-0tdi/2.jpg";
import audiA5_3 from "@/assets/cars/audi-a5-sportback-2-0tdi/3.jpg";
import audiA5_4 from "@/assets/cars/audi-a5-sportback-2-0tdi/4.jpg";
import audiA5_5 from "@/assets/cars/audi-a5-sportback-2-0tdi/5.jpg";
import audiA5_6 from "@/assets/cars/audi-a5-sportback-2-0tdi/6.jpg";
import audiA5_7 from "@/assets/cars/audi-a5-sportback-2-0tdi/7.jpg";
import audiA5_8 from "@/assets/cars/audi-a5-sportback-2-0tdi/8.jpg";
import audiA5_9 from "@/assets/cars/audi-a5-sportback-2-0tdi/9.jpg";
import audiA5_10 from "@/assets/cars/audi-a5-sportback-2-0tdi/10.jpg";
import audiA5_11 from "@/assets/cars/audi-a5-sportback-2-0tdi/11.jpg";
import audiA5_12 from "@/assets/cars/audi-a5-sportback-2-0tdi/12.jpg";
import audiA5_13 from "@/assets/cars/audi-a5-sportback-2-0tdi/13.jpg";
import audiA5_14 from "@/assets/cars/audi-a5-sportback-2-0tdi/14.jpg";
import audiA5_15 from "@/assets/cars/audi-a5-sportback-2-0tdi/15.jpg";
import audiA5_16 from "@/assets/cars/audi-a5-sportback-2-0tdi/16.jpg";
import audiA5_17 from "@/assets/cars/audi-a5-sportback-2-0tdi/17.jpg";
import audiA5_18 from "@/assets/cars/audi-a5-sportback-2-0tdi/18.jpg";
import audiA5_19 from "@/assets/cars/audi-a5-sportback-2-0tdi/19.jpg";
import audiA5_20 from "@/assets/cars/audi-a5-sportback-2-0tdi/20.jpg";
import audiA5_21 from "@/assets/cars/audi-a5-sportback-2-0tdi/21.jpg";
import meganeLimited_1 from "@/assets/cars/renault-megane-limited/1.jpg";
import meganeLimited_2 from "@/assets/cars/renault-megane-limited/2.jpg";
import meganeLimited_3 from "@/assets/cars/renault-megane-limited/3.jpg";
import meganeLimited_4 from "@/assets/cars/renault-megane-limited/4.jpg";
import meganeLimited_5 from "@/assets/cars/renault-megane-limited/5.jpg";
import meganeLimited_6 from "@/assets/cars/renault-megane-limited/6.jpg";
import meganeLimited_7 from "@/assets/cars/renault-megane-limited/7.jpg";
import meganeLimited_8 from "@/assets/cars/renault-megane-limited/8.jpg";
import meganeLimited_9 from "@/assets/cars/renault-megane-limited/9.jpg";
import meganeLimited_10 from "@/assets/cars/renault-megane-limited/10.jpg";
import meganeLimited_11 from "@/assets/cars/renault-megane-limited/11.jpg";
import meganeLimited_12 from "@/assets/cars/renault-megane-limited/12.jpg";
import meganeLimited_13 from "@/assets/cars/renault-megane-limited/13.jpg";
import meganeLimited_14 from "@/assets/cars/renault-megane-limited/14.jpg";
import meganeLimited_15 from "@/assets/cars/renault-megane-limited/15.jpg";
import meganeLimited_16 from "@/assets/cars/renault-megane-limited/16.jpg";
import meganeLimited_17 from "@/assets/cars/renault-megane-limited/17.jpg";
import meganeLimited_18 from "@/assets/cars/renault-megane-limited/18.jpg";
import meganeLimited_19 from "@/assets/cars/renault-megane-limited/19.jpg";
import meganeLimited_20 from "@/assets/cars/renault-megane-limited/20.jpg";
import meganeLimited_21 from "@/assets/cars/renault-megane-limited/21.jpg";
import meganeLimited_22 from "@/assets/cars/renault-megane-limited/22.jpg";
import meganeLimited_23 from "@/assets/cars/renault-megane-limited/23.jpg";
import meganeLimited_24 from "@/assets/cars/renault-megane-limited/24.jpg";
import meganeLimited_25 from "@/assets/cars/renault-megane-limited/25.jpg";
import clioTce_1 from "@/assets/cars/renault-clio-tce/1.jpg";
import clioTce_2 from "@/assets/cars/renault-clio-tce/2.jpg";
import clioTce_3 from "@/assets/cars/renault-clio-tce/3.jpg";
import clioTce_4 from "@/assets/cars/renault-clio-tce/4.jpg";
import clioTce_5 from "@/assets/cars/renault-clio-tce/5.jpg";
import clioTce_6 from "@/assets/cars/renault-clio-tce/6.jpg";
import clioTce_7 from "@/assets/cars/renault-clio-tce/7.jpg";
import clioTce_8 from "@/assets/cars/renault-clio-tce/8.jpg";
import clioTce_9 from "@/assets/cars/renault-clio-tce/9.jpg";
import clioTce_10 from "@/assets/cars/renault-clio-tce/10.jpg";
import clioTce_11 from "@/assets/cars/renault-clio-tce/11.jpg";
import clioTce_12 from "@/assets/cars/renault-clio-tce/12.jpg";
import clioTce_13 from "@/assets/cars/renault-clio-tce/13.jpg";
import clioTce_14 from "@/assets/cars/renault-clio-tce/14.jpg";
import clioTce_15 from "@/assets/cars/renault-clio-tce/15.jpg";
import clioTce_16 from "@/assets/cars/renault-clio-tce/16.jpg";
import clioTce_17 from "@/assets/cars/renault-clio-tce/17.jpg";
import clioTce_18 from "@/assets/cars/renault-clio-tce/18.jpg";
import clioTce_19 from "@/assets/cars/renault-clio-tce/19.jpg";
import clioTce_20 from "@/assets/cars/renault-clio-tce/20.jpg";
import peugeot2008_1 from "@/assets/cars/peugeot-2008-gt-line/1.jpg";
import peugeot2008_2 from "@/assets/cars/peugeot-2008-gt-line/2.jpg";
import peugeot2008_3 from "@/assets/cars/peugeot-2008-gt-line/3.jpg";
import peugeot2008_4 from "@/assets/cars/peugeot-2008-gt-line/4.jpg";
import peugeot2008_5 from "@/assets/cars/peugeot-2008-gt-line/5.jpg";
import peugeot2008_6 from "@/assets/cars/peugeot-2008-gt-line/6.jpg";
import peugeot2008_7 from "@/assets/cars/peugeot-2008-gt-line/7.jpg";
import peugeot2008_8 from "@/assets/cars/peugeot-2008-gt-line/8.jpg";
import peugeot2008_9 from "@/assets/cars/peugeot-2008-gt-line/9.jpg";
import peugeot2008_10 from "@/assets/cars/peugeot-2008-gt-line/10.jpg";
import peugeot2008_11 from "@/assets/cars/peugeot-2008-gt-line/11.jpg";
import peugeot2008_12 from "@/assets/cars/peugeot-2008-gt-line/12.jpg";
import peugeot2008_13 from "@/assets/cars/peugeot-2008-gt-line/13.jpg";
import peugeot2008_14 from "@/assets/cars/peugeot-2008-gt-line/14.jpg";
import peugeot2008_15 from "@/assets/cars/peugeot-2008-gt-line/15.jpg";
import peugeot2008_16 from "@/assets/cars/peugeot-2008-gt-line/16.jpg";
import peugeot2008_17 from "@/assets/cars/peugeot-2008-gt-line/17.jpg";
import peugeot2008_18 from "@/assets/cars/peugeot-2008-gt-line/18.jpg";
import peugeot2008_19 from "@/assets/cars/peugeot-2008-gt-line/19.jpg";
import peugeot2008_20 from "@/assets/cars/peugeot-2008-gt-line/20.jpg";
import peugeot2008_21 from "@/assets/cars/peugeot-2008-gt-line/21.jpg";
import peugeot2008_22 from "@/assets/cars/peugeot-2008-gt-line/22.jpg";
import peugeot2008_23 from "@/assets/cars/peugeot-2008-gt-line/23.jpg";
import peugeot2008_24 from "@/assets/cars/peugeot-2008-gt-line/24.jpg";
import peugeot2008_25 from "@/assets/cars/peugeot-2008-gt-line/25.jpg";
import peugeot2008_26 from "@/assets/cars/peugeot-2008-gt-line/26.jpg";
import peugeot2008_27 from "@/assets/cars/peugeot-2008-gt-line/27.jpg";
import peugeot2008_28 from "@/assets/cars/peugeot-2008-gt-line/28.jpg";
import peugeot2008_29 from "@/assets/cars/peugeot-2008-gt-line/29.jpg";
import octaviaFirst132_1 from "@/assets/cars/skoda-octavia-first-edition-132k/1.jpg";
import octaviaFirst132_2 from "@/assets/cars/skoda-octavia-first-edition-132k/2.jpg";
import octaviaFirst132_3 from "@/assets/cars/skoda-octavia-first-edition-132k/3.jpg";
import octaviaFirst132_4 from "@/assets/cars/skoda-octavia-first-edition-132k/4.jpg";
import octaviaFirst132_5 from "@/assets/cars/skoda-octavia-first-edition-132k/5.jpg";
import octaviaFirst132_6 from "@/assets/cars/skoda-octavia-first-edition-132k/6.jpg";
import octaviaFirst132_7 from "@/assets/cars/skoda-octavia-first-edition-132k/7.jpg";
import octaviaFirst132_8 from "@/assets/cars/skoda-octavia-first-edition-132k/8.jpg";
import octaviaFirst132_9 from "@/assets/cars/skoda-octavia-first-edition-132k/9.jpg";
import octaviaFirst132_10 from "@/assets/cars/skoda-octavia-first-edition-132k/10.jpg";
import octaviaFirst132_11 from "@/assets/cars/skoda-octavia-first-edition-132k/11.jpg";
import octaviaFirst132_12 from "@/assets/cars/skoda-octavia-first-edition-132k/12.jpg";
import octaviaFirst132_13 from "@/assets/cars/skoda-octavia-first-edition-132k/13.jpg";
import octaviaFirst132_14 from "@/assets/cars/skoda-octavia-first-edition-132k/14.jpg";
import octaviaFirst132_15 from "@/assets/cars/skoda-octavia-first-edition-132k/15.jpg";
import octaviaFirst132_16 from "@/assets/cars/skoda-octavia-first-edition-132k/16.jpg";
import octaviaFirst132_17 from "@/assets/cars/skoda-octavia-first-edition-132k/17.jpg";
import octaviaFirst132_18 from "@/assets/cars/skoda-octavia-first-edition-132k/18.jpg";
import octaviaFirst132_19 from "@/assets/cars/skoda-octavia-first-edition-132k/19.jpg";
import octaviaFirst132_20 from "@/assets/cars/skoda-octavia-first-edition-132k/20.jpg";
import octaviaFirst132_21 from "@/assets/cars/skoda-octavia-first-edition-132k/21.jpg";
import octaviaFirst132_22 from "@/assets/cars/skoda-octavia-first-edition-132k/22.jpg";
import octaviaFirst132_23 from "@/assets/cars/skoda-octavia-first-edition-132k/23.jpg";
import octaviaFirst132_24 from "@/assets/cars/skoda-octavia-first-edition-132k/24.jpg";
import octaviaFirst132_25 from "@/assets/cars/skoda-octavia-first-edition-132k/25.jpg";
import octaviaFirst132_26 from "@/assets/cars/skoda-octavia-first-edition-132k/26.jpg";
import octaviaFirst132_27 from "@/assets/cars/skoda-octavia-first-edition-132k/27.jpg";
import octaviaFirstPanorama_1 from "@/assets/cars/skoda-octavia-first-edition-panorama/1.jpg";
import octaviaFirstPanorama_2 from "@/assets/cars/skoda-octavia-first-edition-panorama/2.jpg";
import octaviaFirstPanorama_3 from "@/assets/cars/skoda-octavia-first-edition-panorama/3.jpg";
import octaviaFirstPanorama_4 from "@/assets/cars/skoda-octavia-first-edition-panorama/4.jpg";
import octaviaFirstPanorama_5 from "@/assets/cars/skoda-octavia-first-edition-panorama/5.jpg";
import octaviaFirstPanorama_6 from "@/assets/cars/skoda-octavia-first-edition-panorama/6.jpg";
import octaviaFirstPanorama_7 from "@/assets/cars/skoda-octavia-first-edition-panorama/7.jpg";
import octaviaFirstPanorama_8 from "@/assets/cars/skoda-octavia-first-edition-panorama/8.jpg";
import octaviaFirstPanorama_9 from "@/assets/cars/skoda-octavia-first-edition-panorama/9.jpg";
import octaviaFirstPanorama_10 from "@/assets/cars/skoda-octavia-first-edition-panorama/10.jpg";
import octaviaFirstPanorama_11 from "@/assets/cars/skoda-octavia-first-edition-panorama/11.jpg";
import octaviaFirstPanorama_12 from "@/assets/cars/skoda-octavia-first-edition-panorama/12.jpg";
import octaviaFirstPanorama_13 from "@/assets/cars/skoda-octavia-first-edition-panorama/13.jpg";
import octaviaFirstPanorama_14 from "@/assets/cars/skoda-octavia-first-edition-panorama/14.jpg";
import octaviaFirstPanorama_15 from "@/assets/cars/skoda-octavia-first-edition-panorama/15.jpg";
import octaviaFirstPanorama_16 from "@/assets/cars/skoda-octavia-first-edition-panorama/16.jpg";
import octaviaFirstPanorama_17 from "@/assets/cars/skoda-octavia-first-edition-panorama/17.jpg";
import octaviaFirstPanorama_18 from "@/assets/cars/skoda-octavia-first-edition-panorama/18.jpg";
import octaviaFirstPanorama_19 from "@/assets/cars/skoda-octavia-first-edition-panorama/19.jpg";
import octaviaFirstPanorama_20 from "@/assets/cars/skoda-octavia-first-edition-panorama/20.jpg";
import octaviaFirstPanorama_21 from "@/assets/cars/skoda-octavia-first-edition-panorama/21.jpg";
import octaviaFirstPanorama_22 from "@/assets/cars/skoda-octavia-first-edition-panorama/22.jpg";
import octaviaFirstPanorama_23 from "@/assets/cars/skoda-octavia-first-edition-panorama/23.jpg";
import octaviaFirstPanorama_24 from "@/assets/cars/skoda-octavia-first-edition-panorama/24.jpg";
import octaviaFirstPanorama_25 from "@/assets/cars/skoda-octavia-first-edition-panorama/25.jpg";
import octaviaFirstPanorama_26 from "@/assets/cars/skoda-octavia-first-edition-panorama/26.jpg";
import octaviaFirstPanorama_27 from "@/assets/cars/skoda-octavia-first-edition-panorama/27.jpg";
import octaviaFirstPanorama_28 from "@/assets/cars/skoda-octavia-first-edition-panorama/28.jpg";
import octaviaFirstPanorama_29 from "@/assets/cars/skoda-octavia-first-edition-panorama/29.jpg";




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
  "bmw-m440i-xdrive": {
    brand: "BMW", 
    model: "M440i xDrive", 
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
    price: 49990, 
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
    model: "Tiguan 2.0 TDI DSG R-Line", 
    year: 2024, 
    mileage: 26900, 
    fuelType: "Diesel", 
    transmission: "Automatski DSG", 
    power: "110 kW", 
    engine: "Diesel", 
    registration: "-", 
    driveType: "Prednji", 
    status: "Rabljeno", 
    bodyType: "SUV", 
    price: 44500, 
    images: [tiguan1, tiguan2, tiguan3, tiguan4, tiguan5, tiguan6, tiguan7, tiguan8, tiguan9, tiguan10, tiguan11, tiguan12, tiguan13, tiguan14, tiguan15, tiguan16, tiguan17, tiguan18, tiguan19, tiguan20, tiguan21, tiguan22, tiguan23, tiguan24, tiguan25, tiguan26, tiguan27, tiguan28, tiguan29, tiguan30],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

VW TIGUAN 2.0 TDI:Garancija, održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
R-line, IQ light, LED Plus glavna svjetla, 3D stražnja LED svjetla, Automatska duga svjetla, LED logo projektor u vratima, Tonirana stakla, Harman kardon ozvučenje, Armatura od kože sa prošivenim koncem, Boja vozila Oryx Weiss, Perlmutteffekt, Lakometalni naplaci "Leeds" 20", Presvlake sjedala "R-Line", R oznake na vozilu, Krovni nosači, Višenamjenski sportski upravljač presvučen kožom, Grijanje volana, Grijanje prednjih sjedala, Grijanje stražnjih sjedala, Ergo active sjedala, Masaža sjedala (3 moda), Front Assist, Sustav prepoznavanja pješaka i biciklista, Lane Assist, Side Assist, Autopilot, Mrtvi kut, Rear Traffic Alert, Automatsko održavanje razmaka ACC "Stop & Go", Automatsko zatamnjivanje unutarnjeg osvrtnog zrcala, El. pojačavanje glasa, El. sklopivi retrovizori, Upozorenje na umor, Upozorenje na dekoncentraciju, Upozorenje na brzinu, Čitanje prometnih znakova, 4xUSB priključak (Type C), 2x bežična punjača, Grijane mlaznice za pranje vjetrobranskog stakla, 8 zvučnika, Aluminijske papučice, Aluminijske ulazne letvice R-line, Ambijentalno osvjetljenje -30 boja, App-Connect, Automatski klima uređaj, Air Care Climatronic, Webasto, Električna parkirna kočnica s "Auto Hold" funkcijom, Isofix priprema za dječje sjedalice, Kamera za vožnju unatrag, 12,9" ekran (32 cm), 2 ključa + webasto

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "bmw-x1-sdrive18d-m-paket": {
    brand: "BMW", 
    model: "X1 sDrive18d M-Paket", 
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
    price: 15490, 
    images: bmwX1MPaketImages, 
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

BMW X1: Redovno održavan svakih 15ak tisuća kilometara, zadnji servis na 206.764km, zamjenjeni zadnji diskovi, zamjena ulja i filtera, bez apsolutno ikakvih dodatnih ulaganja, zimske gume Bridgestone, moguća provjera bilo gdje po želji kupca ...

VOZILO GLASI NA FIRMU, NEMA PRIJEPISA

Dodatna oprema:
M-Paket, M-volan, Multifunkcionalni volan, M sjedala alcantara, Alu felge 18", LED svjetla, Automatik, Crna metalik boja, Shadow line, El. Panoramski krov, Automatska klima, Tempomat, Modovi vožnje, Parking senzori, Čitanje prometnih znakova, Ambient light, El. Parking kočnica, El. vrata prtljažnika, Navigacija, Putno računalo, Bluetooth, Senzor za kišu, Start/Stop sistem, Kuka, Tepisi od velura, Gumeni tepisi, Zimske gume, 2 ključa`,
  },
  "mercedes-e300e-amg": {
    brand: "Mercedes",
    model: "E300e AMG",
    year: 2025,
    mileage: 9000,
    fuelType: "Plug-in hibrid",
    transmission: "9G automatski",
    power: "150 kW",
    engine: "Plug-in hibrid",
    registration: "-",
    driveType: "Stražnji",
    status: "Rabljeno",
    bodyType: "Limuzina",
    price: 72900,
    images: e300eImages,
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

TVORNIČKO JAMSTVO

VOZILO U SUSTAVU PDV-a

Dodatna oprema:
AMG paket, Zračni ovjes, Digital light, Adaptivna prednja svjetla, Svjetleća maska, El. Panoramski krov, Zakretanje stražnjih kotača, Burmester ozvučenje, Grijanje sjedala, Hlađenje sjedala, Memorija sjedala, Sjedala na struju, Automatska klima, Stražnji digitalni ekran za klimu, 360 kamera, Head/up, Asistencija za mrtvi kut, Parktronic, Distronic, Lane Keeping Assist, Prepoznavanje prometnih znakova, Advanced Plus paket, KEYLESS-GO paket, Ambient light premium, El. Vrata prtljažnika, Instrument ploča i vrata u ARTICO koži, Ulazne letvice osvjetljene, 9G automatski mjenjač, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "mercedes-glb-220d-4matic": {
    brand: "Mercedes",
    model: "GLB 220d 4Matic",
    year: 2022,
    mileage: 85800,
    fuelType: "Dizel",
    transmission: "Automatski",
    power: "140 kW",
    engine: "Dizel",
    registration: "-",
    driveType: "4Matic",
    status: "Rabljeno",
    bodyType: "SUV",
    price: 37900,
    images: [glb220d_1],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

MERCEDES-BENZ GLB 220d:

Prvi vlasnik, svi servisi rađeni po intervalu u ovlaštenom servisu, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
AMG paket, AMG felge 19', Night paket, LED high performance svjetla, Sportski zvuk motora, Ukrasni elementi karbonske strukture, Armatura od kože, Prošiveni crveni konac, Multifunkcijski sportski volan, Volan presvučen nappa kožom, F1 komande na volanu, AMG podne prostirke, El. Sklopivi retrovizori, Crna stropna obloga, Sportska sjedala alcantara/koža, Grijanje sjedala, Stražnja parking kamera, MBUX navigacija premium, Advanced plus paket, Ambient light, Adaptivni tempomat, Modovi vožnje, Zaštita pješaka, Aktivna pomoć u zadržavanju trake, Aktivna pomoć pri kočenju, Detekcija prometnih znakova, Krovni nosači u crnoj boji, Kontrola tlaka u gumama, 2 ključa`,
  },
  "bmw-840i-xdrive-individual": {
    brand: "BMW",
    model: "840i xDrive Individual M-Sport",
    year: 2022,
    mileage: 108900,
    fuelType: "Benzin",
    transmission: "Automatski",
    power: "245 kW",
    engine: "Benzin",
    registration: "-",
    driveType: "xDrive",
    status: "Rabljeno",
    bodyType: "Coupe",
    price: 65990,
    images: [bmw840i_1, bmw840i_2, bmw840i_3, bmw840i_4, bmw840i_5, bmw840i_6, bmw840i_7, bmw840i_8, bmw840i_9, bmw840i_10, bmw840i_11, bmw840i_12, bmw840i_13, bmw840i_14, bmw840i_15, bmw840i_16, bmw840i_17, bmw840i_18, bmw840i_19, bmw840i_20, bmw840i_21, bmw840i_22, bmw840i_23, bmw840i_24, bmw840i_25, bmw840i_26, bmw840i_27, bmw840i_28, bmw840i_29, bmw840i_30],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

BMW 840i xDrive:

Prvi vlasnik, svi servisi rađeni po intervalu u ovlaštenom servisu, zadnji je napravljen na 94.047km, posjeduje el. servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

GARANCIJA NA VOZILO VRIJEDI DO 05/2027.

Dodatna oprema:
Sanremo green individual boja, M sportski paket, M sportske kočnice, M aerodinamični paket, BMW carbon core, M sportska sjedala, Grijanje sjedala, Grijanje svih naslona za ruku, Grijanje volana, El. podesiv volan, F1 pedale na volanu, Sjedala na struju sa memorijom, Individual Merino Ivory white koža, Armatura od kože sa prošivenim koncem, Obloge vrata od kože, BMW individual felge 20'', Swarovski paket, Laser svjetla, Automatska svjetla, Zakretanje zadnjih kotača, 360 kamera, Veliki ekran, Park pilot, Reversing assistant, Iconic glow (svjetleći grill), Soft-Close sistem zatvaranja vrata, Keyless go, Display ključ, Harman Kardon ozvučenje, Ambijentalno osvjetljenje, Head-up display, Modovi vožnje, Sportski display, Lane assist, Autopilot, Adaptivni tempomat, Aktivna zaštita pješaka, Connected package professional, El. otvaranje/zatvaranje prtljažnika, Parking ventilacija kabine, 2 ključa`,
  },
  "audi-a5-sportback-2-0tdi": {
    brand: "Audi",
    model: "A5 Sportback 2.0TDI",
    year: 2017,
    mileage: 205000,
    fuelType: "Dizel",
    transmission: "Automatski",
    power: "110 kW",
    engine: "Dizel",
    registration: "12/2026",
    driveType: "Prednji",
    status: "Rabljeno",
    bodyType: "Coupe",
    price: 19290,
    images: [audiA5_1, audiA5_2, audiA5_3, audiA5_4, audiA5_5, audiA5_6, audiA5_7, audiA5_8, audiA5_9, audiA5_10, audiA5_11, audiA5_12, audiA5_13, audiA5_14, audiA5_15, audiA5_16, audiA5_17, audiA5_18, audiA5_19, audiA5_20, audiA5_21],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

AUDI A5 SPORTBACK: Održavan u ovlaštenom servisu, posjeduje servisnu knjigu, bez apsolutno ikakvih dodatnih ulaganja, dodatni set zimskih guma sa alu felgama, moguća provjera bilo gdje po želji kupca ...

REGISTRIRAN DO: 12/2026

Dodatna oprema:
LED svjetla, Alu felge 19", Tempomat, MF kožni volan, Zatvaranje gepeka na struju, Modovi vožnje, Parking senzori, Navigacija, Paljenje/gašenje bez ključa, Bluetooth, USB, Isofix`,
  },
  "skoda-octavia-combi-first-edition-panorama": {
    brand: "Škoda",
    model: "Octavia Combi First Edition Panorama",
    year: 2020,
    mileage: 102400,
    fuelType: "Dizel",
    transmission: "Automatski DSG",
    power: "110 kW",
    engine: "Dizel",
    registration: "-",
    driveType: "Prednji",
    status: "Rabljeno",
    bodyType: "Karavan",
    price: 21990,
    images: [octaviaFirstPanorama_1, octaviaFirstPanorama_2, octaviaFirstPanorama_3, octaviaFirstPanorama_4, octaviaFirstPanorama_5, octaviaFirstPanorama_6, octaviaFirstPanorama_7, octaviaFirstPanorama_8, octaviaFirstPanorama_9, octaviaFirstPanorama_10, octaviaFirstPanorama_11, octaviaFirstPanorama_12, octaviaFirstPanorama_13, octaviaFirstPanorama_14, octaviaFirstPanorama_15, octaviaFirstPanorama_16, octaviaFirstPanorama_17, octaviaFirstPanorama_18, octaviaFirstPanorama_19, octaviaFirstPanorama_20, octaviaFirstPanorama_21, octaviaFirstPanorama_22, octaviaFirstPanorama_23, octaviaFirstPanorama_24, octaviaFirstPanorama_25, octaviaFirstPanorama_26, octaviaFirstPanorama_27, octaviaFirstPanorama_28, octaviaFirstPanorama_29],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

Održavan u ovlaštenom servisu, dva seta felgi sa gumama (ljeto/zima) posjeduje el. servisnu knjigu, zadnji servis napravljen na 102.400km (novi prednji i zadnji diskovi i kočione pločice, zamjena ulja i svih filtera), bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
Metalik boja crna brilliant, Bicolor felge, Tonirana stakla, LED Matrix svjetla, Velika navigacija, Virtualni kokpit, Prednji i stražnji parking senzori, Stražnja kamera, Grijanje volana, Park pilot, Autopilot, Adaptive tempomat, Modovi vožnje, Upozorenje na pospanost, Pomoć pri održavanju trake, Pomoć pri kočenju u nuždi, Asistent za duga svjetla, Upozorenje mrtvog kuta, Kožna sjedala, Sjedala na struju, Memorija sjedala, Grijanje sjedala (prednja), Hlađenje sjedala (prednja), Masaža sjedala, Centralno zaključavanje bez ključa, Keyless go, Webasto, Head-up, Električna vrata prtljažnika, Otvaranje prtljažnika nogom, Bežično punjenje mobitela, Ambijentalna rasvjeta, LED logo projektor u vratima, El. kuka, 2 ključa

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "skoda-octavia-combi-first-edition-2020": {
    brand: "Škoda",
    model: "Octavia Combi 2.0TDI First Edition",
    year: 2020,
    mileage: 132200,
    fuelType: "Dizel",
    transmission: "Automatski DSG",
    power: "110 kW",
    engine: "Dizel",
    registration: "-",
    driveType: "Prednji",
    status: "Rabljeno",
    bodyType: "Karavan",
    price: 20990,
    images: [octaviaFirst132_1, octaviaFirst132_2, octaviaFirst132_3, octaviaFirst132_4, octaviaFirst132_5, octaviaFirst132_6, octaviaFirst132_7, octaviaFirst132_8, octaviaFirst132_9, octaviaFirst132_10, octaviaFirst132_11, octaviaFirst132_12, octaviaFirst132_13, octaviaFirst132_14, octaviaFirst132_15, octaviaFirst132_16, octaviaFirst132_17, octaviaFirst132_18, octaviaFirst132_19, octaviaFirst132_20, octaviaFirst132_21, octaviaFirst132_22, octaviaFirst132_23, octaviaFirst132_24, octaviaFirst132_25, octaviaFirst132_26, octaviaFirst132_27],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

Na 132.200km je napravljen servis DSG getribe, zamjenjeno motorno ulje i filteri, na prethodnom servisu su stavljeni novi diskovi i pločice, redovno održavan, bez apsolutno ikakvih dodatnih ulaganja…

DOSTUPNO VIŠE SLIČNIH VOZILA NA LAGERU.

Dodatna oprema:
Metalik boja, Felge perseus 18, Tonirana stakla, LED Matrix svjetla, Animacija svjetla, Velika navigacija, Virtualni kokpit, Prednji i stražnji parking senzori, Park pilot, Adaptive tempomat, Modovi vožnje, Upozorenje na pospanost, Pomoć pri održavanju trake, Pomoć pri kočenju u nuždi, Asistent za duga svjetla, Upozorenje mrtvog kuta, El. vrata prtljažnika, Otvaranje prtljažnika na senzor, Sjedala na struju, Sportska sjedala, Memorija sjedala, Grijanje sjedala (prednja), Alcantara kožna sjedala, Centralno zaključavanje bez ključa, Keyless go, Bežično punjenje mobitela, Ambijentalna rasvjeta, LED logo projektor u vratima, 2 ključa, Kuka`,
  },
  "peugeot-2008-gt-line-black": {
    brand: "Peugeot",
    model: "2008 1.5 HDI GT Line Black Paket",
    year: 2020,
    mileage: 85000,
    fuelType: "Dizel",
    transmission: "Ručni",
    power: "96 kW",
    engine: "Dizel",
    registration: "-",
    driveType: "Prednji",
    status: "Rabljeno",
    bodyType: "SUV",
    price: 18490,
    images: [peugeot2008_1, peugeot2008_2, peugeot2008_3, peugeot2008_4, peugeot2008_5, peugeot2008_6, peugeot2008_7, peugeot2008_8, peugeot2008_9, peugeot2008_10, peugeot2008_11, peugeot2008_12, peugeot2008_13, peugeot2008_14, peugeot2008_15, peugeot2008_16, peugeot2008_17, peugeot2008_18, peugeot2008_19, peugeot2008_20, peugeot2008_21, peugeot2008_22, peugeot2008_23, peugeot2008_24, peugeot2008_25, peugeot2008_26, peugeot2008_27, peugeot2008_28, peugeot2008_29],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

Prvi vlasnik, nove zimske gume, ljetne gume, održavan u ovlaštenom servisu, posjeduje servisnu knjigu, zadnji servis napravljen na 73.236km (12/2025), bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
Perla bijela boja, GT paket, Black paket, GT felge 17', Crno nebo, Full LED tehnology, LED stražnja svjetla, Animacija svjetla, Virtualni kokpit 3D, Grijanje sjedala, Ambient light, Modovi vožnje, 360 kamera, Parking senzori, Tempomat, Lane Assist, Pomoć pri kretanju na uzbrdici, Pomoć pri parkiranju, Čitanje prometnih znakova, Automatska regulacija razmaka (ACC), El. sklopivi retrovizori, Automatska klima, Navigacijski sustav, Keyless-funkcija, Zatamnjena stakla, Armatura od kože, Prošiveni konac zelene boje, Bluetooth handsfree sustav, ISOFIX, 2 ključa, Priprema za kuku`,
  },
  "renault-clio-edition-one-tce": {
    brand: "Renault",
    model: "Clio Edition One TCe Automatik",
    year: 2020,
    mileage: 121000,
    fuelType: "Benzin",
    transmission: "Automatski",
    power: "96 kW",
    engine: "Benzin",
    registration: "-",
    driveType: "Prednji",
    status: "Rabljeno",
    bodyType: "Hatchback",
    price: 14290,
    images: [clioTce_1, clioTce_2, clioTce_3, clioTce_4, clioTce_5, clioTce_6, clioTce_7, clioTce_8, clioTce_9, clioTce_10, clioTce_11, clioTce_12, clioTce_13, clioTce_14, clioTce_15, clioTce_16, clioTce_17, clioTce_18, clioTce_19, clioTce_20],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

Održavan u ovlaštenom servisu, posjeduje el. servisnu knjigu, dva seta felgi i guma (ljeto/zima), bez apsolutno ikakvih dodatnih ulaganja, moguća provjera bilo gdje po želji kupca ...

Dodatna oprema:
Automatski mjenjač sa 7 brzina, Boja Valencia narančasta, Crna krovna obloga, Paket jednostavnog parkiranja, Sigurnosni paket Plus, Rezervni kotač, Pomoć za autocestu i prometne gužve (0-160 km/h), Pomoć pri kočenju u nuždi s detekcijom pješaka, Prepoznavanje prometnih znakova, Upozorenje na brzinu, Upozorenje na mrtvi kut, Upozorenje o napuštanju trake, Upozorenje o sigurnosnoj udaljenosti, ESP s pomoći pri kretanju na uzbrdici, ISOFIX, Pomoćnik za duga svjetla, eCall sustav, Prilagodljivi krstareći pilot ACC (30-170 km/h), Sustav nadzora tlaka u gumama, Senzor za svjetlo i kišu, 360° kamera, BOSE ozvučenje, Automatska kontrola klime, Ručice mjenjača na upravljaču, Unutarnja rasvjeta LED, Modovi vožnje, Elektronička parkirna kočnica s auto-hold, Senzori udaljenosti sprijeda, straga i sa strane, Grijani stražnji prozor, Digitalna instrument tabla 7 inča, MULTI-SENSE s ambijentalnim osvjetljenjem, Nadzorna ploča "Soft Touch", Grijana prednja sjedala, Kožni volan, Grijani volan

POTENCIJALNOM KUPCU ŠALJEMO DETALJAN POPIS OPREME I BROJ ŠASIJE`,
  },
  "renault-megane-limited-dci-115": {
    brand: "Renault",
    model: "Megane Limited dCi 115",
    year: 2021,
    mileage: 94900,
    fuelType: "Dizel",
    transmission: "Ručni",
    power: "85 kW",
    engine: "Dizel",
    registration: "-",
    driveType: "Prednji",
    status: "Rabljeno",
    bodyType: "Hatchback",
    price: 12990,
    images: [meganeLimited_1, meganeLimited_2, meganeLimited_3, meganeLimited_4, meganeLimited_5, meganeLimited_6, meganeLimited_7, meganeLimited_8, meganeLimited_9, meganeLimited_10, meganeLimited_11, meganeLimited_12, meganeLimited_13, meganeLimited_14, meganeLimited_15, meganeLimited_16, meganeLimited_17, meganeLimited_18, meganeLimited_19, meganeLimited_20, meganeLimited_21, meganeLimited_22, meganeLimited_23, meganeLimited_24, meganeLimited_25],
    description: `Vozilo je moguće pregledati uz prethodno dogovoreni sastanak, odnosno telefonsku najavu na kontakt broj naveden u oglasu.

Zadnji servis napravljen na 90.200km.

Vozilo glasi na firmu, kupac ne plaća prijenos.

Dodatna oprema:
Metalik boja, Alu felge, LED svjetla, MF volan, Digitalni kokpit, Automatska klima, Grijanje sjedala, Parking senzori, Pomoć za parkiranje, Putno računalo, El. parkirna kočnica, Tempomat, Limitator brzine, El. sklopivi retrovizori, El. podesivi retrovizori, Start/stop sistem, USB priključak, Tonirana stakla, 2 ključa`,
  },
};


const defaultCar = carDetails["bmw-m440i-xdrive"];

const CarDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
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

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">{car.brand} {car.model}</h1>
          <div className="flex items-center justify-between">
            <p className="text-2xl text-primary font-bold">{car.price.toLocaleString()} €</p>
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
          <div 
            className="relative aspect-[4/3] md:aspect-[16/9] mb-4 rounded-lg overflow-hidden cursor-pointer md:cursor-default"
            onClick={() => window.innerWidth < 768 && openLightbox(currentImageIndex)}
          >
            <img 
              src={images[currentImageIndex]} 
              alt={`${car.brand} ${car.model} - Slika ${currentImageIndex + 1}`} 
              className="w-full h-full object-contain transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button
                variant="secondary"
                size="icon"
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="bg-black/40 hover:bg-black/60 text-primary shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="bg-black/40 hover:bg-black/60 text-primary shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Mobile Lightbox */}
          <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
            <DialogContent className="max-w-full w-full h-full max-h-full p-0 border-0 bg-black/95 md:hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 text-white"
                >
                  <X className="w-6 h-6" />
                </Button>
                
                <img 
                  src={images[lightboxIndex]} 
                  alt={`${car.brand} ${car.model} - Slika ${lightboxIndex + 1}`} 
                  className="max-w-full max-h-full object-contain"
                />
                
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={lightboxPrev}
                    className="bg-black/40 hover:bg-black/60 text-primary shadow-lg pointer-events-auto"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={lightboxNext}
                    className="bg-black/40 hover:bg-black/60 text-primary shadow-lg pointer-events-auto"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {lightboxIndex + 1} / {images.length}
                </div>
              </div>
            </DialogContent>
          </Dialog>

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
