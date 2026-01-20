import React, { useState } from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Villa de Luxo - Entrada Principal',
      category: 'pivotante',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt3s7dpzoz_p_hTOIW-WrJI8hve2dDTw-o3vyJ7g0CPFgBMM8FqAEOIgc-VOr5iYK_MBGJ0E-efHcra2uCU2CAa6oulAp90lGN4NRfcqtnSPoFeQbvK9wpcV_adFzEXi-uRe-F8D87pnwji4mFB-bvzTZgHeFE-k17S4LJ-svLPyYMB2pNRWkXq4UJ8x5Ep1kQPixcHIXIiRmWpPdFkmwcwO4fSvMfPyZPj6NbMVdT5SQH-1d2VfjfySvNVm-FYJeMuXER_4Isncs',
      description: 'Pivotante 5m • Freijó Natural',
      featured: true
    },
    {
      id: 2,
      title: 'Corredor de Luz',
      category: 'interna',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs4AoSE9MrHG-AnFc7Jh5ittltwf5YDhIfDYIkein_ldSSfE23-eYwd35op8gzYsDPHyFzDpf3TEh5nDFLNq-SFWD6kiLgWAGyKBZiM0BpfcoqdLXtMaSoX7p_4oQWNAcWK0pZnAW_cFt2Gx7b0_kuKBYmCXdATCbI6i-RlpzZ4WCxz951iwPgWM-WPbdqR4R5XeX27orcCf27GR5nkjmYATJ5BzJ_Q2xdyXxaB5r3qBD0CFtm1d0kBOAEIaGlUl36nkCZrhq7fbg',
      description: 'Vidro Canelado • Perfil Preto'
    },
    {
      id: 3,
      title: 'Suíte Master',
      category: 'interna',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgmIpk8qcP3NpC-NAGc8CbknTun8u8-kzxlp65TCh6pVlWqCF_o4CV5Lh3_E0k2VlaiLw70osdsLABjgmX-oj9JGrjhcT17czI87VYvJ6Nf2Dmvb_KhxHN7mpR99j1lpj3WmhFbpMuztkX3uVcvcFUGfA__7twVOhIEZyIIrwBZoVUlw5AfNhp4q8tFgqBOX9yFDL2VCG-KKa2A2ucaImkfbjuLHq8UW8W1lR9megICwFbVGeh71g1IC8UnZ9aqS2sKT_OGREnx3U',
      description: 'Laca Branca'
    },
    {
      id: 4,
      title: 'Loft Industrial',
      category: 'aluminio',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAndOfmzpcp2GGhzlswwtVUj0YXSaKu9PM-FwY6WfcPukCvh8sODcVw2VSZQX8FUKXWUU6Edi8pgoYiXRwXKAj7QCumqSGB-BndVK3RJcuSxzwulrjn1NxG8Ny_6jbOBr2uHpNomHendtfwY7-25po68nX93lvg6blyfZGKqagHFD1IJ0Xdh9kqPGz2XSil2i-5FzTQPLrE9C2VKYoDcgGa7Flxki5VOVa481_IPVsCVjOwch2RZuvvsEP9loUG2DJItrG0o12P2VE',
      description: 'Slide System'
    },
    {
      id: 5,
      title: 'Residência Praia',
      category: 'madeira',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjsEh59awOKHCs2Idbljxlv-Q6dLRKSAxUumM_2nnbU5-8WQyqnrEUFKTEm-4csBalKoK_Eo6MqMSPvxslEMTfuMFoRIqDhD4Lj7Q7vVs-P93dmfYorQ_WOf6DB2TAHkBTQg0JP0wgkGBDF9DJROCsyLKw6ta-3-45GUbRy4hMf9v5zgsDB6TKOEyKeIER2zKI16WmskGazBFf3VtyDqTcyu2GWsFhlv7GDBbJgyvTGE_XjchTW4pe-3hvb8CpDoWQzyZWfgftQNo',
      description: 'Painel Ripado • Cumari'
    },
    {
      id: 6,
      title: 'Detalhes de Acabamento',
      category: 'madeira',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABLky5OD9mW5yXKH-eHBzIcE5YB7AYdDOgQi0blZztO237XeqZr9SLwGKEeUoZiYl1F-xnyd5LNXD5HLgeDo7nUXS4G7PszI9ybHXpk2ImeFZjJAea0GoiJERrx8VH9dOcTZR7ygF0uA0aatciwqHykoB_ap3uCrNzf4pN4Byau0Q4U7ksoN44__Kkek4uHH4mUpL_r2ZXIke-Ejmk7CLtSHb1A3IkR2MoOqcJCtGfjb3trnVl73Z0bjw27Opj6TOtsdjRC0SN4nk',
      description: 'Acessórios Premium'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'madeira', label: 'Madeira Natural' },
    { id: 'aluminio', label: 'Alumínio' },
    { id: 'pivotante', label: 'Pivotantes' },
    { id: 'interna', label: 'Internas' }
  ];

  return (
    <div className="w-full flex flex-col items-center animate-fade-in pb-20">
      <section className="w-full max-w-[1280px] px-6 md:px-10 py-12 md:py-20 flex flex-col items-center text-center animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
          Ambientes Reais
        </h1>
        <p className="text-base md:text-lg font-normal text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Curadoria de projetos exclusivos Soroportas. Uma galeria editorial onde a arquitetura encontra o movimento e a materialidade se torna protagonista.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[73px] z-30 w-full flex justify-center bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-transparent dark:border-white/5 py-4 transition-all duration-300">
        <div className="flex gap-3 px-4 flex-wrap justify-center max-w-[960px]">
          {filters.map(f => (
            <button 
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium transition-all ${
                filter === f.id 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md transform scale-105' 
                : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary'
              }`}
            >
              {filter === f.id && <span className="material-symbols-outlined text-[18px]">check</span>}
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="w-full max-w-[1400px] px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredProjects.map((project, idx) => (
             <div 
               key={project.id} 
               className={`group relative rounded-lg overflow-hidden cursor-pointer animate-fade-in ${project.featured ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`}
               style={{ animationDelay: `${idx * 0.1}s` }}
             >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col items-start gap-2">
                  {project.featured && (
                    <span className="inline-flex items-center rounded-sm bg-primary/90 px-2 py-1 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                      Destaque
                    </span>
                  )}
                  <h3 className={`${project.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} font-bold text-white leading-tight`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base mt-1">
                    <span>{project.description}</span>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;