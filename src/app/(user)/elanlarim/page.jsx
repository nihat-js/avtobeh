import Ad from "@/src/database/sequelize/models/Ad";
// import CarCard from "../../components/common/CarCard";
import Media from "@/src/database/sequelize/models/Media";
import { jsonify } from "@/src/lib/utils";
import Auto from "@/src/database/sequelize/models/Auto";

export default async function Home() {

  let data = await Ad.findAll({
    where: {
      userId: 1
    },
    include: [
      {
        required: false,
        model: Media,
      },
      {
        include: Auto,
        required: false,
      }
    ]
  })

  data = jsonify(data)

  return (
    <div>
      <h1>Elanlarım</h1>

      {
        // data.map((ad) => (
          // <CarCard data={ad} />
        // ))
      }

    </div>
  );
}