import React, { useRef } from 'react';
import { COLLECTIONS, WHATSAPP_LINK } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Collections: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section id="collections" className="py-28 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-light/30 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mb-20"
        >
          <motion.div variants={headerVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-brand-primary"></span>
              Nossas Coleções
            </span>
          </motion.div>

          <motion.h3
            variants={headerVariants}
            className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight"
          >
            Projetadas para cada{' '}
            <span className="relative inline-block">
              momento
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-brand-primary to-brand-dark"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
              />
            </span>{' '}
            da sua casa
          </motion.h3>

          <motion.p
            variants={headerVariants}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Não acreditamos em soluções genéricas. Navegue pelas nossas linhas e descubra qual perfil de porta se adequa à sua necessidade arquitetônica.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {COLLECTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              className="group"
              variants={cardVariants}
            >
              {/* 3D Card Container */}
              <div
                className="card-3d cursor-default"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-lg bg-gray-100 image-reveal">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-brand-dark">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
                    >
                      Consultar disponibilidade
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-3">
                  <h4 className="text-xl font-serif text-gray-900 group-hover:text-brand-dark transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Animated link */}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-sm font-medium text-brand-dark pt-2"
                  >
                    <span className="relative">
                      Saiba mais
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-primary group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-brand-light/50 to-transparent border border-brand-primary/10">
            <p className="text-gray-600">Está em dúvida sobre qual modelo escolher?</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-primary transition-colors group"
            >
              Fale com nosso especialista técnico
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;