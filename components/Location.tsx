
import React from 'react';
import { MapPin, Train, ShoppingBag, GraduationCap, Hospital, Bus } from 'lucide-react';
import { PROPERTY_INFO } from '../constants';

const Location: React.FC = () => {
  const highlights = [
    { icon: <Train size={20} />, label: "Kharghar Railway Station", dist: "5 Mins" },
    { icon: <ShoppingBag size={20} />, label: "Markets & Shops", dist: "2 Mins" },
    { icon: <GraduationCap size={20} />, label: "Nearby Colleges", dist: "10 Mins" },
    { icon: <Hospital size={20} />, label: "Major Hospitals", dist: "8 Mins" },
    { icon: <Bus size={20} />, label: "Public Transport", dist: "1 Min" },
    { icon: <MapPin size={20} />, label: "Central Park", dist: "12 Mins" },
  ];

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Location</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Prime Connectivity in <span className="text-orange-500">Navi Mumbai</span></h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Situated in Belpada, Kharghar - one of the most planned and peaceful educational hubs of Navi Mumbai. Enjoy easy access to everything you need.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="text-orange-500">{h.icon}</div>
                    <span className="font-semibold text-sm">{h.label}</span>
                  </div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-md">{h.dist}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl border-2 border-dashed border-slate-200">
              <div className="flex gap-4">
                <div className="bg-orange-500 p-4 rounded-2xl text-white">
                  <MapPin size={32} />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium">Exact Address:</div>
                  <div className="text-slate-900 font-bold text-lg">{PROPERTY_INFO.location}</div>
                  <a href="#" className="text-orange-600 font-bold text-sm hover:underline mt-2 inline-block">Get Directions on Maps →</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
            {/* Simulation of a Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.693437293708!2d73.06456071485078!3d19.030438687114757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39375e87a53%3A0xe9f79b29e057f975!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1655123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
