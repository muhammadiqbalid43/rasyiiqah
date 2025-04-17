import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

const umrohPackages = [
  {
    title: "Umroh Reguler",
    price: "Rp 25.000.000",
    duration: "9 Hari",
    location: "Makkah & Madinah",
    group: "Grup 45 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Umroh Plus Turki",
    price: "Rp 35.000.000",
    duration: "12 Hari",
    location: "Makkah, Madinah & Istanbul",
    group: "Grup 30 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Umroh Ramadhan",
    price: "Rp 30.000.000",
    duration: "10 Hari",
    location: "Makkah & Madinah",
    group: "Grup 40 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const hajiPackages = [
  {
    title: "Haji Reguler",
    price: "Rp 150.000.000",
    duration: "40 Hari",
    location: "Makkah & Madinah",
    group: "Grup 45 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Haji Plus",
    price: "Rp 200.000.000",
    duration: "25 Hari",
    location: "Makkah & Madinah",
    group: "Grup 25 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Haji Furoda",
    price: "Rp 250.000.000",
    duration: "20 Hari",
    location: "Makkah & Madinah",
    group: "Grup 15 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const travelPackages = [
  {
    title: "Tour Turki",
    price: "Rp 20.000.000",
    duration: "8 Hari",
    location: "Istanbul, Bursa, Cappadocia",
    group: "Grup 20 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Tour Aqsa & Yordania",
    price: "Rp 30.000.000",
    duration: "10 Hari",
    location: "Yerusalem, Amman, Petra",
    group: "Grup 25 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Tour Dubai",
    price: "Rp 18.000.000",
    duration: "6 Hari",
    location: "Dubai, Abu Dhabi",
    group: "Grup 30 Jamaah",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const ProdukKategori = () => {
  return (
    <section className="px-4 py-16 bg-white md:px-8">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Layanan Kami</h2>
        <Tabs defaultValue="umroh" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="umroh">Umroh</TabsTrigger>
            <TabsTrigger value="haji">Haji</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
          </TabsList>
          <TabsContent value="umroh">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {umrohPackages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <div className="bg-gray-400 w-full h-[190px]"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold">{pkg.title}</h3>
                      <span className="font-bold text-emerald-600">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{pkg.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{pkg.group}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="flex items-center">
                Lihat Semua Paket Umroh <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="haji">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {hajiPackages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <div className="bg-gray-400 w-full h-[190px]"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold">{pkg.title}</h3>
                      <span className="font-bold text-emerald-600">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{pkg.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{pkg.group}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="flex items-center">
                Lihat Semua Paket Haji <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="travel">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {travelPackages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <div className="bg-gray-400 w-full h-[190px]"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold">{pkg.title}</h3>
                      <span className="font-bold text-emerald-600">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{pkg.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{pkg.group}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="flex items-center">
                Lihat Semua Paket Travel <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProdukKategori;
