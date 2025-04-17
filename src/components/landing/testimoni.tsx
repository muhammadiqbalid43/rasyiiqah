import { Star } from "lucide-react";

const Testimoni = () => {
  return (
    <section className="px-4 py-16 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Testimoni Jamaah
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md md:flex-row"
            >
              <div className="flex-shrink-0">
                <div className="bg-gray-400 w-[100px] h-[100px] rounded"></div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-gray-700">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.package}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-2xl font-bold">Video Testimoni</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="relative aspect-video">
                  <div className="bg-gray-400 w-full h-[220px] rounded"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80">
                      <div className="w-0 h-0 ml-1 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-emerald-600"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{video.title}</h4>
                  <p className="text-sm text-gray-500">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;

const testimonials = [
  {
    name: "Muhammad Iqbal",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Alhamdulillah, perjalanan umroh bersama travel ini sangat berkesan. Pelayanan yang diberikan sangat baik, pembimbing yang sabar dan hotel yang nyaman dekat dengan Masjidil Haram.",
    package: "Umroh Reguler 2023",
  },
  {
    name: "Siti Aminah",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Pengalaman pertama umroh dan sangat puas dengan pelayanan yang diberikan. Semua diurus dengan baik dari awal keberangkatan hingga kepulangan. Insya Allah akan menggunakan jasa travel ini lagi.",
    package: "Umroh Plus Turki 2023",
  },
  {
    name: "Fadli Hidayatullah",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Pelayanan yang sangat memuaskan, meskipun ada sedikit kendala di akomodasi tapi cepat diatasi oleh tim. Pembimbing sangat kompeten dan sabar membimbing kami.",
    package: "Umroh Ramadhan 2023",
  },
  {
    name: "Fatimah Azzahra",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Alhamdulillah bisa berangkat haji dengan travel ini. Pelayanan sangat baik, hotel dekat dengan Masjidil Haram, makanan enak dan halal. Sangat direkomendasikan!",
    package: "Haji Plus 2022",
  },
];

const videoTestimonials = [
  {
    title: "Testimoni Umroh Reguler 2023",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "3:45",
  },
  {
    title: "Pengalaman Haji Plus 2022",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "5:20",
  },
  {
    title: "Tour Turki Bersama Keluarga",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "4:15",
  },
];
