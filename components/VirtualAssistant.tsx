import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { PROPERTY_INFO, AMENITIES, ROOM_TYPES, FAQS } from '../constants';

const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: 'Namaste! I am the Shree Ganesh Residency assistant. How can I help you today? You can ask about rent, amenities, or location.' }
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
        Rooms: Hall (7000), Bedroom (7500), Attached Washroom (8000).
        Amenities: ${AMENITIES.map(a => a.label).join(', ')}
        Policies: 1 month deposit, 1 month notice.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Context:\n${context}\n\nUser: ${userMsg}\n\nAssistant: Respond politely and briefly. If unsure, ask to call ${PROPERTY_INFO.contact}.`,
      });

      setChat(prev => [...prev, { role: 'assistant', text: response.text || "I'm sorry, I couldn't process that. Please contact our owner directly." }]);
    } catch (err) {
      setChat(prev => [...prev, { role: 'assistant', text: "Service temporarily unavailable. Please call us directly!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-orange-500"
      >
        <Bot size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
            <div className="bg-orange-500 p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Bot size={24} />
                <h4 className="font-bold">Property Assistant</h4>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-white border border-slate-100 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && <Loader2 size={16} className="animate-spin text-orange-500 mx-auto" />}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-slate-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
                />
                <button onClick={handleSend} className="bg-orange-500 text-white p-2 rounded-xl"><Send size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VirtualAssistant;