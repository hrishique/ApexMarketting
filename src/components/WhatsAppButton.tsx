import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ className = "", floating = false }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917869838725', '_blank');
  };

  if (floating) {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group ${className}`}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-zinc-900 border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-500/20 ${className}`}
    >
      <MessageCircle size={20} fill="currentColor" />
      WhatsApp Us
    </button>
  );
};

export default WhatsAppButton;
