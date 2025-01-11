"use client";
import { useGlobalContext } from '@/src/lib/GlobalContext';
import { cities } from '@/src/data/cities';
import Link from 'next/link';

function Footer() {


  const { brands } = useGlobalContext()



  return (
    <div>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

            <div>
              <h3 className="text-lg font-semibold mb-4">Əsas Bağlantılar</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                    Ana Səhifə
                  </Link>
                </li>
                <li>
                  <Link href="/avtomobil-axtar" className="text-gray-400 hover:text-blue-400 transition">
                    Avtomobil Axtar
                  </Link>
                </li>
                <li>
                  <Link href="/nomre-axtar" className="text-gray-400 hover:text-blue-400 transition">
                    Nomre Axtar
                  </Link>
                </li>
                <li>
                  <Link href="/avtomobil-sat" className="text-gray-400 hover:text-blue-400 transition">
                    Avtomobil Sat
                  </Link>
                </li>
                <li>
                  <Link href="/mexfilik-sertleri" className="text-gray-400 hover:text-blue-400 transition">
                    Mexfilik Şərtləri
                  </Link>
                </li>
                <li>
                  <Link href="/elaqe" className="text-gray-400 hover:text-blue-400 transition">
                    Bizimlə Əlaqə
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Brendlər üzrə axtarış</h3>
              <ul className="space-y-2">
                {
                  // brands.map((brand, index) => (
                  //   <li key={index}>
                  //     <Link href={`/axtar?brand=${brand.name}`} className="text-gray-400 hover:text-blue-400 transition">
                  //       {brand.name}
                  //     </Link>
                  //   </li>
                  // ))
                }
              </ul>
            </div>



            <div>
              <h3 className="text-lg font-semibold mb-4">Şəhərlər üzrə axtarış</h3>
              <ul className="space-y-2">
                {
                  // cities.map((city, index) => (
                  //   <li key={index}>
                  //     <Link href={`/search?city=${city.name}`} className="text-gray-400 hover:text-blue-400 transition">
                  //       {city}
                  //     </Link>
                  //   </li>
                  // ))
                }
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Haqqımızda</h3>
              <p className="text-sm text-gray-400">
                AvtoBeh yeni platform kimi  alıcılarla satıcıları birləşdirən bir platformadır. İkinci əl avtomobillər üçün ən yaxşı təklifləri tapın və ya avtomobilinizi satmağı təklif edin.
              </p>
            </div>



            <div>
              <h3 className="text-lg font-semibold mb-4">Bizi izləmədə qalın</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.043 3.529 9.281 8.338 10.716V15.09h-2.51v-3.91h2.51v-3.01c0-2.478 1.479-3.869 3.797-3.869 1.104 0 2.243.219 2.243.219v2.488h-1.267c-1.25 0-1.645.773-1.645 1.568v1.855h2.84l-.453 3.91h-2.388v7.625c4.8-.378 8.532-4.503 8.532-9.266C24 5.373 18.627 0 12 0z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 0c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12-6.627 0-12-5.373-12-12 0-6.627 5.373-12 12-12zm0 3.316c-2.168 0-4.308.67-6.063 1.853-1.572 1.138-2.876 2.648-3.687 4.35-.127.239-.23.493-.305.748.292-.042.585-.063.88-.063 3.547 0 6.459 2.912 6.459 6.459 0 .833-.077 1.644-.224 2.425-.444 2.625-2.88 4.628-5.777 4.628-.359 0-.713-.035-1.062-.104.158-.256.23-.546.23-.859 0-1.057-.497-2.027-1.232-2.637-.68-.569-1.57-.818-2.479-.75 2.382-3.014 4.912-4.789 6.785-7.588.542-.828.882-1.747.97-2.667.043-.404-.178-.738-.509-.954-.394-.27-.89-.42-1.394-.42z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.531 0-10-4.469-10-10s4.469-10 10-10 10 4.469 10 10-4.469 10-10 10zm-1-14h2v8h-2zm1-3c-.553 0-1 .447-1 1v1h-2v-1c0-.553-.447-1-1-1s-1 .447-1 1v2h2v8h-2v6h4v-6h2v-8h-2v-2c0-.553-.447-1-1-1z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Əlaqə</h3>
              <p className="text-sm text-gray-400">Email: support@avtox.com</p>
              <p className="text-sm text-gray-400">Telefon: +1 (800) 123-4567</p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-8">
            {/* <p className="text-sm text-gray-400">&copy; 2024-2025 AvtoBeh. Müəllif hüquqları qorunur.</p> */}
          </div>
        </div>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <div className="container mx-auto flex justify-between">
          <aside className="grid-flow-col items-center">
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current">
              <path
                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg> */}
            <p className="text-xl text-gray-600">
              © 2024 AvtoBeh -  Müəllif hüquqları qorunur.
            </p>
          </aside>
          <nav className="md:place-self-center">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>

      </footer>

    </div>

  );
};

export default Footer;
