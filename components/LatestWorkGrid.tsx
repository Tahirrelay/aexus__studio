'use client';
import { useState } from 'react';

const categories = [
  'Configurators', 
  'Animation', 
  'Architecture Visualization', 
  '360 Virtual Tour', 
  'Web Development', 
  'Product Visualization', 
  'Logo & Business Card'
];

const archSubCategories = [
  'Nexgen', 
  'Ns-Arcade', 
  'E South River', 
  'Exterior House', 
  'Commtel', 
  'Governer House', 
  'Classic Villa', 
  'Modern Kitchen', 
  'Japandi Interior', 
  'Modern Interior', 
  'Modern Japandi Interior'
];

const allProjects: Record<string, Array<{ id: string; title: string; category: string; subCategory?: string; image: string; link: string }>> = {
  Configurators: [
    { id: 'conf-1', title: 'Winter Garden Configurator', category: 'Configurators', image: '/configurator/conf-1.jpg', link: 'https://aexusstudios.com/Winter-Garden-Configurator/' },
    { id: 'conf-2', title: 'Office Pod 3D Builder', category: 'Configurators', image: '/configurator/conf-2.jpg', link: 'https://aexusstudios.com/3dPodsConfigurator/' },
    { id: 'conf-3', title: 'L-Profil Metal Configurator', category: 'Configurators', image: '/configurator/conf-3.jpg', link: 'https://aexusstudios.com/LShape-Configurator' },
    { id: 'conf-4', title: 'Wedding Ring 3D Studio', category: 'Configurators', image: '/configurator/conf-4.jpg', link: 'https://aexusstudios.com/ring-configurator' },
    { id: 'conf-5', title: 'Pallet & Logistics Configurator', category: 'Configurators', image: '/configurator/conf-5.jpg', link: 'https://aexusstudios.com/pallet-configurator' },
    { id: 'conf-6', title: 'Luxury Watch Customizer', category: 'Configurators', image: '/configurator/conf-6.jpg', link: 'https://aexusstudios.com/watch-configurator' },
    { id: 'conf-7', title: 'Advanced 3D Configurator VII', category: 'Configurators', image: '/configurator/conf-7.jpg', link: 'https://aexusstudios.com/Sofaconfigurator' },
    { id: 'conf-8', title: 'Custom Product Builder VIII', category: 'Configurators', image: '/configurator/conf-8.jpg', link: 'https://aexusstudios.com/2d-cornhole-configurator' },
  ],
  Animation: [
    { id: 'ani-1', title: ' AI Animation', category: 'Animation', image: '/Animations/ani-1.jpg', link: 'https://www.youtube.com/watch?v=a9-ztuh_vrM' },
    { id: 'ani-2', title: 'Mumtaz Residency', category: 'Animation', image: '/Animations/ani-2.jpg', link: 'https://www.youtube.com/watch?v=nUgOrC9sigA' },
    { id: 'ani-3', title: 'NexGen Heights', category: 'Animation', image: '/Animations/ani-3.jpg', link: 'https://www.youtube.com/watch?v=pYTISHC6grA' },
    { id: 'ani-4', title: 'NS Arcade', category: 'Animation', image: '/Animations/ani-4.jpg', link: 'https://www.youtube.com/watch?v=JCPFBU6IPA4' },
    { id: 'ani-5', title: 'Modren House Animation', category: 'Animation', image: '/Animations/ani-5.jpg', link: 'https://www.youtube.com/watch?v=zlkeG2q8QNM' },
    { id: 'ani-6', title: 'GYM RAT Protein', category: 'Animation', image: '/Animations/ani-6.jpg', link: 'https://www.youtube.com/watch?v=DBVGCxhmFYc' },
    { id: 'ani-8', title: 'CommTel Office', category: 'Animation', image: '/Animations/ani-8.jpg', link: 'https://www.youtube.com/watch?v=IkiRDKjfTEg' },
    { id: 'ani-9', title: 'Kitechen Design', category: 'Animation', image: '/Animations/ani-9.jpg', link: 'https://www.youtube.com/watch?v=6lHMNghhWnE' },
    { id: 'ani-10', title: 'Modern Rustic Dining', category: 'Animation', image: '/Animations/ani-10.jpg', link: 'https://www.youtube.com/watch?v=FE9W_Rr6p-4' },
    { id: 'ani-11', title: 'Elegant Bedroom Design', category: 'Animation', image: '/Animations/ani-11.jpg', link: 'https://www.youtube.com/watch?v=nzFj8E1mLhM' },
    { id: 'ani-12', title: 'Luxury Interior Design', category: 'Animation', image: '/Animations/ani-12.jpg', link: 'https://www.youtube.com/watch?v=kb7NjYL70h4' },
    { id: 'ani-13', title: 'Rustic Elegance', category: 'Animation', image: '/Animations/ani-13.jpg', link: 'https://www.youtube.com/watch?v=4ceO2u_6D_I' },
  ],
  
  'Architecture Visualization': [
    { id: 'nx-1', title: 'Nexgen View 1', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-1.jpg', link: '#' },
    { id: 'nx-2', title: 'Nexgen View 2', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-2.jpg', link: '#' },
    { id: 'nx-3', title: 'Nexgen View 3', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-3.jpg', link: '#' },
    { id: 'nx-4', title: 'Nexgen View 4', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-4.jpg', link: '#' },
    { id: 'nx-5', title: 'Nexgen View 5', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-5.jpg', link: '#' },
    { id: 'nx-6', title: 'Nexgen View 6', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-6.jpg', link: '#' },
    { id: 'nx-7', title: 'Nexgen View 7', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-7.jpg', link: '#' },
    { id: 'nx-8', title: 'Nexgen View 8', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-8.jpg', link: '#' },
    { id: 'nx-9', title: 'Nexgen View 9', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-9.jpg', link: '#' },
    { id: 'nx-10', title: 'Nexgen View 10', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-10.jpg', link: '#' },
    { id: 'nx-11', title: 'Nexgen View 11', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-11.jpg', link: '#' },
    { id: 'nx-12', title: 'Nexgen View 12', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-12.jpg', link: '#' },
    { id: 'nx-13', title: 'Nexgen View 13', category: 'Architecture Visualization', subCategory: 'Nexgen', image: '/architecture/arc-13.jpg', link: '#' },

    { id: 'ns-1', title: 'Ns-Arcade View 1', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc1.jpg', link: '#' },
    { id: 'ns-2', title: 'Ns-Arcade View 2', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc2.jpg', link: '#' },
    { id: 'ns-3', title: 'Ns-Arcade View 3', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc3.jpg', link: '#' },
    { id: 'ns-4', title: 'Ns-Arcade View 4', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc4.jpg', link: '#' },
    { id: 'ns-5', title: 'Ns-Arcade View 5', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc5.jpg', link: '#' },
    { id: 'ns-6', title: 'Ns-Arcade View 6', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc6.jpg', link: '#' },
    { id: 'ns-7', title: 'Ns-Arcade View 7', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc7.jpg', link: '#' },
    { id: 'ns-8', title: 'Ns-Arcade View 8', category: 'Architecture Visualization', subCategory: 'Ns-Arcade', image: '/architecture/ns-arcade/nc8.jpg', link: '#' },

    { id: 'esr-1', title: 'E South River View 1', category: 'Architecture Visualization', subCategory: 'E South River', image: '/architecture/E South/e1.jpg', link: '#' },
    { id: 'esr-2', title: 'E South River View 2', category: 'Architecture Visualization', subCategory: 'E South River', image: '/architecture/E South/e2.jpg', link: '#' },
    { id: 'esr-3', title: 'E South River View 3', category: 'Architecture Visualization', subCategory: 'E South River', image: '/architecture/E South/e3.jpg', link: '#' },

    { id: 'eh-1', title: 'Exterior House View 1', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext1.jpg', link: '#' },
    { id: 'eh-2', title: 'Exterior House View 2', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext2.jpg', link: '#' },
    { id: 'eh-3', title: 'Exterior House View 3', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext3.jpg', link: '#' },
    { id: 'eh-4', title: 'Exterior House View 4', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext4.jpg', link: '#' },
    { id: 'eh-5', title: 'Exterior House View 5', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext5.jpg', link: '#' },
    { id: 'eh-6', title: 'Exterior House View 6', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext6.jpg', link: '#' },
    { id: 'eh-7', title: 'Exterior House View 7', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext7.jpg', link: '#' },
    { id: 'eh-8', title: 'Exterior House View 8', category: 'Architecture Visualization', subCategory: 'Exterior House', image: '/architecture/Exterior House/ext8.jpg', link: '#' },

    { id: 'com-1', title: 'Commtel View 1', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm1.jpg', link: '#' },
    { id: 'com-2', title: 'Commtel View 2', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm2.jpg', link: '#' },
    { id: 'com-3', title: 'Commtel View 3', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm3.jpg', link: '#' },
    { id: 'com-4', title: 'Commtel View 4', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm4.jpg', link: '#' },
    { id: 'com-5', title: 'Commtel View 5', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm5.jpg', link: '#' },
    { id: 'com-6', title: 'Commtel View 6', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm6.jpg', link: '#' },
    { id: 'com-7', title: 'Commtel View 7', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm7.jpg', link: '#' },
    { id: 'com-8', title: 'Commtel View 8', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm8.jpg', link: '#' },
    { id: 'com-9', title: 'Commtel View 9', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm9.jpg', link: '#' },
    { id: 'com-10', title: 'Commtel View 10', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm10.jpg', link: '#' },
    { id: 'com-11', title: 'Commtel View 11', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm11.jpg', link: '#' },
    { id: 'com-12', title: 'Commtel View 12', category: 'Architecture Visualization', subCategory: 'Commtel', image: '/architecture/Commtel/cm12.jpg', link: '#' },

    { id: 'gh-1', title: 'Governer House View 1', category: 'Architecture Visualization', subCategory: 'Governer House', image: '/architecture/Governer House/gov1.jpg', link: '#' },
    { id: 'gh-2', title: 'Governer House View 2', category: 'Architecture Visualization', subCategory: 'Governer House', image: '/architecture/Governer House/gov2.jpg', link: '#' },
    { id: 'gh-3', title: 'Governer House View 3', category: 'Architecture Visualization', subCategory: 'Governer House', image: '/architecture/Governer House/gov3.jpg', link: '#' },
    { id: 'gh-4', title: 'Governer House View 4', category: 'Architecture Visualization', subCategory: 'Governer House', image: '/architecture/Governer House/gov4.jpg', link: '#' },
    { id: 'gh-5', title: 'Governer House View 5', category: 'Architecture Visualization', subCategory: 'Governer House', image: '/architecture/Governer House/gov5.jpg', link: '#' },

    { id: 'cv-1', title: 'Classic Villa View 1', category: 'Architecture Visualization', subCategory: 'Classic Villa', image: '/architecture/Classic Villa/cl1.jpg', link: '#' },
    { id: 'cv-2', title: 'Classic Villa View 2', category: 'Architecture Visualization', subCategory: 'Classic Villa', image: '/architecture/Classic Villa/cl2.jpg', link: '#' },
    { id: 'cv-3', title: 'Classic Villa View 3', category: 'Architecture Visualization', subCategory: 'Classic Villa', image: '/architecture/Classic Villa/cl3.jpg', link: '#' },
    { id: 'cv-4', title: 'Classic Villa View 4', category: 'Architecture Visualization', subCategory: 'Classic Villa', image: '/architecture/Classic Villa/cl4.jpg', link: '#' },

    { id: 'mk-1', title: 'Modern Kitchen View 1', category: 'Architecture Visualization', subCategory: 'Modern Kitchen', image: '/architecture/Modern Kitchen/mk1.jpg', link: '#' },
    { id: 'mk-2', title: 'Modern Kitchen View 2', category: 'Architecture Visualization', subCategory: 'Modern Kitchen', image: '/architecture/Modern Kitchen/mk2.jpg', link: '#' },
    { id: 'mk-3', title: 'Modern Kitchen View 3', category: 'Architecture Visualization', subCategory: 'Modern Kitchen', image: '/architecture/Modern Kitchen/mk3.jpg', link: '#' },

    { id: 'ji-1', title: 'Japandi Interior View 1', category: 'Architecture Visualization', subCategory: 'Japandi Interior', image: '/architecture/Japandi Interior/jp1.jpg', link: '#' },
    { id: 'ji-2', title: 'Japandi Interior View 2', category: 'Architecture Visualization', subCategory: 'Japandi Interior', image: '/architecture/Japandi Interior/jp2.jpg', link: '#' },
    { id: 'ji-3', title: 'Japandi Interior View 3', category: 'Architecture Visualization', subCategory: 'Japandi Interior', image: '/architecture/Japandi Interior/jp3.jpg', link: '#' },
    { id: 'ji-4', title: 'Japandi Interior View 4', category: 'Architecture Visualization', subCategory: 'Japandi Interior', image: '/architecture/Japandi Interior/jp4.jpg', link: '#' },

    { id: 'mi-1', title: 'Modern Interior View 1', category: 'Architecture Visualization', subCategory: 'Modern Interior', image: '/architecture/Modern Interior/mi1.jpg', link: '#' },
    { id: 'mi-2', title: 'Modern Interior View 2', category: 'Architecture Visualization', subCategory: 'Modern Interior', image: '/architecture/Modern Interior/mi2.jpg', link: '#' },
    { id: 'mi-3', title: 'Modern Interior View 3', category: 'Architecture Visualization', subCategory: 'Modern Interior', image: '/architecture/Modern Interior/mi3.jpg', link: '#' },

    { id: 'mji-1', title: 'Modern Japandi Interior View 1', category: 'Architecture Visualization', subCategory: 'Modern Japandi Interior', image: '/architecture/Modern Japandi Interior/mji1.jpg', link: '#' },
    { id: 'mji-2', title: 'Modern Japandi Interior View 2', category: 'Architecture Visualization', subCategory: 'Modern Japandi Interior', image: '/architecture/Modern Japandi Interior/mji2.jpg', link: '#' },
  ],
  '360 Virtual Tour': [
    { id: 'tour-1', title: '360° Virtual Real Estate Tour', category: '360 Virtual Tour', image: '/360/360-1.jpg', link: 'https://aexusstudios.com/ESouthRiver/'},
    { id: 'tour-2', title: '360° Virtual Real Estate Tour', category: '360 Virtual Tour', image: '/360/360-2.png', link: 'https://aexusstudios.com/ivf-academy/'},
   
  ],
  'Web Development': [
    { id: 'web-1', title: 'PrimeLoop US Platform', category: 'Web Development', image: '/web-image/web-1.jpg', link: 'https://primeloop.us/' },
    { id: 'web-2', title: 'Maleva Shop E-Commerce', category: 'Web Development', image: '/web-image/web-2.jpg', link: 'https://shopmaleva.com/' },
    { id: 'web-3', title: 'CE and Builders Web App', category: 'Web Development', image: '/web-image/web-3.jpg', link: 'https://ceandbuilders.com/' },
    { id: 'web-4', title: 'Kurta Dukan Storefront', category: 'Web Development', image: '/web-image/web-4.jpg', link: 'https://www.kurtadukan.com/' },
    { id: 'web-5', title: 'Leather Crafted Boutique', category: 'Web Development', image: '/web-image/web-5.jpg', link: 'https://leather-crafted.com/' },
    { id: 'web-6', title: '1 Click IoT Solutions', category: 'Web Development', image: '/web-image/web-6.jpg', link: 'https://1clickiot.com.pk/' },
  ],
  'Product Visualization': [
    { id: 'prod-1', title: 'Perfume Bottle Studio Lighting', category: 'Product Visualization', image: '/product images/pro-1.jpg', link: '#' },
    { id: 'prod-2', title: 'Luxury Smartwatch Render', category: 'Product Visualization', image: '/product images/pro-2.jpg', link: '#' },
    { id: 'prod-3', title: 'Cosmetic Cream Jar 3D Shot', category: 'Product Visualization', image: '/product images/pro-3.jpg', link: '#' },
    { id: 'prod-4', title: 'High-End Headphones Mockup', category: 'Product Visualization', image: '/product images/pro-4.jpg', link: '#' },
    { id: 'prod-5', title: 'Sneaker Hero Shot Render', category: 'Product Visualization', image: '/product images/pro-5.jpg', link: '#' },
    { id: 'prod-6', title: 'Beverage Can Splash VFX', category: 'Product Visualization', image: '/product images/pro-6.jpg', link: '#' },
    { id: 'prod-7', title: 'Beverage Can Splash VII', category: 'Product Visualization', image: '/product images/pro-7.jpg', link: '#' },
    { id: 'prod-8', title: 'Beverage Can Splash VIII', category: 'Product Visualization', image: '/product images/pro-8.jpg', link: '#' },
    { id: 'prod-9', title: 'Beverage Can Splash IX', category: 'Product Visualization', image: '/product images/pro-9.jpg', link: '#' },
  ],
  'Logo & Business Card': [
    { id: 'logo-1', title: 'Minimalist Corporate Identity', category: 'Logo & Business Card', image: '/logo-images/logo-1.jpg', link: '#' },
    { id: 'logo-2', title: 'Luxury Gold Foil Business Card', category: 'Logo & Business Card', image: '/logo-images/logo-2.jpg', link: '#' },
    { id: 'logo-3', title: 'Tech Startup Branding Suite', category: 'Logo & Business Card', image: '/logo-images/logo-3.jpg', link: '#' },
    { id: 'logo-4', title: 'Embossed Paper Stationery', category: 'Logo & Business Card', image: '/logo-images/logo-4.jpg', link: '#' },
    { id: 'logo-5', title: 'Modern Geometric Logo Mark', category: 'Logo & Business Card', image: '/logo-images/logo-5.jpg', link: '#' },
    { id: 'logo-6', title: 'Creative Studio Brand Kit', category: 'Logo & Business Card', image: '/logo-images/logo-6.jpg', link: '#' },
  ],
};

export default function LatestWorkGrid() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubCategory, setActiveSubCategory] = useState(archSubCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
  // State for YouTube Video Modal Player
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // State to handle "See More" toggle specifically on mobile devices
  const [showAllMobile, setShowAllMobile] = useState(false);

  const currentProjects = allProjects[activeCategory] || [];

  const filteredProjects = currentProjects.filter((item) => {
    const matchesSubCategory = 
      activeCategory !== 'Architecture Visualization' || 
      item.subCategory === activeSubCategory;

    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase().trim());

    return matchesSubCategory && matchesSearch;
  });

  // YouTube URL to Embed URL Converter Function
  const getEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
      : url;
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null && filteredProjects.length > 0) {
      setCurrentIndex((prev) => (prev! + 1) % filteredProjects.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex !== null && filteredProjects.length > 0) {
      setCurrentIndex((prev) => (prev! - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const handleDownloadWithWatermark = (imageSrc: string, title: string) => {
    const img = document.createElement('img');
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(img, 0, 0);

        const fontSize = Math.max(canvas.width * 0.03, 24);
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 12;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';

        ctx.fillText('Aexus Studio', canvas.width - 40, canvas.height - 40);

        const dataURL = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-aexus-studio.jpg`;
        link.click();
      }
    };
  };

  return (
    <section className="w-full bg-[#000000] py-16 md:py-20 relative overflow-hidden select-none px-4 md:px-12 lg:px-16">
      <div className="absolute top-1/4 left-[-5%] w-[600px] h-[600px] bg-[var(--color-aexus-orange)]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-aexus-orange)] animate-ping" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-aexus-orange)]">
               
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                Portfolio
            </h2>
          </div>

          <div className="relative w-full md:w-85">
            <input 
              type="text" 
              placeholder="Search concepts, 3D, UI..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAllMobile(false);
              }}
              className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-aexus-orange)] focus:ring-2 focus:ring-[var(--color-aexus-orange)]/20 transition-all duration-300 shadow-inner"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs font-mono">⌘K</span>
          </div>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6 scrollbar-none px-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllMobile(false);
                  if (cat === 'Architecture Visualization') {
                    setActiveSubCategory(archSubCategories[0]);
                  }
                }}
                className={`text-xs md:text-sm font-bold px-7 py-3.5 rounded-2xl whitespace-nowrap transition-all duration-300 cursor-pointer select-none ${
                  isActive 
                    ? 'bg-[var(--color-aexus-orange)] text-black shadow-[0_8px_20px_-4px_rgba(255,102,0,0.5)] border-b-4 border-black/30 translate-y-[-2px]' 
                    : 'bg-[#12141a] text-white/80 hover:text-white border border-white/10 shadow-[0_6px_14px_rgba(0,0,0,0.7)] border-b-4 border-b-[#050608]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {activeCategory === 'Architecture Visualization' && (
          <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none">
            {archSubCategories.map((subCat) => {
              const isSubActive = activeSubCategory === subCat;
              return (
                <button
                  key={subCat}
                  onClick={() => {
                    setActiveSubCategory(subCat);
                    setShowAllMobile(false);
                  }}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSubActive
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {subCat}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const isModalTrigger = project.link === '#';
              // Check if project link is a YouTube URL
              const isYouTubeLink = project.link.includes('youtube.com') || project.link.includes('youtu.be');
              
              const isHiddenOnMobileClass = (!showAllMobile && index >= 3) ? 'hidden md:flex' : 'flex';

              return (
                <div 
                  key={project.id}
                  className={`group relative items-center justify-center rounded-[24px] overflow-hidden p-[2px] h-[340px] cursor-pointer border border-white/15 hover:border-transparent transition-all duration-480 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.05] hover:shadow-[0rem_6px_13px_rgba(255,102,0,0.15),0rem_24px_24px_rgba(255,102,0,0.1)] ${isHiddenOnMobileClass}`}
                  onClick={() => {
                    if (isYouTubeLink) {
                      setSelectedVideo(project.link);
                    } else if (isModalTrigger) {
                      setCurrentIndex(index);
                    } else {
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <div className="absolute inset-[-60%] rounded-[inherit] bg-gradient-to-r from-[var(--color-aexus-orange)] via-amber-500 to-[var(--color-aexus-orange)] opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />

                  <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 rounded-[22px] bg-[#0b0c10] transition-all duration-480 overflow-hidden pointer-events-none">
                    
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-85 group-hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent transition-all duration-480 pointer-events-none" />
                    </div>

                    <div className="relative z-10 flex items-center justify-start">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[var(--color-aexus-orange)] transition-colors duration-300">
                        {project.subCategory || project.category}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-end justify-end gap-4 mt-auto">
                      <span className="shrink-0 bg-[var(--color-aexus-orange)] text-black text-xs font-black tracking-wider uppercase px-4 py-2.5 rounded-full shadow-md transition-transform duration-300 group-hover:scale-105">
                        {isYouTubeLink ? 'WATCH' : isModalTrigger ? 'VIEW' : 'VISIT'}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-24 text-center border border-dashed border-white/15 rounded-3xl bg-white/[0.01]">
              <p className="text-white/40 text-lg">No matching projects found for &quot;{searchQuery}&quot;</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveSubCategory(archSubCategories[0]); setShowAllMobile(false); }}
                className="mt-4 px-6 py-2 rounded-full bg-white/10 text-xs font-semibold hover:bg-[var(--color-aexus-orange)] hover:text-black transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {filteredProjects.length > 3 && (
          <div className="flex md:hidden justify-center mt-10">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="px-8 py-3.5 rounded-2xl bg-[#12141a] text-[var(--color-aexus-orange)] border border-[var(--color-aexus-orange)]/30 font-bold text-xs uppercase tracking-widest shadow-[0_6px_14px_rgba(0,0,0,0.7)] active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>{showAllMobile ? 'See Less' : `See More (${filteredProjects.length - 3} more)`}</span>
              <span className={`transform transition-transform duration-300 ${showAllMobile ? 'rotate-180' : ''}`}>▼</span>
            </button>
          </div>
        )}

      </div>

      {/* Image Zoom Modal */}
      {currentIndex !== null && filteredProjects[currentIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 md:p-10 select-none transition-all duration-300"
          onClick={() => setCurrentIndex(null)}
        >
          <button 
            onClick={() => setCurrentIndex(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-[var(--color-aexus-orange)] hover:text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 cursor-pointer z-50 shadow-lg"
          >
            ✕
          </button>

          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-white bg-white/10 hover:bg-[var(--color-aexus-orange)] hover:text-black w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all z-50 shadow-lg cursor-pointer"
          >
            ❮
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center">
              <img 
                src={filteredProjects[currentIndex].image} 
                alt={filteredProjects[currentIndex].title} 
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/20 pointer-events-none" 
              />

              <div className="absolute inset-0 z-10 pointer-events-auto" onContextMenu={(e) => e.preventDefault()} />
              
              <div className="absolute bottom-6 right-6 z-20 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-white/90 font-bold font-mono text-xs tracking-wider pointer-events-none shadow-md">
                {filteredProjects[currentIndex].title}
              </div>

              <button 
                onClick={() => handleDownloadWithWatermark(filteredProjects[currentIndex].image, filteredProjects[currentIndex].title)}
                className="absolute bottom-6 left-6 z-20 px-5 py-2.5 bg-[var(--color-aexus-orange)] text-black rounded-xl font-black text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
              >
               
              </button>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-white bg-white/10 hover:bg-[var(--color-aexus-orange)] hover:text-black w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all z-50 shadow-lg cursor-pointer"
          >
            ❯
          </button>
        </div>
      )}

      {/* YouTube Video Embed Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 md:p-10 select-none transition-all duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 text-white bg-black/60 hover:bg-[var(--color-aexus-orange)] hover:text-black rounded-full w-10 h-10 flex items-center justify-center font-bold transition-colors cursor-pointer"
            >
              ✕
            </button>

            <iframe
              src={getEmbedUrl(selectedVideo)}
              title="YouTube video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}