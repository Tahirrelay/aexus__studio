'use client';

import Link from 'next/link';
import { Cpu, Gauge, Ruler } from 'lucide-react';

const loopingYouTubeUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1`;

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#04060b] text-white font-sans selection:bg-orange-500 selection:text-black">
      <section className="relative min-h-[90vh] flex items-center justify-end overflow-hidden pt-32 pb-16">
        {/* Background Image covering the whole section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/services/hero2.jpg" 
            alt="Aexus Studios Architectural Realtime Render" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle dark gradient on the right side so text is legible without any card container */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#04060b]/80 via-[#04060b]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 flex justify-end">         
          <div className="max-w-xl text-right mr-0 lg:mr-6">        
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 backdrop-blur-sm">
              Interactive 3D Walkthroughs for Real Estate
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Explore Your Property <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">in Real Time</span>
            </h1>
            <p className="mt-6 text-sm lg:text-base text-white/95 leading-relaxed ml-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-xl">
              Bring your architectural project to life with an immersive realtime 3D walkthrough. Let your clients explore the exterior, enter the building, move through the lobby, experience different apartment types and discover rooftop amenities — all in one seamless interactive journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-end gap-4">
              <Link href="/contact-us" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3.5 text-xs font-black uppercase tracking-widest text-black transition hover:opacity-90 shadow-2xl shadow-orange-500/30">
                Get a Free Quote
              </Link>
              <Link href="https://wa.me/03390095259" className="rounded-full border border-white/30 bg-black/30 backdrop-blur-md px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white transition hover:border-orange-500 hover:text-orange-400">
                Start your project
              </Link>
            </div>
          </div>
        </div>
      </section>
     
      {/* 01 / 07: START OUTSIDE. EXPLORE THE EXTERIOR. */}
      <section id="outside" className="py-20 border-t border-white/10 bg-[#070b13]">
        <div className="w-full px-6 lg:px-12 mx-auto">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 items-center">
            
            {/* Larger & Wider Video Container */}
            <div id="exterior-demo" className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl bg-black aspect-video w-full">
             <iframe
            className="w-full h-full"
            src={loopingYouTubeUrl('1VRbjcazI3A')}
            title="Experience the Real-Time Architectural Exterior Walkthrough by Aexus Studios."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
            </div>

            {/* Text Aligned to Left */}
            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">01 / 07 — Exterior Walkthrough</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black uppercase tracking-tight">
                Start Outside. <br />Explore the Exterior.
              </h2>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xl">
                Experience your development from the moment clients arrive. Allow buyers to explore building architecture, surrounding landscaping, facade lighting, and parking entrances in an ultra-realistic 3D environment before ground is broken.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-white/10 text-left">
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Architectural Precision</h4>
                  <p className="mt-1 text-xs text-white/50">Exact facade details, balcony structures, and premium material finishes matching your blueprints.</p>
                </div>
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Landscaping &amp; Environment</h4>
                  <p className="mt-1 text-xs text-white/50">Dynamic trees, road layouts, surrounding neighborhood context, and amenity zones.</p>
                </div>
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Dynamic Lighting &amp; Weather</h4>
                  <p className="mt-1 text-xs text-white/50">Switch between natural daylight, sunset ambiance, and night-time architectural illumination.</p>
                </div>
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Smooth Real-Time Navigation</h4>
                  <p className="mt-1 text-xs text-white/50">Fluid camera motion for seamless client presentations on web, tablet, or big screens.</p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <h3 className="font-extrabold text-sm">Why Choose Aexus Studios For Exterior Visualization?</h3>
                <ul className="mt-3 space-y-2 text-xs text-white/60">
                  <li><span className="font-bold text-white/80">Photorealistic Unreal Engine Graphics:</span> Unmatched cinematic visual depth that builds buyer confidence.</li>
                  <li><span className="font-bold text-white/80">Faster Pre-Sales Approval:</span> Help investors visualize scale, location impact, and exterior aesthetics effortlessly.</li>
                </ul>
                <div className="mt-6 flex flex-wrap justify-start gap-3">
                 
                  <Link href="/contact-us" className="rounded-full border border-orange-500/60 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-orange-300 transition hover:bg-orange-500 hover:text-black">
                    Request a Custom Quote
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     {/* 02 / 07: STEP INSIDE. LOBBY TO YOUR APARTMENT. */}
      <section className="py-20 border-t border-white/10 bg-[#05080e]">
        <div className="w-full px-6 lg:px-12 mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-center">
            
            {/* Text Aligned / Left side */}
            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">02 / 07</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black uppercase tracking-tight">
                Step Inside. <br />Lobby to Your Apartment.
              </h2>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xl">
                Enter the building and experience the journey exactly as your clients would. Walk through the entrance lobby, explore the architectural details and move between floors using the interactive lift experience.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/80">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span> Entrance Lobby
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/80">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span> Interactive Lift
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/80">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span> Apartment Access
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact-us" className="inline-block rounded-full bg-orange-500 px-7 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-orange-400 transition">
                  Request a Custom Quote
                </Link>
              </div>
            </div>

            {/* Larger Video Container */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl bg-black aspect-video w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={loopingYouTubeUrl('LMYVZ8cEnBQ')}
                title="Luxury Entrance Lobby & Reception 3D Walkthrough | Request a Walkthrough Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </section>

     {/* 03 / 07: EXPLORE DIFFERENT APARTMENT TYPES. */}
      <section className="py-20 border-t border-white/10 bg-[#070b13]">
        <div className="w-full px-6 lg:px-12 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">03 / 07</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black uppercase tracking-tight">
                Explore Different Apartment Types.
              </h2>
            </div>
            <Link href="/portfolio" className="mt-4 md:mt-0 text-xs font-black uppercase tracking-widest text-orange-400 hover:underline">
              View All Apartment Types →
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { type: 'Type 01 - 1 Bedroom', videoId: 'SxLaZWpUf0E', videoTitle: 'High-End Modern Interior Design Realtime | Get Custom 3D Walkthrough.', features: ['Modern Layout', 'Open Living & Kitchen', 'Private Balcony'] },
              { type: 'Type 02 - 2 Bedroom', videoId: 'QSD2vJUuVCY', videoTitle: 'Interactive 3D Apartment Architectural Tour | Get Custom Realtime Walkthrough', features: ['Spacious Living', 'Modern Kitchen', 'City View'] },
              { type: 'Type 03 - 3 Bedroom', videoId: 'Z0AyFwGh2_U', videoTitle: 'Modern Master Apartment Interior Walkthrough | Request a Free Proposal', features: ['Premium Finishes', 'Large Balcony', 'Extra Space'] }
            ].map((apt, idx) => (
              <div key={idx} className="rounded-[2rem] overflow-hidden bg-[#0e141f] border border-white/15 group shadow-2xl">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={loopingYouTubeUrl(apt.videoId)}
                    title={apt.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black uppercase tracking-tight">{apt.type}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {apt.features.map((f, i) => <li key={i}>• {f}</li>)}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <Link href="/contact-us" className="text-xs font-black uppercase tracking-widest text-orange-400 hover:underline">
                     Request a Custom Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / 07: DISCOVER THE ROOFTOP. EXPERIENCE THE AMENITIES. */}
      <section className="py-20 border-t border-white/10 bg-[#05080e]">
        <div className="w-full px-6 lg:px-12 mx-auto">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 items-center">
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl bg-black aspect-video w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={loopingYouTubeUrl('BA7KoO6gR-w')}
                title="Modern Rooftop Lounge & Amenities 3D Tour | Request a Free Quote"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">04 / 07</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black uppercase tracking-tight">
                Discover the Rooftop. <br />Experience the Amenities.
              </h2>
              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xl">
                Use the interactive interface to move to the rooftop and explore the project’s lifestyle amenities. From leisure spaces and pools to landscaped spaces and recreational facilities, give your clients a complete view of what the development has to offer.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Rooftop Views</h4>
                  <p className="mt-1 text-xs text-white/50">Panoramic horizon and sky views from top decks.</p>
                </div>
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Swimming Pool</h4>
                  <p className="mt-1 text-xs text-white/50">Realistic water shaders, lighting, and lounging areas.</p>
                </div>
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Landscaped Spaces</h4>
                  <p className="mt-1 text-xs text-white/50">Greenery, seating layouts, and walking tracks.</p>
                </div>
                <div>
                  <h4 className="font-extrabold uppercase text-xs text-orange-400">Recreational Amenities</h4>
                  <p className="mt-1 text-xs text-white/50">Gym, club rooms, and social gathering zones.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 05 / 07: THE COMPLETE JOURNEY. IN ONE WALKTHROUGH. */}
      <section className="py-20 border-t border-white/10 bg-[#070b13]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">05 / 07</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-black uppercase tracking-tight">
            The Complete Journey. <br />In One Walkthrough.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-white/70 leading-relaxed">
            This full walkthrough brings everything together – from the exterior to rooftop amenities. Give your clients an immersive experience that helps them understand the entire project before it's built.
          </p>

          <div className="mt-10 relative rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl bg-black aspect-video max-w-5xl mx-auto w-full">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={loopingYouTubeUrl('kb7NjYL70h4')}
              title="Luxury Interior Design"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-xs font-extrabold uppercase tracking-widest text-white/60">
            <span>• Exterior</span>
            <span>• Lobby</span>
            <span>• Lift</span>
            <span>• Apartment</span>
            <span>• Rooftop</span>
            <span>• Amenities</span>
          </div>
        </div>
      </section>

      {/* WALKTHROUGH COMPARISON */}
      <section className="py-20 border-t border-white/10 bg-[#05080e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">
              The Complete Journey. In One Walkthrough.
            </h2>
            <p className="mt-3 max-w-5xl text-sm text-white/65 leading-relaxed">
              Why rely on static renders when you can offer an immersive 3D real-time experience? See how Aexus Studios empowers real estate developers to pre-sell faster and convert inquiries into buyers before construction even begins.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[1.65fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b111a]">
              <h3 className="border-b border-white/10 bg-white/[0.03] px-5 py-4 text-center text-lg font-black uppercase sm:text-xl">
                Traditional Agencies <span className="text-white/45">vs</span>{' '}
                <span className="text-orange-400">Aexus Studios</span>
              </h3>
              <div className="hidden grid-cols-[minmax(130px,0.8fr)_1fr_1fr] border-b border-white/10 px-5 py-3 text-[10px] font-black uppercase tracking-wider text-white/45 md:grid">
                <span>Comparison</span>
                <span>Traditional Agencies</span>
                <span className="text-orange-300">Aexus Studios</span>
              </div>
              {[
                {
                  title: 'Client Interactivity',
                  traditional: 'Passive viewing with flat renders and pre-recorded video loops.',
                  aexus: '100% free exploration with full camera control in real time.'
                },
                {
                  title: 'Pre-Sales Impact',
                  traditional: 'Low engagement and slower buyer decision-making.',
                  aexus: 'Immersive experiences build buyer trust and speed up pre-sales.'
                },
                {
                  title: 'Multi-Device Support',
                  traditional: 'Large video files that lag or take time to download.',
                  aexus: 'Smooth rendering on web, mobile, tablet, and VR.'
                },
                {
                  title: 'Real-Time Changes',
                  traditional: 'Fixed textures and hard-to-change floor plan views.',
                  aexus: 'Swap materials, lighting, and furniture layouts instantly.'
                }
              ].map((row) => (
                <div key={row.title} className="grid grid-cols-2 border-b border-white/10 last:border-b-0 md:grid-cols-[minmax(130px,0.8fr)_1fr_1fr]">
                  <h4 className="col-span-2 border-b border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-extrabold md:col-span-1 md:border-b-0 md:border-r md:border-white/10 md:px-5 md:py-5">
                    {row.title}
                  </h4>
                  <p className="px-4 py-4 text-xs leading-relaxed text-white/65 md:px-5 md:py-5">
                    <span className="mb-2 block text-[9px] font-black uppercase tracking-wider text-white/40 md:hidden">Traditional Agencies</span>
                    {row.traditional}
                  </p>
                  <p className="border-l border-orange-400/20 bg-orange-500/[0.07] px-4 py-4 text-xs leading-relaxed text-white/85 md:px-5 md:py-5">
                    <span className="mb-2 block text-[9px] font-black uppercase tracking-wider text-orange-300 md:hidden">Aexus Studios</span>
                    {row.aexus}
                  </p>
                </div>
              ))}
            </div>

            <aside className="rounded-2xl border border-white/15 bg-[#0b111a] p-5 sm:p-6">
              <h3 className="text-xl font-black">Why Partner with Aexus Studios?</h3>
              <div className="mt-6 space-y-6">
                {[
                  {
                    icon: Gauge,
                    title: 'Pre-Sell Up to 40% Faster',
                    description: 'Help buyers understand and connect with a development through an immersive real-time walkthrough.'
                  },
                  {
                    icon: Ruler,
                    title: 'Blueprint Accuracy & Precision',
                    description: 'Present architectural details, materials, and layouts true to your project plans.'
                  },
                  {
                    icon: Cpu,
                    title: 'Powered by Unreal Engine 5',
                    description: 'Deliver cinematic visuals and smooth, interactive navigation through the entire project.'
                  }
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-orange-400" aria-hidden="true" />
                    <div>
                      <h4 className="font-extrabold leading-snug">{title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      

    </div>
  );
}