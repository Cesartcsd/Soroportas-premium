import React from 'react';

interface TechnicalProps {
  onOpenContact: () => void;
}

const Technical: React.FC<TechnicalProps> = ({ onOpenContact }) => {
  return (
    <div className="flex flex-col items-center w-full bg-background-light dark:bg-background-dark animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[60vh] bg-[#112116] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center opacity-60" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuANCbt1VYlYEu2idpk09qnhk1yWQwxtK8D9FzJb0Ne4z-mRKXzIBE184w5d-Smd3hgt1dvXUo_OunOzcwzFo8PGvyAB1Ns-8IFTewrlj5gQHz7lmKb093s_wmI2PsCexuqc1bKWWLPGFTqr0vNXIiI2gkQIqWBu6PRoAyo1sjkPiHXkBfjfu-iQTBy8eb4_PSHXrQ1YtaczI1W05MvAVXN1wg2vg_1e0XH_QgTeXQQmhNEdZ0yqLbgp23-yf31mmHuIQ4tzE8P4_g0')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#112116] via-[#112116]/50 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-[960px] text-center mt-10 animate-slide-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20 backdrop-blur-sm">
            Technical Specifications
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
            Excellence in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-200">Every Detail</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Discover the engineering precision behind our premium architectural doors. Where artisanal craft meets industrial perfection.
          </p>
        </div>
      </section>

      {/* 3D Viewer Section */}
      <section className="w-full bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-white/5 py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="w-full lg:w-1/3 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">view_in_ar</span>
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">3D Interaction</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Inspecione em Detalhes</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Utilize nosso visualizador interativo para examinar a textura, acabamentos e o design de nossas peças em 360 graus. 
                  <br/><br/>
                  <span className="text-sm italic opacity-80">* Modelo representativo de acabamento "Premium Wood" e "Velvet Touch".</span>
                </p>
                
                <div className="flex flex-col gap-3 mt-4">
                   <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary">360</span>
                      <span>Rotação 360º livre</span>
                   </div>
                   <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary">zoom_in</span>
                      <span>Zoom de alta resolução</span>
                   </div>
                   <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary">light_mode</span>
                      <span>Iluminação realista</span>
                   </div>
                </div>
             </div>

             <div className="w-full lg:w-2/3 h-[500px] lg:h-[600px] bg-slate-100 dark:bg-black/20 rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-white/10 relative group">
                {/* Loader Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-zinc-900 pointer-events-none opacity-0 group-[.loading]:opacity-100 transition-opacity z-10">
                   <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
                
                <model-viewer 
                   src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb"
                   poster="https://lh3.googleusercontent.com/aida-public/AB6AXuC1F-0wzG4Kj_5aQ2oJ2wT1zF8sR6s_5eZ6eY6fX7gH8iJ9jK0kL1mN2oP3qQ4rS5tT6uV7wW8xY9z0A1bB2c3dE4fG5hI6jK7lM8nO9pP0qR1sT2uV3wX4yZ5aB6cD7eE8fF9gH0iJ1kL2mN3o"
                   alt="Modelo 3D de Cadeira com acabamento premium"
                   shadow-intensity="1"
                   camera-controls
                   auto-rotate
                   ar
                   exposure="1"
                   environment-image="neutral"
                >
                  <div slot="progress-bar"></div>
                  <button slot="ar-button" className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">view_in_ar</span>
                    Ver em AR
                  </button>
                </model-viewer>
                
                <div className="absolute bottom-6 left-6 pointer-events-none">
                   <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                      <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Arraste para girar</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Wood */}
      <section className="w-full max-w-[1280px] px-6 py-20 md:py-32 border-b border-slate-200 dark:border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQfdP7mWHYfHltZxgLirSFtYYz75Miu1HmJQQStjkNHSGWsrDvhhyPtBXiyrquZTGve_d1qB5f-Sw9TV8PlXP5iy6m9z60HtnUd0DNLWie7RBWdF_jaeIMoqDAQRmHFnEaTJ0Kpm40xBFzCqIpdEqkv7HmE5OwtD_O4K2UupPr5Mel2Q4htpwwi3H5sOmpQg_eIMqSCXafi2pFwJEiRY-l3fKJlmInDzHtyojManGbgzUJc6byQuxGOwgRXYE6GMVdo0AdXY-xxLA')` }}></div>
            
            {/* Hotspot */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 group/hotspot cursor-pointer">
              <div className="relative">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white relative z-10 shadow-lg"></div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded p-3 shadow-xl opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Sustainable Sourcing</p>
                  <p className="text-[10px] text-slate-500">Certified FSC wood from managed forests.</p>
                  <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 dark:bg-zinc-900/95 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">forest</span>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">Material</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Madeiras Nobres</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
              Our selection process begins at the source. We exclusively utilize premium hardwoods chosen for their density, stability, and exceptional grain patterns. Each piece is treated to resist moisture and ensure longevity in tropical climates.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-100 dark:bg-white/5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Premium Treatment</h3>
                <p className="text-sm text-slate-500">Autoclave processing for termite and decay resistance.</p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-100 dark:bg-white/5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Selected Grain</h3>
                <p className="text-sm text-slate-500">Hand-picked veneers for aesthetic perfection and consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Hardware */}
      <section className="w-full max-w-[1280px] px-6 py-20 md:py-32 border-b border-slate-200 dark:border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">door_sliding</span>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">Mechanics</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Ferragens de Alta Performance</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
              Silence is the true sound of luxury. Our proprietary hinge systems are engineered from 304 Stainless Steel, capable of supporting heavy architectural doors while delivering feather-light operation.
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1 text-xl">check_circle</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Silent Motion Technology</h4>
                  <p className="text-sm text-slate-500">Self-lubricating bearings for noise-free opening.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1 text-xl">shield</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Corrosion Resistant</h4>
                  <p className="text-sm text-slate-500">Marine-grade finishing suitable for coastal areas.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative group h-[500px] w-full rounded-xl overflow-hidden shadow-2xl order-1 md:order-2">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHUo18ah5VQe8xTNGCzbJQh2Ulxx4j4m0Lw-UtdtFcpmTz76BnrrY2g4iS3X1_nWPAztkRXTT9xcxduFUstqT4nxnijOnEDsX0bT8ZMON8U1tAEKxzVryC7hALihJTLrulaHMUgbNmx2ph5TH--HqZipHlWyPaUo1ESn0En1l5Lk57X1PkmTrFh0LEAcJPQAhtFi2oKFszQITyrP6z2Lc5r6xNsGn0UE2Ii1jgrTuSdYS9dO5TMXedGRDOPbsTvedQOiSl0iHphes')` }}></div>
             {/* Hotspot */}
             <div className="absolute bottom-1/4 right-1/3 group/hotspot cursor-pointer">
              <div className="relative">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white relative z-10 shadow-lg"></div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white/95 dark:bg-zinc-900/95 backdrop-blur rounded p-3 shadow-xl opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Precision Milling</p>
                  <p className="text-[10px] text-slate-500">CNC machined components for exact fit.</p>
                  <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white/95 dark:bg-zinc-900/95 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24 px-6 bg-[#112116] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#17cf54 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Projecting a Masterpiece?</h2>
          <p className="text-gray-400 text-lg max-w-2xl">Every architectural project has unique requirements. Let's discuss the technical specifications that best fit your design vision.</p>
          <button onClick={onOpenContact} className="group flex items-center justify-center gap-3 bg-primary hover:bg-[#15bd4d] text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined text-2xl">chat</span>
            Conversar sobre especificações
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Technical;