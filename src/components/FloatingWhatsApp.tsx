import { MessageCircle } from "lucide-react";
import { generalEnquiryLink } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={generalEnquiryLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-whatsapp text-white shadow-lg hover:bg-whatsapp-dark transition-colors rounded-full"
    >
      <MessageCircle size={26} />
    </a>
  );
}
