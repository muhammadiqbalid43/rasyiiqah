import { Briefcase, Calculator, Crown, ThumbsUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const features = [
  {
    title: "Pengalaman Baru",
    description:
      "Kami menawarkan pengalaman baru dalam ibadah umrah. Anda mendapatkan standar pengalaman, dan lain-lain yang bisa Anda bersama kami.",
    icon: Crown,
  },
  {
    title: "Tentukan Sendiri",
    description:
      "Nikmati pilihan fasilitas yang relatif disesuaikan dan wujudkan perjalanan umrah Anda bersama kami.",
    icon: ThumbsUp,
  },
  {
    title: "Umrah Freshnel",
    description:
      "Kami menawarkan paket Umrah Freshnel, pilihan untuk pengalaman yang lebih hemat.",
    icon: Briefcase,
  },
  {
    title: "Kalkulator Trip",
    description:
      "Gunakan kalkulator perjalanan kami yang lebih mudah dalam memperkirakan biaya perjalanan dan melakukan perencanaan.",
    icon: Calculator,
  },
];

const Offer = () => {
  return (
    <>
      <div className="container px-4 py-12 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-green-600 md:text-4xl">
          Bersama Rasyiiqah, Perjalanan Anda penuh makna
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-shadow border hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-amber-50">
                  <feature.icon className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg font-medium">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offer;
