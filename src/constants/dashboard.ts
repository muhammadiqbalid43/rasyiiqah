import {
  Calendar,
  CreditCard,
  Home,
  Package,
  PieChart,
  Settings,
  Users,
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "User Management",
      url: "/dashboard/user-management",
      icon: Users,
    },
    {
      title: "Umroh Package",
      url: "/dashboard/umroh-packages",
      icon: Package,
    },
    {
      title: "Bookings",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Payments",
      url: "#",
      icon: CreditCard,
    },
    {
      title: "Reports",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};
