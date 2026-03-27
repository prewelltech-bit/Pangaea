import React from "react";

const WhatsAppChat = () => {
  const phoneNumber = "6354734061";
  const message = "Hello, I visited your website and need help.";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group">
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-md whitespace-nowrap">
        Chat with us
      </div>

      {/* Chat Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: "#3e93fe" }}
      >
        <img
          src="https://img.icons8.com/?size=100&id=D3Ox25WOtefM&format=png&color=000000"
          alt="WhatsApp Chat"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
};

export default WhatsAppChat;