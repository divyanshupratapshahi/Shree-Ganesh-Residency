
import React from 'react';
import { PROPERTY_INFO } from '../constants';
import { Calendar, Phone, MessageSquare } from 'lucide-react';

interface HeroProps {
  onBook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBook }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1920" 
          alt="Rental Property Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/50 backdrop-blur-md mb-6">
          <span className="text-orange-400 font-bold text-xs uppercase tracking-widest">Premium Student & Family PG</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Affordable Fully <br className="hidden md:block" />
          <span className="text-orange-500">Furnished Rooms</span> in Kharghar
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Safe, Secure & Budget-Friendly Living in the heart of Navi Mumbai. Perfect for students, working professionals, and small families.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBook}
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/25"
          >
            <Calendar size={20} />
            Book a Visit
          </button>
          <a
            href={`tel:${PROPERTY_INFO.contact}`}
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone size={20} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${PROPERTY_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-green-500/20"
          >
            <MessageSquare size={20} />
            WhatsApp
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-orange-400">₹7000</div>
            <div className="text-sm text-white/60">Starting Rent</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-orange-400">100%</div>
            <div className="text-sm text-white/60">Furnished</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-orange-400">24/7</div>
            <div className="text-sm text-white/60">Security</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-orange-400">Fast</div>
            <div className="text-sm text-white/60">WiFi Included</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
