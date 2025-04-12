import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="py-12 text-gray-300 bg-gray-900" id="tentang-kami">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Tentang Kami</h3>
            <p className="mb-4 text-sm">
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
                <span>Jl. Contoh No. 123, Jakarta Pusat, Indonesia</span>
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@umrohtravel.com</span>
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
                <span>+62 812 3456 7890</span>
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
            <h3 className="mb-4 text-lg font-bold text-white">Newsletter</h3>
            <p className="mb-4 text-sm">
              Dapatkan informasi terbaru tentang promo dan paket umroh kami
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 text-sm text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:border-primary focus:outline-none"
                required
              />
              <Button type="submit" className="w-full">
                Berlangganan
              </Button>
            </form>
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

export default Footer;
