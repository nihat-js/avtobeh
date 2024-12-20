"use server"

import Announcement from "@/components/user/Announcement";
// import Layout from "@/components/Layout";
import FeaturedBrands from "@/components/user/welcome/FeaturedBrands";
import BeCareful from "@/components/user/welcome/BeCareful";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/prisma";
import CarCard from "@/components/common/CarCard";
import Banner from "@/components/common/Banner";
import CarFilter from "@/components/user/CarFilter";
import FilterHeader from "./_ev/FilterHeader";
import { Client } from "./_ev/Client";



export default async function Home() {



  let cars = await prisma.car.findMany({
    include: {
      images: {
        select: {
          path: true,
        }
      }
    }
  });



  const featuredBrands = [
    { name: 'BMW', src: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
    { name: 'Mercedes', src: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
    { name: 'Toyota', src: 'https://www.carlogos.org/car-logos/toyota-logo.png' }
    // { name: 'Tesla', src: 'https://www.carlogos.org/car-logos/tesla-logo.png' },
    // { name: 'Audi', src: 'https://www.carlogos.org/car-logos/audi-logo.png' },
    // { name: 'Ford', src: 'https://www.carlogos.org/car-logos/ford-logo.png' },
  ]

  return (
    <Client cars={cars} />
  );
}
