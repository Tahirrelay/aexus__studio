'use client';

import Image from 'next/image';
import { useState } from 'react';

const buildEmbedUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1`;

const buildThumbnailUrl = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

type LazyYoutubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function LazyYoutubeEmbed({ videoId, title, className = '', style }: LazyYoutubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={className} style={style}>
      {isLoaded ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={buildEmbedUrl(videoId)}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={buildThumbnailUrl(videoId)}
            alt={title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(255,135,70,0.18),_rgba(0,0,0,0.85)_65%)] transition-opacity hover:opacity-95"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/35 shadow-[0_0_30px_rgba(255,120,60,0.35)] backdrop-blur-sm">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[18px] border-y-transparent border-l-white" aria-hidden="true" />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
