import prisma from "@/prisma";
import Index from ".";

// import Index from "./index";




export default async function Page() {
  let brands = await prisma.carBrand.findMany();
  // console.log(brands);
  return (
    <main>
      <Index brands={brands} />
    </main>
  )
}
