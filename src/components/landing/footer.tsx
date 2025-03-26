import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 text-gray-300 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div>
            <h3>Alamat Kami:</h3>
            <p className="w-[250px] text-muted-foreground">
              Jl. Raya Condet No.50, Kel. Batu Ampar, Kramat Jati, Jakarta
              Timur, DKI Jakarta, Indonesia, 13520
            </p>
          </div>
          <div>
            <h3>Informasi</h3>
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Metode Pembayaran
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Syarat Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Layanan</h3>
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Metode Pembayaran
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Syarat Ketentuan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Jam Operasinal</h3>
            <p>Waktu Operasional</p>
            <p>Senin - Ahad 09.00 - 18.00 WIB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
