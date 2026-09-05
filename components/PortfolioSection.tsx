'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const projects = [
   { id: '01', title: 'BIKE CONFIGURATOR', mediaUrl: '/videos/bike.mp4' },
  { id: '02', title: 'TOYOTA CONFIGURATOR', mediaUrl: '/videos/Car_Configurator.mp4' },
  { id: '03', title: 'JACKET CONFIGURATOR', mediaUrl: '/videos/jacket-configurator.mp4' },
   { id: '04', title: 'TOYOTA CONFIGURATOR', mediaUrl: '/videos/Car_Configurator.mp4' }
];

const panelColors = ['#d4d4d8', '#ca8a04', '#ea580c'];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-[#333333]" />;

  return (
    <StyledWrapper>
      <section className="portfolio-section">
        <div className="section-header">
          <h2 className="portfolio-title">
            OUR <span className="highlight">Latest Work</span>
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
                      autoPlay loop muted playsInline
                    />
                  </div>

                 
                </div>
              </div>
            );
          })}
        </div>
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
    padding: 4vw;
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
    color: #e2a012;
  }

  .accordion-container {
    display: flex;
    width: 100%;
    max-width: 1300px;
    height: 650px;
    background: #222222;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
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
    transition: flex 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
  }

  .accordion-panel.collapsed {
    flex: 0 0 75px;
  }

  .accordion-panel.active {
    flex: 1 1 auto;
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

  .close-back-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 30;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);
  }

  .close-back-btn:hover {
    background: #ffffff;
    color: #000000;
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    .accordion-container {
      height: auto;
      flex-direction: column;
      padding: 8px;
    }
    .accordion-panel.collapsed {
      flex: 0 0 60px;
      width: 100%;
    }
    .accordion-panel.active {
      height: 420px;
      width: 100%;
    }
    .vertical-title {
      writing-mode: horizontal-tb;
      transform: none;
    }
  }
`;