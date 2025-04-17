import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Heart, MapIcon, Star, Users } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="https://fakeimg.pl/1200x400"
            alt=""
            width={1400}
            height={400}
            className="object-cover h-[400px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl ">
              Tentang Rasyiiqah tour & travel
            </h1>
            <p className="max-w-2xl text-lg md:text-xl">
              Mitra terpercaya Anda untuk perjalanan penuh berkah ke tanah suci
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-white md:py-16">
        <div className="container mx-auto">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-green-600">
                Cerita Kita
              </h2>
              <p className="mb-4 text-gray-700">
                Didirikan pada tahun 2005, Rasyiiqah tour & travel telah
                berdedikasi untuk menyediakan layanan umroh dan haji yang luar
                biasa bagi para peziarah dari seluruh dunia. Perjalanan kami
                dimulai dengan misi sederhana: menjadikan ibadah haji yang suci
                mudah diakses, nyaman, dan memuaskan secara spiritual bagi semua
                Muslim.
              </p>
              <p className="mb-4 text-gray-700">
                Dengan pengalaman lebih dari 15 tahun, kami telah membantu
                ribuan peziarah memenuhi kewajiban agama mereka dengan
                ketenangan pikiran dan kenyamanan. Tim profesional kami yang
                berpengalaman memahami makna spiritual dari perjalanan ini dan
                berusaha untuk menyediakan layanan yang menghormati tradisi suci
                ini.
              </p>
              <p className="text-gray-700">
                Di Rasyiiqah tour & travel, kami memadukan nilai-nilai
                tradisional dengan standar layanan modern untuk menciptakan
                pengalaman ziarah yang mengesankan dan akan selalu Anda ingat
                seumur hidup.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="bg-gray-400 h-[400px] w-[600px] rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-green-600">
              Our Mission & Values
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Kami dipandu oleh komitmen kami terhadap keunggulan dan rasa
              hormat kami yang mendalam terhadap perjalanan suci Umroh dan Haji.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-shadow border-green-100 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-center">
                  Pelayanan Penuh Kasih Sayang
                </h3>
                <p className="text-center text-gray-700">
                  Kami memperlakukan setiap jamaah dengan penuh perhatian dan
                  rasa hormat, memahami makna spiritual yang mendalam dari
                  perjalanan mereka.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow border-green-100 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-center">
                  Keunggulan
                </h3>
                <p className="text-center text-gray-700">
                  Kami berupaya mencapai keunggulan dalam setiap aspek layanan
                  kami, mulai dari akomodasi hingga panduan dan dukungan.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow border-green-100 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-center">
                  Komunitas
                </h3>
                <p className="text-center text-gray-700">
                  Kami memupuk rasa persaudaraan di antara para jamaah,
                  menciptakan komunitas yang saling mendukung.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-green-600">
              Layanan Kita
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Kami menawarkan paket umroh dan haji yang lengkap yang dirancang
              untuk memenuhi kebutuhan semua jamaah.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 transition-shadow border rounded-lg hover:shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-2 text-green-600" />
                <h3 className="text-xl font-bold">Paket Umroh</h3>
              </div>
              <p className="text-gray-700">
                Paket Umroh lengkap sepanjang tahun dengan berbagai pilihan
                akomodasi yang sesuai dengan anggaran yang berbeda.
              </p>
            </div>

            <div className="p-6 transition-shadow border rounded-lg hover:shadow-md">
              <div className="flex items-center mb-4">
                <MapIcon className="w-6 h-6 mr-2 text-green-600" />
                <h3 className="text-xl font-bold">Guided Tours</h3>
              </div>
              <p className="text-gray-700">
                Pemandu ahli yang menyediakan konteks historis dan spiritual
                untuk meningkatkan pengalaman Umroh/Haji Anda.
              </p>
            </div>

            <div className="p-6 transition-shadow border rounded-lg hover:shadow-md">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 mr-2 text-green-600" />
                <h3 className="text-xl font-bold">Akomodasi Premium</h3>
              </div>
              <p className="text-gray-700">
                Akomodasi yang nyaman dan strategis, dekat dengan tempat suci
                untuk masa menginap yang damai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-green-600">Tim Kita</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Temui tim profesional kami yang berdedikasi yang berkomitmen untuk
              membuat perjalanan Umroh/Haji Anda berkesan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Irvan Alfajri",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Fatima Az zahrah",
                role: "Operations Manager",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Fadli Hidayatullah",
                role: "Head Guide",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Muhammad Iqbal",
                role: "Customer Relations",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[200px] w-[200px] mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white md:py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-green-600">
              Apa Kata Jamaah Kami
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Dengarkan dari mereka yang telah merasakan layanan kami secara
              langsung.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Niken Kenanga",
                location: "Bengkulu, Indonesia",
                quote:
                  " Rasyiiqah tour & travel membuat perjalanan umroh saya lancar dan memuaskan secara spiritual. Perhatian mereka terhadap detail dan pemandu yang berpengetahuan luas sangat meningkatkan pengalaman saya.",
              },
              {
                name: "Ummu Salamah",
                location: "Bengkulu, Indonesia",
                quote:
                  "Sebagai jemaah haji pertama kali, saya merasa gugup, tetapi tim di Rasyiiqah tour & travel mengurus semuanya. Orientasi pra-keberangkatan mereka sangat membantu.",
              },
              {
                name: "Imam Al faruq",
                location: "Bengkulu, Indonesia",
                quote:
                  "Akomodasi sangat baik dan berlokasi strategis. Saya telah merekomendasikan Rasyiiqah tour & travel kepada semua keluarga dan teman saya untuk perjalanan umroh mereka.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-green-100">
                <CardContent className="pt-6">
                  <div className="flex mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-700">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA  */}
      <section className="py-12 md:py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Siap Memulai Perjalanan Suci Anda?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Hubungi kami hari ini untuk mempelajari lebih lanjut tentang paket
            Umroh kami dan mulai merencanakan Umroh Anda.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="px-8 text-lg bg-green-600 hover:bg-green-700">
              Lihat Paket
            </Button>
            <Button
              variant="outline"
              className="px-8 text-lg text-green-600 border-green-600 hover:bg-green-50"
            >
              Kontak Kita
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
