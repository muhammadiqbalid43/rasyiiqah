import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer2 = () => {
  return (
    <footer className="py-60  -z-50 text-gray-300 bg-gray-900 md:h-[600px] ring-1">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* <h3 className="mb-4 text-lg font-bold text-white">Tentang Kami</h3> */}
            <div className="flex items-center gap-3">
              <img src="/logo-travel.jpg" className="w-[50px]" alt="logo" />
              <p>PT RASYIIQAH TOUR AND TRAVEL</p>
            </div>
            <p className="mt-3 mb-4 text-sm">
              Layanan umroh terpercaya dengan pengalaman lebih dari 10 tahun
              melayani jamaah Indonesia.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Jl. Sungai Rupat No.6 RT 41 RW 08 Pagar Dewa, Bengkulu
                </span>
              </li>

              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>0821 3666 8000</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Tautan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Paket Umroh
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Jadwal Keberangkatan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Media Sosial</h3>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Facebook />
                <span>rasyiiqah</span>
              </li>

              <li className="flex items-start gap-2">
                <Instagram />
                <span>rasyiiqah</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="pt-8 mt-8 text-sm text-center border-t border-gray-800">
            <p>
              &copy; {new Date().getFullYear()} Travel Umroh. Hak Cipta
              Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
