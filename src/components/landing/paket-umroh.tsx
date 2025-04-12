import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MapIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const PaketUmroh = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            Paket Umroh
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {" "}
            Pilih paket umroh yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaketUmroh;

function PackageCard({ package: pkg }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="overflow-hidden aspect-video">
        {/* <Image
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.name}
          width={400}
          height={225}
          className="object-cover w-[400px] h-[225px]"
        /> */}
        <div className="w-[420px] h-[200px] bg-slate-300"></div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge>{pkg.type}</Badge>
          <span className="text-sm font-medium text-muted-foreground">
            {pkg.duration} Hari
          </span>
        </div>
        <CardTitle>{pkg.name}</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-1 text-primary">
            <MapIcon className="w-4 h-4" />
            <span>{pkg.hotel}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex items-center justify-between px-6 py-3 border-t bg-muted/20">
        <div>
          <p className="text-xs text-muted-foreground">Mulai dari</p>
          <p className="font-bold text-primary">{pkg.price}</p>
        </div>
        <Link href="/package/1">
          <Button size="sm">Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

const packages = [
  {
    name: "Umroh Plus Aqsa",
    type: "Plus",
    duration: 15,
    hotel: "Hotel Bintang 4",
    image: "/placeholder.svg?height=225&width=400",
    price: "Rp 52.000.000",
    features: [
      "Hotel Bintang 4 di Makkah, Madinah & Yerusalem",
      "Kamar 2-3 orang",
      "Visa Umroh & Yordania",
      "Tiket Pesawat PP",
      "Makan 3x sehari",
      "Ziarah Masjid Al-Aqsa",
    ],
  },
  {
    name: "Umroh VIP",
    type: "VIP",
    duration: 12,
    hotel: "Hotel Bintang 5",
    image: "/placeholder.svg?height=225&width=400",
    price: "Rp 65.000.000",
    features: [
      "Hotel Bintang 5 di Makkah & Madinah",
      "Kamar 2 orang",
      "Visa Umroh",
      "Tiket Pesawat Business Class",
      "Makan 3x sehari menu premium",
      "Transportasi eksklusif",
      "Pembimbing pribadi",
    ],
  },
  {
    name: "Umroh VIP Plus",
    type: "VIP",
    duration: 15,
    hotel: "Hotel Bintang 5",
    image: "/placeholder.svg?height=225&width=400",
    price: "Rp 75.000.000",
    features: [
      "Hotel Bintang 5 di Makkah & Madinah",
      "Kamar 2 orang",
      "Visa Umroh",
      "Tiket Pesawat Business Class",
      "Makan 3x sehari menu premium",
      "Transportasi eksklusif",
      "Pembimbing pribadi",
      "Ziarah eksklusif",
    ],
  },
];
