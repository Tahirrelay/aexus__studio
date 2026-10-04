import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Architectural Animation | Aexus Studios',
  description: 'Cinematic architectural animation and 3D walkthroughs by Aexus Studios.'
};

const animationProjects = [
  { title: 'Mumtaz Residency', description: 'A cinematic look at the architecture and spaces of Mumtaz Residency.', src: '/Animations/ani-2.jpg', link: 'https://www.youtube.com/watch?v=nUgOrC9sigA' },
  { title: 'NS Arcade', description: 'Explore the distinctive architecture of NS Arcade in motion.', src: '/Animations/ani-4.jpg', link: 'https://www.youtube.com/watch?v=JCPFBU6IPA4' },
  { title: 'Modren House Animation', description: 'A contemporary home brought to life through detailed 3D animation.', src: '/Animations/ani-5.jpg', link: 'https://www.youtube.com/watch?v=zlkeG2q8QNM' },
  { title: 'CommTel Office', description: 'A polished animated tour through the CommTel Office project.', src: '/Animations/ani-8.jpg', link: 'https://www.youtube.com/watch?v=IkiRDKjfTEg' }
];

export default function AnimationPage() {
  return (
    <div className="min-h-screen bg-[#04060b] text-white">
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden border-b border-white/10 px-6 pb-16 pt-36 sm:px-10 lg:px-16">
        <iframe
          src="https://www.youtube.com/embed/3B93sbzEpxI?autoplay=1&mute=1&loop=1&playlist=3B93sbzEpxI&playsinline=1&controls=0&rel=0"
          title="Interior Living Room | Unreal Engine 5"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[max(56.25vw,100svh)] w-[max(100vw,177.78svh)] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#04060b]/55 via-[#04060b]/15 to-transparent" />
        <div className="absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 2xl:flex" aria-hidden="true">
          <div className="animation-hero-rail-content flex flex-col items-center gap-5">
            <span className="text-xs font-black tracking-[0.2em] text-orange-400">01</span>
            <span className="h-14 w-px bg-orange-400/50" />
            <span className="animation-vertical-label text-[25px] font-bold tracking-[0.32em] text-white/65">3D Animation</span>
          </div>
        </div>
        <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 2xl:flex" aria-hidden="true">
          <div className="animation-hero-rail-content flex flex-col items-center gap-5 [animation-delay:180ms]">
            <span className="text-xs font-black tracking-[0.2em] text-orange-400">02</span>
            <span className="h-14 w-px bg-orange-400/50" />
            <span className="animation-vertical-label text-[25px] font-bold tracking-[0.32em] text-white/65">Interior Animation</span>
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-7xl justify-end">
          <div className="animation-hero-copy max-w-3xl text-right">
          
            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-7 text-xs font-black uppercase tracking-widest text-black transition hover:bg-orange-400">Get a free Quote</Link>
              <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 text-xs font-black uppercase tracking-widest text-white transition hover:border-orange-400 hover:text-orange-300">Start Your project</Link>
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Animation portfolio</p>
            <h2 id="animation-work" className="mt-3 text-3xl font-black uppercase sm:text-4xl">Built to be seen in motion.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/55">Choose a project to watch its animation.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {animationProjects.map((project) => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${project.title} on YouTube`} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11151c] transition-colors hover:border-orange-400/50">
              <div className="relative aspect-video overflow-hidden">
                <Image src={project.src} alt={`${project.title} animation thumbnail`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="flex min-h-36 items-start justify-between gap-5 p-5 sm:p-6">
                <div>
                  <h3 className="text-lg font-extrabold text-white sm:text-xl">{project.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60">{project.description}</p>
                </div>
                <span className="mt-1 shrink-0 text-xs font-black uppercase tracking-wider text-orange-400">Watch video</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080c12] px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">Have a project in mind?</p>
            <h2 className="mt-3 text-2xl font-black uppercase sm:text-3xl">Let’s make it move.</h2>
          </div>
          <Link href="/contact-us" className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-7 text-xs font-black uppercase tracking-widest text-black transition hover:bg-orange-400">Request a custom quote</Link>
        </div>
      </section>
    </div>
  );
}
