import FloatingWhatsapp from "@/components/floating-whatsapp";
import Banner from "@/components/landing/banner";
import Cta from "@/components/landing/cta";
import Footer2 from "@/components/landing/footer-2";
import Gallery from "@/components/landing/gallery";
import Header from "@/components/landing/header";
import News from "@/components/landing/news";
import Offer from "@/components/landing/offer";
import ProdukKategori from "@/components/landing/produk-kategori";
import Testimoni from "@/components/landing/testimoni";

export default function Home() {
  return (
    <div>
      <Header />
      <FloatingWhatsapp
        phoneNumber="+6281234567890"
        message="Hello, I have a question about your services."
      />
      <Banner />
      <ProdukKategori />
      <Offer />
      <Testimoni />

      <Gallery />
      <News />
      <Cta />
      <Footer2 />
    </div>
  );
}
