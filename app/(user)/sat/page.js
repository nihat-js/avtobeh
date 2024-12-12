import prisma from "@/prisma";
import Index from ".";


export const metadata = {
  title: 'Sat',
  description: 'Sat - yeni və işlənmiş avtomobillər, avtomobil aksesuarları, avtomobil xidmətləri və s.'
}



export default async function Page() {
  let brands = await prisma.carBrand.findMany();
  // console.log(brands);
  return (
    <main>
      <Index brands={brands} />
    </main>
  )
}
