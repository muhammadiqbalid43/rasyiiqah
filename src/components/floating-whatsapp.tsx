import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X } from "lucide-react";

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
  showPopup = true,
  popupMessage = "Konsultasi",
  className,
}: FloatingWhatsAppProps) => {
  const [isPopupVisible, setIsPopupVisible] = useState(showPopup);

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

  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPopupVisible(false);
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
      {isPopupVisible && (
        <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-lg">
          <span className="mr-2 text-sm font-medium">{popupMessage}</span>
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6"
            onClick={closePopup}
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      )}
      <Button
        onClick={handleWhatsAppClick}
        className="size-14 rounded-full bg-[#25D366] hover:bg-[#22c55e] shadow-lg"
        size="icon"
      >
        <MessageCircle className="text-white h-7 w-7" />

        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </div>
  );
};

export default FloatingWhatsapp;
