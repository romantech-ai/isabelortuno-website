"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Primera Consulta",
    description:
      "Nos conocemos en un ambiente cálido y seguro. Escucho tu historia, tus preocupaciones y lo que te ha traído hasta aquí. Sin juicios, solo comprensión.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Evaluación",
    description:
      "Realizamos una evaluación completa para entender en profundidad tu situación. Identificamos patrones, fortalezas y áreas de trabajo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Plan Personalizado",
    description:
      "Diseñamos juntos un plan de tratamiento a tu medida, con objetivos claros y estrategias específicas adaptadas a tus necesidades y ritmo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Acompañamiento",
    description:
      "Te acompaño en cada paso del proceso, celebrando tus avances y trabajando juntos los obstáculos que puedan surgir en el camino.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Metodología
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-textPrimary">
              Cómo trabajamos juntos
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-textSecondary">
              Un proceso claro y estructurado para acompañarte en tu camino hacia el bienestar
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Línea conectora - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <div className="relative group">
                  {/* Número circular */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-[120px] h-[120px] mx-auto mb-6"
                  >
                    {/* Fondo decorativo */}
                    <div className="absolute inset-0 bg-primary/5 rounded-full transform group-hover:scale-110 transition-transform duration-500" />

                    {/* Círculo principal */}
                    <div className="absolute inset-2 bg-white rounded-full shadow-soft flex flex-col items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                      <span className="text-3xl font-serif text-primary font-semibold">
                        {step.number}
                      </span>
                      <div className="text-primary/60 mt-1">{step.icon}</div>
                    </div>

                    {/* Punto en la línea - Desktop */}
                    <div className="hidden lg:block absolute -bottom-[26px] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-glow" />
                  </motion.div>

                  {/* Contenido */}
                  <div className="text-center">
                    <h3 className="text-xl font-serif text-textPrimary font-medium mb-3">
                      {step.title}
                    </h3>
                    <p className="text-textSecondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-textSecondary mb-6">
              ¿Listo para dar el primer paso?
            </p>
            <a
              href="https://wa.me/34605878109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-soft hover:shadow-glow"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Reserva tu primera consulta
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
