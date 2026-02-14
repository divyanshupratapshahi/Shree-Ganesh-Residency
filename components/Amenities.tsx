
import React from 'react';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Modern Amenities</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">Everything You Need For A <span className="text-orange-500">Comfortable Stay</span></h3>
          </div>
          <p className="lg:w-1/3 text-slate-500 text-lg">
            We offer premium facilities to ensure your stay is hassle-free. From high-speed internet to 24/7 security.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-orange-500 group-hover:text-white transition-all mb-6">
                {amenity.icon}
              </div>
              <h4 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-orange-600">
                {amenity.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
