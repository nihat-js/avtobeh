"use server"
import Ad from "@/src/database/sequelize/models/Ad";
import Index from "./index";
import Auto from "@/src/database/sequelize/models/Auto";


export default async function CarDetails({params}) {

  let slug = await params.slug

  let auto = await Ad.findOne({ where: { slug: slug },
    include : [
      {
        model : Auto,
      }
    ]
  })

  function goBack() {
    return window.history.back();
  }

  return (
    <div>
      <Index  />
    </div>
  );
};

