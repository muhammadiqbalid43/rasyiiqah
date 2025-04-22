import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container px-4 py-12 mx-auto">
        {/* Tentang Kami */}
        <div className="grid gap-8 mb-24 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-600">Tentang Kami</h2>
            <p className="text-muted-foreground">
              PT. Rasyiiqah Tour Dan Travel adalah biro perjalanan wisata
              (travel) yang diresmikan pada tanggal 07 Februari 2025 dan
              berkantor pusat di Kota Bengkulu. Perusahaan ini dirintis oleh
              salah satu Dosen Poltekkes Kemenkes Kota Bengkulu. Perusahaan ini
              didirikan dengan maksud dan tujuan untuk memberi kenyamanan dan
              jasa pada calon Jemaah haji dan umroh.
            </p>
            <p className="text-muted-foreground">
              Seperti layanan pelanggan untuk paket wisata nasional dan
              internasional. Perusahaan ini resmi perizinan berusaha berbasis
              risiko Nomor Induk Berusaha: 0711240056813.
            </p>
            <Button asChild className="mt-4 bg-green-600 hover:bg-green-700">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-lg">
            <img
              src="/logo-travel.jpg"
              alt="logo"
              className="w-[800px] h-[270px] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* VISI MISI */}
        <div className="grid gap-8 mb-24 md:grid-cols-2">
          <div className="p-6 space-y-6 rounded-lg bg-gray-50">
            <h2 className="text-3xl font-bold text-green-600">Visi</h2>
            <p className="text-lg text-gray-700 text-muted-foreground">
              Berupaya menjadi perusahaan yang terbaik, amanah, nyaman, bahagia,
              profesional dan memberikan pelayanan yang tulus dan ikhlas kepada
              pelanggan secara konsisten sehingga bisa menjadi parther bagi
              pelanggan dalam perjalanan wisata.
            </p>
          </div>
          <div className="p-6 space-y-6 rounded-lg bg-gray-50">
            <h2 className="text-3xl font-bold text-green-600">Misi</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-primary">•</span>
                <span className="text-gray-700">
                  Memberikan pelayanan yang terbaik dengan fasilitas terbaik
                  dalam setiap perjalanan wisata.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-primary">•</span>
                <span className="text-gray-700">
                  Memberikan solusi dalam pemilihan paket Umroh dan Haji serta
                  paket wisata domestik dan Mancanegara.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-primary">•</span>
                <span className="text-gray-700">
                  Mengantar jamaah ke Tanah Suci dengan kenyamanan dan
                  ketenangan dalam perjalannya.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legalitas & Sertifikat */}
        <div className="">
          <h2 className="mb-6 text-3xl font-bold text-green-600">Sertifikat</h2>
          <p className="max-w-3xl mb-8 text-muted-foreground">
            Kami adalah perusahaan travel Umroh yang resmi dan terdaftar di
            Kementerian Agama Republik Indonesia. Berikut adalah sertifikat dan
            izin resmi yang kami miliki.
          </p>
        </div>

        <div className="grid gap-6 mb-24 md:grid-cols-2 lg:grid-cols-3">
          <Card className="h-[550px]">
            <CardContent className="p-6">
              <div className="mb-4  w-full h-[500px]  rounded-md bg-muted">
                <img
                  src="/sertifikat.jpeg"
                  alt="sertifikat"
                  className="w-full h-[500px] object-contain rounded-md"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="h-[550px]">
            <CardContent className="p-6">
              <div className="mb-4  w-full h-[500px]  rounded-md bg-muted">
                <img
                  src="/sertifikat.jpeg"
                  alt="sertifikat"
                  className="w-full h-[500px] object-contain rounded-md"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="h-[550px]">
            <CardContent className="p-6">
              <div className="mb-4  w-full h-[500px]  rounded-md bg-muted">
                <img
                  src="/sertifikat.jpeg"
                  alt="sertifikat"
                  className="w-full h-[500px] object-contain rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Kantor kami */}
        <div className="">
          <h2 className="mb-6 text-3xl font-bold text-green-600">
            Kantor Kami
          </h2>
        </div>

        <div className="grid gap-6 mb-24 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="w-full mb-4 rounded-md aspect-video bg-muted">
                <img
                  src="/img1.jpg"
                  alt="kantor"
                  className="object-cover rounded-md w-full h-[500px]"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="w-full mb-4 rounded-md aspect-video bg-muted">
                <img
                  src="/img2.jpg"
                  alt="kantor"
                  className="object-cover rounded-md w-full h-[500px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management */}
        <div>
          <h2 className="mb-6 text-3xl font-bold text-green-600">
            Tim Management
          </h2>
          <p className="max-w-3xl mb-8 text-muted-foreground">
            Dipimpin oleh para profesional yang berpengalaman dalam industri
            travel dan umroh, tim management kami berkomitmen untuk memberikan
            pelayanan terbaik kepada jamaah.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <Card className="overflow-hidden">
            <div className="w-full overflow-hidden aspect-square h-[450px] md:h-[400px]">
              <img
                src="/1.jpeg"
                alt="komisaris"
                className="w-[400px] h-[450px] md:h-[400px] object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-bold">Komisaris Utama</h3>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="w-full overflow-hidden aspect-square h-[450px] md:h-[400px]">
              <img
                src="/2.png"
                alt="komisaris"
                className="w-[400px] h-[450px] md:h-[400px] object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-bold">Komisaris</h3>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="w-full overflow-hidden aspect-square h-[450px] md:h-[400px]">
              <img
                src="/3.jpeg"
                alt="komisaris"
                className="w-[400px] h-[450px] md:h-[400px] object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-bold">Direktur Utama</h3>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="w-full overflow-hidden aspect-square h-[450px] md:h-[400px]">
              <img
                src="/4.jpeg"
                alt="komisaris"
                className="w-[400px] h-[450px] md:h-[400px] object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-bold">Direktur</h3>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="w-full overflow-hidden aspect-square h-[450px] md:h-[400px]">
              <img
                src="/5.jpeg"
                alt="komisaris"
                className="w-[400px] h-[450px] md:h-[400px] object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-lg font-bold">Wakil Direktur</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
