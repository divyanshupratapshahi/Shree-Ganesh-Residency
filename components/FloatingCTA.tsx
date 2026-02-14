
import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { PROPERTY_INFO } from '../constants';

interface FloatingCTAProps {
  onBook: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBook }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <button
        onClick={onBook}
        className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-4 border-white"
        title="Book Visit"
      >
        <Calendar size={32} />
      </button>
      <a
        href={`https://wa.me/${PROPERTY_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={32} />
      </a>
      <a
        href={`tel:${PROPERTY_INFO.contact}`}
        className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        title="Call Owner"
      >
        <Phone size={32} />
      </a>
    </div>
  );
};

export default FloatingCTA;
