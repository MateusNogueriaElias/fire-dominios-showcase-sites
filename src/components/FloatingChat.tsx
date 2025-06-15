
import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingChat = () => (
  <button
    className="floating-chat-btn"
    aria-label="Abrir chat de atendimento"
    onClick={() => {
      window.open("https://wa.me/5521999999999", "_blank");
    }}
  >
    <MessageCircle />
  </button>
);

export default FloatingChat;
