import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '360 Virtual Tours | Aexus Studios',
  description: 'Explore architectural spaces with immersive 360 virtual tours by Aexus Studios.'
};

const virtualTours = [
  { title: '360° Virtual Real Estate Tour', image: '/360/360-1.jpg', link: 'https://aexusstudios.com/ESouthRiver/' },
  { title: '360° Virtual Real Estate Tour', image: '/360/360-2.png', link: 'https://aexusstudios.com/ivf-academy/' }
];

export default function VirtualTourPage() {
  return (
    <div className="min-h-screen bg-[#04060b] text-white">
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden border-b border-white/10 px-6 pb-16 pt-36 sm:px-10 lg:px-16">
        <Image
          src="/360/360-2.png"
          alt="An interactive virtual tour interface showing a modern interior"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04060b]/40 via-[#04060b]/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Immersive property experiences</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              360 Virtual Tours
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Let buyers explore every room and discover the details of a property from wherever they are. Navigate a photorealistic space at their own pace, before the first site visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#tour-experience" className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-7 text-xs font-black uppercase tracking-widest text-black transition hover:bg-orange-400">
                Get a Free Quote
              </Link>
              <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 text-xs font-black uppercase tracking-widest text-white transition hover:border-orange-400 hover:text-orange-300">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="tour-experience" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#10151d]">
          <Image
            src="/360/360-2.png"
            alt="Virtual tour controls and location selector inside an interior walkthrough"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Look around. Move freely.</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">A property you can step into</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
            A guided 360 experience connects rooms, amenities, and key viewpoints in one clear journey. Give prospective buyers the freedom to look around, understand the layout, and feel at home before they arrive.
          </p>
          <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
            <div>
              <h3 className="font-extrabold">Room-to-room navigation</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">Move between key interiors and shared spaces without losing your bearings.</p>
            </div>
            <div>
              <h3 className="font-extrabold">Every detail in view</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">Explore finishes, layouts, and sightlines with an interactive perspective.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">360 tour portfolio</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Explore a virtual tour</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {virtualTours.map((tour, index) => (
              <a key={tour.link} href={tour.link} target="_blank" rel="noopener noreferrer" className="group relative block aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#10151d]" aria-label={`Open ${tour.title} ${index + 1}`}>
                <Image
                  src={tour.image}
                  alt={`${tour.title} ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6">
                  <h3 className="text-sm font-extrabold text-white sm:text-lg">{tour.title}</h3>
                  <span className="shrink-0 rounded-full bg-orange-500 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-black">Open tour</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080c12] px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Bring your project to life</p>
            <h2 className="mt-3 text-2xl font-black uppercase sm:text-3xl">Make the next visit virtual.</h2>
          </div>
          <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-7 text-xs font-black uppercase tracking-widest text-black transition hover:bg-orange-400">
           Request a custom quote
          </Link>
        </div>
      </section>
    </div>
  );
}
