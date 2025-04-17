import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative -z-50 w-full h-[500px] md:h-[600px]">
      <div className="bg-gray-400 w-full h-[600px]"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center md:p-8">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Perjalanan Suci Menuju Baitullah
        </h1>
        <p className="max-w-2xl mb-8 text-lg text-white md:text-xl">
          Layanan umroh dan haji dengan pengalaman spiritual yang tak terlupakan
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Konsultasi Sekarang
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black border-white hover:bg-white/10"
          >
            Lihat Paket
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
