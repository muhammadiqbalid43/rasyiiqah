import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, Users } from "lucide-react";

const PaketHaji = () => {
  return (
    <Layout>
      <section className="container py-16 mx-auto">
        <div className="mb-12 ">
          <h1 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl md:text-5xl">
            Paket Haji
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 ">
          <Card>
            <CardHeader>
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <div className="bg-gray-400 w-[400px] h-[200px]"></div>
                <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                  Populer
                </div>
              </div>
              <CardTitle>Haji Reguler</CardTitle>
              <CardDescription>
                Paket haji reguler dengan pelayanan terbaik
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Durasi: 40 Hari</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Mekah & Madinah</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Kuota Terbatas</span>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-green-600">
                    Rp 150.000.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    *Harga dapat berubah sesuai ketentuan
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Lihat Detail
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <div className="bg-gray-400 w-[400px] h-[200px]"></div>
              </div>
              <CardTitle>Haji Plus</CardTitle>
              <CardDescription>
                Paket haji dengan fasilitas premium
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Durasi: 25 Hari</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Mekah & Madinah</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Hotel Bintang 5</span>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-green-600">
                    Rp 200.000.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    *Harga dapat berubah sesuai ketentuan
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Lihat Detail
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <div className="bg-gray-400 w-[400px] h-[200px]"></div>
              </div>
              <CardTitle>Haji Khusus</CardTitle>
              <CardDescription>Paket haji dengan pelayanan VIP</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Durasi: 22 Hari</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Mekah & Madinah</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Fasilitas VIP</span>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-green-600">
                    Rp 250.000.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    *Harga dapat berubah sesuai ketentuan
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Lihat Detail
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <div className="bg-gray-400 w-[400px] h-[200px]"></div>
              </div>
              <CardTitle>Haji Khusus</CardTitle>
              <CardDescription>Paket haji dengan pelayanan VIP</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Durasi: 22 Hari</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Mekah & Madinah</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-600" />
                  <span className="text-sm">Fasilitas VIP</span>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-green-600">
                    Rp 250.000.000
                  </p>
                  <p className="text-sm text-muted-foreground">
                    *Harga dapat berubah sesuai ketentuan
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Lihat Detail
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default PaketHaji;
