
import React from 'react';
import { ROOM_TYPES } from '../constants';
import { Check, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Pricing Plans</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Choose Your Room Type</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Flexible rental options designed to fit your budget and lifestyle. All rooms are ready to move in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOM_TYPES.map((room, idx) => (
            <div 
              key={idx} 
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${idx === 2 ? 'border-orange-500' : 'border-transparent'}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={room.imageUrl} 
                  alt={room.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Ready to Move
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{room.title}</h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">₹{room.price}</span>
                  <span className="text-slate-500">/ month</span>
                </div>
                
                <p className="text-slate-600 mb-8 text-sm line-clamp-2">
                  {room.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {room.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <div className="bg-orange-100 p-1 rounded-full">
                        <Check size={14} className="text-orange-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center transition-all ${idx === 2 ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-200 shadow-xl' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-orange-50 p-6 md:p-8 rounded-3xl border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 p-3 rounded-full text-white shrink-0">
              <Info size={24} />
            </div>
            <div>
              <h5 className="text-xl font-bold text-slate-900 mb-4">Deposit & Notice Policies</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>1 Month Security Deposit</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>1 Month Notice Period</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>Electricity Bill Sharing</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>Brokerage & Maintenance Apply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
