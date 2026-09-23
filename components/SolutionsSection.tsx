'use client';

import { motion, type Transition } from 'framer-motion';
import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export type StoryMedia = {
  type: 'color' | 'image' | 'video';
  src?: string;
  color?: string;
  poster?: string;
};

export type Story = {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  image?: string;
  video?: string;
  media?: StoryMedia;
  poster?: string;
  link?: string;
  alt?: string;
};

export type SolutionsSectionProps = {
  stories?: Story[];
  heading?: string;
  accentHeading?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: 'next' | 'previous';
  transitionSpeed?: number;
  dragSensitivity?: number;
  cardRadius?: number;
  cardGap?: number;
  cardPadding?: number;
  containerHeight?: number;
  expandedFlex?: number;
  collapsedFlex?: number;
  mobileBreakpoint?: number;
  showCaption?: boolean;
  captionOpen?: boolean;
  captionOverlay?: number;
  titleFontFamily?: string;
  titleFontSize?: number;
  titleLineHeight?: number;
  titleColor?: string;
  descriptionFontFamily?: string;
  descriptionFontSize?: number;
  descriptionLineHeight?: number;
  descriptionColor?: string;
  overlayOpacity?: number;
  showIndicators?: boolean;
  activeIndicatorColor?: string;
  inactiveIndicatorColor?: string;
  activeIndicatorWidth?: number;
  inactiveIndicatorWidth?: number;
  staticRenderer?: boolean;
  backgroundColor?: string;
  accentColor?: string;
  cardColor?: string;
  cardBorderColor?: string;
};

const defaultStories: Story[] = [
  { id: '01', label: 'Plot size / site survey', title: 'The land before the lines', description: 'A technical site survey showing the villa plot, dimensions, north direction and the landscape around it.', image: '/Hero/phase1.png', link: '#', alt: 'Technical plot size site survey plan' },
  { id: '02', label: 'Plot plane / floor plan', title: 'A plan for living', description: 'A detailed ground-floor plan mapping the entrance, living spaces, bedrooms, kitchen and the flow between them.', image: '/Hero/FLOOR.png', link: '#', alt: 'Villa ground floor architectural plan' },
  { id: '03', label: 'Plot exterior', title: 'Architecture in daylight', description: 'Dark cladding, white render, clean lines, landscaping, pool and patio brought together in one exterior view.', image: '/Hero/Exterior_Rendering.jpg', link: '#', alt: 'Luxury villa exterior with pool and patio' },
  { id: '04', label: 'Plot interior', title: 'Light finds its way in', description: 'An open-plan living area with modern furniture, natural light and floor-to-ceiling windows.', image: '/Hero/interior_Rendering.jpg', link: '#', alt: 'Modern luxury villa interior' },
  { id: '05', label: 'Plot 3D / axonometric', title: 'The whole story, at once', description: 'A dollhouse-like 3D view revealing the ground-floor layout, furniture, bedrooms and pool deck.', image: '/architecture/arc-9.jpg', link: '#', alt: 'Axonometric villa visualization' },
  // { id: '06', label: 'Single shot', title: 'A detail worth remembering', description: 'A dramatic close-up of a cantilevered master balcony at sunset, with glass, texture and deep shadow.', image: '/architecture/Governer House/gov5.jpg', video: '/videos/Car_Configurator.mp4', link: '#', alt: 'Dramatic architectural balcony detail' },
];

