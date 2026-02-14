
import React, { useState } from 'react';
import { Menu, X, Phone, Home, LayoutGrid } from 'lucide-react';
import { PROPERTY_INFO } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
  currentPage: 'home' | 'rooms';
  onNavigate: (page: 'home' | 'rooms') => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' as const, icon: <Home size={18} /> },
    { name: 'Rooms & Pricing', page: 'rooms' as const, icon: <LayoutGrid size={18} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage === 'rooms' ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex-shrink-0 flex items-center gap-2 focus:outline-none"
          >
            <div className="bg-orange-500 p-2 rounded-lg text-white">
              <span className="font-bold text-xl">SG</span>
            </div>
            <span className={`font-bold text-xl tracking-tight ${(isScrolled || currentPage === 'rooms') ? 'text-slate-900' : 'text-white'}`}>
              Shree Ganesh Residency
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-semibold transition-colors flex items-center gap-2 ${
                  currentPage === link.page 
                    ? 'text-orange-500' 
                    : (isScrolled || currentPage === 'rooms' ? 'text-slate-600 hover:text-orange-500' : 'text-white/90 hover:text-white')
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href={`tel:${PROPERTY_INFO.contact}`}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${(isScrolled || currentPage === 'rooms') ? 'text-slate-900' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => { onNavigate(link.page); setIsOpen(false); }}
              className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors flex items-center gap-3 ${
                currentPage === link.page ? 'bg-orange-50 text-orange-500' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.icon}
              {link.name}
            </button>
          ))}
          <div className="pt-4 px-4">
            <a
              href={`tel:${PROPERTY_INFO.contact}`}
              className="w-full bg-orange-500 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              Call Owner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
