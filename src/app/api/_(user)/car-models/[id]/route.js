import { sequelize } from "@/database/sequelize/db";
import AutoModel from "@/database/sequelize/models/AutoModel";
import { NextResponse } from "next/server";

export async function POST(request, {params}) {

  const { id } = await params
  // console.log(id)

  // const models = await prisma.autoModel.findMany({
    // select: {
    //   id: true,
    //   name: true,
    //   count: true,
    //   groupName: true,
    // },
    // where: {
      brandId: +id
    // }
  // })

  // const models = await AutoModel.findAll({
  //   where: {
  //     brandId: +id
  //   }
  // })

  const models = await AutoModel.findAll({
    where: {
      brandId: +id
    },
    // attributes: ['id', 'name', 'count', 'groupName']
  })

  // if (!models) {
  //   return NextResponse.json({ message: "Brand not found or invalid query" }, { status: 400 });
  // }

  // Return models for the requested brand
  return NextResponse.json({
    status: 'ok',
    data: models
  });
}
