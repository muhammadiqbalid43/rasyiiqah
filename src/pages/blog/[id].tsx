import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, Clock, Share2, User } from "lucide-react";
import Link from "next/link";

const BlogDetail = () => {
  return (
    <>
      <Layout>
        <main className="container px-4 py-8 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-green-700">
                Home
              </Link>{" "}
              &gt;{" "}
              <Link href="#" className="hover:text-green-700">
                Stories
              </Link>{" "}
              &gt; <span className="text-gray-700">Perjalanan Umroh</span>
            </div>

            {/* Blog Header */}
            <div className="mb-8">
              <Badge className="mb-4 text-green-800 bg-green-100 hover:bg-green-200">
                Umrah Experience
              </Badge>
              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Perjalanan ke Tanah Suci: Pengalaman Umrah Transformatif Saya
              </h1>

              <div className="flex items-center mb-6 space-x-4 text-gray-600">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>April 12, 2023</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>Muhammad Iqbal</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
              <div className="bg-gray-400 w-[800px] h-[1200px] rounded-xl"></div>
            </div>

            {/* Author Card */}
            <div className="flex items-center p-4 mb-8 space-x-4 rounded-lg bg-gray-50">
              <Avatar className="w-12 h-12 border-2 border-green-500">
                <AvatarImage
                  src="/placeholder.svg?height=100&width=100"
                  alt="Ahmad Fauzi"
                />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-900">Muhammad Iqbal</p>
                <p className="text-sm text-gray-500">
                  Travel Writer & Umrah Guide
                </p>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Blog Content */}
            <div className="mb-12 max-w-none">
              <p className="mb-6 text-lg leading-relaxed">
                Bismillahirrahmanirrahim. Perjalanan umrah bukan hanya
                perjalanan fisik, tetapi pengembaraan spiritual yang mengubah
                hati dan jiwa. Saat saya memulai perjalanan penuh berkah ini
                dengan paket premium Umrah Travel, saya mulai merasakan dampak
                mendalam yang akan ditimbulkannya dalam hidup saya.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
                Preparation and Departure
              </h2>
              <p className="mb-6">
                Perjalanan kami diawali dengan sesi orientasi komprehensif di
                mana pemandu kami yang berpengetahuan luas, Ustadz Hasan,
                menjelaskan ritual dan makna spiritual umrah. Tim Travel Umrah
                memastikan semua dokumen kami lengkap dan menyediakan
                perlengkapan perjalanan khusus yang berisi pakaian ihram,
                sajadah, dan panduan penting.
              </p>
              <p className="mb-6">
                Kami berangkat dari Bandara Internasional Soekarno-Hatta dengan
                penerbangan langsung ke Jeddah. Kenyamanan layanan maskapai
                penerbangan premium memungkinkan kami untuk beristirahat dan
                mempersiapkan diri secara spiritual untuk perjalanan suci yang
                akan datang.
              </p>

              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="relative overflow-hidden rounded-lg h-60">
                  {/* <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Departure from airport"
                    fill
                    className="object-cover"
                  /> */}
                  <div className="h-[600px] w-[800px] bg-gray-400"></div>
                </div>
                <div className="relative overflow-hidden rounded-lg h-60">
                  {/* <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Group photo before departure"
                    fill
                    className="object-cover"
                  /> */}
                  <div className="h-[600px] w-[800px] bg-gray-400"></div>
                </div>
              </div>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
                Arrival in Madinah
              </h2>
              <p className="mb-6">
                Our journey began in the city of the Prophet ﷺ, Madinah. The
                moment we entered the city, a sense of tranquility washed over
                us. Our accommodation at the 5-star Al Majeedi ARAC Resort was
                just steps away from Masjid Nabawi, allowing us to pray the five
                daily prayers in the Prophet&apos;s mosque.
              </p>
              <p className="mb-6">
                During our stay in Madinah, we visited historical sites
                including Quba Mosque, the first mosque built in Islam, and
                Mount Uhud, where the famous battle took place. Our guide
                provided rich historical context that brought these sacred
                places to life.
              </p>

              <div className="relative w-full h-[300px] rounded-xl overflow-hidden my-8">
                {/* <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Masjid Nabawi"
                  fill
                  className="object-cover"
                /> */}
                <div className="h-[800px] w-[1200px] bg-gray-400"></div>
              </div>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
                The Sacred Journey to Makkah
              </h2>
              <p className="mb-6">
                After four blessed days in Madinah, we journeyed to Makkah.
                Before entering the city, we stopped at Miqat in Dhul Hulaifah
                to enter the state of ihram and declare our intention for Umrah.
                The collective talbiyah echoing from our group created a
                powerful spiritual atmosphere.
              </p>
              <p className="mb-6">
                Our first glimpse of the Kaaba was overwhelming. Tears flowed
                freely as we joined the tawaf around the House of Allah. The
                smooth organization by Umrah Travel meant we could focus
                entirely on our worship without logistical concerns.
              </p>

              <blockquote className="p-4 my-8 italic border-l-4 border-green-500 bg-green-50">
                &quot;And proclaim to mankind the Hajj. They will come to you on
                foot and on every lean camel; they will come from every deep and
                distant mountain highway.&quot; - Quran 22:27
              </blockquote>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
                Spiritual Highlights
              </h2>
              <p className="mb-6">
                The most profound moments of my journey included:
              </p>
              <ul className="pl-6 mb-6 list-disc">
                <li className="mb-2">
                  Praying Fajr in Masjid al-Haram and witnessing the sunrise
                  over the Kaaba
                </li>
                <li className="mb-2">
                  Drinking Zamzam water directly from the source
                </li>
                <li className="mb-2">
                  The peaceful hours spent in i&apos;tikaf (spiritual retreat)
                  in both holy mosques
                </li>
                <li className="mb-2">
                  Climbing Mount Thawr where the Prophet ﷺ and Abu Bakr hid
                  during their migration
                </li>
                <li>
                  The brotherhood and sisterhood formed with fellow pilgrims
                  from around the world
                </li>
              </ul>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
                The Umrah Travel Difference
              </h2>
              <p className="mb-6">
                What set this journey apart was the exceptional service provided
                by Umrah Travel. From the knowledgeable guides to the
                comfortable accommodations and seamless transportation, every
                aspect was designed to maximize our spiritual experience.
              </p>
              <p className="mb-6">
                The premium package included special access to prayer areas
                closer to the Kaaba and exclusive lectures by scholars who
                accompanied our group. The dedicated support staff was always
                available to assist with any needs or questions.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
                Return and Reflection
              </h2>
              <p className="mb-6">
                As we prepared to return home, there was a bittersweet feeling.
                We were leaving these sacred lands but carrying their blessings
                with us. The farewell tawaf was emotional as we made our final
                prayers at the Kaaba.
              </p>
              <p>
                This Umrah journey has left an indelible mark on my heart. The
                spiritual rejuvenation, the knowledge gained, and the
                brotherhood formed have enriched my life in ways I couldn&apos;t
                have imagined. I am grateful to Umrah Travel for facilitating
                this transformative experience and look forward to returning
                again, inshaAllah.
              </p>
            </div>

            {/* Package Highlight */}
            <Card className="mb-12 border-green-200 bg-green-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800">
                  Premium Umrah Package
                </CardTitle>
                <CardDescription>
                  Experience the same journey with our premium 12-day package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-2 mb-4 md:grid-cols-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                    5-star hotels near Haram
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                    Direct flights with premium airlines
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                    Experienced scholars as guides
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                    Ziarah to all historical sites
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                    All-inclusive meals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                    VIP transportation
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-green-800">
                      RP. 42.000.000
                    </span>
                    <span className="text-gray-500"> / person</span>
                  </div>
                  <Button className="bg-green-700 hover:bg-green-800">
                    View Package
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Stories */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Related Stories
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <Card
                    key={item}
                    className="overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <div className="relative h-48">
                      {/* <Image
                        src={`/placeholder.svg?height=400&width=600`}
                        alt="Related story"
                        fill
                        className="object-cover"
                      /> */}

                      <div className="h-[200px] w-[600px] bg-gray-400"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <Badge className="mb-2 text-green-800 bg-green-100 hover:bg-green-200 w-fit">
                        Umrah
                      </Badge>
                      <CardTitle className="text-lg">
                        First-Time Umrah: A Family Journey
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        Our family of five embarked on our first Umrah journey
                        together, creating memories that will last a lifetime...
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        <span>March 15, 2023</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="p-8 mb-12 text-center text-white bg-green-800 rounded-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Siap untuk Perjalanan Spiritual Anda?
              </h3>
              <p className="max-w-2xl mx-auto mb-6">
                Biarkan kami memandu Anda menjalani pengalaman umrah yang
                transformatif dengan paket yang disesuaikan dengan kebutuhan dan
                preferensi Anda.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="text-green-800 bg-white hover:bg-green-100">
                  Lihat Semua Paket
                </Button>
                <Button
                  variant="outline"
                  className="text-black border-white hover:bg-green-700"
                >
                  Contact a Consultant
                </Button>
              </div>
            </div>

            {/* Comments Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Komentar (12)
                </h3>
                <Button variant="outline">Add Your Story</Button>
              </div>

              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="pb-6 border-b">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="/placeholder.svg?height=100&width=100"
                          alt="User"
                        />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">Fatima Zahra</h4>
                          <span className="text-sm text-gray-500">
                            2 days ago
                          </span>
                        </div>
                        <p className="mb-3 text-gray-600">
                          MasyaAllah, kisahmu membuatku meneteskan air mata. Aku
                          berencana untuk melakukan umrah pertamaku bulan depan
                          dan kisah terperincimu telah membantuku mempersiapkan
                          diri secara mental dan spiritual. Terima kasih telah
                          berbagi!
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="-ml-2 text-green-700 hover:text-green-800 hover:bg-green-50"
                        >
                          Balas
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default BlogDetail;
