import { StarIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Testimoni = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Testimoni</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Apa kata jamaah yang telah menggunakan layanan kami
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-muted-foreground">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
                    {/* <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    /> */}
                    <div className="w-[40px] h-[40px] bg-slate-400"></div>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;

const testimonials = [
  {
    name: "Bapak Ahmad Sudrajat",
    trip: "Umroh Reguler, Februari 2023",
    rating: 5,
    text: "Alhamdulillah, perjalanan umroh bersama travel ini sangat berkesan. Pelayanannya sangat baik dan pembimbingnya sangat sabar dalam mengarahkan jamaah.",
  },
  {
    name: "Ibu Siti Aminah",
    trip: "Umroh Plus Turki, Januari 2023",
    rating: 5,
    text: "Sangat puas dengan pelayanan yang diberikan. Hotel yang disediakan sangat nyaman dan dekat dengan Masjidil Haram. Tour ke Turki juga sangat menyenangkan.",
  },
  {
    name: "Bapak Hendra Wijaya",
    trip: "Umroh VIP, Desember 2022",
    rating: 4,
    text: "Pelayanan VIP yang diberikan sesuai dengan ekspektasi. Pembimbing sangat membantu dan menguasai ilmu manasik. Sangat direkomendasikan.",
  },
];
