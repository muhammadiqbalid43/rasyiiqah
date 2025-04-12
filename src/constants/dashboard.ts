import {
  Calendar,
  CreditCard,
  Home,
  Package,
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
      title: "Legalitas",
      url: "/dashboard/legality",
      icon: Package,
    },
    {
      title: "Cabang",
      url: "/dashboard/branch",
      icon: Calendar,
    },
    {
      title: "Galeri",
      url: "/dashboard/gallery",
      icon: CreditCard,
    },

    {
      title: "Testimoni",
      url: "/dashboard/testimony",
      icon: Settings,
    },
  ],
};
