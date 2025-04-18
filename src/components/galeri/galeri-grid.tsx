import { useState } from "react";
import ImageLightbox from "./image-light-box";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Masjidil Haram",
    title: "Masjidil Haram",
    description: "Pemandangan indah Masjidil Haram di Makkah saat malam hari.",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Masjid Nabawi",
    title: "Masjid Nabawi",
    description: "Keindahan arsitektur Masjid Nabawi di Madinah.",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Jabal Rahmah",
    title: "Jabal Rahmah",
    description:
      "Jabal Rahmah di Padang Arafah, tempat bersejarah dalam perjalanan umroh.",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Jamaah Umroh",
    title: "Jamaah Umroh",
    description: "Jamaah umroh kami sedang melaksanakan ibadah dengan khusyuk.",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mina",
    title: "Mina",
    description: "Suasana di Mina saat musim haji dan umroh.",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Ka'bah",
    title: "Ka'bah",
    description: "Pemandangan Ka'bah yang megah di tengah Masjidil Haram.",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Hotel Makkah",
    title: "Akomodasi di Makkah",
    description: "Hotel berbintang dengan fasilitas lengkap di Makkah.",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/31565687/pexels-photo-31565687/free-photo-of-view-of-abraj-al-bait-towers-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Transportasi Umroh",
    title: "Transportasi Umroh",
    description: "Armada bus kami yang nyaman untuk transportasi selama umroh.",
  },
];

const GaleriGrid = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-md cursor-pointer hover:shadow-lg group"
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full h-64">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-20">
                <div className="w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-lg font-medium text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={selectedImage}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default GaleriGrid;
