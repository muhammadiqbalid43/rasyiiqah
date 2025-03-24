import Booking from "@/components/dashboard/booking";
import SectionCards from "@/components/dashboard/section-cards";

import { usePathname } from "next/navigation";

const DashboardPage = ({}) => {
  const pathname = usePathname();
  return (
    <div>
      <SectionCards />
      <Booking />
    </div>
  );
};

export default DashboardPage;