export default function SolutionsSection({
  stories = defaultStories,
  heading = 'Transforming 3D Tech',
  accentHeading = 'Into Results',
  autoplay = true,
  autoplaySpeed = 5200,
  autoplayDirection = 'next',
  transitionSpeed = 0.65,
  dragSensitivity = 1,
  cardRadius = 24,
  cardGap = 12,
  cardPadding = 8,
  containerHeight = 540,
  expandedFlex = 4,
  collapsedFlex = 1,
  mobileBreakpoint = 720,
  showCaption = true,
  captionOpen = true,
  captionOverlay = 0.82,
  titleFontFamily = 'ui-sans-serif, system-ui, sans-serif',
  titleFontSize = 30,
  titleLineHeight = 0.98,
  titleColor = '#ffffff',
  descriptionFontFamily = 'ui-sans-serif, system-ui, sans-serif',
  descriptionFontSize = 14,
  descriptionLineHeight = 1.45,
  descriptionColor = 'rgba(255,255,255,0.68)',
  overlayOpacity = 0.9,
  showIndicators = true,
  activeIndicatorColor = '#ff8800',
  inactiveIndicatorColor = 'rgba(255,255,255,0.25)',
  activeIndicatorWidth = 34,
  inactiveIndicatorWidth = 10,
  staticRenderer = false,
  backgroundColor = '#05060a',
  accentColor = '#ff8800',
  cardColor = '#0c1017',
  cardBorderColor = 'rgba(255,255,255,0.16)',
}: SolutionsSectionProps) {
  const items = useMemo(() => stories.slice(0, 30), [stories]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [captionExpanded, setCaptionExpanded] = useState(captionOpen);
  const [isMobile, setIsMobile] = useState(false);
  const dragStart = useRef(0);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= mobileBreakpoint);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [mobileBreakpoint]);

  useEffect(() => {
    if (!autoplay || staticRenderer || isDragging || items.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + (autoplayDirection === 'next' ? 1 : -1) + items.length) % items.length), autoplaySpeed);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplayDirection, autoplaySpeed, isDragging, items.length, staticRenderer]);

  const move = (direction: number) => setActiveIndex((index) => (index + direction + items.length) % items.length);
  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => { setIsDragging(true); dragStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); };
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => { if (isDragging) setDragX((event.clientX - dragStart.current) * dragSensitivity); };
  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (Math.abs(dragX) > 45) move(dragX < 0 ? 1 : -1);
    setDragX(0);
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const transition: Transition = { type: 'spring', stiffness: 240, damping: 28, mass: Math.max(0.35, transitionSpeed) };
  const rootStyle = { '--story-gap': `${cardGap}px`, '--card-padding': `${cardPadding}px`, '--title-font': titleFontFamily, '--description-font': descriptionFontFamily } as CSSProperties;

  if (!items.length) return null;

  return (
    <section className="relative overflow-hidden py-20 text-white" style={{ ...rootStyle, backgroundColor }}>
      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-14">
        <div className="mb-10 flex flex-col gap-5">
          <div className="min-w-0">
            <h2 className="max-w-full whitespace-normal break-words text-[clamp(1.7rem,3vw,3.6rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] sm:whitespace-nowrap" style={{ color: titleColor }}>{heading} <span style={{ color: accentColor }}>{accentHeading}</span></h2>
          </div>
          <div className="hidden self-end gap-2 sm:flex">
            <button type="button" aria-label="Previous story" onClick={() => move(-1)} className="grid h-11 w-11 place-items-center rounded-full border transition hover:bg-white hover:text-black" style={{ borderColor: cardBorderColor }}><ChevronLeft size={18} /></button>
            <button type="button" aria-label="Next story" onClick={() => move(1)} className="grid h-11 w-11 place-items-center rounded-full border transition hover:bg-white hover:text-black" style={{ borderColor: cardBorderColor }}><ChevronRight size={18} /></button>
          </div>
        </div>

        {isMobile && <div className="mb-3 flex flex-col gap-2">
          {items.map((story, index) => <button key={story.id ?? story.title} type="button" onClick={() => { setActiveIndex(index); setCaptionExpanded(true); }} className="w-full rounded-full px-5 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] transition-colors" style={{ backgroundColor: index === activeIndex ? accentColor : '#d9d9df', color: index === activeIndex ? '#05060a' : '#05060a' }}>{story.label || story.title}</button>)}
        </div>}
        <div onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp} className={`relative w-full touch-pan-y select-none overflow-hidden px-0 sm:px-8 ${isMobile ? '' : 'flex'}`} style={{ height: isMobile ? 'clamp(360px, 68vh, 520px)' : `clamp(420px, ${containerHeight}px, 82vh)`, gap: isMobile ? Math.min(cardGap, 8) : cardGap, cursor: isDragging ? 'grabbing' : 'grab' }}>
          {items.map((story, index) => {
            const isActive = index === activeIndex;
            const media = story.media ?? (story.video ? { type: 'video' as const, src: story.video, poster: story.poster } : story.image ? { type: 'image' as const, src: story.image } : { type: 'color' as const, color: cardColor });
            const cardStyle = { flex: isMobile ? 'none' : `${isActive ? expandedFlex : collapsedFlex} 1 0%`, width: isMobile ? '100%' : undefined, height: isMobile ? '100%' : undefined, minWidth: isMobile ? '100%' : 0, position: isMobile ? 'absolute' as const : 'relative' as const, inset: isMobile ? '0 auto auto 0' : undefined, borderRadius: cardRadius, backgroundColor: media.type === 'color' ? (media.color ?? cardColor) : cardColor, borderColor: isActive ? accentColor : cardBorderColor };
            return <motion.article key={`${story.id ?? story.title}-${index}`} animate={{ flex: isMobile ? 'none' : `${isActive ? expandedFlex : collapsedFlex} 1 0%`, x: isMobile ? `calc(${(index - activeIndex) * 100}% + ${dragX}px)` : dragX, opacity: isMobile && !isActive ? 0 : 1 }} transition={transition} style={cardStyle} className="group relative overflow-hidden border shadow-2xl" onMouseEnter={() => { setActiveIndex(index); setCaptionExpanded(true); }} onClick={() => { if (!isActive) { setActiveIndex(index); setCaptionExpanded(true); } }}>
              <div className="absolute inset-0">
                {media.type === 'video' && media.src && <video src={media.src} poster={media.poster} muted playsInline loop autoPlay={isActive && !staticRenderer} preload={staticRenderer ? 'none' : isActive ? 'auto' : 'metadata'} className="h-full w-full object-cover" />}
                {media.type === 'image' && media.src && <img src={media.src} alt={story.alt || story.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,${overlayOpacity * 0.18}) 25%, rgba(0,0,0,${captionExpanded ? captionOverlay : 0.35}) 100%)` }} />
              </div>
              {showCaption && isActive && <div className={`absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 transition-transform duration-500 ${captionExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-88px)]'}`}><div className="flex items-start justify-between gap-5"><div><p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: accentColor }}>{story.label}</p><h3 style={{ fontFamily: titleFontFamily, fontSize: titleFontSize, lineHeight: titleLineHeight, color: titleColor }} className="max-w-[560px] font-bold tracking-[-0.04em]">{story.title}</h3></div><button type="button" aria-label={captionExpanded ? `Close ${story.title} details` : `Open ${story.title} details`} onClick={(event) => { event.stopPropagation(); setCaptionExpanded((expanded) => !expanded); }} className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors hover:bg-white hover:text-black" style={{ borderColor: 'rgba(255,255,255,.35)' }}>{captionExpanded ? '−' : '+'}</button></div><div className="overflow-hidden" style={{ fontFamily: descriptionFontFamily, fontSize: descriptionFontSize, lineHeight: descriptionLineHeight, color: descriptionColor }}>{story.description && <p className="mt-4 max-w-[560px]">{story.description}</p>}{story.link && <a href={story.link} onClick={(event) => event.stopPropagation()} className="mt-5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: accentColor }}>Explore story <ArrowUpRight size={13} /></a>}</div></div>}
            </motion.article>;
          })}
        </div>

        <div className="mt-7 flex items-center justify-between gap-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: descriptionColor }}>Hover a card to explore</p>
          {showIndicators && <div className="flex items-center gap-2" role="tablist" aria-label="Story navigation">{items.map((story, index) => <button key={story.id ?? story.title} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`Show ${story.title}`} onClick={() => setActiveIndex(index)} className="h-2 rounded-full transition-all duration-500" style={{ width: index === activeIndex ? activeIndicatorWidth : inactiveIndicatorWidth, backgroundColor: index === activeIndex ? activeIndicatorColor : inactiveIndicatorColor }} />)}</div>}
        </div>
      </div>
    </section>
  );
}
