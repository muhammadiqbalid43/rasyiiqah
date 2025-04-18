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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, MapPinIcon, Users } from "lucide-react";

const PaketPage = () => {
  return (
    <Layout>
      <section className="relative p-4 -z-50">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="container mx-auto relative z-20 flex flex-col items-center justify-center h-[500px] text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Paket Perjalanan Ibadah
          </h1>
          <p className="max-w-3xl mb-8 text-lg md:text-xl">
            Nikmati pengalaman ibadah yang nyaman dan khusyuk dengan layanan
            terbaik kami
          </p>
          <Button className="px-8 py-6 text-lg text-white bg-green-600 hover:bg-green-700">
            Konsultasi Gratis
          </Button>
        </div>
      </section>

      {/* Package  */}
      <section className="container py-16 mx-auto ">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Pilihan Paket Perjalanan</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Kami menyediakan berbagai pilihan paket perjalanan ibadah dan wisata
            dengan pelayanan terbaik dan harga terjangkau
          </p>
        </div>

        <Tabs defaultValue="umroh" className="w-full md:w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="haji">Haji</TabsTrigger>
            <TabsTrigger value="umroh">Umroh</TabsTrigger>
            <TabsTrigger value="tour">Tour</TabsTrigger>
          </TabsList>

          {/* Haji Content */}
          <TabsContent value="haji">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center">
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
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
            </div>
          </TabsContent>

          {/* Umroh Content */}
          <TabsContent value="umroh">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center">
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Umroh Reguler</CardTitle>
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Umroh Reguler</CardTitle>
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Umroh Reguler</CardTitle>
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Umroh Reguler</CardTitle>
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
            </div>
          </TabsContent>

          {/* Tour Content */}
          <TabsContent value="tour">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center">
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Tour Reguler</CardTitle>
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Tour Reguler</CardTitle>
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Tour Reguler</CardTitle>
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
              <Card className="w-[350px] md:w-full">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    {/* <div className="bg-gray-400 w-[400px] h-[200px]"></div> */}
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover md:w-[500px] h-[272px] rounded-2xl "
                    />
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Populer
                    </div>
                  </div>
                  <CardTitle>Tour Reguler</CardTitle>
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
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default PaketPage;
