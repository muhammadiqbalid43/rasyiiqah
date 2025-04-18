import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, ChevronRightIcon } from "lucide-react";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <main>
          <section className="w-full py-8  h-[220px]">
            <div className="container px-4 mx-auto md:px-6">
              <div className="mb-12 ">
                <h1 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl md:text-5xl">
                  Artikel
                </h1>
                <p className="mt-4 text-lg text-gray-600 w-[365px]  md:w-[500px] md:text-xl">
                  Temukan berbagai artikel seputar persiapan umroh, tips
                  perjalanan, hingga inspirasi spiritual untuk menambah wawasan
                  Anda sebelum berangkat ke Tanah Suci.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full ">
            <div className="container px-4 mx-auto md:px-6">
              <div className="grid items-start grid-cols-1 py-12 mx-auto gap-y-10 md:gap-6 md:grid-cols-3 ">
                <Card className="overflow-hidden w-[360px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover w-full h-[272px] rounded-t-xl "
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>April 15, 2025</span>
                    </div>
                    <CardTitle className="text-2xl">
                      Persiapan Umrah Pertama Anda: Panduan Lengkap
                    </CardTitle>
                    <CardDescription>
                      Segala sesuatu yang perlu Anda ketahui sebelum memulai
                      perjalanan suci Anda ke Mekkah.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden w-[360px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover w-full h-[272px] rounded-t-xl "
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>April 15, 2025</span>
                    </div>
                    <CardTitle className="text-2xl">
                      Persiapan Umrah Pertama Anda: Panduan Lengkap
                    </CardTitle>
                    <CardDescription>
                      Segala sesuatu yang perlu Anda ketahui sebelum memulai
                      perjalanan suci Anda ke Mekkah.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden w-[360px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover w-full h-[272px] rounded-t-xl "
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>April 15, 2025</span>
                    </div>
                    <CardTitle className="text-2xl">
                      Persiapan Umrah Pertama Anda: Panduan Lengkap
                    </CardTitle>
                    <CardDescription>
                      Segala sesuatu yang perlu Anda ketahui sebelum memulai
                      perjalanan suci Anda ke Mekkah.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden w-[360px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover w-full h-[272px] rounded-t-xl "
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>April 15, 2025</span>
                    </div>
                    <CardTitle className="text-2xl">
                      Persiapan Umrah Pertama Anda: Panduan Lengkap
                    </CardTitle>
                    <CardDescription>
                      Segala sesuatu yang perlu Anda ketahui sebelum memulai
                      perjalanan suci Anda ke Mekkah.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden w-[360px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover w-full h-[272px] rounded-t-xl "
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>April 15, 2025</span>
                    </div>
                    <CardTitle className="text-2xl">
                      Persiapan Umrah Pertama Anda: Panduan Lengkap
                    </CardTitle>
                    <CardDescription>
                      Segala sesuatu yang perlu Anda ketahui sebelum memulai
                      perjalanan suci Anda ke Mekkah.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden w-[360px]">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="galeri image"
                      className="object-cover w-full h-[272px] rounded-t-xl "
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>April 15, 2025</span>
                    </div>
                    <CardTitle className="text-2xl">
                      Persiapan Umrah Pertama Anda: Panduan Lengkap
                    </CardTitle>
                    <CardDescription>
                      Segala sesuatu yang perlu Anda ketahui sebelum memulai
                      perjalanan suci Anda ke Mekkah.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Baca Selengkapnya
                      <ChevronRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default BlogPage;
