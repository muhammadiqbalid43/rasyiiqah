import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Umroh Ramadhan 2025",
    description:
      "Rasakan pengalaman ibadah umroh di bulan suci Ramadhan dengan paket khusus kami",
    image:
      "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Lihat Paket",
    link: "/packages/ramadhan",
  },
  {
    id: 2,
    title: "Umroh Plus Turki",
    description:
      "Nikmati perjalanan spiritual ke tanah suci dilanjutkan dengan wisata ke Turki",
    image:
      "https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Pesan Sekarang",
    link: "/packages/turkey",
  },
  {
    id: 3,
    title: "Umroh Keluarga",
    description:
      "Paket spesial untuk keluarga dengan harga terjangkau dan fasilitas terbaik",
    image:
      "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Info Lebih Lanjut",
    link: "/packages/family",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden sm:h-[600px]">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="object-cover w-full"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white md:items-start md:px-16 md:text-left">
            {/* <h1 className="mb-2 text-3xl font-bold md:text-5xl">
              {banner.title}
            </h1>
            <p className="max-w-md mb-6 text-lg md:text-xl">
              {banner.description}
            </p> */}
            {/* <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href={banner.link}>{banner.cta}</Link>
            </Button> */}
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute z-10 text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/30 hover:bg-black/50"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute z-10 text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/30 hover:bg-black/50"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute z-10 flex gap-2 -translate-x-1/2 bottom-6 left-1/2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
