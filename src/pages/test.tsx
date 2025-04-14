import Certificate from "@/components/landing/certificate";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import PaketPerjalananUmroh from "@/components/landing/paket-perjalanan-umroh";
import TourLeader from "@/components/landing/tour-leader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";

const TestPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 text-center bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 mx-auto">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-[#1d6b05] md:text-4xl lg:text-5xl">
            Jangan sampai, GAGAL UMROH hanya karena bingung pilih Travel Umroh
            yang Terpecaya
          </h1>
          <p className="mb-8 text-xl text-[#1d6b05]">
            Padahal Anda Sudah Rindu Kabbah.
          </p>
          <div className="max-w-3xl mx-auto">
            <Image
              src="https://www.dwinstravel.com/wp-content/uploads/2024/07/Header-Travel-Umroh-Sunnah-Dwins-Travel.webp"
              alt="Kaaba in Mecca"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
            {/* <div className="h-[400px] w-[500px] md:w-[800px] bg-gray-400"></div> */}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#ff7200]">
            Sini saya tunjukin cara pilih Travel umroh
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Pastikan informasi travel mudah di akses",
              "Pastikan izin travel bisa di akses",
              "Pastikan informasi keberangkatan",
              "Pastikan pembimbing umroh anda kenal",
              "Pastikan fasilitas nya lengkap",
            ].map((item, index) => (
              <CardContent key={index} className="border-green-100 shadow-md">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex items-center justify-center w-10 h-10 text-[#1d6b05] bg-green-100 rounded-full shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium">{item}</p>
                </CardContent>
              </CardContent>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-semibold text-[#ff7200]">
              Masih Bingung?
            </h3>
            <p className="mb-8 text-xl">Sini Saya tunjukin</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#1d6b05]">
            Travel Umroh Terpecaya Di Provinsi bengkulu, Kenapa??
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-green-100 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Berizin lengkap</h3>
                <p className="text-gray-600">
                  Memiliki izin resmi dari Kementerian Agama dan legalitas yang
                  lengkap.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Informasi perusaha mudah di akses
                </h3>
                <p className="text-gray-600">
                  Website resmi dan kantor fisik yang dapat dikunjungi langsung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Informasi Keberangkatan pasti
                </h3>
                <p className="text-gray-600">
                  Jadwal keberangkatan yang jelas dan terjamin.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Fasilitas lengkap
                </h3>
                <p className="text-gray-600">
                  Akomodasi, transportasi, dan layanan terbaik selama perjalanan
                  umroh.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-100 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Muttawatir Ulama Bengkulu
                </h3>
                <p className="text-gray-600">
                  Didampingi oleh ulama terpercaya dari Bengkulu sebagai
                  pembimbing ibadah.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <Certificate />

      {/* Tour Leader */}
      <TourLeader />

      {/* Paket Perjalanan Umroh */}
      <PaketPerjalananUmroh />

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container px-4 mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-[#ff7200]">
            Jangan ragu, segera capai impian Umroh anda
          </h2>
          <p className="mb-8 text-xl font-semibold text-[#ff7200]">
            Promo khusus 10 pendaftar pertama
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="px-8 py-6 text-lg bg-[#1d6b05] hover:bg-green-700">
              Tanya admin
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg text-green-600 border-green-600 hover:bg-green-50"
            >
              Lihat paket Umroh
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-[#1d6b05]">
            Ini cerita mereka
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-white border-green-100 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {/* <Image
                      src={`/placeholder.svg?height=100&width=100`}
                      alt={`Testimoni ${item}`}
                      width={100}
                      height={100}
                      className="rounded-full"
                    /> */}
                    <div className="h-[100px] w-[100px] rounded bg-gray-400"></div>
                  </div>
                  <div className="flex justify-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic text-center text-gray-600">
                    &quot;Alhamdulillah, pengalaman umroh yang luar biasa dengan
                    pelayanan yang sangat memuaskan. Pembimbing sangat membantu
                    dan akomodasi sangat nyaman.&quot;
                  </p>
                  <p className="font-semibold text-center">
                    Jamaah dari Bengkulu
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-semibold text-[#1d6b05]">
              Jadikan cerita anda
            </h3>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="px-8 py-6 text-lg bg-green-600 hover:bg-green-700">
                Hubungi admin
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-lg text-green-600 border-green-600 hover:bg-green-50"
              >
                Lihat paket umroh
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TestPage;
