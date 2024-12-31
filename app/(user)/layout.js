import Snowfall from "@/components/common/Snowfall";
import "../../styles/globals.css"

import Footer from '@/components/user/Footer';
import Header from '@/components/user/Header.jsx';
import { GlobalProvider } from "@/lib/GlobalContext";
import prisma from "@/prisma";
import { AuthProvider } from "@/lib/AuthContext";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import { useEffect, useState } from 'react';
// "use client"



export const metadata = {
  title: 'AvtoBeh',
  description: 'AvtoBeh - yeni ve işlənmiş avtomobillər, avtomobil aksesuarları, avtomobil xidmətləri və s.',
}


async function Layout({ children }) {
  // const cache = new NodeCache({ stdTTL: 3600 });
  const cities = await prisma.city.findMany()
  const brands = await prisma.carBrand.findMany({
    orderBy: [
      {
        rank: 'desc',
      },
      {
        name: 'asc',
      },
    ],
  });
  let cookies_ = await cookies()

  const token = cookies_.get('token')?.value
  const secret = process.env.JWT_SECRET || "your-secret-key";

  let user;
  // console.log({token})
  if (token) {
    try {
      const decoded = jwt.verify(token, secret);
      // user = decoded;
      user = await prisma.user.findUnique({
        where: {
          id: decoded.userId,
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      });
    } catch (error) {
      user = null;
    }
  }
  // console.log(user)





  return (
    <GlobalProvider data={{ cities, brands }}>
      <AuthProvider data={{ user }}>
        <html>
          <body style={{
            //  backgroundImage: "url('/backgrounds/1.png')", backgroundSize: "cover" 
          }}>

            <Snowfall />
            <div>
              <Header user={user} />
              <div className='bg-slate-100'>
                <main className="flex-1 container mx-auto py-6 px-4 ">{children}</main>
              </div>
              <Footer />
            </div>
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default Layout;
