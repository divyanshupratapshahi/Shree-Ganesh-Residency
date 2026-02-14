
import React, { useState } from 'react';
import { PROPERTY_INFO } from '../constants';
import { Phone, MessageSquare, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you! Your inquiry has been sent to Marshal Enterprises.");
    setFormState({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Get in Touch with the Owner</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-orange-500 p-4 rounded-2xl text-white shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wide mb-1">Owner Name</h4>
                  <p className="text-slate-900 font-bold text-xl">{PROPERTY_INFO.owner}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-orange-500 p-4 rounded-2xl text-white shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wide mb-1">Call & Contact</h4>
                  <p className="text-slate-900 font-bold text-xl">{PROPERTY_INFO.contact}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-orange-500 p-4 rounded-2xl text-white shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wide mb-1">Email Support</h4>
                  <p className="text-slate-900 font-bold text-xl">marshal.entp@gmail.com</p>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                <a 
                  href={`tel:${PROPERTY_INFO.contact}`} 
                  className="bg-orange-500 text-white p-4 rounded-full hover:scale-110 transition-transform shadow-lg shadow-orange-500/20"
                >
                  <Phone size={24} />
                </a>
                <a 
                  href={`https://wa.me/${PROPERTY_INFO.whatsapp}`} 
                  className="bg-[#25D366] text-white p-4 rounded-full hover:scale-110 transition-transform shadow-lg shadow-green-500/20"
                >
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h4>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    placeholder="Enter phone number" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="name@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    rows={4} 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell us about your requirements (Room type, Move-in date, etc.)" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
