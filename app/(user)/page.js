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


  return (
    <Client cars={cars} />
  );
}
