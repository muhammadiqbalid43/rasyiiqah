import GaleriGrid from "@/components/galeri/galeri-grid";

const Gallery = () => {
  return (
    <div className="container px-4 py-12 mx-auto mb-12 ">
      <div className="mb-12 ">
        <h1 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl md:text-5xl">
          Galeri
        </h1>
        <p className="mt-4 text-lg text-gray-600 w-[365px]  md:w-[500px] md:text-xl">
          Dokumentasi perjalanan suci para jamaah bersama kami. Setiap momen
          adalah kenangan berharga dalam perjalanan menuju Baitullah.
        </p>
      </div>

      <GaleriGrid />
    </div>
  );
};

export default Gallery;
