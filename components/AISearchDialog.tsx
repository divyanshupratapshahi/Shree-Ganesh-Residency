
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { PROPERTY_INFO, AMENITIES, ROOM_TYPES, FAQS } from '../constants';

const AISearchDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hi! I am the Shree Ganesh Residency AI assistant. How can I help you today? You can ask about rent, amenities, location, or policies.' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const context = `
        Property: ${PROPERTY_INFO.name}
        Owner: ${PROPERTY_INFO.owner}
        Location: ${PROPERTY_INFO.location}
        Contact: ${PROPERTY_INFO.contact}
        
        Rooms & Pricing:
        - Hall: ₹7000
        - Bedroom: ₹7500
        - Attached Washroom: ₹8000
        
        Amenities: ${AMENITIES.map(a => a.label).join(', ')}
        
        Policies: 1 month deposit, 1 month notice, Electricity bill sharing, Brokerage applicable.
        
        FAQ context: ${FAQS.map(f => `${f.question}: ${f.answer}`).join('\n')}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Context about the property:\n${context}\n\nUser Question: ${userMsg}\n\nAnswer the user question politely and concisely based on the context. If you don't know the answer, ask them to call the owner at ${PROPERTY_INFO.contact}.`,
      });

      setChat(prev => [...prev, { role: 'bot', text: response.text || "I'm sorry, I couldn't process that. Please contact our owner directly." }]);
    } catch (err) {
      setChat(prev => [...prev, { role: 'bot', text: "Error connecting to AI. Please try calling us!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-4 border-orange-500"
        title="AI Assistant"
      >
        <Bot size={32} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[600px]">
            <div className="bg-orange-500 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Property AI Assistant</h4>
                  <p className="text-xs text-orange-100">Powered by Gemini AI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'}`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-orange-500" />
                    <span className="text-xs text-slate-400">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything about the property..."
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 disabled:opacity-50 transition-all"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AISearchDialog;
