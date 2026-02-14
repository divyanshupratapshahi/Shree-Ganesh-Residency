
import React from 'react';
import { PROPERTY_INFO } from '../constants';
import { Facebook, Instagram, Linkedin, ArrowUp, Mail, MessageSquare, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'rooms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg text-white">
                <span className="font-bold text-xl">SG</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Shree Ganesh Residency</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              Premium rental accommodation in Kharghar. High-quality furnished living spaces for students and professionals. Safe, secure, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 border-b border-white/10 pb-4 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-orange-500 transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate('rooms')} className="hover:text-orange-500 transition-colors text-left">Rooms & Pricing</button></li>
              <li><a href={`tel:${PROPERTY_INFO.contact}`} className="hover:text-orange-500 transition-colors">Call Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 border-b border-white/10 pb-4 inline-block">Location Tags</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Boys PG Kharghar', 
                'Girls PG Navi Mumbai', 
                'Nearest Station PG', 
                'Belpada Rooms', 
                'Kharghar PG', 
                'Student Accommodation', 
                'Furnished PG'
              ].map((tag, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 border-b border-white/10 pb-4 inline-block">Owner Contact</h4>
            <div className="space-y-4 text-slate-400">
              <p className="font-bold text-white">Marshal Enterprises</p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${PROPERTY_INFO.contact}`} className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <Phone size={16} className="text-orange-500" />
                  {PROPERTY_INFO.contact}
                </a>
                <a href={`https://wa.me/${PROPERTY_INFO.whatsapp}`} target="_blank" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <MessageSquare size={16} className="text-green-500" />
                  WhatsApp
                </a>
                <a href={`mailto:${PROPERTY_INFO.email}`} className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <Mail size={16} className="text-orange-500" />
                  <span className="break-all">{PROPERTY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 Marshal Enterprises. Belpada, Kharghar, Navi Mumbai.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-white/5 rounded-full hover:bg-orange-500 transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
