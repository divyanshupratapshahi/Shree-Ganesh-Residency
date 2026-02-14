
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Questions?</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-slate-500 text-lg">Everything you need to know about staying at Shree Ganesh Residency.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-3xl transition-all duration-300 ${openIdx === idx ? 'border-orange-500 bg-orange-50/30' : 'border-slate-100 bg-slate-50 hover:bg-white'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIdx === idx ? 'text-orange-600' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`${openIdx === idx ? 'text-orange-600' : 'text-slate-400'}`}>
                  {openIdx === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
