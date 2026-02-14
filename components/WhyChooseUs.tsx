
import React from 'react';
import { Shield, Sparkles, Wallet, MapPin, Car } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    { icon: <Shield className="w-8 h-8" />, title: "Safe & Secure", desc: "CCTV surveillance and 24/7 security guard availability." },
    { icon: <Sparkles className="w-8 h-8" />, title: "Fully Furnished", desc: "Bed, mattress, fridge, washing machine - everything included." },
    { icon: <Wallet className="w-8 h-8" />, title: "Affordable Pricing", desc: "Premium living experience at competitive local rates." },
    { icon: <MapPin className="w-8 h-8" />, title: "Prime Location", desc: "Close to railway station, markets, and education hubs." },
    { icon: <Car className="w-8 h-8" />, title: "Parking Facility", desc: "Dedicated space for your two-wheelers and vehicles." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/10 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Core Values</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-4">Why Choose Us?</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            We don't just provide rooms; we provide a home-away-from-home experience built on trust and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="text-orange-500 mb-6 transform group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h4 className="font-bold text-xl mb-3">{b.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
