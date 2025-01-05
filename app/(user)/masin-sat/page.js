// import prisma from "@/prisma";
import Index from ".";


export const metadata = {
  title: 'Avtomobil Sat',
  description: 'Sat - yeni və işlənmiş avtomobillər, avtomobil aksesuarları, avtomobil xidmətləri və s.',
  keywords: 'avtomobil sat, maşın sat, yeni avtomobil sat,  avtomobil aksesuarları, avtomobil xidmətləri, sat',
  charset: 'UTF-8',
  robots: 'index, follow',
}
export const viewport = 'width=device-width, initial-scale=1';  



export default async function Page() {
  
  return (
    <main>
      <Index />
    </main>
  )
}
