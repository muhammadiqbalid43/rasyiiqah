import Layout from "@/components/layout";

import { CalendarIcon } from "lucide-react";

const BlogDetail = () => {
  return (
    <>
      <Layout>
        <main className="container px-4 py-8 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Blog Header */}
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Perjalanan ke Tanah Suci: Pengalaman Umrah Transformatif Saya
              </h1>

              <div className="flex items-center mb-6 space-x-4 text-gray-600">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>April 12, 2023 - 20.49 WIB</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
              <img
                src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="galeri image"
                className="object-cover w-full h-[1200px] rounded-t-xl "
              />
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
                  <img
                    src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="galeri image"
                    className="object-cover w-full h-[600px] rounded-t-xl "
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg h-60">
                  <img
                    src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="galeri image"
                    className="object-cover w-full h-[600px] rounded-t-xl "
                  />
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
                <img
                  src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="galeri image"
                  className="object-cover w-full h-[800px] rounded-t-xl "
                />
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
          </div>
        </main>
      </Layout>
    </>
  );
};

export default BlogDetail;
