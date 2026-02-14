
import React, { useState } from 'react';
import { X, Send, Phone, CheckCircle2 } from 'lucide-react';
import { PROPERTY_INFO } from '../constants';

interface BookingModalProps {
  selectedRoom: string;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ selectedRoom, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: selectedRoom === 'Not Specified' ? 'Hall' : selectedRoom
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `Hi, I am ${formData.name}. I want to book a visit for a ${formData.roomType}. My phone number is ${formData.phone}. Please let me know when I can visit Shree Ganesh Residency.`;
    const whatsappUrl = `https://wa.me/${PROPERTY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show Success UI
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <div className="p-8 pt-12">
            <div className="text-center mb-8">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Book Your Visit</h3>
              <p className="text-slate-500 mt-2">Enter your details and we'll connect on WhatsApp</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="e.g. 9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Room Preference</label>
                <select 
                  value={formData.roomType}
                  onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none"
                >
                  <option value="Hall">Hall - ₹7000</option>
                  <option value="Bedroom">Bedroom - ₹7500</option>
                  <option value="Attached Washroom Room">Attached Washroom - ₹8000</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-3 mt-4"
              >
                Submit & Open WhatsApp
              </button>
            </form>
          </div>
        ) : (
          <div className="p-10 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Request Sent!</h3>
            <p className="text-slate-500 mb-8">Your details have been shared via WhatsApp. For an immediate visit confirmation, please call the owner directly.</p>
            
            <a 
              href={`tel:${PROPERTY_INFO.contact}`}
              className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-all hover:bg-slate-800"
            >
              <Phone size={24} />
              Call Owner: {PROPERTY_INFO.contact}
            </a>
            
            <button 
              onClick={onClose}
              className="mt-6 text-slate-400 hover:text-slate-600 font-medium"
            >
              Close this window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
