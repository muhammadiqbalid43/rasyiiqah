import Link from "next/link";

const ProdukKategori = () => {
  return (
    <div className="mt-24">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 place-items-center md:grid-cols-6  w-[390px] md:w-full h-[380px] md:h-[150px]  rounded-xl ">
          <img
            src="https://www.dwinstravel.com/wp-content/uploads/2024/07/005-Logo-PPIU-Sertified-768x457.webp"
            alt="image"
            className="w-[150px] md:w-[200px]"
          />
          <img
            src="https://www.dwinstravel.com/wp-content/uploads/2024/07/006-Logo-Siskopatuh-768x457.webp"
            alt="image-2"
            className="w-[150px] md:w-[200px]"
          />
          <img
            src="https://www.dwinstravel.com/wp-content/uploads/2024/07/001-Logo-5-Pasti-Umroh-768x457.webp"
            alt="image-3"
            className="w-[150px] md:w-[200px]"
          />
          <img
            src="https://www.dwinstravel.com/wp-content/uploads/2024/07/002-Logo-Kemenag-768x457.webp"
            alt="image-4"
            className="w-[150px] md:w-[200px]"
          />
          <img
            src="https://www.dwinstravel.com/wp-content/uploads/2024/07/003-Logo-Iata-768x457.webp"
            alt="image-5"
            className="w-[150px] md:w-[200px]"
          />
          <img
            src="https://www.dwinstravel.com/wp-content/uploads/2024/07/004-Logo-Kan-768x457.webp"
            alt="image-6"
            className="w-[150px] md:w-[200px]"
          />
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-6 p-6 mx-auto mt-12 md:grid-cols-4">
        {/* Left content  */}
        <div className="p-6 bg-white rounded-lg">
          <h2 className="mb-4 text-2xl font-bold text-green-800">
            Layanan yang Berkelas, Teruji dan Terjangkau
          </h2>
          <p className="mb-6 text-gray-700">
            Melayani dengan sepenuh hati kepada jamaah: mengutamakan layanan
            yang berkelas, teruji dan terjangkau. Ini komitmen yang selalu kami
            jaga untuk melayani jamaah ke tanah suci, karena itu adalah ibadah
            yang baik harus diikuti dengan...
          </p>
          <Link
            href="#"
            className="flex items-center font-medium text-green-700"
          >
            Tentang kami
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Haji Khusus Card */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            className="object-cover w-full h-full -z-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900 opacity-90"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <div>
              <h3 className="mb-1 text-xl font-bold">Haji Khusus</h3>
              <p className="text-sm opacity-90">Layanan Haji Khusus</p>
            </div>
            <div className="flex items-end justify-between">
              <Link href="#" className="flex items-center text-sm text-white">
                Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Umrah Card */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            className="object-cover w-full h-full -z-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900 opacity-90"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <div>
              <h3 className="mb-1 text-xl font-bold">UMRAH</h3>
              <p className="text-sm opacity-90">Layanan Umrah</p>
            </div>
            <div className="flex items-end justify-between">
              <Link href="#" className="flex items-center text-sm text-white">
                Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Tour Card */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            className="object-cover w-full h-full -z-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900 opacity-90"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
            <div>
              <h3 className="mb-1 text-xl font-bold">Tour</h3>
              <p className="text-sm opacity-90">Layanan Tour</p>
            </div>
            <div className="flex items-end justify-between">
              <div className="opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-30"
                >
                  <path d="M2 20h20v4H2v-4zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm10 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </div>
              <Link href="#" className="flex items-center text-sm text-white">
                Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukKategori;
