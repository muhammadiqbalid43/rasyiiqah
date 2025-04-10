import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import React from "react";

const PackageUmrohDetail = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container h-full px-4 py-8 mx-auto ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Package Details - Left Column */}
            <div className="space-y-6 lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                <div className="relative w-full h-64 ">
                  <div className="w-full h-[200px] bg-gray-200 rounded"></div>
                  <div className="absolute top-4 left-4">
                    <Badge>Tersedia</Badge>
                  </div>
                </div>

                <div className="p-6 ">
                  <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
                    <h1 className="text-2xl font-bold text-gray-900 ">
                      Paket Umrah Premium 12 Hari
                    </h1>
                    <div className="flex items-center mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        (120 ulasan)
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">
                          Keberangkatan Terdekat
                        </p>
                        <p className="font-medium">15 Juni 2025</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Durasi</p>
                        <p className="font-medium">12 Hari</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Maskapai</p>
                        <p className="font-medium">Saudi Airlines</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Kuota Tersisa</p>
                        <p className="font-medium">8 dari 25 Jamaah</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h2 className="mb-4 text-lg font-semibold">
                      Deskripsi Paket
                    </h2>
                    <p className="mb-4 text-gray-700">
                      Paket Umrah Premium menawarkan pengalaman ibadah yang
                      nyaman dan berkesan dengan akomodasi hotel bintang 5 di
                      Makkah dan Madinah. Dilengkapi dengan bimbingan ibadah
                      oleh ustadz berpengalaman, transportasi nyaman, dan
                      makanan 3x sehari.
                    </p>
                    <p className="text-gray-700">
                      Paket ini mencakup penerbangan langsung dengan Saudi
                      Airlines, visa umrah, transportasi bus AC, hotel bintang 5
                      di Makkah (dekat dengan Masjidil Haram) dan Madinah, makan
                      3x sehari, bimbingan manasik, dan ziarah ke tempat-tempat
                      bersejarah di Makkah dan Madinah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <Tabs defaultValue="jadwal" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="jadwal">Jadwal</TabsTrigger>
                    <TabsTrigger value="fasilitas">Fasilitas</TabsTrigger>
                    <TabsTrigger value="hotel">Hotel</TabsTrigger>
                    <TabsTrigger value="syarat">Syarat & Ketentuan</TabsTrigger>
                  </TabsList>

                  <TabsContent value="jadwal" className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">
                      Jadwal Keberangkatan Terdekat
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          date: "15 Juni 2025",
                          price: "Rp 45.000.000",
                          status: "Tersedia",
                          seats: 8,
                        },
                        {
                          date: "22 Juni 2025",
                          price: "Rp 45.000.000",
                          status: "Tersedia",
                          seats: 15,
                        },
                        {
                          date: "29 Juni 2025",
                          price: "Rp 45.000.000",
                          status: "Tersedia",
                          seats: 20,
                        },
                        {
                          date: "6 Juli 2025",
                          price: "Rp 47.500.000",
                          status: "Tersedia",
                          seats: 25,
                        },
                        {
                          date: "13 Juli 2025",
                          price: "Rp 47.500.000",
                          status: "Tersedia",
                          seats: 25,
                        },
                      ].map((schedule, index) => (
                        <CardContent
                          key={index}
                          className="border border-gray-200"
                        >
                          <CardContent className="p-4">
                            <div className="flex flex-col justify-between md:flex-row md:items-center">
                              <div className="flex flex-col mb-4 md:mb-0">
                                <div className="flex items-center mb-2">
                                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                                  <span className="font-medium">
                                    {schedule.date}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-2 text-primary" />
                                  <span className="text-sm text-gray-600">
                                    Tersisa {schedule.seats} kursi
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-start md:items-end">
                                <span className="text-lg font-bold text-primary">
                                  {schedule.price}
                                </span>
                                <span className="mb-2 text-sm text-gray-500">
                                  per Jamaah (Quad)
                                </span>
                                <Button size="sm">Pilih Tanggal</Button>
                              </div>
                            </div>
                          </CardContent>
                        </CardContent>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="fasilitas" className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Fasilitas</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Tiket Pesawat</h4>
                          <p className="text-sm text-gray-600">
                            Saudi Airlines (PP)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Visa Umrah</h4>
                          <p className="text-sm text-gray-600">
                            Termasuk proses dan biaya
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Hotel Bintang 5</h4>
                          <p className="text-sm text-gray-600">
                            Makkah & Madinah
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Makan 3x Sehari</h4>
                          <p className="text-sm text-gray-600">
                            Menu Indonesia
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Transportasi Bus AC</h4>
                          <p className="text-sm text-gray-600">
                            Selama di Arab Saudi
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Pembimbing/Muthowif</h4>
                          <p className="text-sm text-gray-600">Berpengalaman</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Air Zamzam</h4>
                          <p className="text-sm text-gray-600">
                            5 liter/jamaah
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 mr-3 rounded-full bg-primary/10">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Perlengkapan Umrah</h4>
                          <p className="text-sm text-gray-600">
                            Koper, tas, kain ihram/mukena, dll
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="hotel" className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">
                      Akomodasi Hotel
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 text-lg font-medium">
                          Makkah - Swissotel Al Maqam (5★)
                        </h4>
                        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                          {/* <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Hotel di Makkah"
                            className="object-cover w-full h-48 rounded-lg"
                          />
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Kamar Hotel di Makkah"
                            className="object-cover w-full h-48 rounded-lg"
                          /> */}
                          <div className="w-full h-48 bg-gray-500 rounded-lg"></div>
                          <div className="w-full h-48 bg-gray-500 rounded-lg"></div>
                        </div>
                        <p className="mb-2 text-gray-700">
                          Lokasi: ±250 meter dari Masjidil Haram
                        </p>
                        <p className="text-gray-700">
                          Fasilitas: AC, TV, kamar mandi dalam, WiFi, restoran,
                          laundry, dan layanan kamar 24 jam. Tipe kamar Quad (4
                          orang per kamar).
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-lg font-medium">
                          Madinah - Anwar Al Madinah Mövenpick Hotel (5★)
                        </h4>
                        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                          {/* <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Hotel di Madinah"
                            className="object-cover w-full h-48 rounded-lg"
                          />
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Kamar Hotel di Madinah"
                            className="object-cover w-full h-48 rounded-lg"
                          /> */}
                          <div className="w-full h-48 bg-gray-500 rounded-lg"></div>
                          <div className="w-full h-48 bg-gray-500 rounded-lg"></div>
                        </div>
                        <p className="mb-2 text-gray-700">
                          Lokasi: ±200 meter dari Masjid Nabawi
                        </p>
                        <p className="text-gray-700">
                          Fasilitas: AC, TV, kamar mandi dalam, WiFi, restoran,
                          laundry, dan layanan kamar 24 jam. Tipe kamar Quad (4
                          orang per kamar).
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="syarat" className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">
                      Syarat & Ketentuan
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Persyaratan Dokumen
                        </h4>
                        <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                          <li>
                            Paspor dengan masa berlaku minimal 7 bulan dari
                            tanggal keberangkatan
                          </li>
                          <li>Kartu keluarga asli (untuk mahram)</li>
                          <li>Sertifikat vaksin COVID-19 (dosis lengkap)</li>
                          <li>
                            Pas foto berwarna dengan latar belakang putih (4x6
                            cm) sebanyak 4 lembar
                          </li>
                          <li>Buku nikah asli (untuk suami istri)</li>
                          <li>Akta kelahiran (untuk anak-anak)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-medium">
                          Ketentuan Pembayaran
                        </h4>
                        <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                          <li>Uang muka sebesar Rp 10.000.000 per jamaah</li>
                          <li>
                            Pelunasan paling lambat 1 bulan sebelum
                            keberangkatan
                          </li>
                          <li>
                            Pembayaran dapat dilakukan melalui transfer bank
                            atau tunai di kantor kami
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-medium">
                          Ketentuan Pembatalan
                        </h4>
                        <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                          <li>
                            Pembatalan 45 hari sebelum keberangkatan: dikenakan
                            biaya 25% dari harga paket
                          </li>
                          <li>
                            Pembatalan 30 hari sebelum keberangkatan: dikenakan
                            biaya 50% dari harga paket
                          </li>
                          <li>
                            Pembatalan 15 hari sebelum keberangkatan: dikenakan
                            biaya 75% dari harga paket
                          </li>
                          <li>
                            Pembatalan kurang dari 7 hari sebelum keberangkatan:
                            dikenakan biaya 100% dari harga paket
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-medium">Informasi Penting</h4>
                        <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                          <li>
                            Jamaah wajib mengikuti manasik umrah sebelum
                            keberangkatan
                          </li>
                          <li>
                            Harga paket dapat berubah sewaktu-waktu sesuai
                            dengan kebijakan maskapai dan fluktuasi nilai tukar
                          </li>
                          <li>
                            Jadwal perjalanan dapat berubah sesuai dengan
                            kondisi di lapangan dan kebijakan pemerintah Arab
                            Saudi
                          </li>
                          <li>
                            Jamaah wajib mematuhi peraturan dan ketentuan yang
                            berlaku selama perjalanan umrah
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Booking Form - Right Column */}
            <div className="lg:col-span-1">
              <div className="sticky p-6 bg-white rounded-lg shadow-md top-6">
                <h2 className="mb-4 text-xl font-bold">Booking Paket Umrah</h2>

                <div className="pb-4 mb-4 border-b border-gray-200">
                  <p className="mb-1 text-gray-700">Mulai dari</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-primary">
                      Rp 45.000.000
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      per Jamaah
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Harga untuk kamar Quad (4 orang)
                  </p>
                </div>

                <div className="mb-6 space-y-4">
                  <div>
                    <Label className="block mb-2">Tanggal Keberangkatan</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tanggal keberangkatan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">15 Juni 2025</SelectItem>
                        <SelectItem value="mo">22 Juni 2025</SelectItem>
                        <SelectItem value="be">29 Juni 2025</SelectItem>
                        <SelectItem value="za">6 July 2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-6 space-y-4">
                  <Label className="block mb-2">Jumlah Jamaah</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Jumlah" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">1 Orang</SelectItem>
                      <SelectItem value="mo">2 Orang</SelectItem>
                      <SelectItem value="be">3 orang</SelectItem>
                      <SelectItem value="za">4 orang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6 space-y-4">
                  <Label className="block mb-2">Tipe Kamar</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Tipe Kamar Kamu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">
                        Quad (4 orang) - Rp 45.000.000/jamaah
                      </SelectItem>
                      <SelectItem value="mo">
                        Triple (3 orang) - Rp 47.500.000/jamaah
                      </SelectItem>
                      <SelectItem value="be">
                        Double (2 orang) - Rp 50.000.000/jamaah
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full mb-4">Booking Sekarang</Button>
                <Button variant="outline" className="w-full">
                  Konsultasi via WhatsApp
                </Button>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <h3 className="mb-2 font-medium">Butuh Bantuan?</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    Hubungi customer service kami:
                  </p>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896  2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896c0-3.176-1.24-6.165-3.495-8.411" />
                    </svg>
                    <span className="text-gray-700">+62 812-3456-7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PackageUmrohDetail;
