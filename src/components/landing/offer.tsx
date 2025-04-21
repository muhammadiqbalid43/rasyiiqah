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
    title: "Berizin lengkap",
    description:
      "Memiliki izin resmi dari Kementerian Agama dan legalitas yang lengkap.",
    icon: Crown,
  },
  {
    title: "Informasi perusahaan mudah di akses",
    description:
      "Website resmi dan kantor fisik yang dapat dikunjungi langsung.",
    icon: ThumbsUp,
  },
  {
    title: "Informasi Keberangkatan pasti",
    description: "Jadwal keberangkatan yang jelas dan terjamin",
    icon: Briefcase,
  },
  {
    title: "Fasilitas lengkap",
    description:
      "Akomodasi, transportasi, dan layanan terbaik selama perjalanan umroh.",
    icon: Calculator,
  },
  {
    title: "Muttawatir Ulama Bengkulu",
    description:
      "Didampingi oleh ulama terpercaya dari Bengkulu sebagai pembimbing ibadah.",
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
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
