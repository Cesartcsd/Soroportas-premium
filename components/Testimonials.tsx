import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
    id: number;
    text: string;
    author: string;
    role: string;
    location: string;
    rating: number;
    image?: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        text: "A qualidade das portas Soroportas é incomparável. O acabamento é perfeito e o isolamento acústico transformou completamente o conforto da minha casa. Recomendo sem hesitação.",
        author: "Marcela Rodrigues",
        role: "Arquiteta",
        location: "São Paulo, SP",
        rating: 5,
    },
    {
        id: 2,
        text: "Trabalho com alto padrão há 20 anos e a Soroportas é minha parceira de confiança. Nunca tive problemas com prazos ou qualidade. A curadoria técnica deles evitou vários erros no meu projeto.",
        author: "Ricardo Mendes",
        role: "Designer de Interiores",
        location: "Rio de Janeiro, RJ",
        rating: 5,
    },
    {
        id: 3,
        text: "Minha porta pivotante é o destaque da fachada. Todos os visitantes comentam. O atendimento foi excepcional do início ao fim. Vale cada centavo investido.",
        author: "Fernanda Costa",
        role: "Proprietária",
        location: "Curitiba, PR",
        rating: 5,
    },
    {
        id: 4,
        text: "Reformei toda a casa e escolhi Soroportas para todas as portas internas. O silêncio que consegui nos quartos é impressionante. Qualidade que se percebe no dia a dia.",
        author: "Carlos Eduardo",
        role: "Empresário",
        location: "Belo Horizonte, MG",
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section id="testimonials" className="py-28 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-light/50 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">
                        <span className="w-8 h-[2px] bg-brand-primary"></span>
                        Depoimentos
                        <span className="w-8 h-[2px] bg-brand-primary"></span>
                    </span>

                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                        O que nossos clientes{' '}
                        <span className="relative inline-block">
                            dizem
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-primary to-brand-dark"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* Testimonial Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-white rounded-3xl shadow-xl shadow-black/5 p-8 md:p-12">
                        {/* Quote icon */}
                        <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                            <Quote className="w-5 h-5 text-white" />
                        </div>

                        {/* Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="text-center"
                            >
                                {/* Stars */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="font-serif text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 italic">
                                    "{currentTestimonial.text}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center text-white text-xl font-bold mb-4">
                                        {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <p className="font-bold text-gray-900">{currentTestimonial.author}</p>
                                    <p className="text-brand-primary text-sm">{currentTestimonial.role}</p>
                                    <p className="text-gray-500 text-sm">{currentTestimonial.location}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                                aria-label="Depoimento anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {TESTIMONIALS.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'w-8 bg-brand-primary'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Ir para depoimento ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                                aria-label="Próximo depoimento"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-wrap justify-center items-center gap-8 mt-12"
                >
                    <div className="flex items-center gap-2 text-gray-500">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900">4.9/5</span>
                        <span>média de avaliação</span>
                    </div>
                    <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
                    <div className="text-gray-500">
                        <span className="font-semibold text-gray-900">500+</span> clientes satisfeitos
                    </div>
                    <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
                    <div className="text-gray-500">
                        <span className="font-semibold text-gray-900">100%</span> recomendação
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
