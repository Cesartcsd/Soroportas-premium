import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, FileText } from 'lucide-react';
import { HERO_CONTENT, WHATSAPP_LINK } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onOpenQuote?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  // Parallax effect values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, filter: 'blur(5px)' },
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 2.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-[120%] -mt-[10%]"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Porta de entrada de alto padrão"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(6,78,59,0.1) 0%, transparent 50%)',
              'linear-gradient(135deg, rgba(5,150,105,0.15) 0%, transparent 60%)',
              'linear-gradient(135deg, rgba(6,78,59,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-16"
        style={{ y: textY, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              Portas de Alto Padrão
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-[1.1] mb-8"
          >
            <span className="block">A porta certa</span>
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-100 to-white/80 bg-clip-text text-transparent">
              muda o ambiente inteiro.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-200/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-full text-base font-semibold transition-all duration-500 min-w-[260px] justify-center overflow-hidden btn-glow"
            >
              <span className="relative z-10 flex items-center gap-3">
                {HERO_CONTENT.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="#collections"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;