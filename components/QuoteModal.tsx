import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_LINK } from '../constants';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        doorType: '',
        quantity: '1',
        message: '',
    });

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setStep(1);
            setIsSubmitted(false);
        }
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all duration-300";
    const labelClass = "block text-sm font-medium text-gray-700 mb-2";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[90] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300"
                            aria-label="Fechar"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="grid md:grid-cols-5">
                            {/* Left side - Info (hidden on mobile) */}
                            <div className="hidden md:block md:col-span-2 bg-brand-dark p-8 text-white">
                                <h3 className="font-serif text-2xl mb-6">Solicite seu Orçamento</h3>
                                <p className="text-gray-300 text-sm mb-8">
                                    Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Phone className="w-5 h-5 text-brand-primary" />
                                        <span>(11) 99999-9999</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Mail className="w-5 h-5 text-brand-primary" />
                                        <span>contato@soroportas.com.br</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <MapPin className="w-5 h-5 text-brand-primary" />
                                        <span>São Paulo, SP</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Clock className="w-5 h-5 text-brand-primary" />
                                        <span>Seg-Sex: 09h às 18h</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <p className="text-xs text-gray-400">
                                        Prefere falar diretamente conosco?
                                    </p>
                                    <a
                                        href={WHATSAPP_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-3 text-brand-primary hover:text-emerald-400 transition-colors text-sm font-medium"
                                    >
                                        Chamar no WhatsApp →
                                    </a>
                                </div>
                            </div>

                            {/* Right side - Form */}
                            <div className="md:col-span-3 p-6 md:p-8 overflow-y-auto max-h-[90vh]">
                                {!isSubmitted ? (
                                    <>
                                        {/* Progress */}
                                        <div className="flex items-center gap-2 mb-8">
                                            {[1, 2, 3].map((s) => (
                                                <div key={s} className="flex items-center">
                                                    <div
                                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${step >= s
                                                            ? 'bg-brand-primary text-white'
                                                            : 'bg-gray-100 text-gray-400'
                                                            }`}
                                                    >
                                                        {s}
                                                    </div>
                                                    {s < 3 && (
                                                        <div
                                                            className={`w-12 h-1 mx-2 rounded transition-all duration-300 ${step > s ? 'bg-brand-primary' : 'bg-gray-100'
                                                                }`}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <AnimatePresence mode="wait">
                                                {/* Step 1 - Contact Info */}
                                                {step === 1 && (
                                                    <motion.div
                                                        key="step1"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        className="space-y-4"
                                                    >
                                                        <h4 className="font-semibold text-lg text-gray-900 mb-4">
                                                            Seus dados de contato
                                                        </h4>

                                                        <div>
                                                            <label className={labelClass}>Nome completo *</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                className={inputClass}
                                                                placeholder="Seu nome"
                                                                required
                                                            />
                                                        </div>

                                                        <div>
                                                            <label className={labelClass}>E-mail *</label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                className={inputClass}
                                                                placeholder="seu@email.com"
                                                                required
                                                            />
                                                        </div>

                                                        <div>
                                                            <label className={labelClass}>Telefone/WhatsApp *</label>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                className={inputClass}
                                                                placeholder="(11) 99999-9999"
                                                                required
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 2 - Project Info */}
                                                {step === 2 && (
                                                    <motion.div
                                                        key="step2"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        className="space-y-4"
                                                    >
                                                        <h4 className="font-semibold text-lg text-gray-900 mb-4">
                                                            Sobre seu projeto
                                                        </h4>

                                                        <div>
                                                            <label className={labelClass}>Tipo de projeto *</label>
                                                            <select
                                                                name="projectType"
                                                                value={formData.projectType}
                                                                onChange={handleChange}
                                                                className={inputClass}
                                                                required
                                                            >
                                                                <option value="">Selecione...</option>
                                                                <option value="new">Construção nova</option>
                                                                <option value="renovation">Reforma</option>
                                                                <option value="replacement">Substituição de portas</option>
                                                                <option value="commercial">Projeto comercial</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className={labelClass}>Tipo de porta *</label>
                                                            <select
                                                                name="doorType"
                                                                value={formData.doorType}
                                                                onChange={handleChange}
                                                                className={inputClass}
                                                                required
                                                            >
                                                                <option value="">Selecione...</option>
                                                                <option value="entrance">Porta de entrada</option>
                                                                <option value="interior">Portas internas</option>
                                                                <option value="pivotante">Porta pivotante</option>
                                                                <option value="sliding">Porta de correr</option>
                                                                <option value="acoustic">Porta acústica</option>
                                                                <option value="other">Outro / Não sei</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className={labelClass}>Quantidade aproximada</label>
                                                            <input
                                                                type="number"
                                                                name="quantity"
                                                                value={formData.quantity}
                                                                onChange={handleChange}
                                                                className={inputClass}
                                                                placeholder="1"
                                                                min="1"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Step 3 - Message */}
                                                {step === 3 && (
                                                    <motion.div
                                                        key="step3"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        className="space-y-4"
                                                    >
                                                        <h4 className="font-semibold text-lg text-gray-900 mb-4">
                                                            Detalhes adicionais
                                                        </h4>

                                                        <div>
                                                            <label className={labelClass}>
                                                                Conte mais sobre seu projeto (opcional)
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                className={`${inputClass} min-h-[120px] resize-none`}
                                                                placeholder="Medidas, acabamentos desejados, dúvidas específicas..."
                                                            />
                                                        </div>

                                                        <div className="bg-brand-light/50 rounded-xl p-4 text-sm text-gray-600">
                                                            <p>Ao enviar, você concorda em receber contato da nossa equipe por e-mail ou WhatsApp.</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Navigation buttons */}
                                            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                                                {step > 1 ? (
                                                    <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                                    >
                                                        ← Voltar
                                                    </button>
                                                ) : (
                                                    <div />
                                                )}

                                                {step < 3 ? (
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        className="px-6 py-3 bg-brand-dark text-white rounded-full font-medium hover:bg-brand-primary transition-all duration-300"
                                                    >
                                                        Próximo →
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-dark transition-all duration-300"
                                                    >
                                                        <Send className="w-4 h-4" />
                                                        Enviar Orçamento
                                                    </button>
                                                )}
                                            </div>
                                        </form>
                                    </>
                                ) : (
                                    /* Success State */
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-brand-primary" />
                                        </div>

                                        <h4 className="font-serif text-2xl text-gray-900 mb-4">
                                            Orçamento Enviado!
                                        </h4>

                                        <p className="text-gray-600 mb-8">
                                            Recebemos sua solicitação. Nossa equipe entrará em contato em até 24 horas úteis.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button
                                                onClick={onClose}
                                                className="px-6 py-3 border border-gray-200 rounded-full font-medium text-gray-600 hover:bg-gray-50 transition-all duration-300"
                                            >
                                                Fechar
                                            </button>
                                            <a
                                                href={WHATSAPP_LINK}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-dark transition-all duration-300"
                                            >
                                                Falar no WhatsApp
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal;
