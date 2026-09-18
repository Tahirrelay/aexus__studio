'use client';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

export default function ContactUs() {
  const [selectedInterest, setSelectedInterest] = useState('PROJECT DISCUSSION');
  const [loading, setLoading] = useState(false);
  const [formResponse, setFormResponse] = useState<{ success?: boolean; message?: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const interests = [
    'PROJECT DISCUSSION',
    'GET A QUOTE',
    'OTHER'
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
        formName: 'Contact Us',
        selectedInterest: selectedInterest
      });

      router.push('/thank-you');
    } catch (error: any) {
      console.error('Email error details:', error?.text || error?.message || error);
      setFormResponse({ success: false, message: error?.text || 'Something went wrong. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-[#000000] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 select-none overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none" style={{ background: '#000000' }} />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-10 z-10">
        
        {/* MAIN CONTAINER BOX WITH GLASS/BORDER EFFECT */}
        <div className="w-full bg-[#0b0d13]/80 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-md">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            
            {/* LEFT SIDE: Heading & Support Agent Graphic / Text */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.3em] text-[#ff8800] uppercase mb-3 block">
                CONTACT US
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] text-white">
                Let's Build <br />
                Something <br />
                <span className="text-[#ff8800]">Great Together.</span>
              </h1>
              <p className="text-sm sm:text-base text-white/70 tracking-wide mt-4 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
                Have a project in mind or just want to say hello? We’d love to hear from you. Our team is here to help and answer any questions you may have.
              </p>

              <div className="hidden lg:flex items-center gap-4 bg-[#121622] border border-white/10 p-4 rounded-2xl mt-4">
                <div className="w-12 h-12 rounded-full bg-[#ff8800]/20 flex items-center justify-center text-[#ff8800] text-xl font-bold">
                  🎧
                </div>
                <div className="text-left">
                  <h4 className="text-white text-sm font-bold">Dedicated Support</h4>
                  <p className="text-white/50 text-xs">Ready to assist your production goals</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (FORM) */}
            <div className="w-full lg:w-7/12 flex flex-col bg-[#07090e] border border-white/10 p-6 sm:p-8 rounded-2xl">
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">✉️</span>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white">
                    Send us a message
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/50">
                  Your satisfaction is our top priority, and we are committed to providing exceptional service and support.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col w-full">
                
                <input type="hidden" name="interest" value={selectedInterest} />

                {/* Interest Selection Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {interests.map((label) => {
                    const isSelected = selectedInterest === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setSelectedInterest(label)}
                        className={`relative flex items-center justify-center px-3 py-3 transition-all cursor-pointer rounded-xl font-sans active:translate-y-0.5 group ${
                          isSelected 
                            ? 'bg-[#ff8800] border border-[#ff8800] text-black shadow-[0_4px_0_#b35f00]' 
                            : 'bg-gradient-to-b from-[#3a3d45] to-[#22242a] border border-white/20 text-white shadow-[0_4px_0_#14161a]'
                        }`}
                      >
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider text-center ${isSelected ? 'text-black' : 'text-white/90'}`}>
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-1.5">Your Name *</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-white/40 text-sm">👤</span>
                      <input required name="name" type="text" placeholder="Enter your name" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-1.5">Email *</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-white/40 text-sm">✉️</span>
                      <input required name="email" type="email" placeholder="Email address" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-1.5">Phone Number *</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-white/40 text-sm">📞</span>
                      <input required name="phone" type="tel" placeholder="Phone number" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-1.5">Company</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-white/40 text-sm">🏢</span>
                      <input name="company" type="text" placeholder="Company name" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-1.5">Project Details *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-white/40 text-sm">✏️</span>
                    <textarea required name="message" rows={4} maxLength={1000} placeholder="Tell us about your project..." className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors resize-none" />
                  </div>
                </div>

                {formResponse && (
                  <div className={`mb-4 p-3 rounded-xl text-xs sm:text-sm font-medium ${formResponse.success ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                    {formResponse.message}
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full py-3.5 rounded-xl bg-[#ff8800] text-black font-black uppercase tracking-widest text-xs sm:text-sm transition-all shadow-[0_6px_0_#b35f00,0_10px_25px_rgba(0,0,0,0.6)] active:translate-y-1 active:shadow-[0_2px_0_#b35f00] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:bg-[#ffa733]"
                >
                  <span>{loading ? 'SENDING...' : 'Send Message'}</span>
                  <span>→</span>
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}