import { colors } from "../config/auto.js";
import { autoModels } from "../config/autoModels.js"
import prisma from "./index.js";





async function importBrands() {
    // for (const model of autoModels) {
    //     await prisma.autoBrand.create({
    //         data: {
    //             name: model.groupName,
    //         }
    //     })
    // }
}

async function importModels() {
    let i = 1
    let brands = await prisma.autoBrand.findMany({})
    // console.log(autoModels)
    // return ;



    for (const brand in autoModels) {
        let brand_ = brands.find(item => item.name == brand)
        // console.log("gelirem",brand)

        if (!brand_) {
            brand_ = await prisma.autoBrand.create({
                data: {
                    name: brand,
                    slug: brand.replace(/\s+/g, '-').toLowerCase(),
                    isVisible: 1,
                }
            })
        }
        let brandId = brand_.id
        let insertData = []
        for (const model of autoModels[brand]) {
            let data = {
                brandId,
                brandName: brand,
                name: typeof model === "string" ? model : model.name,
                slug: brand_.slug + "-" + (typeof model === "string" ? model : model.name).replace(/\s+/g, '-').toLowerCase(),
                groupName: typeof model == "object" ? model.groupName : null
            }

            insertData.push(data)

        }
        // console.log(data)
        await prisma.autoModel.createMany({
            data: insertData,
            skipDuplicates: true
        });
        console.log(`${i} / ${Object.keys(autoModels).length}  - ${brand} ( ${insertData.length} models  )  `)
        i++;
    }
}

async function importColors() {
    let insertData = colors.map(item => {
        return {
            name: item,
            slug: item.replace(/\s+/g, '-').toLowerCase(),
        }
    })
    await prisma.color.createMany({
        data: insertData,
        skipDuplicates: true
    })

}


// importModels()
importColors()


