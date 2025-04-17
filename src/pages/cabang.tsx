import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const branchOffices = [
  {
    id: "jakarta-pusat",
    name: "Jakarta Pusat",
    address: "Jl. Wahid Hasyim No. 10, Menteng, Jakarta Pusat",
    phone: "+62 21 3150 5577",
    email: "jakartapusat@umrohtour.com",
    hours: "Senin - Jumat: 08.00 - 17.00, Sabtu: 09.00 - 15.00",
    mapUrl:
      "https://maps.google.com/?q=Jl.+Wahid+Hasyim+No.+10+Menteng+Jakarta+Pusat",
    image: "https://fakeimg.pl/500x300",
  },
  {
    id: "surabaya",
    name: "Surabaya",
    address: "Jl. Raya Darmo No. 56, Tegalsari, Surabaya",
    phone: "+62 31 567 8901",
    email: "surabaya@umrohtour.com",
    hours: "Senin - Jumat: 08.00 - 17.00, Sabtu: 09.00 - 15.00",
    mapUrl:
      "https://maps.google.com/?q=Jl.+Raya+Darmo+No.+56+Tegalsari+Surabaya",
    image: "https://fakeimg.pl/500x300",
  },
  {
    id: "bandung",
    name: "Bandung",
    address: "Jl. Cihampelas No. 123, Bandung",
    phone: "+62 22 423 4567",
    email: "bandung@umrohtour.com",
    hours: "Senin - Jumat: 08.00 - 17.00, Sabtu: 09.00 - 15.00",
    mapUrl: "https://maps.google.com/?q=Jl.+Cihampelas+No.+123+Bandung",
    image: "https://fakeimg.pl/500x300",
  },
  {
    id: "makassar",
    name: "Makassar",
    address: "Jl. Pengayoman No. 45, Panakkukang, Makassar",
    phone: "+62 411 456 7890",
    email: "makassar@umrohtour.com",
    hours: "Senin - Jumat: 08.00 - 17.00, Sabtu: 09.00 - 15.00",
    mapUrl:
      "https://maps.google.com/?q=Jl.+Pengayoman+No.+45+Panakkukang+Makassar",
    image: "https://fakeimg.pl/500x300",
  },
  {
    id: "medan",
    name: "Medan",
    address: "Jl. S. Parman No. 217, Medan Petisah, Medan",
    phone: "+62 61 456 7890",
    email: "medan@umrohtour.com",
    hours: "Senin - Jumat: 08.00 - 17.00, Sabtu: 09.00 - 15.00",
    mapUrl:
      "https://maps.google.com/?q=Jl.+S.+Parman+No.+217+Medan+Petisah+Medan",
    image: "https://fakeimg.pl/500x300",
  },
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    address: "Jl. Malioboro No. 89, Yogyakarta",
    phone: "+62 274 567 8901",
    email: "yogyakarta@umrohtour.com",
    hours: "Senin - Jumat: 08.00 - 17.00, Sabtu: 09.00 - 15.00",
    mapUrl: "https://maps.google.com/?q=Jl.+Malioboro+No.+89+Yogyakarta",
    image: "https://fakeimg.pl/500x300",
  },
];

const KantorCabangPage = () => {
  return (
    <Layout>
      <div className="container px-4 py-12 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl md:text-5xl">
            Kantor Cabang
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Temukan kantor cabang kami di berbagai kota untuk memudahkan Anda
            mendapatkan informasi dan layanan Umroh terbaik
          </p>
        </div>
        <div className="mb-12">
          <Tabs defaultValue="jakarta-pusat" className="w-full">
            <TabsList className="flex flex-wrap justify-center w-full gap-2 mb-8">
              {branchOffices.map((office) => (
                <TabsTrigger
                  key={office.id}
                  value={office.id}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  {office.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {branchOffices.map((office) => (
              <TabsContent key={office.id} value={office.id} className="mt-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={office.image || "/placeholder.svg"}
                      alt={`Kantor Cabang ${office.name}`}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 text-2xl font-bold text-green-800">
                        Kantor Cabang {office.name}
                      </h2>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-green-600" />
                          <div>
                            <h3 className="font-medium">Alamat:</h3>
                            <p className="text-gray-600">{office.address}</p>
                            <Link
                              href={office.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 mt-1 text-sm font-medium text-green-600 hover:text-green-700"
                            >
                              Lihat di Google Maps
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="flex-shrink-0 w-5 h-5 mt-1 text-green-600" />
                          <div>
                            <h3 className="font-medium">Telepon:</h3>
                            <p className="text-gray-600">{office.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="flex-shrink-0 w-5 h-5 mt-1 text-green-600" />
                          <div>
                            <h3 className="font-medium">Email:</h3>
                            <p className="text-gray-600">{office.email}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="flex-shrink-0 w-5 h-5 mt-1 text-green-600" />
                          <div>
                            <h3 className="font-medium">Jam Operasional:</h3>
                            <p className="text-gray-600">{office.hours}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Hubungi Kami
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 overflow-hidden border rounded-xl">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      office.address
                    )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Peta Kantor Cabang ${office.name}`}
                  ></iframe>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="p-8 text-center rounded-xl bg-green-50">
          <h2 className="mb-4 text-2xl font-bold text-green-800">
            Butuh Bantuan?
          </h2>
          <p className="mb-6 text-gray-600">
            Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih
            lanjut tentang layanan Umroh kami, jangan ragu untuk menghubungi
            kantor cabang terdekat atau pusat layanan pelanggan kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700">
              Hubungi Kami
            </Button>
            <Button
              variant="outline"
              className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"
            >
              Lihat Paket Umroh
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KantorCabangPage;
