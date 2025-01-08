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
import Auto from "@/src/database/sequelize/models/Auto";
import Media from "@/src/database/sequelize/models/Media";
import { autoBodyStyles, fuelTypes, transmissionTypes } from "@/src/data/auto";



export default async function Home() {


  let ads;
  try {
    ads = await Ad.findAll({
      raw: true,
      nest: true,
      where: {
        categoryId: 1
      },
      include: [
        {
          model: Media,
        },
        {
          model: Auto
        }
      ]
    })

    ads = ads.forEach((ad) => {
      ad.Auto.transmissionType = transmissionTypes.find((item) => item.id === ad.Auto.transmissionTypeId).name
      ad.Auto.bodyStyle = autoBodyStyles.find((item) => item.id === ad.Auto.bodyStyleId).name
      ad.Auto.fuelConsumptionId = fuelTypes.find((item) => item.id === ad.Auto.fuelConsumptionId).name
      // ad.Auto.mileageUnitId = ad.Auto.mileageUnitId == 1 ? "km" : "mil"
      // ad.Auto.engineSize = ad.Auto.engineSize + " L"
      // ad.Auto.horsePower = ad.Auto.horsePower + "HP"
    })
    console.log(ads)

  } catch (error) {
    console.error('Error fetching ads:', error);
  }
  return (
    <div>

      <Client ads={ads} />
    </div>
  );
}
