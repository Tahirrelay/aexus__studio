'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const projects = [
  { 
    id: '01', 
    title: 'BIKE CONFIGURATOR', 
    mediaUrl: '/videos/bike.mp4',
    alt: 'Interactive 3D Bike Configurator Showcase Video'
  },
  { 
    id: '02', 
    title: 'GMC CONFIGURATOR', 
    mediaUrl: '/videos/Car_Configurator.mp4',
    alt: 'GMC 3D Car Configurator and Customization Software Video'
  },
  { 
    id: '03', 
    title: 'JACKET CONFIGURATOR', 
    mediaUrl: '/videos/jacket-configurator.mp4',
    alt: 'Real-time 3D Apparel and Jacket Customizer Product View'
  },
  { 
    id: '04', 
    title: 'TOYOTA CONFIGURATOR', 
    mediaUrl: '/videos/Car_Configurator.mp4',
    alt: 'Toyota Digital Automotive 3D Configurator Experience'
  }
];

const panelColors = ['#d4d4d8', '#ca8a04', '#ea580c'];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-[#000000]" />;

  return (
    <StyledWrapper>
      <section className="portfolio-section">
        
        {/* Top Parallel Border Line */}
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-orange-500 to-white/40 max-w-[1300px] mx-auto mb-12 shadow-[0_0_20px_rgba(249,115,22,0.4)]" />

        <div className="section-header">
          {/* SEO Optimized H2 Heading */}
          <h2 className="portfolio-title">
            OUR <span className="highlight">Latest 3D Configurator Projects</span>
          </h2>
        </div>

        <div className="accordion-container">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={project.id}
                className={`accordion-panel ${isActive ? 'active' : 'collapsed'}`}
                style={{ backgroundColor: panelColors[index % panelColors.length] }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="collapsed-content">
                  <span className="vertical-title">{project.title}</span>
                </div>

                <div className="expanded-content">
                  <div className="video-wrapper">
                    <video 
                      src={project.mediaUrl}
                      title={project.alt}
                      aria-describedby={`portfolio-video-description-${project.id}`}
                      autoPlay loop muted playsInline
                    />
                    <p id={`portfolio-video-description-${project.id}`} className="sr-only">
                      Muted product demo: {project.title.toLowerCase()}.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Parallel Border Line */}
        <div className="w-full h-[3px] bg-gradient-to-r from-white/40 via-orange-500 to-transparent max-w-[1300px] mx-auto mt-12 shadow-[0_0_20px_rgba(249,115,22,0.4)]" />

      </section>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .portfolio-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4vw 2vw;
  }

  .section-header {
    width: 100%;
    max-width: 1300px;
    margin-bottom: 24px;
    text-align: left;
    padding-left: 12px;
    z-index: 10;
  }

  .portfolio-title {
    font-size: 2.5rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: 0.05em;
    text-shadow: 0 2px 12px rgba(0,0,0,0.25);
  }

  .portfolio-title .highlight {
    color: #f97316;
  }

  .accordion-container {
    display: flex;
    width: 100%;
    max-width: 1300px;
    height: 650px;
    background: #0c0e15;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.7);
    gap: 12px;
    padding: 12px;
    z-index: 10;
  }

  .accordion-panel {
    position: relative;
    height: 100%;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
  }

  .accordion-panel.collapsed {
    flex: 0 0 70px;
  }

  .accordion-panel.active {
    flex: 1;
  }

  .collapsed-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .accordion-panel.active .collapsed-content {
    opacity: 0;
    pointer-events: none;
  }

  .vertical-title {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.15em;
    white-space: nowrap;
    user-select: none;
    color: #111;
  }

  .expanded-content {
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    overflow: hidden;
    background: #000;
  }

  .accordion-panel.active .expanded-content {
    opacity: 1;
    pointer-events: auto;
  }

  .video-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  @media (max-width: 768px) {
    .portfolio-title {
      font-size: 1.8rem;
    }
    .accordion-container {
      height: 520px;
      flex-direction: column;
      padding: 8px;
      gap: 8px;
    }
    .accordion-panel.collapsed {
      flex: 0 0 50px;
      width: 100%;
    }
    .accordion-panel.active {
      flex: 1;
      width: 100%;
      height: auto;
    }
    .vertical-title {
      writing-mode: horizontal-tb;
      transform: none;
      font-size: 12px;
    }
  }
`;