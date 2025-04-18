import Banner from "@/components/landing/banner";
import Cta from "@/components/landing/cta";
import Footer2 from "@/components/landing/footer-2";
import Gallery from "@/components/landing/gallery";
import Header from "@/components/landing/header";
import JadwalKeberangkatan from "@/components/landing/jadwal-keberangkatan";
import News from "@/components/landing/news";
import Offer from "@/components/landing/offer";
import PaketUmroh from "@/components/landing/paket-umroh";
import ProdukKategori from "@/components/landing/produk-kategori";
import Testimoni from "@/components/landing/testimoni";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ProdukKategori />
      <Offer />
      <Testimoni />
      <JadwalKeberangkatan />
      <PaketUmroh />

      <Gallery />
      <News />
      <Cta />
      <Footer2 />
    </div>
  );
}
