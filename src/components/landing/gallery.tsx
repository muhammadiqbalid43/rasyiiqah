import { Button } from "../ui/button";

const Gallery = () => {
  return (
    <div className="py-16" id="gallery">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Galeri
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Momen-momen berharga dari perjalanan umroh kami
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group aspect-square"
            >
              {/* <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              /> */}
              <div className="w-[300px] h-[300px] bg-gray-400"></div>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-center text-white">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">Lihat Semua Foto</Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const gallery = [
  {
    image: "/placeholder.svg?height=300&width=300",
    alt: "Jamaah di depan Kaabah",
    caption: "Jamaah di depan Kaabah",
  },

  {
    image: "/placeholder.svg?height=300&width=300",
    alt: "Jamaah di Jabal Rahmah",
    caption: "Ziarah ke Jabal Rahmah",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    alt: "Jamaah di Masjid Quba",
    caption: "Kunjungan ke Masjid Quba",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    alt: "Jamaah di Madinah",
    caption: "Suasana di Madinah",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    alt: "Jamaah di Istanbul",
    caption: "Tour di Blue Mosque, Istanbul",
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    alt: "Jamaah di Makkah",
    caption: "Pemandangan Makkah",
  },
];
