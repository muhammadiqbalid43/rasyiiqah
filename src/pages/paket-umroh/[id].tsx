import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";

const PaketUmrohDetail = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-14 mb-9">
        <div className="flex flex-col items-start justify-center gap-6 md:flex md:flex-row">
          <div>
            <img
              src="https://storage.googleapis.com/muslimpergi/uploads/listing/pict/6733/syawal_2026.jpg"
              alt="image"
              className="w-[400px]"
            />
          </div>
          <div>
            <div className="w-[390px] md:w-[900px] p-6 mx-auto space-y-4 text-gray-800 bg-white shadow-lg rounded-2xl">
              <h2 className="text-xl font-extrabold text-green-600 md:text-5xl">
                PAKET UMROH (SYAWAL) 2026
              </h2>
              <p className="font-medium ">
                Keberangkatan:{" "}
                <span className="font-semibold text-red-600">
                  28 Maret 2026
                </span>
              </p>

              <div>
                <h3 className="text-lg font-semibold">PROGRAM 9 HARI</h3>
                <p>🛫 Qatar / Oman / Setaraf</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">HOTEL</h3>
                <ul className="ml-5 list-disc">
                  <li>🏨 Mekkah ⭐️4 — Maysan Almaqom / Setaraf</li>
                  <li>🏨 Madinah ⭐️3 — Jawharat Alrosyid / Setaraf</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Paket Kamar :</h3>
                <ul className="ml-5 space-y-1">
                  <li>
                    Quad :{" "}
                    <span className="font-bold text-green-600">
                      Rp.27.900.000
                    </span>
                  </li>
                  <li>
                    Triple :{" "}
                    <span className="font-bold text-green-600">
                      Rp.29.100.000
                    </span>
                  </li>
                  <li>
                    Double :{" "}
                    <span className="font-bold text-green-600">
                      Rp.30.300.000
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Keunggulan/Kelebihan:</h3>
                <ul className="ml-5 list-disc">
                  <li>✅ Plus City Tour Thaif</li>
                  <li>✅ Free Tahallul</li>
                  <li>✅ Nasi Unta Al Romansiah & Albaik</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-100 rounded-md">
                <p className="font-bold text-yellow-800">
                  📣 Kuota Terbatas, Jangan Sampai Kehabisan!
                </p>
              </div>

              <div className="space-y-1">
                <p>💬 Konsultasi GRATIS:</p>
                <p>
                  🌐 Info lengkap:{" "}
                  <a
                    href="https://www.rassiqah.travel"
                    className="text-blue-600 underline"
                  >
                    www.rasiiqah.travel
                  </a>
                </p>
              </div>

              <div className="italic font-semibold text-center text-gray-700">
                🕋 rasiiqah – “Ibadah Mudah, Sesuai Syariah”
              </div>
              <p className="text-sm text-center text-gray-500">
                🔖 Izin Umrah: 183/2020 | Izin Haji: 693/2020
              </p>

              <div>
                <h3 className="text-lg font-semibold">Harga Termasuk:</h3>
                <ul className="ml-5 list-disc">
                  <li>☑️ Tiket Pesawat PP</li>
                  <li>☑️ Manasik Umrah</li>
                  <li>☑️ Perlengkapan (Non Koper)</li>
                  <li>☑️ Visa</li>
                  <li>☑️ Handling Bandara + Airport Tax</li>
                  <li>☑️ Hotel di Saudi (Sesuai Itinerary)</li>
                  <li>☑️ Transportasi BUS di Saudi Full AC</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Harga Tidak Termasuk:</h3>
                <ul className="ml-5 text-red-600 list-disc">
                  <li>⛔️ Pengeluaran pribadi Jemaah</li>
                  <li>⛔️ Koper Bagasi & Kabin</li>
                  <li>⛔️ Pembuatan Paspor & Buku Kuning</li>
                  <li>⛔️ Force majure</li>
                </ul>
              </div>

              <div className="mt-6 space-y-1 text-center">
                <p className="font-bold text-gray-800">
                  #RasiiqahTravel 🕋 #Umrohsyawal #PelayananPrima
                </p>
                <p className="text-sm text-gray-600">
                  #IbadahMakinNyaman #umrohliburan
                </p>
              </div>

              <div className="flex gap-6">
                <Button className="bg-green-600">Download Intenary</Button>
                <Button className="bg-green-600">Booking Sekarang</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaketUmrohDetail;
