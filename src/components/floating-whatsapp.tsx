import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
  showPopup?: boolean;
  popupMessage?: string;
  className?: string;
}
const FloatingWhatsapp = ({
  phoneNumber,
  message = "Hello, I have a question about your services.",
  position = "bottom-right",
  className,
}: FloatingWhatsAppProps) => {
  const handleWhatsAppClick = () => {
    // Format phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "");

    // Create WhatsApp URL with phone and encoded message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  const positionClasses = {
    "bottom-right": "right-4 bottom-4",
    "bottom-left": "left-4 bottom-4",
  };
  return (
    <div
      className={cn(
        "fixed z-50 flex flex-col items-end gap-2",
        positionClasses[position],
        className
      )}
    >
      <Button
        onClick={handleWhatsAppClick}
        className="w-[250px] h-[50px] flex  bg-[#25D366] rounded-full hover:bg-[#22c55e] shadow-lg"
      >
        <img src="/what4.png" alt="whatsapp icon" className="w-[30px]" />
        <p className="text-xl font-bold">Appoinment Here</p>

        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </div>
  );
};

export default FloatingWhatsapp;
