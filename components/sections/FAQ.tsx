"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cómo es la primera consulta?",
    answer:
      "La primera consulta es un espacio para conocernos. Te escucharé con atención, sin juicios, para entender tu situación y lo que te ha traído hasta aquí. Hablaremos sobre tus expectativas y te explicaré cómo podemos trabajar juntos. Es un momento para que te sientas cómodo/a y resuelvas cualquier duda.",
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer:
      "Las sesiones de terapia individual tienen una duración aproximada de 50-60 minutos. Las sesiones de terapia de pareja suelen durar entre 60-75 minutos para poder trabajar con ambas personas de manera equilibrada.",
  },
  {
    question: "¿Con qué frecuencia debo acudir?",
    answer:
      "Al inicio del tratamiento, normalmente se recomienda una sesión semanal para establecer una buena base de trabajo. A medida que avanzamos, podemos espaciar las sesiones según tu evolución y necesidades, pasando a sesiones quincenales o mensuales.",
  },
  {
    question: "¿Hacéis terapia online?",
    answer:
      "Sí, ofrezco sesiones de terapia online por videollamada. La terapia online es igual de efectiva que la presencial y te permite acceder a la atención psicológica desde la comodidad de tu hogar o desde cualquier lugar.",
  },
  {
    question: "¿Cómo sé si necesito ir al psicólogo?",
    answer:
      "Algunos indicadores de que podrías beneficiarte de terapia son: dificultad para gestionar emociones, problemas de sueño o apetito, sensación de estar atascado/a, conflictos recurrentes en tus relaciones, ansiedad o tristeza persistente. Si algo te preocupa, siempre es buen momento para consultar.",
  },
  {
    question: "¿La información es confidencial?",
    answer:
      "Absolutamente. Todo lo que compartas en consulta está protegido por el secreto profesional. La confidencialidad es un pilar fundamental de la relación terapéutica y un derecho que te asiste como paciente. Solo se podría romper en casos excepcionales previstos por la ley.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-20">
          {/* Columna izquierda - Header sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                FAQ
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-textPrimary leading-tight">
                Preguntas
                <br />
                <span className="text-primary">frecuentes</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-textSecondary">
                Resuelve tus dudas más comunes sobre el proceso terapéutico.
                Si no encuentras lo que buscas, no dudes en contactarme.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Contactar para más información
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Columna derecha - Acordeón */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className={cn(
                    "bg-white rounded-2xl border transition-all duration-300",
                    openIndex === index
                      ? "border-primary/20 shadow-soft"
                      : "border-transparent"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-lg font-medium text-textPrimary pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-textSecondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
