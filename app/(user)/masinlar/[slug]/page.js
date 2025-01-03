"use server"
import prisma from "@/prisma";
import Link from "next/link";
import Client from "./client";


export default async function CarDetails() {

  const car = await prisma.car.findUnique({ where: { id: 1 } });

  function goBack() {
    return window.history.back();
  }

  return (
    <div>
      <Client car={car} />
    </div>
  );
};

