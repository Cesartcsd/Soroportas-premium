import React from 'react';
import { CollectionItem } from '../types';

const Collection: React.FC = () => {
  const items: CollectionItem[] = [
    {
      id: 1,
      number: '01',
      category: 'First Impressions',
      title: 'PORTAS DE ENTRADA',
      subtitle: 'Solid Walnut & Monumental Presence',
      description: 'The first impression of a home. Designed for security, acoustic isolation, and aesthetic weight. Our entrance series features solid cores and weather-resistant finishes that stand the test of time.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkO_H6U6VK5bCCskElRhslVZCP7hObXnzZ84y-qJkKgobp1ieEhnA2ArcSOyG-2Swdwm1E1US_DRGwCrp99sNzzygsxh_o9l3MSIyJvFTjb3_ilcQNVibwFwTEv_VtHW6Uf6KsG_x22CP_BHzLXIdNUwii12pVgKfw-FBhpqY1kHcrKEIpL_58MpO2cyrFIxM4rGBunrtsd4BeV-_wCxLM7K5QP2fuvGDnZGASShqz76d63CRBK_1LvJImb68gl8mIXttmQi2i8CE',
      reverse: false
    },
    {
      id: 2,
      number: '02',
      category: 'Seamless Transitions',
      title: 'AMBIENTES SOCIAIS',
      subtitle: 'Invisible Frames & Pivoting Systems',
      description: 'Uniting living spaces with elegance. Our social collection features floor-to-ceiling pivoting systems and invisible frames that allow architecture to flow uninterrupted between rooms.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwx52e7XrWeP91Mbbm0JeMOiIycAlt0o4u99jSj9qLTtDUjI9e6-EHMrH6uJ4AkvAlCppKrYG5M2wYzZW8glotextrJjPoC1H1KxVmKswFVap2VQi-5nNXLtCxx9c1Orj5C4MI10dt81Sce4c6ZAuEEjQ67BMPETuPpdhDo9NRNYH4fWCWCzxgc4pQZ1nu_Ulbg_CqKoBYSdZG3J4DxFivn_3IozsvUXzkgiX-4JW1fInp26o382GQq2F8-go2h27v9BTddUkn9LA',
      reverse: true
    },
    {
      id: 3,
      number: '03',
      category: 'Sanctuary',
      title: 'ÁREAS PRIVATIVAS',
      subtitle: 'Smooth Lacquer & Acoustic Privacy',
      description: 'Silence and sanctuary. Minimalist designs that retreat into the wall, prioritizing privacy and calm. Engineered with high-density cores for superior noise reduction in sleeping quarters.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJgzhbLsSkjY0Sl_TMF736-4uKw9s69QhteCYABSh9kOkD0nzWANVem4Ym1BheXQVovIyJeKfi7nNPe0oB_C7OQHCN382XwpCdU_tpKFoLa06iMNGm70TpKGyMqAU4iawXWHqBnBGmfTRAqvpsyPiftCvgukdf4K4DrytEIBkXfq1pDx7R1XBIktKE9-UiACo24r4U8EkvRuLUall3z0FKkLpai2YzbXYxbCp6LxEPD6ZCu2ZeQx-iTU2iumW_iTH0XYcF_kgXetU',
      reverse: false
    }
  ];

  return (
    <div className="w-full flex flex-col items-center animate-fade-in">
      {/* Page Heading */}
      <section className="w-full max-w-[960px] px-6 py-20 md:py-32 flex flex-col gap-6 text-center md:text-left animate-slide-up">
        <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">The Collection</span>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.02em] text-slate-900 dark:text-white">
          Defined by purpose.<br/>Curated by atmosphere.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Architecture begins at the threshold. Discover our selection of doors categorized by their architectural impact, from the monumental entrance to the private sanctuary.
        </p>
      </section>

      {/* Gallery Sections */}
      {items.map((item, index) => (
        <section 
          key={item.id} 
          className={`w-full py-16 md:py-24 border-y border-slate-100 dark:border-white/5 transition-colors duration-300 ${item.reverse ? 'bg-background-light dark:bg-background-dark' : 'bg-white dark:bg-surface-dark'}`}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className={`flex flex-col gap-12 items-center ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              
              {/* Image */}
              <div className="w-full lg:w-1/2 group">
                <div className="overflow-hidden rounded-xl shadow-2xl aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`w-full lg:w-1/2 flex flex-col gap-6 ${item.reverse ? 'lg:pr-10' : 'lg:pl-10'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{item.number} — {item.category}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                  {item.title}
                </h2>
                <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                  {item.subtitle}
                </h3>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4">
                  <button className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-sm md:text-base hover:text-primary transition-colors">
                    <span className="border-b-2 border-primary pb-0.5">Consultar opções para este ambiente</span>
                    <span className="material-symbols-outlined text-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Collection;