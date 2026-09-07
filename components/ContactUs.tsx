'use client';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

export default function ContactUs() {
  const [selectedInterest, setSelectedInterest] = useState('DISCUSSING A PRODUCTION');
  const [loading, setLoading] = useState(false);
  const [formResponse, setFormResponse] = useState<{ success?: boolean; message?: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const interests = [
    'DISCUSSING A PRODUCTION',
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

      router.push('/thank-you');
    } catch (error: any) {
      console.error('Email error details:', error?.text || error?.message || error);
      setFormResponse({ success: false, message: error?.text || 'Something went wrong. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-[#000000] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: '#000000' }} />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 z-10">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
          <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.3em] text-[#ff8800] uppercase mb-2 sm:mb-3 block">
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.1]">
            LET'S BUILD <br />
            <span className="text-[#ff8800]">SOMETHING</span> <br />
            REMARKABLE.
          </h1>
          <p className="text-sm sm:text-base text-white/70 tracking-wide mt-3 sm:mt-4 mb-6 lg:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            Share your project details and we’ll craft an experience your audience will remember.
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="w-full lg:w-7/12 flex flex-col">
          
          <div className="block lg:hidden mb-6 text-center">
            <span className="text-base sm:text-lg font-black uppercase tracking-wider text-white">
              LET'S TALK TO US
            </span>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col w-full">
            
            {/* Hidden input for selected interest so EmailJS template receives it */}
            <input type="hidden" name="interest" value={selectedInterest} />

            {/* Interest Selection Tabs - Selected is Gray, Unselected are #ff8800 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {interests.map((label) => {
                const isSelected = selectedInterest === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelectedInterest(label)}
                    className={`relative flex items-center justify-between px-4 py-3.5 transition-all cursor-pointer rounded-xl font-sans active:translate-y-0.5 group ${
                      isSelected 
                        ? 'bg-gradient-to-b from-[#3a3d45] to-[#22242a] border border-white/20 text-white shadow-[0_6px_0_#14161a,0_10px_15px_rgba(0,0,0,0.4)] hover:!bg-[#ff8800] hover:!from-[#ff8800] hover:!to-[#ff8800] hover:border-[#ff8800] hover:text-black' 
                        : 'bg-[#ff8800] border border-[#ff8800] text-black shadow-[0_6px_0_#b35f00,0_10px_15px_rgba(0,0,0,0.4)] hover:!bg-gradient-to-b hover:!from-[#3a3d45] hover:!to-[#22242a] hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-left ${isSelected ? 'text-white/90 group-hover:text-black' : 'text-black group-hover:text-white/90'}`}>
                      {label}
                    </span>
                    <span className={`text-xs font-bold ${isSelected ? 'text-white/60 group-hover:text-black' : 'text-black group-hover:text-white/60'}`}>
                      {isSelected ? '—' : '+'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">NAME</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-white/40 text-sm">👤</span>
                  <input required name="name" type="text" placeholder="Enter your name" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">COMPANY</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-white/40 text-sm">🏢</span>
                  <input name="company" type="text" placeholder="Company name" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">EMAIL</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-white/40 text-sm">✉️</span>
                  <input required name="email" type="email" placeholder="name@example.com" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">PHONE NUMBER</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-white/40 text-sm">📞</span>
                  <input name="phone" type="tel" placeholder="+92 (555) 000-0000" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors" />
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-5">
              <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">HOW DID YOU HEAR ABOUT US?</label>
              <select name="hearAbout" className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white/70 focus:outline-none focus:border-[#ff8800] transition-colors">
                <option value="">Select an option</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-5 sm:mb-6 relative">
              <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">MESSAGE</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-white/40 text-sm">✏️</span>
                <textarea name="message" rows={4} maxLength={1000} placeholder="Tell us about your project..." className="w-full bg-[#04060b] border border-white/10 hover:border-[#ff8800] rounded-xl pl-11 pr-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff8800] transition-colors resize-none" />
              </div>
            </div>

            {formResponse && (
              <div className={`mb-4 p-3 rounded-xl text-xs sm:text-sm font-medium ${formResponse.success ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                {formResponse.message}
              </div>
            )}

            {/* GET UPDATES Submit Button - Permanent #ff8800, Hover Gray */}
            <button 
              disabled={loading}
              type="submit" 
              className="w-full py-3.5 sm:py-4 rounded-xl bg-[#ff8800] border-t border-[#ff8800] text-black font-black uppercase tracking-widest text-xs sm:text-sm transition-all shadow-[0_6px_0_#b35f00,0_10px_25px_rgba(0,0,0,0.6)] active:translate-y-1 active:shadow-[0_2px_0_#b35f00] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:!bg-gradient-to-b hover:!from-[#7a7d85] hover:!to-[#4a4d55] hover:border-white/40 hover:text-white"
            >
              <span>{loading ? 'SENDING...' : 'GET UPDATES'}</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}