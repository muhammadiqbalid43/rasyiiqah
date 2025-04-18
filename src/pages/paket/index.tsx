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
import { CalendarIcon, Clock, MapPinIcon, Star, Users } from "lucide-react";

const PaketPage = () => {
  return (
    <Layout>
      <section className="relative -z-50">
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
      <section className="container py-16 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Pilihan Paket Perjalanan</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Kami menyediakan berbagai pilihan paket perjalanan ibadah dan wisata
            dengan pelayanan terbaik dan harga terjangkau
          </p>
        </div>

        <Tabs defaultValue="umroh" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="haji">Haji</TabsTrigger>
            <TabsTrigger value="umroh">Umroh</TabsTrigger>
            <TabsTrigger value="tour">Tour</TabsTrigger>
          </TabsList>

          {/* Haji Content */}
          <TabsContent value="haji">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <CardDescription>
                    Paket haji dengan pelayanan VIP
                  </CardDescription>
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
          </TabsContent>

          {/* Umroh Content */}
          <TabsContent value="umroh">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    <div className="bg-gray-400 w-[400px] h-[200px]"></div>
                    <div className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded top-2 right-2">
                      Terlaris
                    </div>
                  </div>
                  <CardTitle>Umroh Reguler</CardTitle>
                  <CardDescription>
                    Paket umroh dengan harga terjangkau
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Durasi: 9 Hari</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Mekah & Madinah</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Keberangkatan Bulanan</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600">
                        Rp 25.000.000
                      </p>
                      <p className="text-sm text-muted-foreground">
                        *Termasuk tiket pesawat & hotel
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
                  <CardTitle>Umroh Plus Turki</CardTitle>
                  <CardDescription>
                    Paket umroh dengan wisata ke Turki
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Durasi: 12 Hari</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Mekah, Madinah & Istanbul</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Keberangkatan Triwulan</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600">
                        Rp 35.000.000
                      </p>
                      <p className="text-sm text-muted-foreground">
                        *Termasuk tiket pesawat & hotel
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
                  <CardTitle>Umroh Ramadhan</CardTitle>
                  <CardDescription>
                    Paket umroh spesial bulan Ramadhan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Durasi: 15 Hari</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Mekah & Madinah</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Keberangkatan Ramadhan</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600">
                        Rp 45.000.000
                      </p>
                      <p className="text-sm text-muted-foreground">
                        *Termasuk tiket pesawat & hotel
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                    <div className="bg-gray-400 w-[400px] h-[200px]"></div>
                  </div>
                  <CardTitle>Tour Dubai</CardTitle>
                  <CardDescription>Paket wisata ke Dubai</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Durasi: 7 Hari</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Dubai, Abu Dhabi</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Hotel Bintang 5</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600">
                        Rp 22.000.000
                      </p>
                      <p className="text-sm text-muted-foreground">
                        *Termasuk tiket pesawat & hotel
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
                  <CardTitle>Tour Turki</CardTitle>
                  <CardDescription>Paket wisata ke Turki</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Durasi: 8 Hari</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">
                        Istanbul, Cappadocia, Bursa
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Hotel Bintang 4</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600">
                        Rp 20.000.000
                      </p>
                      <p className="text-sm text-muted-foreground">
                        *Termasuk tiket pesawat & hotel
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
                  <CardTitle>Tour Mesir</CardTitle>
                  <CardDescription>Paket wisata ke Mesir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Durasi: 10 Hari</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Kairo, Alexandria, Luxor</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">Hotel Bintang 5</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600">
                        Rp 25.000.000
                      </p>
                      <p className="text-sm text-muted-foreground">
                        *Termasuk tiket pesawat & hotel
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

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Testimoni Jamaah</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Apa kata jamaah yang telah menggunakan layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full">
                    <span className="font-bold text-green-600">AS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Irvan Alfajri</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Alhamdulillah, sangat puas dengan pelayanan Al-Amin
                  Travel. Pembimbing sangat sabar dan hotel dekat dengan
                  Masjidil Haram.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full">
                    <span className="font-bold text-green-600">FZ</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Fatimah Zahra</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Pengalaman umroh yang tak terlupakan. Pelayanan sangat
                  baik, makanan enak, dan pembimbing yang kompeten.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-green-100 rounded-full">
                    <span className="font-bold text-green-600">MR</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Muhammad Ridwan</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Sudah 3 kali umroh bersama Al-Amin Travel dan selalu
                  puas. Insya Allah tahun depan berangkat haji bersama mereka
                  lagi.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaketPage;
