
import React from 'react';
import { ROOM_TYPES, AMENITIES } from '../constants';
import { Check, Info, ArrowLeft, ShieldCheck, Clock, Wallet } from 'lucide-react';

interface RoomsPageProps {
  onBook: (roomType: string) => void;
}

const RoomsPage: React.FC<RoomsPageProps> = ({ onBook }) => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Room Types & <span className="text-orange-500">Pricing</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Explore our diverse living options in Belpada, Kharghar. All rooms are ready to move-in.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {ROOM_TYPES.map((room, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64">
                <img src={room.imageUrl} alt={room.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Ready to Move</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{room.title}</h3>
                <div className="text-3xl font-extrabold text-orange-600 mb-4">₹{room.price}<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{room.description}</p>
                <div className="space-y-3 mb-8 flex-1">
                  {room.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="bg-orange-100 p-1 rounded-full"><Check size={12} className="text-orange-600" /></div>
                      {f}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => onBook(room.title)}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition-all shadow-lg"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Policies */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Important Rental Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-6"><Wallet size={24} /></div>
              <h4 className="font-bold text-lg mb-2">Deposit</h4>
              <p className="text-sm text-slate-500">1 Month Rent as refundable security deposit.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-6"><Clock size={24} /></div>
              <h4 className="font-bold text-lg mb-2">Notice</h4>
              <p className="text-sm text-slate-500">1 Month advance notice required before move-out.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-6"><ShieldCheck size={24} /></div>
              <h4 className="font-bold text-lg mb-2">Fees</h4>
              <p className="text-sm text-slate-500">Standard brokerage and maintenance applicable.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 mb-6"><Info size={24} /></div>
              <h4 className="font-bold text-lg mb-2">Bills</h4>
              <p className="text-sm text-slate-500">Electricity charges shared among unit residents.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
