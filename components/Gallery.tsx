
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Our Space</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">View The Property</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Take a visual tour of our well-maintained rooms and common areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-3xl h-80 shadow-lg cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-white font-bold text-xl">{img.caption}</p>
                  <div className="w-12 h-1 bg-orange-500 mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
