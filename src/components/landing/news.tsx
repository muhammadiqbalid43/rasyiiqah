import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";

const News = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Berita</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Informasi terbaru seputar umroh dan layanan kami
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="overflow-hidden aspect-video">
                {/* <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                /> */}
                <div className="w-[400px] h-[225px] bg-gray-500"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Baca Selengkapnya
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline">Lihat Semua Berita</Button>
        </div>
      </div>
    </div>
  );
};

export default News;

const news = [
  {
    title: "Pembukaan Pendaftaran Umroh Ramadhan 2024",
    excerpt:
      "Kabar gembira bagi Anda yang ingin melaksanakan ibadah umroh di bulan Ramadhan 2024. Kami telah membuka pendaftaran dengan berbagai paket menarik.",
    date: "10 Januari 2024",
    category: "Pengumuman",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "Tips Persiapan Fisik Sebelum Berangkat Umroh",
    excerpt:
      "Persiapan fisik yang baik sangat penting untuk kelancaran ibadah umroh Anda. Berikut beberapa tips yang bisa Anda terapkan sebelum berangkat.",
    date: "5 Januari 2024",
    category: "Tips",
    image: "/placeholder.svg?height=225&width=400",
  },
  {
    title: "Informasi Terbaru Visa Umroh 2024",
    excerpt:
      "Pemerintah Arab Saudi telah mengeluarkan kebijakan baru terkait visa umroh untuk tahun 2024. Simak informasi lengkapnya di sini.",
    date: "28 Desember 2023",
    category: "Informasi",
    image: "/placeholder.svg?height=225&width=400",
  },
];
