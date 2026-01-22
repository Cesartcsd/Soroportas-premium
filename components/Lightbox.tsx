import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    titles?: string[];
}

const Lightbox: React.FC<LightboxProps> = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNext,
    onPrev,
    titles,
}) => {
    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    onPrev();
                    break;
                case 'ArrowRight':
                    onNext();
                    break;
            }
        },
        [isOpen, onClose, onNext, onPrev]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [handleKeyDown, isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
                        aria-label="Fechar"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation - Previous */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                        className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
                        aria-label="Imagem anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Navigation - Next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
                        aria-label="Próxima imagem"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image container */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-[90vw] max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[currentIndex]}
                            alt={titles?.[currentIndex] || `Imagem ${currentIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />

                        {/* Image info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                            <div className="flex items-center justify-between text-white">
                                <div>
                                    {titles?.[currentIndex] && (
                                        <h3 className="text-lg font-serif mb-1">{titles[currentIndex]}</h3>
                                    )}
                                    <p className="text-white/60 text-sm">
                                        {currentIndex + 1} de {images.length}
                                    </p>
                                </div>
                                <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                                    <ZoomIn className="w-5 h-5" />
                                    <span className="text-sm hidden md:inline">Ampliar</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // This would need a setCurrentIndex prop to work
                                }}
                                className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                                        ? 'border-white scale-110'
                                        : 'border-transparent opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
