import GaleriGrid from "@/components/galeri/galeri-grid";
import Layout from "@/components/layout";
import TestimonialCard from "@/components/testimoni/testimonial-card";

const TestimoniPage = () => {
  return (
    <Layout>
      <div className="container relative z-0 px-4 py-12 mx-auto mb-12 ">
        <div className="mb-12 ">
          <h1 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl md:text-5xl">
            Testimoni
          </h1>
          <p className="mt-4 text-lg text-gray-600 w-[365px]  md:w-[500px] md:text-xl">
            Cerita dan kesan dari para jamaah yang telah merasakan pengalaman
            ibadah umroh bersama kami. Semoga menjadi inspirasi bagi perjalanan
            Anda selanjutnya.
          </p>
        </div>

        <GaleriGrid />

        <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-3">
          <TestimonialCard name="Siti Aminah" videoId="oLbHRAGEnOc" />
          <TestimonialCard name="Siti Aminah" videoId="oLbHRAGEnOc" />
          <TestimonialCard name="Siti Aminah" videoId="oLbHRAGEnOc" />
        </div>
      </div>
    </Layout>
  );
};

export default TestimoniPage;
