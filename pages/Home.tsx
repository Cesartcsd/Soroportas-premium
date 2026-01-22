import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
          <div className="relative flex min-h-[65vh] md:min-h-[75vh] flex-col gap-6 rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12 pt-40 md:px-12 md:pb-20 shadow-2xl" 
               style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQPA5mVXBmpKx2Wo4QDSxe0Fwc2YZyf19Lq3Ru-inaMToePmgrNt4nfpfxH2r4T-FUHJrDwDvGypa__cTDnkkJmTCvs06yD0I_QA2GAUh7ae4mwd5XdgNB6oz95YBLwGfOivz-Q9L0jad08eoKzbex-IYcfxeI5YhvtT-Ag5gg7zZ2qSof1Fd4i0ANuMso74PbHCKQpwwW2jLVVnF9FF5iAERck6j11PDWdKfuPFY4olPjdX4GhAGyCEoncJ2rVgYeJ5Y6fw09CY8")` }}>
            <div className="flex flex-col gap-4 text-left max-w-3xl animate-slide-up">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl lg:text-7xl drop-shadow-lg">
                A porta certa muda o ambiente inteiro.
              </h1>
              <h2 className="text-white/90 text-base font-medium leading-relaxed md:text-xl max-w-xl drop-shadow-md">
                Design autêntico e madeira maciça para projetos de alto padrão.
              </h2>
            </div>
            <div className="flex gap-4 mt-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Link to="/collection" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-slate-900 text-base font-bold tracking-wide hover:bg-white hover:text-primary transition-all duration-300">
                Ver Coleção
              </Link>
              <Link to="/projects" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-base font-bold tracking-wide hover:bg-white/20 transition-all duration-300">
                Nossos Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 md:items-start">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-[720px]">
                Segurança na Escolha
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-[720px]">
                Nossa abordagem consultiva garante a excelência do início ao fim do projeto. Entendemos que cada detalhe importa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'chat', title: 'Consultoria Técnica', desc: 'Orientação completa para integrar a porta ao seu design arquitetônico.' },
                { icon: 'forest', title: 'Madeira Certificada', desc: 'Sustentabilidade e luxo garantidos em cada detalhe da madeira maciça.' },
                { icon: 'handyman', title: 'Instalação Especializada', desc: 'Equipe própria para assegurar um acabamento perfeito na sua obra.' }
              ].map((feature, idx) => (
                <div key={idx} className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">{feature.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Teaser */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between pb-8">
            <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Projetos Recentes</h2>
            <Link to="/projects" className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline">
              Ver todos os projetos <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="w-full h-[500px] bg-center bg-no-repeat bg-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02] shadow-lg relative overflow-hidden" 
                   style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiALUAV5jZLc-Ro33WpfMqvR9np-CyJWP79oUfNhcrN1RhqJu1X1hD5zNWC0J7g186o4GEvriFMTDHqjqIIM0YQp4svBs38RXGRczuTssD5SapFJLluIhCKBkZb9tVYgav_D4JmokT66CUKnVkAkqzaGMPoaueIb2ZEEqBrukoxq1nfwoWu57JHppxYTtwPyGWuhwmuXfruRejGR9wJKvemKG3C22Ot7xPAJXLaH4o2xG159ecFXiGYDPnd2s3FzCH8wbbjUPZCWY")` }}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Residência Alphaville</p>
              <p className="text-sm text-slate-500">Porta Pivotante Cumaru</p>
            </div>
            <div className="group cursor-pointer md:mt-12">
              <div className="w-full h-[500px] bg-center bg-no-repeat bg-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02] shadow-lg relative overflow-hidden" 
                   style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAImrpAVjtiZqDb-469Exu7bePsmTLqtVkgi7UENx_s6HT5Tui0DOEnoE2KD0XU7dsgBjL_Pf5XqFUVniiZRtFFd-Jw2OJ8MV7w9l7V_TquJzGyYh8urWG-qYF1AWo1N9igTAN0FgeOspy93kujJ_Dy3YuwPXMOxwEKmdmusHAPCbRPQLLcUpUTOiO4OVDxhfNlIDpiLilqsyuzSYsPr627sDvH4-FA2EdzmE10ZIw-wGBiQmGFx0E8zpBlhXVpVmthcv7t6dnUA-0")` }}>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Loft Industrial</p>
              <p className="text-sm text-slate-500">Painel Ripado Freijó</p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-full h-[500px] bg-center bg-no-repeat bg-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02] shadow-lg relative overflow-hidden" 
                   style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBk9wvn-8X_3e9s6zFxZV5WhNAUBTTrAX2iiHi1Tr5vbNmxEFdHlLs82wsuoroRmUadlAZ8NtgvVADrWaqJog9HqNMo4oQ5kroh_BjNISF87OHOJBQPt4fCGvWWTdGkBFwjkDaCRam4rOIck1Rd8JY4uxMupNYBDQ6Y9KeI0ulb9oSYy5BnJJxHYqosMloZsUCQaHxz1YN1yr-PvZ0DUwa2bX8udmzzA2iexs-2GaPYton4DjK1BzGjURJeb17z53-yFDmM8SmrURw")` }}>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Casa Jardins</p>
              <p className="text-sm text-slate-500">Porta de Entrada Maciça</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center md:hidden">
            <Link to="/projects" className="flex items-center gap-1 text-primary font-bold hover:underline">
              Ver todos os projetos <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Transforme a entrada da sua casa.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Solicite um orçamento personalizado e descubra como uma porta Soroportas pode elevar o padrão do seu projeto.
          </p>
          <Link to="/architects" className="inline-flex cursor-pointer items-center justify-center rounded-lg h-14 px-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-lg font-bold hover:bg-primary hover:text-slate-900 dark:hover:bg-primary transition-all duration-300 shadow-xl">
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;