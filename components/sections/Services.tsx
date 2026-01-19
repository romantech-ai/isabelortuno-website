"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "adultos",
    title: "Terapia de Adultos",
    shortTitle: "Adultos",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    description:
      "Aborda conflictos y problemas intensos de la edad adulta mediante intervención profesional especializada. Utilizando una perspectiva integradora que combina técnicas cognitivo-conductuales y dinámicas.",
    items: [
      "Ansiedad y estrés",
      "Depresión",
      "Crisis de pánico",
      "Duelo y pérdidas",
      "Fobias y miedos",
    ],
  },
  {
    id: "pareja",
    title: "Terapia de Pareja y Sexual",
    shortTitle: "Pareja",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description:
      "Resuelve conflictos emocionales y relacionales para mejorar la satisfacción en la relación. La sexualidad es un componente clave de nuestra existencia y bienestar.",
    items: [
      "Crisis de pareja",
      "Problemas de comunicación",
      "Terapia sexual",
      "Anorgasmia femenina",
      "Disfunciones sexuales",
    ],
  },
  {
    id: "adolescentes",
    title: "Terapia con Adolescentes",
    shortTitle: "Adolescentes",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    description:
      "Manejo de cambios físicos y psicológicos, crisis de identidad y comunicación parental. Especializada en los desafíos únicos de la adolescencia.",
    items: [
      "Trastornos alimentarios",
      "Depresión y ansiedad",
      "Adicciones tecnológicas",
      "Autoestima",
      "Habilidades sociales",
    ],
  },
  {
    id: "infantil",
    title: "Terapia Infantil",
    shortTitle: "Infantil",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description:
      "Utiliza el juego como herramienta terapéutica para tratar las dificultades emocionales y conductuales de los más pequeños en un ambiente seguro.",
    items: [
      "Fracaso escolar",
      "Fobias y miedos",
      "Trastornos del sueño",
      "Problemas de conducta",
      "Ansiedad infantil",
    ],
  },
  {
    id: "familiar",
    title: "Terapia Familiar",
    shortTitle: "Familiar",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description:
      "Entendemos la familia como un sistema en el que todos sus miembros están interrelacionados, para resolver conflictos conjuntamente.",
    items: [
      "Conflictos familiares",
      "Comunicación familiar",
      "Mediación familiar",
      "Educación para el divorcio",
      "Violencia de género",
    ],
  },
  {
    id: "juridico",
    title: "Psicología Jurídica",
    shortTitle: "Jurídica",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    description:
      "Informes periciales, mediación familiar y evaluaciones psicológicas para procesos judiciales. Máster en Psicología Jurídica.",
    items: [
      "Informes periciales",
      "Mediación familiar",
      "Custodia de menores",
      "Evaluaciones psicológicas",
      "Violencia de género",
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab)!;

  return (
    <section id="servicios" className="section-padding bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Servicios
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-textPrimary">
              ¿Cómo puedo ayudarte?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-textSecondary">
              Ofrezco diferentes tipos de terapia adaptados a tus necesidades específicas
            </p>
          </ScrollReveal>
        </div>

        {/* Tabs */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === service.id
                    ? "bg-primary text-white shadow-glow"
                    : "bg-white text-textSecondary hover:text-primary hover:bg-primary/5 border border-primary/10"
                )}
              >
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.shortTitle}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft-xl"
            >
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto md:mx-0">
                  {activeService.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-textPrimary text-center md:text-left">
                    {activeService.title}
                  </h3>

                  <p className="mt-4 text-textSecondary leading-relaxed">
                    {activeService.description}
                  </p>

                  {/* Items */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-primary mb-3">
                      Temas que abordamos:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {activeService.items.map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-2 text-textSecondary"
                        >
                          <svg
                            className="w-5 h-5 text-primary flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/34605878109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Solicitar información
                    </a>
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
                    >
                      Más información
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
