"use server"

// import Announcement from "@/components/user/Announcement";
// import Layout from "@/components/Layout";
// import FeaturedBrands from "@/components/user/welcome/FeaturedBrands";
// import BeCareful from "@/components/user/welcome/BeCareful";
import Image from "next/image";
// import Link from "next/link";
// import CarCard from "@/components/common/CarCard";
// import Banner from "@/components/common/Banner";
// import CarFilter from "@/components/user/CarFilter";
// import FilterHeader from "./_ev/FilterHeader";
import { Client } from ".";
// import Auto from "@/src/database/sequelize/models/Auto";
import Ad from "@/src/database/sequelize/models/Ad";



export default async function Home() {



  let autos = await Ad.findAll()
  // })
  // console.log(autos)
  // autos = JSON.parse(JSON.stringify(autos))


  return (
    <div>

      <Client autos={autos} />
    </div>
  );
}
