import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {

  const { id } = await params
  console.log(id)
  // Extract query parameters
  // const { searchParams } = new URL(request.url);
  // const brand = searchParams.get('brand'); // Get 'brand' query param
  // console.log(request)

  // const id = request.nextUrl.searchParams.get('id');

  const models = await prisma.carModel.findMany({
    select: {
      id: true,
      name: true,
      count: true,
      groupName: true,
    },
    where: {
      brandId: +id
    }
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
