import {
  CreditCard,
  GitBranchIcon,
  Home,
  Package,
  PackageIcon,
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
      title: "Paket",
      url: "/dashboard/package",
      icon: PackageIcon,
    },
    {
      title: "Cabang",
      url: "/dashboard/branch",
      icon: GitBranchIcon,
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
