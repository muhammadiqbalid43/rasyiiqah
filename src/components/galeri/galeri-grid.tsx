import { useState } from "react";

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
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    src: "https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
    </>
  );
};

export default GaleriGrid;
