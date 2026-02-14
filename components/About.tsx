
import React from 'react';
import { Home, Users, MapPin, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/20/800/1000" 
                alt="Property Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="absolute top-10 -right-4 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Home size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">10+ Years</div>
                  <div className="text-xs text-slate-500">Trusted Service</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Welcome to <span className="text-orange-500 underline decoration-orange-200 decoration-8 underline-offset-4">Shree Ganesh Residency</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Experience a peaceful and modern lifestyle at Belpada, Kharghar. Our residency is designed to provide maximum comfort and convenience for students and working professionals alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <Users className="text-orange-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Target Community</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Perfect for Students, Working Bachelors, and Small Families.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <MapPin className="text-orange-500 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Prime Location</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Located in Belpada, Navi Mumbai - Near all major hotspots.</p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {['Peaceful & Quiet Environment', 'Safe neighborhood with 24/7 security', 'Excellent accessibility to transport', 'Hygienic and well-maintained premises'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
