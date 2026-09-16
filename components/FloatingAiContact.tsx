'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function FloatingAiContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('DISCUSSING A PRODUCTION');
  const [loading, setLoading] = useState(false);
  const [formResponse, setFormResponse] = useState<{ success?: boolean; message?: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const interests = [
    'DISCUSSING A PRODUCTION',
    'GET A QUOTE'
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setFormResponse(null);

    try {
      await emailjs.sendForm(
        'service_q1rz2tu', 
        'template_855fz0f',
        formRef.current,
        'fGjOubEIg4wlcp-FG'
      );

      // GTM Conversion Tracking DataLayer Push
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: 'contact_form_success',
        formName: 'Floating Contact Sidebar',
        selectedInterest: selectedInterest
      });

      setLoading(false);
      setFormResponse({ success: true, message: 'Thank you! Your message has been sent successfully.' });
      
      setTimeout(() => {
        setIsOpen(false);
        setFormResponse(null);
        formRef.current?.reset();
      }, 2000);

    } catch (error: any) {
      console.error('Email error details:', error?.text || error?.message || error);
      setFormResponse({ success: false, message: error?.text || 'Something went wrong. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <>
      {/* 1. RIGHT SIDE FIXED VERTICAL TAB BUTTON WITH BLING / GLOW EFFECT */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] bg-gradient-to-b from-[#0b0d13] to-[#161924] border-l border-y border-[#ff8800]/50 text-white px-3 py-5 rounded-l-2xl shadow-[0_0_20px_rgba(255,136,0,0.3)] flex flex-col items-center gap-3 cursor-pointer hover:bg-[#ff8800] hover:text-black hover:shadow-[0_0_30px_rgba(255,136,0,0.8)] transition-all duration-300 group animate-pulse"
        aria-label="Contact Us"
      >
        {/* Glowing Dot Icon */}
        <span className="w-2 h-2 rounded-full bg-[#ff8800] group-hover:bg-black shadow-[0_0_10px_#ff8800] animate-ping" />

        <span className="text-xs font-black uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180 group-hover:text-black text-white">
          CONTACT US ✨
        </span>
      </button>

      {/* 2. RIGHT SIDE SLIDE-IN DRAWER OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex justify-end transition-opacity duration-300">
          
          {/* Drawer Container */}
          <div className="w-full max-w-md h-full bg-[#080a0f] border-l border-white/15 p-6 sm:p-8 shadow-[-25px_0_60px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-300">
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff8800]/20 border border-[#ff8800]/30 flex items-center justify-center text-[#ff8800] text-lg font-bold">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-white text-base font-black uppercase tracking-wider">
                      AEXUS STUDIOS
                    </h3>
                    <p className="text-white/50 text-xs">Direct Inquiry & Support</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Form Subheading */}
              <div className="mb-6">
                <h4 className="text-white text-xs font-black uppercase tracking-widest text-[#ff8800] mb-1">
                  GET A QUOTE TO VISUALIZE YOUR DEVELOPMENT
                </h4>
                <p className="text-white/50 text-xs">
                  Fill out your project details to get a customized estimate from our 3D production team.
                </p>
              </div>

              {/* Form Start */}
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Hidden input for selected interest */}
                <input type="hidden" name="interest" value={selectedInterest} />

                {/* Interest Selection Tabs */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {interests.map((label) => {
                    const isSelected = selectedInterest === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setSelectedInterest(label)}
                        className={`py-2.5 px-2 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all cursor-pointer text-center ${
                          isSelected 
                            ? 'bg-[#ff8800] text-black shadow-md' 
                            : 'bg-black/40 border border-white/10 text-white/70 hover:text-white'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Your Name *</label>
                    <input required name="name" type="text" placeholder="John Doe" className="w-full bg-[#04060b] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Email *</label>
                    <input required name="email" type="email" placeholder="john@company.com" className="w-full bg-[#04060b] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Phone Number *</label>
                    <input required name="phone" type="tel" placeholder="+92 300 0000000" className="w-full bg-[#04060b] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Company</label>
                    <input name="company" type="text" placeholder="Company name" className="w-full bg-[#04060b] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Project Details *</label>
                  <textarea required name="message" rows={3} placeholder="Tell us about your project requirements..." className="w-full bg-[#04060b] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] resize-none" />
                </div>

                {formResponse && (
                  <div className={`p-3 rounded-xl text-xs font-medium ${formResponse.success ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                    {formResponse.message}
                  </div>
                )}

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#ff8800] hover:bg-[#ffa733] text-black font-black uppercase tracking-widest text-xs transition-all shadow-lg cursor-pointer disabled:opacity-50 mt-2"
                >
                  {loading ? 'SENDING REQUEST...' : 'SUBMIT QUOTATION REQUEST'}
                </button>
              </form>
            </div>

            {/* Direct Contact Links at Bottom */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">OR CONTACT DIRECTLY:</span>
              
              <a href="mailto:info@aexusstudios.com" className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#ff8800] transition-all text-xs text-white">
                <span>✉️ info@aexusstudios.com</span>
                <span className="text-[#ff8800] font-bold">Send Email</span>
              </a>

              <a href="https://wa.me/923390095259" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#ff8800] transition-all text-xs text-white">
                <span>💬 WhatsApp Support</span>
                <span className="text-[#ff8800] font-bold">Chat Now</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}