import Snowfall from "@/src/app/components/common/Snowfall";
import "../../styles/globals.css"


import Footer from '@/src/app/components/user/Footer';
import Header from '@/src/app/components/user/Header.jsx';
import { GlobalProvider } from "@/src/lib/GlobalContext";
import { AuthProvider } from "@/src/lib/AuthContext";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AutoBrand from "@/src/database/sequelize/models/AutoBrand";
import City from "@/src/database/sequelize/models/City";
import { config } from "@/src/lib/config";
import User from "@/src/database/sequelize/models/User";
import { jsonify } from "@/src/lib/utils";




export const metadata = {
  title: 'AvtoBeh',
  description: 'AvtoBeh - yeni ve işlənmiş avtomobillər, avtomobil aksesuarları, avtomobil xidmətləri və s.',
}


async function Layout({ children }) {
  // const cache = new NodeCache({ stdTTL: 3600 });
  // let brands = await prisma.autoBrand.findMany({
  //   orderBy: [
  //     {
  //       rank: 'desc',
  //     },
  //     {
  //       name: 'asc',
  //     },
  //   ],
  // });
  // console.log(brands)
  let cookiesStore = await cookies()
  const token = cookiesStore.get('token')?.value

  let brands = await AutoBrand.findAll({})
  brands = jsonify(brands)

  //  brands = brands.sort((a, b) => {
  //   if (a.groupName === 'popular' && b.groupName !== 'popular') return -1;
  //   if (a.groupName !== 'popular' && b.groupName === 'popular') return 1;

  //   return b.value - a.value; 
  // });

  let user;
  if (token) {
    try {
      const decoded = jwt.verify(token, config.JWTSecret);
      user = decoded;
      // console.log({ decoded })
      user = await User.findOne({
        where: {
          id: decoded.id,
        },
        attributes: ['id', 'name', 'email']
      })
      user = jsonify(user)
    } catch (error) {
      // console.log({ error })
      // cookiesStore.delete('token')
      user = null;
    }
  }


  return (
    <GlobalProvider data={{ brands }}>
      <AuthProvider data={{ user }}>
        <AntdRegistry>
          <html>
            <body className="" style={{
              //  backgroundImage: "url('/backgrounds/2.avif')", backgroundSize: "cover" 
              backgroundColor: "#f9f4f3"
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
        </AntdRegistry>
      </AuthProvider>
    </GlobalProvider >
  );
};

export default Layout;
