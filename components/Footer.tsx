'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="relative w-full bg-[#0A1B31] py-12 px-3 sm:px-6 select-none overflow-hidden">
      
      {/* Expanded Container Width */}
      <footer className="relative w-full max-w-[120%] mx-auto bg-[#070e17]/95 text-white pt-20 pb-12 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-xl">
        
        {/* Background Orange/Red Gradient Glow with matching atmospheric light */}
        <div className="absolute bottom-0 left-0 w-full h-[700px] bg-gradient-to-t from-[#ff6600]/30 via-[#ff4500]/10 to-transparent opacity-90 pointer-events-none filter blur-[60px] transform scale-110 translate-y-32" />

        <div className="w-full px-6 sm:px-12 lg:px-16 z-10 relative">

          {/* MAIN FOOTER GRID (4 COLUMNS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10 text-sm sm:text-base">
            
            {/* Column 1: Brand Info & Socials */}
            <div className="flex flex-col gap-5">
              <div className="relative w-[180px] h-[45px]">
                <Image 
                  src="/logo-images/Aexus-Logo.png" 
                  alt="Aexus Studio Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Building the future with cutting-edge technology solutions. We specialize in 3D web experiences, configurators, AR/VR, and innovative design.
              </p>
              
              {/* Custom Uiverse Social Media Icons with Real Links */}
              <div className="flex items-center gap-3 mt-1">
                {/* Instagram */}
                <a href="https://www.instagram.com/aexus.studios/" target="_blank" rel="noreferrer" className="socialContainer containerOne" aria-label="Instagram">
                  <svg className="socialSvg instagramSvg" viewBox="0 0 16 16" width="19px">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="#FFFFFF"></path>
                  </svg>
                </a>

                {/* TikTok
                <a href="#" target="_blank" rel="noreferrer" className="socialContainer containerTwo" aria-label="TikTok">
                  <svg className="socialSvg tiktokSvg largeIcon" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" width="27px">
                    <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" fill="#FFFFFF"></path>
                  </svg>
                </a> */}

                {/* Facebook (Updated with real link) */}
                <a href="https://www.facebook.com/profile.php?id=61576861167581" target="_blank" rel="noreferrer" className="socialContainer containerThree" aria-label="Facebook">
                  <svg className="socialSvg tiktokSvg largeIcon" width="27px" viewBox="0 0 45 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.0793333,40 L30.0793333,27.608 L34.239,27.608 L34.8616667,22.7783333 L30.0793333,22.7783333 L30.0793333,19.695 C30.0793333,18.2966667 30.4676667,17.344 32.4726667,17.344 L35.0303333,17.3426667 L35.0303333,13.0233333 C34.5876667,12.9646667 33.0696667,12.833 31.3036667,12.833 C27.6163333,12.833 25.0923333,15.0836667 25.0923333,19.2166667 L25.0923333,22.7783333 L20.922,22.7783333 L20.922,27.608 L25.0923333,27.608 L25.0923333,40 L30.0793333,40 Z M9.766,40 C8.79033333,40 8,39.209 8,38.234 L8,9.766 C8,8.79033333 8.79033333,8 9.766,8 L38.2336667,8 C39.209,8 40,8.79033333 40,9.766 L40,38.234 C40,39.209 39.209,40 38.2336667,40 L9.766,40 Z" fill="#FFFFFF"></path>
                  </svg>
                </a>

                {/* Pinterest */}
                <a href="#" target="_blank" rel="noreferrer" className="socialContainer containerFour" aria-label="Pinterest">
                  <svg className="socialSvg pinterestSvg" viewBox="0 0 24 24" width="19px" fill="#E60023" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.696-2.433-2.882-2.433-4.646 0-3.776 2.744-7.252 7.915-7.252 4.155 0 7.392 2.964 7.392 6.923 0 4.135-2.607 7.462-6.223 7.462-1.214 0-2.355-.63-2.744-1.379l-.749 2.854c-.271 1.041-1.002 2.349-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* LinkedIn (Updated with real link) */}
                <a href="https://www.linkedin.com/company/aexus-studios/posts/" target="_blank" rel="noreferrer" className="socialContainer containerFive" aria-label="LinkedIn">
                  <svg className="socialSvg linkedinSvg" viewBox="0 0 24 24" width="19px" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* YouTube (Updated with real link) */}
                <a href="https://www.youtube.com/@Officialaexusstudios" target="_blank" rel="noreferrer" className="socialContainer containerSix" aria-label="YouTube">
                  <svg className="socialSvg youtubeSvg" viewBox="0 0 24 24" width="19px" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-3.5">
              <h5 className="font-extrabold uppercase tracking-[0.2em] text-[#ff6600] mb-2 text-xs sm:text-sm">Quick Links</h5>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">Home</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">About Us</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">Capabilities</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">Portfolio</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">Contact</Link>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col gap-3.5">
              <h5 className="font-extrabold uppercase tracking-[0.2em] text-[#ff6600] mb-2 text-xs sm:text-sm">Services</h5>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">3D Web Apps & Configurators</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">Architectural Viz</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">3D Product Design</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">VR / AR Experiences</Link>
              <Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 transition-all text-sm sm:text-base">Custom Software & Dev</Link>
            </div>

            {/* Column 4: Get In Touch & Newsletter */}
            <div className="flex flex-col gap-4">
              <h5 className="font-extrabold uppercase tracking-[0.2em] text-[#ff6600] mb-2 text-xs sm:text-sm">Get In Touch</h5>
              
              <div className="flex flex-col gap-1 text-sm sm:text-base">
                <a href="mailto:info@aexusstudios.com" className="text-[#ff6600] hover:underline font-semibold">info@aexusstudios.com</a>
                <span className="text-white/70 mt-1 font-mono text-xs sm:text-sm">+923390095259</span>
                <span className="text-white/70 mt-1 font-mono text-xs sm:text-sm">OFFICE NO.305,3RD FLOOR, ITTEHAD LANE 12, BUILDING NO.23C, PHASE 2 EXT D.H.A KARACHI</span>
              </div>

              <p className="text-white/80 text-sm mt-1">
                Stay updated with our latest projects and updates.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 mt-1">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full bg-[#030712] border border-white/15 rounded-xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-white/30 focus:outline-none focus:border-[#ff6600] transition-colors shadow-inner"
                />
                <button 
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#ff6600] hover:opacity-90 text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(255,102,0,0.3)] cursor-pointer"
                >
                  {subscribed ? '✨ SUBSCRIBED!' : 'Subscribe'}
                </button>
              </form>
            </div>

          </div>

          {/* MASSIVE BRAND LOGO WATERMARK AT THE TOP */}
          <div className="w-full pt-12 pb-6 overflow-hidden text-center select-none flex flex-col items-center justify-center">
  <div className="relative w-full max-w-[800px] h-[120px] sm:h-[180px] lg:h-[220px] opacity-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
    <Image 
      src="/logo-images/Aexus-Logo.png" 
      alt="Aexus Studio Watermark Logo" 
      fill sizes="100vw"
      className="object-contain"
    />
  </div>
</div>
          {/* COPYRIGHT & LINKS BOTTOM BAR */}
          <div className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm font-mono tracking-widest text-white/70 uppercase gap-6 border-t border-white/15">
            
            {/* Left Side: Copyright Text */}
            <p>© {new Date().getFullYear()} Aexus Studio. All rights reserved.</p>

            {/* Right Side: Privacy Policy & Actions */}
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              
              <button 
                onClick={scrollToTop}
                className="text-white hover:text-[#ff6600] transition-colors cursor-pointer normal-case tracking-normal ml-2 font-sans font-semibold"
              >
                Back to top ↑
              </button>
            </div>
          </div>

        </div>
      </footer>
    </section>
  );
}