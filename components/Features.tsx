import React, { useRef } from 'react';
import { FEATURES } from '../constants';
import { TreeDeciduous, Gem, VolumeX, ClipboardCheck } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  TreeDeciduous: <TreeDeciduous className="w-7 h-7" />,
  Gem: <Gem className="w-7 h-7" />,
  VolumeX: <VolumeX className="w-7 h-7" />,
  ClipboardCheck: <ClipboardCheck className="w-7 h-7" />
};

const Features: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section id="features" className="py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-60"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-brand-primary"></span>
            Diferenciais
            <span className="w-8 h-[2px] bg-brand-primary"></span>
          </span>

          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Por que nossas portas são{' '}
            <span className="relative inline-block">
              diferentes
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-primary via-brand-dark to-brand-primary"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              />
            </span>
            ?
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Uma porta Soroportas não é apenas um item de fechamento. É um móvel de alto padrão construído para durar, funcionar em silêncio e impressionar.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-light to-brand-primary/10 flex items-center justify-center text-brand-dark transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-primary/20">
                    {iconMap[feature.iconName]}
                  </div>

                  {/* Decorative ring on hover */}
                  <div className="absolute inset-0 w-14 h-14 rounded-xl border-2 border-brand-primary/0 group-hover:border-brand-primary/30 group-hover:scale-125 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/50 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;