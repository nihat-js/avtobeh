// components/Footer.tsx
"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Haqqımızda</h3>
            <p className="text-sm text-gray-400">
              AvtoBeh, alıcılarla satıcıları birləşdirən bir platformadır. İkinci əl avtomobillər üçün ən yaxşı təklifləri tapın və ya avtomobilinizi etibarlı bir icmaya satmağa təklif edin.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Əsas Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <Link href="/browse" className="text-gray-400 hover:text-blue-400 transition">
                  Avtomobilləri Gözlə
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-blue-400 transition">
                  Avtomobil Sat
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-blue-400 transition">
                  Mexfilik Şərtləri
                </Link>
              </li>
              {/* <li>
                <Link href="/sell" className="text-gray-400 hover:text-blue-400 transition">
                  Mexfilik Şərtləri
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition">
                  Bizimlə Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Brendlər üzrə axtarış</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/axtar?brand=Toyota" className="text-gray-400 hover:text-blue-400 transition">
                  Toyota
                </Link>
              </li>
              <li>
                <Link href="/axtar?brand=Ford" className="text-gray-400 hover:text-blue-400 transition">
                  Ford
                </Link>
              </li>
              <li>
                <Link href="/axtar?brand=Chevrolet" className="text-gray-400 hover:text-blue-400 transition">
                  Chevrolet
                </Link>
              </li>
              <li>
                <Link href="/axtar?brand=Honda" className="text-gray-400 hover:text-blue-400 transition">
                  Honda
                </Link>
              </li>
              <li>
                <Link href="/axtar?brand=Nissan" className="text-gray-400 hover:text-blue-400 transition">
                  Nissan
                </Link>
              </li>
            </ul>
          </div>



          <div>
            <h3 className="text-lg font-semibold mb-4">Şəhərlər üzrə axtarış</h3>
            
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
          <p className="text-sm text-gray-400">&copy; 2024-2025 AvtoBeh. Müəllif hüquqları qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
