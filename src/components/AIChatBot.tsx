import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { soundFX } from '../utils/sound';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  Loader2, 
  Minimize2,
  HelpCircle,
  MessageCircle
} from 'lucide-react';

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'assistant',
      text: "Hello! I am Saba Hameed's AI Concierge. Ask me anything about her AI product design expertise, content creation portfolio, rates, or availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    "What are Saba's main skills?",
    "What AI products has Saba designed?",
    "Is Saba available for hire?",
    "How does the Scope Estimator work?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    soundFX.playClick();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() })
      });

      const data = await res.json();
      soundFX.playPop();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || "Saba Hameed is an AI Product Designer & Content Creator. You can contact her directly at sabahameednoor@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "Saba Hameed is an AI Product Designer & Content Creator with 4+ years experience in Figma, Generative UI, Prompt Engineering, and Content Strategy. Feel free to send her an email at sabahameednoor@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            soundFX.playPop();
            setIsOpen(true);
          }}
          className="group relative p-4 bg-[#1A1A1A] hover:bg-[#D23D1F] text-white shadow-2xl transition-all border border-[#1A1A1A] flex items-center justify-center"
          title="Ask Saba AI Assistant"
          id="ai-chatbot-trigger-btn"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D23D1F] border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D23D1F] border-2 border-white" />
          <Bot className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-2xl flex flex-col overflow-hidden animate-slideUp font-sans">
          
          {/* Header */}
          <div className="px-5 py-4 bg-[#F2EFED] border-b border-[#1A1A1A] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#FAF9F6] border border-[#1A1A1A] flex items-center justify-center text-[#D23D1F]">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-serif font-bold text-[#1A1A1A] flex items-center gap-1">
                  Saba AI Concierge
                  <Sparkles className="w-3 h-3 text-[#D23D1F]" />
                </span>
                <span className="text-[10px] text-[#D23D1F] font-mono uppercase tracking-wider">
                  Gemini 2.5 Intelligence
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setIsOpen(false);
              }}
              className="p-1.5 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3 py-2 bg-[#FAF9F6] border-b border-[#1A1A1A]/20 flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono uppercase tracking-wider">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(qp)}
                className="px-2.5 py-1 bg-[#F2EFED] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A]/30 whitespace-nowrap transition-colors"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF9F6] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 border border-[#1A1A1A] bg-[#F2EFED] flex items-center justify-center text-[#D23D1F] shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3 border border-[#1A1A1A] max-w-[80%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#D23D1F] text-white'
                      : 'bg-[#F2EFED] text-[#1A1A1A]'
                  }`}
                >
                  <p className="whitespace-pre-wrap font-sans">{msg.text}</p>
                  <span className={`text-[9px] block mt-1 text-right font-mono uppercase opacity-75 ${msg.sender === 'user' ? 'text-white/80' : 'text-[#1A1A1A]/60'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-[#D23D1F] text-xs font-mono uppercase">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>AI Assistant thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#F2EFED] border-t border-[#1A1A1A] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Saba..."
              className="flex-1 px-3 py-2 bg-[#FAF9F6] border border-[#1A1A1A] text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:border-[#D23D1F] font-sans"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 bg-[#D23D1F] text-white hover:bg-[#1A1A1A] disabled:opacity-40 transition-colors font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
