
import React from 'react';
import { CreditCard, Wallet, Landmark, ShieldCheck } from 'lucide-react';

const Payment: React.FC = () => {
  const paymentMethods = [
    { icon: <Landmark />, name: "Bank Transfer", desc: "Safe and verifiable digital transfer." },
    { icon: <Wallet />, name: "UPI Apps", desc: "Pay via GPay, PhonePe, or Paytm." },
    { icon: <CreditCard />, name: "Cash Payment", desc: "Direct cash payment accepted with receipt." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-orange-200 font-bold uppercase tracking-widest text-sm mb-4">Payment Methods</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Secure & Transparent Payment Process</h3>
              <p className="text-orange-50 text-lg mb-8 leading-relaxed">
                We offer multiple secure ways to pay your rent and security deposit. All payments are acknowledged with formal receipts.
              </p>
              
              <div className="flex items-center gap-4 bg-white/20 p-6 rounded-3xl border border-white/30 backdrop-blur-md">
                <ShieldCheck size={40} className="text-orange-200" />
                <div>
                  <h4 className="font-bold text-xl">Advance Booking Available</h4>
                  <p className="text-orange-100 text-sm">Block your preferred room by paying a small token amount.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
              {paymentMethods.map((method, i) => (
                <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-xl transform hover:-translate-y-1 transition-transform">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-xl">{method.name}</h4>
                    <p className="text-slate-500 text-sm">{method.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
