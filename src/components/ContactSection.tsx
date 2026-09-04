import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EstimatorState } from '../types';
import { soundFX } from '../utils/sound';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  prefilledEstimate: EstimatorState | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledEstimate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Development Project Inquiry',
    budget: '$800 - $1,500',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);

  // Auto populate message if estimator passed
  useEffect(() => {
    if (prefilledEstimate) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry: ${prefilledEstimate.projectType} Build`,
        budget: `$${prefilledEstimate.estimatedCostMin} - $${prefilledEstimate.estimatedCostMax}`,
        message: `Hi Saba,\n\nI calculated an estimated quote on your portfolio for a ${prefilledEstimate.projectType}.\n\nSelected Features: ${prefilledEstimate.features.join(', ')}\nDelivery Pace: ${prefilledEstimate.timeline}\nEstimated Budget: $${prefilledEstimate.estimatedCostMin} - $${prefilledEstimate.estimatedCostMax}\n\nI would love to discuss starting this project with you!`
      }));
    }
  }, [prefilledEstimate]);

  const handleCopyEmail = () => {
    soundFX.playPop();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playSuccess();

    // Trigger Confetti Explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#F2EFED] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#1A1A1A]/20">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold block">
              [ 08 ] Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Let's Build Something <span className="italic font-normal text-[#D23D1F]">Great Together</span>
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 max-w-xl">
              Have a project idea, contract opportunity, or question? Send a message or schedule a call
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Meeting Scheduler */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="p-8 bg-[#FAF9F6] border border-[#1A1A1A] space-y-6 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D23D1F]" />
                <span>Direct Contact Details</span>
              </h3>

              {/* Email Copy Card */}
              <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#1A1A1A] bg-[#FAF9F6] flex items-center justify-center text-[#D23D1F]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#1A1A1A]/60 block uppercase font-bold">Primary Email</span>
                    <span className="text-xs font-bold text-[#1A1A1A] font-mono">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 border border-[#1A1A1A] bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-[#D23D1F]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location & Timezone */}
              <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A]/30 flex items-center gap-3">
                <div className="w-10 h-10 border border-[#1A1A1A] bg-[#FAF9F6] flex items-center justify-center text-[#D23D1F]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#1A1A1A]/60 block uppercase font-bold">Location / Timezone</span>
                  <span className="text-xs font-bold text-[#1A1A1A] font-mono">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Availability */}
              <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A]/30 flex items-center gap-3">
                <div className="w-10 h-10 border border-[#1A1A1A] bg-[#FAF9F6] flex items-center justify-center text-[#D23D1F]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#1A1A1A]/60 block uppercase font-bold">Response Time</span>
                  <span className="text-xs font-bold text-[#1A1A1A] font-mono">&lt; 2 Hours (24/7 Support)</span>
                </div>
              </div>

              {/* Schedule 15-min Call Button */}
              <button
                onClick={() => {
                  soundFX.playPop();
                  setMeetingModalOpen(true);
                }}
                className="w-full py-4 bg-[#1A1A1A] hover:bg-[#D23D1F] text-white font-mono uppercase tracking-wider font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a 15-Min Intro Call</span>
              </button>

            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-[#FAF9F6] border border-[#1A1A1A] shadow-sm relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-[#1A1A1A] text-[#D23D1F] mx-auto flex items-center justify-center border border-[#1A1A1A]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-[#1A1A1A]">Message Sent Successfully!</h3>
                  <p className="text-xs font-mono uppercase text-[#1A1A1A]/70 max-w-md mx-auto">
                    Thank you for reaching out! Saba has received your inquiry and will respond to <strong className="text-[#D23D1F]">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      soundFX.playPop();
                      setSubmitted(false);
                    }}
                    className="px-6 py-3 border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-[#D23D1F] font-mono text-xs uppercase tracking-wider font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-2">Send an Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-[#D23D1F] uppercase font-bold block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#1A1A1A] text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#D23D1F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-[#D23D1F] uppercase font-bold block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#1A1A1A] text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#D23D1F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-[#D23D1F] uppercase font-bold block mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#1A1A1A] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#D23D1F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-[#D23D1F] uppercase font-bold block mb-1">
                        Approx. Budget Range
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#1A1A1A] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#D23D1F] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-[#D23D1F] uppercase font-bold block mb-1">
                      Project Details / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project goals, required tech stack, or deadline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-[#FAF9F6] border border-[#1A1A1A] text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#D23D1F] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D23D1F] hover:bg-[#1A1A1A] text-white font-mono uppercase tracking-wider font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Now</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Schedule Meeting Modal */}
        {meetingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#FAF9F6] border-2 border-[#1A1A1A] p-8 max-w-md w-full shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/20">
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#D23D1F]" />
                  <span>Book 15-Min Intro Call</span>
                </h3>
                <button
                  onClick={() => setMeetingModalOpen(false)}
                  className="text-lg font-mono text-[#1A1A1A] hover:text-[#D23D1F]"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs font-mono uppercase text-[#1A1A1A]/80 leading-relaxed">
                Choose a suitable slot to discuss your project requirements, creative strategy, and timeline directly with Saba Hameed.
              </p>

              <div className="p-4 bg-[#F2EFED] border border-[#1A1A1A]/30 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-[#1A1A1A]/60">
                  <span>Available Days:</span>
                  <span className="text-[#1A1A1A] font-bold">Mon - Sat</span>
                </div>
                <div className="flex justify-between text-[#1A1A1A]/60">
                  <span>Time slots:</span>
                  <span className="text-[#1A1A1A] font-bold">09:00 AM - 09:00 PM GMT+5</span>
                </div>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Intro Call Request`}
                onClick={() => {
                  soundFX.playSuccess();
                  setMeetingModalOpen(false);
                }}
                className="w-full py-3.5 bg-[#D23D1F] hover:bg-[#1A1A1A] text-white font-mono uppercase tracking-wider font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Confirm Meeting Request via Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
