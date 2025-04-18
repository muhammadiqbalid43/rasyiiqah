import { Button } from "../ui/button";
import GaleriGrid from "../galeri/galeri-grid";
import TestimonialCard from "../testimoni/testimonial-card";

const Testimoni = () => {
  return (
    <section className="px-4 py-16 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Hangat dan spiritual
          </h2>
          <Button variant="outline">Lihat Semua</Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3"></div>
        <GaleriGrid />
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-3">
            <TestimonialCard name="Siti Aminah" videoId="oLbHRAGEnOc" />
            <TestimonialCard name="Siti Aminah" videoId="oLbHRAGEnOc" />
            <TestimonialCard name="Siti Aminah" videoId="oLbHRAGEnOc" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
