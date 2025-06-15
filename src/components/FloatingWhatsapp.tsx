
import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/5599999999999?text=Olá,%20quero%20receber%20uma%20análise%20gratuita%20do%20meu%20site!";

const FloatingWhatsapp = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 bg-fire hover:bg-fire-dark transition-colors shadow-2xl rounded-full w-16 h-16 flex items-center justify-center group animate-pulse"
    aria-label="Conversar via WhatsApp"
    style={{
      boxShadow: "0 4px 32px 0 #fc562b77"
    }}
  >
    <MessageCircle size={34} className="text-white drop-shadow" />
    <span className="absolute -top-6 right-0 bg-fire-dark text-white text-xs rounded px-2 py-1 shadow animate-fade-in pointer-events-none opacity-0 group-hover:opacity-100 transition">
      Fale conosco
    </span>
  </a>
);

export default FloatingWhatsapp;
