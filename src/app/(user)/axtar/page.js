"use server"

import Image from "next/image";
import { Client } from ".";
import Ad from "@/src/database/sequelize/models/Ad";
import Auto from "@/src/database/sequelize/models/Auto";
import Media from "@/src/database/sequelize/models/Media";
import { autoBodyStyles, fuelTypes, mileageUnits, transmissionTypes } from "@/src/data/auto";
import { jsonify } from "@/src/lib/utils";
import Like from "@/src/database/sequelize/models/Like";



export default async function Home() {


  let ads;
  try {
    ads = await Ad.findAll({
      // raw: true,
      // nest: true,
      where: {
        categoryId: 1
      },
      include: [
        {
          model: Media,
        },
        {
          required: false,
          model: Auto
        },
        // {
        //   model: Like,
        //   required: false,
        //   where: {
        //     userId: 1
        //   }
        // }
      ]
    })
    ads = jsonify(ads)

    let likes = await Like.findAll({
      where: {
        adId: ads.map((item) => item.id)
      },
      attributes: ['adId', 'userId'],
      raw: true
    })


    ads.forEach((ad) => {
      ad.Auto.transmissionType = transmissionTypes.find((item) => item.id === ad.Auto.transmissionTypeId).name
      ad.Auto.bodyStyle = autoBodyStyles.find((item) => item.id === ad.Auto.bodyStyleId).name
      ad.Auto.fuelType = fuelTypes.find((item) => item.id === ad.Auto.fuelTypeId).name
      ad.Auto.mileageUnit = mileageUnits.find((item) => item.id === ad.Auto.mileageUnitId).name
      ad.Media = ad.Media?.map((item) => {
        return item.path
      })
      ad.isLiked = likes.filter((like) => like.adId === ad.id).length
      // ad.Auto.engineSize = ad.Auto.engineSize + " L"
      // ad.Auto.horsePower = ad.Auto.horsePower + "HP"

      delete ad.Auto.transmissionTypeId
      delete ad.Auto.bodyStyleId
      delete ad.Auto.fuelTypeId
    })
    // console.log({ ads })

  } catch (error) {
    console.error('Error fetching ads:', error);
  }
  return (
    <div>

      <Client ads={ads} />
    </div>
  );
}
