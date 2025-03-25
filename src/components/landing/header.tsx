import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="border-b">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="text-xl font-bold">NANAMI FE</div>
        <nav className="items-center hidden gap-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Layanan
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Tentang Kami
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Hubungi Kami
          </Link>
        </nav>
        <div>
          <Button className="hidden md:flex">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
