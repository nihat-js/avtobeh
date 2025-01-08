
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import { colors } from "../../data/auto.js";
// import User from "./models/User.js";
import AutoBrand from "./models/AutoBrand.js";
import AutoModel from "./models/AutoModel.js";
import AutoSale from "./models/Auto.js";
import AutoBodyStyle from "./models/AutoBodyStyle.js";
import City from "./models/City.js";
// import User from "./models/user.js";
// import { DataTypes } from "sequelize";




// AutoBodyStyle.sync({force : true})
// Color.sync({force : true})

// Color.bulkCreate(colors, {
//   ignoreDuplicates : true
// })


async function importFuelTypes(){
  fuelType
}


async function run(){
  // User.findAll({
  //   wheere
  // })
  // let x = await AutoBrand.findByPk(395)
  // let x = await (await AutoBrand.findAndCountAll()).count
  // let x = await AutoBrand.findByPk(395)

  // console.log(JSON.stringify(x))

  // let x = await AutoModel.findAll({ where: { brandId: 395 } })
  // console.log(JSON.stringify(x))
  // let u = await User.findAll({})
  // console.log(u)
  // let x = await AutoBrand.findByPk(395, {
  //   include: {
  //     model: AutoModel,
  //     attributes: ['name']
  //   }
  // }) 

  // let x= await AutoSale.findAll()
  // let x=AutoBodyStyle.findAll()
  let x = City.findAll()
  // console.log(JSON.stringify(x))

  // console.log(JSON.stringify(x))

}

run()