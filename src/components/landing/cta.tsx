import { Button } from "../ui/button";

const Cta = () => {
  return (
    <div className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight ">
          Siap Untuk Memulai Perjalanan Umroh?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Konsultasikan kebutuhan perjalanan umroh Anda dengan tim kami yang
          berpengalaman
        </p>
        <div className="flex items-center justify-center gap-4 ">
          <Button size="lg" variant="secondary" className="min-w-[150px]">
            Hubungi Kami
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[150px] border-white text-black hover:bg-white/10"
          >
            Lihat Paket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
