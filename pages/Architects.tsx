import React from 'react';

interface ArchitectsProps {
  onOpenContact: () => void;
}

const Architects: React.FC<ArchitectsProps> = ({ onOpenContact }) => {
  return (
    <div className="animate-fade-in pb-20">
      {/* Hero */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-background-light dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1 animate-slide-up">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                  <span className="material-symbols-outlined text-primary text-sm">stars</span>
                  <span className="text-xs font-bold text-primary tracking-wide uppercase">Experiência Exclusiva</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                  Atendimento <br/> <span className="font-bold text-primary">Personalizado</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                  Mais do que portas, entregamos soluções arquitetônicas. Nossos especialistas traduzem sua visão em projetos tecnicamente perfeitos e esteticamente impecáveis.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex -space-x-3">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDLHfTWBtVM2B0Vw-iaM3MIWFAJ2dbCQWE6EifX5CYYwXlWWqW8Tt8awuksR0IEdHGh6hkgk5QNWSkqvHKkf7C2s5rUpBP0v9ZET0AAo1cS-flLELjTaYY6WEENbz9wWT7TScyBAkjJzgb7exWWAALcomAZoK4rGIc7hhPxWVBiofrb0_aUgFuXbQCG_IkROruJ8MuNOlRHnSDsjWjQr8tDqhr4wT8QNNXtZX6cB8CfZZ41bxaPJyXG0K-QsgFtOoRewf7zYGxkXf0",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxPpA1N_tRfEJoy1KbpxlghZz18cQNXkmyZrnPc59bQhID9QJnlTvcJrzjUgzH0mWHDzU9b8b0J8A3p0htlS_8A481psGS08WmV1MBxEEaJpljsllPQKBL0STany3kekIjY561XcI5GG-ETktws9XeM5Uzw0M4AsKTpgmVHhNDuF4boqs-Rzp_Al_e7-FnoUAfSO8hH1UZ8J1XH5UiV6N23xghPvVD407LmiEAOkUHelAhCuTTyTPT_jaYpfrOk_2CjmIPqV5oj5s",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjDJ4gONSMinbBe_E-VUGHIPKg9a1R2T6KgrH6P0Qn8bev1GRviOserMg1KWtAdK0O1p4Q7-dy05Vuqg4GTrYFET72q5-lsAwUak8LFfcwfj6SV-d9E34rYgqY7y2hls2FuxsdxcjZkedz5uRex2jCkBTgVNWvXhzHRDVzRVESneo-2xuYihSqNTDssnNgnzEJh1-flzjZtRd9LtQWDKP3LFs4e_Un0xh_q0m9blmxvYCHZfcrydSg4LdunVV6QGiuca7e7YoIIUU"
                  ].map((url, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url("${url}")` }}></div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-400 text-sm filled-icon">star</span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">4.9/5</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Aprovado por arquitetos</span>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 translate-x-4 translate-y-4"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-2xl">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAFVQFtEKgdu5BV1waopGFmnSbw91Y3k7a-5a4miX-XcI8eIViGBZgDdw1G0eBO-uXtLX25fmLaw5lePPWMcJjps3LEfU0D4vUrNpiY5b12okNietbOKpriv0v2pQ0P6aBJaMc06130OGN6oNYo6JOWjLnPTx7sG9NRG4JBNsqsj2thW9G1qwNabnMidF4wdHbV4JRYO3aDYQajrHE8X71TUJQWZSKorBOUteL-n63HHaZHbZbCG5u73pTkMqtz5yUHHUCkF1crbM")` }}></div>
                <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 max-w-[240px]">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <span className="material-symbols-outlined">architecture</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mb-1">Especialidade</p>
                      <p className="text-sm font-bold leading-tight text-slate-900 dark:text-white">Projetos de Alto Padrão</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white dark:bg-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Nosso Processo de Consultoria</h2>
            <p className="text-slate-500 dark:text-slate-400">Um acompanhamento técnico e estético passo a passo para garantir a excelência do seu projeto.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>
             {[
               { icon: 'description', title: '1. Entendimento do Projeto', desc: 'Analisamos sua planta e necessidades estéticas para alinhar expectativas.' },
               { icon: 'engineering', title: '2. Orientação Técnica', desc: 'Definição dos materiais, especificações acústicas e sistemas de abertura.' },
               { icon: 'palette', title: '3. Personalização', desc: 'Escolha de acabamentos exclusivos para harmonizar com sua arquitetura.' }
             ].map((step, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-300">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Architect CTA */}
      <section className="py-20">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-700 text-center overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
             <div className="relative z-10 flex flex-col items-center gap-8">
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Inicie sua consultoria</h2>
               <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                 Transforme seu projeto com a porta ideal. Fale com nossa equipe técnica agora mesmo e receba um atendimento premium.
               </p>
               <button onClick={onOpenContact} className="group relative w-full max-w-sm flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-5 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                 <span className="material-symbols-outlined text-2xl">chat</span>
                 <span>Falar com um especialista</span>
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architects;