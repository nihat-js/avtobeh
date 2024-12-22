import prisma from "@/prisma";
import Index from ".";


export const metadata = {
  title: 'Sat',
  description: 'Sat - yeni və işlənmiş avtomobillər, avtomobil aksesuarları, avtomobil xidmətləri və s.',
  keywords: 'yeni avtomobillər, işlənmiş avtomobillər, avtomobil aksesuarları, avtomobil xidmətləri, sat',
  charset: 'UTF-8',
  robots: 'index, follow',
}
export const viewport = 'width=device-width, initial-scale=1';  




export default async function Page() {
  let brands = await prisma.carBrand.findMany();
  // console.log(brands);
  return (
    <main>
      <Index brands={brands} />
    </main>
  )
}
