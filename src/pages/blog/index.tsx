// import BlogCard from "@/components/blog/blog-card";
import BlogCard from "@/components/blog/blog-card";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, ChevronRightIcon, SearchIcon } from "lucide-react";

const BlogPage = () => {
  return (
    <>
      <Layout>
        <main>
          <section className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Travel & Tour Blog
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Temukan wawasan, kiat, dan kisah seputar umrah dan
                    perjalanan suci.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Cari Artikel..."
                      className="w-full pl-8 bg-white rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 ">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Artikel Pilihan
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    {" "}
                    Panduan dan cerita kami yang paling populer tentang umrah.
                  </p>
                </div>
              </div>

              <div className="grid items-start max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-2 lg:gap-12">
                <Card className="overflow-hidden">
                  <div>
                    <div className="bg-gray-400 w-[600px] h-[250px]"></div>
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
                <Card className="overflow-hidden">
                  <div>
                    <div className="bg-gray-400 w-[600px] h-[250px]"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>April 10, 2025</span>
                    </div>
                    <CardTitle className="text-2xl">
                      Waktu Terbaik untuk Melakukan Umrah: Panduan Musiman
                    </CardTitle>
                    <CardDescription>
                      Temukan keuntungan dan pertimbangan untuk setiap musim
                      saat merencanakan Umrah Anda.
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
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center justify-center mb-6 space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Artikel Terbaru
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Tetap ikuti panduan, kiat, dan cerita terbaru kami.
                  </p>
                </div>
              </div>

              <Tabs defaultValue="semua">
                <div className="flex justify-center">
                  <TabsList>
                    <TabsTrigger value="semua">Semua</TabsTrigger>
                    <TabsTrigger value="panduan">Panduan</TabsTrigger>
                    <TabsTrigger value="kiat">Kiat - Kiat</TabsTrigger>
                    <TabsTrigger value="cerita">Cerita</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="semua" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <BlogCard key={i} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="panduan" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <BlogCard key={i} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="kiat" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <BlogCard key={i} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="cerita" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <BlogCard key={i} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              <div className="flex justify-center mt-12">
                <Button variant="outline" className="gap-2">
                  Load More Articles
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </section>
          <section className="w-full py-12 text-white bg-green-600 md:py-24 lg:py-32">
            <div className="container px-4 mx-auto md:px-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Berlangganan Newsletter Kami
                </h2>
                <p className="text-green-100 md:text-xl">
                  Dapatkan informasi terkini, tips, dan penawaran khusus untuk
                  paket umrah yang dikirimkan ke email Anda.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Input
                  placeholder="Masukan email kamu"
                  className="text-white border-green-500 bg-white/10 placeholder:text-green-200"
                />
                <Button className="text-green-600 bg-white hover:bg-green-100">
                  Langganan
                </Button>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default BlogPage;
