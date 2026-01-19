"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    id: 1,
    text: "Gracias a esta persona maravillosa, he comprendido qué es hacer terapia: qué beneficios tiene. Qué es sanar eso que se llama alma.",
    name: "Paciente verificado",
    role: "Reseña en Doctoralia",
  },
  {
    id: 2,
    text: "No solo está para ti durante ese momento de consulta sino que también mediante mensaje de móvil siempre que la necesites. Es fantástica y solo se puede hablar de ella desde la gratitud y cariño.",
    name: "Paciente verificado",
    role: "Reseña en Doctoralia",
  },
  {
    id: 3,
    text: "Es una gran profesional, la mejor. Mi vida cambió con ella, me enseñó a ser persona y salir adelante. Me dio las herramientas que necesitaba para vivir y conseguir mi objetivo.",
    name: "Paciente verificado",
    role: "Reseña en Doctoralia",
  },
  {
    id: 4,
    text: "Es una excelente profesional, y desde que fui por primera vez a su gabinete, mi vida ha cambiado, y ahora estoy completamente feliz. Muchas gracias María Isabel.",
    name: "Paciente verificado",
    role: "Reseña en Doctoralia",
  },
  {
    id: 5,
    text: "Mi vida cambió completamente gracias a ella. Nada de medicación, mucho cariño, mucha atención. ¡Una verdadera profesional!",
    name: "Paciente verificado",
    role: "Reseña en Doctoralia",
  },
  {
    id: 6,
    text: "Muy buena profesional.",
    name: "Cristina Gómez",
    role: "Reseña en Google",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Reactivar autoplay después de 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="testimonios"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="text-white/60 font-medium tracking-wider uppercase text-sm">
              Testimonios
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
              Lo que dicen mis pacientes
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonio destacado */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Comilla decorativa */}
          <div className="relative mb-8">
            <span className="text-[150px] sm:text-[200px] font-serif text-white/10 leading-none select-none absolute left-1/2 -translate-x-1/2 -top-16">
              &ldquo;
            </span>
          </div>

          {/* Testimonio con animación */}
          <div className="min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-elegant italic text-white leading-relaxed">
                  {testimonials[activeIndex].text}
                </blockquote>

                <div className="mt-8">
                  <p className="text-lg font-medium text-white">
                    &mdash; {testimonials[activeIndex].name}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    {testimonials[activeIndex].role}
                  </p>
                </div>

                {/* Estrellas */}
                <div className="flex justify-center gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
