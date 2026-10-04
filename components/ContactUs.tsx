'use client';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import { Building2, Mail, MessageSquare, Phone, UserRound } from 'lucide-react';

export default function ContactUs() {
  const [selectedService, setSelectedService] = useState('Realtime 3D Walkthrough');
  const [selectedProjectType, setSelectedProjectType] = useState('Residential');
  const [loading, setLoading] = useState(false);
  const [formResponse, setFormResponse] = useState<{ success?: boolean; message?: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const services = ['Realtime 3D Walkthrough', '3D Animation', '360 Virtual'];
  const projectTypes = ['Residential', 'Commercial', 'Architecture & Interior', 'Real Estate Development'];

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

      // --- GTM Conversion Tracking DataLayer Push ---
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: 'contact_form_success',
        formName: 'Contact Us',
        selectedInterest: selectedService
      });
      // ---------------------------------------------

      // Redirect to Thank You page
      router.push('/thank-you');
    } catch (error: any) {
      console.error('Email error details:', error?.text || error?.message || error);
      setFormResponse({ 
        success: false, 
        message: error?.text || 'Something went wrong. Please try again.' 
      });
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-[#000000] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 select-none overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none" style={{ background: '#000000' }} />

      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-10 z-10">
        <div className="w-full bg-[#0b0d13]/80 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.3em] text-[#ff8800] uppercase mb-3 block">
                CONTACT US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.1] text-white">
                Let&apos;s Build <br />
                Something <br />
                <span className="text-[#ff8800]">Great Together.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/70 tracking-wide mt-4 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
                Have a project in mind? Send us a message. Our team can answer your questions and help you get started.
              </p>

              <div className="hidden lg:flex items-center gap-4 bg-[#121622] border border-white/10 p-4 rounded-2xl mt-4">
                <div className="w-12 h-12 rounded-full bg-[#ff8800]/20 flex items-center justify-center text-[#ff8800] text-xl font-bold">
                  🎧
                </div>
                <div className="text-left">
                  <h3 className="text-white text-sm font-bold">Dedicated Support</h3>
                  <p className="text-white/50 text-xs">Ready to assist your production goals</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col bg-[#07090e] border border-white/10 p-5 sm:p-8 rounded-2xl">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-orange-400" aria-hidden="true" />
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white">
                    Send us a message
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/50">
                  Your satisfaction is our top priority, and we are committed to providing exceptional service and support.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex w-full flex-col">
                <input type="hidden" name="interest" value={selectedService} />
                <input type="hidden" name="project_types" value={selectedProjectType} />

                <fieldset className="mb-5">
                  <legend className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/55 sm:text-[11px]">What service do you need? *</legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {services.map((service) => {
                      const isSelected = selectedService === service;
                      return (
                        <label key={service} className={`flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2.5 text-xs transition-colors ${isSelected ? 'border-orange-400 bg-orange-500/15 text-white' : 'border-white/20 bg-black/20 text-white/70 hover:border-orange-400/70'}`}>
                          <input
                            type="radio"
                            name="service_selection"
                            value={service}
                            checked={isSelected}
                            onChange={() => setSelectedService(service)}
                            className="h-4 w-4 shrink-0 accent-[#ff8800]"
                          />
                          <span className="font-semibold">{service}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/55 sm:text-[11px]">Your Name *</label>
                    <div className="relative flex items-center">
                      <UserRound className="absolute left-3.5 h-4 w-4 text-white/40" aria-hidden="true" />
                      <input id="contact-name" required name="name" type="text" autoComplete="name" placeholder="Enter your name" className="w-full rounded-xl border border-white/15 bg-[#04060b] py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 transition-colors hover:border-orange-400/60 focus:border-orange-400 focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/55 sm:text-[11px]">Email *</label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3.5 h-4 w-4 text-white/40" aria-hidden="true" />
                      <input id="contact-email" required name="email" type="email" autoComplete="email" placeholder="Email address" className="w-full rounded-xl border border-white/15 bg-[#04060b] py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 transition-colors hover:border-orange-400/60 focus:border-orange-400 focus:outline-none" />
                    </div>
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/55 sm:text-[11px]">Phone Number *</label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 h-4 w-4 text-white/40" aria-hidden="true" />
                      <input id="contact-phone" required name="phone" type="tel" autoComplete="tel" placeholder="Phone number" className="w-full rounded-xl border border-white/15 bg-[#04060b] py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 transition-colors hover:border-orange-400/60 focus:border-orange-400 focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-project-name" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/55 sm:text-[11px]">Project Name *</label>
                    <div className="relative flex items-center">
                      <Building2 className="absolute left-3.5 h-4 w-4 text-white/40" aria-hidden="true" />
                      <input id="contact-project-name" required name="company" type="text" placeholder="Project name" className="w-full rounded-xl border border-white/15 bg-[#04060b] py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 transition-colors hover:border-orange-400/60 focus:border-orange-400 focus:outline-none" />
                    </div>
                  </div>
                </div>

                <fieldset className="mb-4">
                  <legend className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/55 sm:text-[11px]">What do you want to build in {selectedService}? *</legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {projectTypes.map((type) => {
                      const isSelected = selectedProjectType === type;
                      return (
                        <label key={type} className={`flex min-h-10 cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2 text-xs transition-colors ${isSelected ? 'border-orange-400 bg-orange-500/15 text-white' : 'border-white/20 bg-black/20 text-white/70 hover:border-orange-400/70'}`}>
                          <input
                            type="radio"
                            name="project_type_selection"
                            value={type}
                            checked={isSelected}
                            onChange={() => setSelectedProjectType(type)}
                            className="h-4 w-4 shrink-0 accent-[#ff8800]"
                          />
                          <span className="font-semibold">{type}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mb-4">
                  <label htmlFor="contact-message" className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-white/55 sm:text-[11px]">Project Details *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" aria-hidden="true" />
                    <textarea id="contact-message" required name="message" rows={3} maxLength={1000} placeholder="Tell us about your project..." className="w-full resize-y rounded-xl border border-white/15 bg-[#04060b] py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 transition-colors hover:border-orange-400/60 focus:border-orange-400 focus:outline-none" />
                  </div>
                </div>

                {formResponse && (
                  <div className={`mb-4 p-3 rounded-xl text-xs sm:text-sm font-medium ${formResponse.success ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                    {formResponse.message}
                  </div>
                )}

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