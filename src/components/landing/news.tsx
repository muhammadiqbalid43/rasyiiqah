import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";

const News = () => {
  return (
    <div className="py-16  md:h-[500px]">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Artikel</h2>
          <Button variant="outline">Lihat Semua </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

const news = [
  {
    title: "Pembukaan Pendaftaran Umroh  2024",
    excerpt:
      "Kabar gembira bagi Anda yang ingin melaksanakan ibadah umroh di bulan Ramadhan 2024. Kami telah membuka pendaftaran dengan berbagai paket menarik.",
    date: "10 Januari 2024",
    category: "Pengumuman",
    image:
      "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Tips Persiapan Fisik Sebelum Berangkat Umroh",
    excerpt:
      "Persiapan fisik yang baik sangat penting untuk kelancaran ibadah umroh Anda. Berikut beberapa tips yang bisa Anda terapkan sebelum berangkat.",
    date: "5 Januari 2024",
    category: "Tips",
    image:
      "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Informasi Terbaru Visa Umroh 2024",
    excerpt:
      "Pemerintah Arab Saudi telah mengeluarkan kebijakan baru terkait visa umroh untuk tahun 2024. Simak informasi lengkapnya di sini.",
    date: "28 Desember 2023",
    category: "Informasi",
    image:
      "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
