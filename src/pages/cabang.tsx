import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { MapPin, User } from "lucide-react";
import Image from "next/image";

const branchOffices = [
  {
    cabang: "Curup",
    address: "Jl. Urip Sumoharjo No. 56, Makassar, Sulawesi Selatan 90232",
    owner: "Fadli Hidayatullah",
    image:
      "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    cabang: "Curup",
    address: "Jl. Urip Sumoharjo No. 56, Makassar, Sulawesi Selatan 90232",
    owner: "Fadli Hidayatullah",
    image:
      "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    cabang: "Curup",
    address: "Jl. Urip Sumoharjo No. 56, Makassar, Sulawesi Selatan 90232",
    owner: "Fadli Hidayatullah",
    image:
      "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    cabang: "Curup",
    address: "Jl. Urip Sumoharjo No. 56, Makassar, Sulawesi Selatan 90232",
    owner: "Fadli Hidayatullah",
    image:
      "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    cabang: "Curup",
    address: "Jl. Urip Sumoharjo No. 56, Makassar, Sulawesi Selatan 90232",
    owner: "Fadli Hidayatullah",
    image:
      "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    cabang: "Curup",
    address: "Jl. Urip Sumoharjo No. 56, Makassar, Sulawesi Selatan 90232",
    owner: "Fadli Hidayatullah",
    image:
      "https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const KantorCabangPage = () => {
  return (
    <Layout>
      <div className="container px-4 py-12 mx-auto mb-12">
        <div className="mb-12 ">
          <h1 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl md:text-5xl">
            Cabang Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600 w-[365px]  md:w-[500px] md:text-xl">
            Temukan kantor cabang kami di berbagai kota untuk memudahkan Anda
            mendapatkan informasi dan layanan Umroh terbaik
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {branchOffices.map((office, index) => (
            <div
              key={index}
              className="flex h-[430px] md:h-[270px]  md:rounded-r-2xl border-[1px] flex-col overflow-hidden bg-white  shadow-md w-[360px] md:w-[400px]  md:flex-row"
            >
              <div className="relative h-64 md:w-1/3 md:h-auto">
                <Image
                  src={office.image}
                  alt={office.owner}
                  fill
                  className="object-cover md:w-[170px]"
                />
                {/* <div className="w-full h-[220px] md:h-[272px] md:w-[170px] bg-gray-500 "></div> */}
              </div>
              <div className="p-4 md:p-6 md:w-2/3">
                <h2 className="mb-2 text-2xl font-bold text-green-800">
                  {office.cabang}
                </h2>

                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{office.owner}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-3">
                  <Button className="bg-green-600">Hubungi</Button>
                  <Button>Maps</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default KantorCabangPage;
