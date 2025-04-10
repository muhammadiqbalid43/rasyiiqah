import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import Gallery from "@/components/landing/gallery";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import JadwalKeberangkatan from "@/components/landing/jadwal-keberangkatan";
import News from "@/components/landing/news";
import PaketUmroh from "@/components/landing/paket-umroh";
import Testimoni from "@/components/landing/testimoni";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <JadwalKeberangkatan />
      <PaketUmroh />
      <Testimoni />
      <Gallery />
      <News />
      <Cta />
      <Footer />
    </div>
  );
}
