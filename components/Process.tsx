import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Ruler, Factory, Truck, Wrench } from 'lucide-react';

interface ProcessStep {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    duration: string;
}

const PROCESS_STEPS: ProcessStep[] = [
    {
        id: 1,
        icon: <MessageSquare className="w-6 h-6" />,
        title: 'Consultoria Inicial',
        description: 'Analisamos suas necessidades, planta e estilo arquitetônico para indicar a solução ideal.',
        duration: '1-2 dias',
    },
    {
        id: 2,
        icon: <Ruler className="w-6 h-6" />,
        title: 'Projeto Técnico',
        description: 'Desenvolvemos o projeto com medidas precisas, especificações de materiais e acabamentos.',
        duration: '3-5 dias',
    },
    {
        id: 3,
        icon: <Factory className="w-6 h-6" />,
        title: 'Fabricação Artesanal',
        description: 'Produção em nossa fábrica com madeira nobre selecionada e controle de qualidade rigoroso.',
        duration: '15-25 dias',
    },
    {
        id: 4,
        icon: <Truck className="w-6 h-6" />,
        title: 'Entrega Segura',
        description: 'Transporte especializado com embalagem protetora para garantir a integridade do produto.',
        duration: '1-3 dias',
    },
    {
        id: 5,
        icon: <Wrench className="w-6 h-6" />,
        title: 'Instalação Profissional',
        description: 'Equipe técnica certificada realiza a instalação com garantia de vedação e funcionamento perfeito.',
        duration: '1 dia',
    },
];

const Process: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
            },
        },
    };

    return (
        <section id="process" className="py-28 bg-brand-dark relative overflow-hidden" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">
                        <span className="w-8 h-[2px] bg-brand-primary"></span>
                        Nosso Processo
                        <span className="w-8 h-[2px] bg-brand-primary"></span>
                    </span>

                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                        Do projeto à{' '}
                        <span className="relative inline-block">
                            instalação
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-primary to-emerald-400"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                            />
                        </span>
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        Acompanhe cada etapa da criação da sua porta. Transparência e qualidade em todo o processo.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Central line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-primary via-brand-primary/50 to-transparent hidden lg:block"></div>

                    {/* Steps */}
                    <div className="space-y-8 lg:space-y-0">
                        {PROCESS_STEPS.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className={`relative lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                                    <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 group ${index % 2 === 0 ? 'lg:ml-auto' : ''
                                        } max-w-md`}>
                                        {/* Mobile icon */}
                                        <div className="lg:hidden w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-4">
                                            {step.icon}
                                        </div>

                                        <div className="flex items-center gap-3 mb-3 lg:justify-start">
                                            <span className="text-brand-primary text-sm font-bold">Etapa {step.id}</span>
                                            <span className="text-gray-500 text-xs">• {step.duration}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                                            {step.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center icon (desktop) */}
                                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-brand-dark border-4 border-brand-primary items-center justify-center text-brand-primary z-10">
                                    {step.icon}
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden lg:block lg:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-4">Prazo médio total: 20-35 dias</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-500 transition-all duration-300"
                    >
                        Iniciar meu projeto
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
