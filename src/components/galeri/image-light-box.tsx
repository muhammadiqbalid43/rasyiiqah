import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
}

const ImageLightbox = ({
  images,
  currentIndex,
  onClose,
}: ImageLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Add keyboard event listeners
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const currentImage = images[index];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <button
        onClick={onClose}
        className="absolute z-10 p-2 text-white transition-colors rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={handlePrevious}
        className="absolute z-10 p-2 text-white transition-colors rounded-full left-4 bg-black/50 hover:bg-black/70"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute z-10 p-2 text-white transition-colors rounded-full right-4 bg-black/50 hover:bg-black/70"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="w-full max-w-5xl px-4">
        <div className="relative h-[-200px] md:h-[70vh] w-full">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            // fill
            className="object-contain "
            // sizes="(max-width: 768px) 100vw, 80vw"
            // priority
          />
        </div>

        <div className="mt-4 text-center text-white">
          <h2 className="text-xl font-semibold">{currentImage.title}</h2>
          <p className="mt-2 text-gray-300">{currentImage.description}</p>
        </div>

        <div className="flex justify-center gap-2 py-2 mt-6 overflow-x-auto">
          {images.map((image, i) => (
            <button
              key={image.id}
              onClick={() => setIndex(i)}
              className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                i === index ? "border-emerald-500" : "border-transparent"
              }`}
              aria-label={`View ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                // fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
