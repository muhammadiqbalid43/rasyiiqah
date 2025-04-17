import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  return (
    <nav className="shadow-sm">
      <div className="px-4 mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              {" "}
              <Image src="/logo-travel.jpg" width={50} height={50} alt="logo" />
            </Link>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-sm">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900"
              >
                Paket
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute z-10 w-48 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/layanan/paket-haji"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Paket Haji
                    </Link>
                    <Link
                      href="/layanan/paket-umroh"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Paket Umroh
                    </Link>
                    <Link
                      href="/layanan/visa"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Paket Tour
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 rounded-md hover:text-gray-900"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 rounded-md hover:text-gray-900"
            >
              Tentang
            </Link>
            <Link
              href="#testimoni"
              className="text-sm font-medium text-gray-700 rounded-md hover:text-gray-900"
            >
              Cabang
            </Link>
          </div>

          {/* MOBILE */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="block w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="flex justify-between w-full px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
                onClick={toggleServices}
              >
                Paket
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </button>

              {isServicesOpen && (
                <div className="pl-4">
                  <Link
                    href="/layanan/paket-haji"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Paket Haji
                  </Link>
                  <Link
                    href="/layanan/paket-umroh"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Paket Umroh
                  </Link>
                  <Link
                    href="/layanan/visa"
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Paket Tour
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/tentang-kami"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Tentang
            </Link>
            <Link
              href="/testimoni"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Cabang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
