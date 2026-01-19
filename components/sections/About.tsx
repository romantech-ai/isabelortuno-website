"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna Izquierda - Imagen */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Marco decorativo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl -z-10" />

              {/* Imagen del gabinete */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary to-warm overflow-hidden relative">
                <Image
                  src="/images/gabinete.png"
                  alt="Gabinete de Psicología Isabel Ortuño"
                  fill
                  className="object-contain p-8"
                />

                {/* Decoraciones */}
                <div className="absolute top-6 right-6 w-16 h-16 border-2 border-primary/20 rounded-full" />
                <div className="absolute bottom-6 left-6 w-24 h-24 border-2 border-accent/20 rounded-full" />
              </div>

              {/* Badge de experiencia */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-soft-xl p-6 border border-primary/10"
              >
                <div className="text-center">
                  <p className="text-4xl font-serif text-primary font-semibold">+15</p>
                  <p className="text-sm text-textSecondary mt-1">años de<br />experiencia</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Columna Derecha - Contenido */}
          <div className="lg:pl-8">
            <ScrollReveal>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Sobre Mí
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-textPrimary leading-tight">
                María Isabel
                <br />
                <span className="text-primary">Ortuño Paniagua</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-textSecondary leading-relaxed">
                Licenciada en Psicología por la Universidad Pontificia de Salamanca,
                con acreditación como Psicóloga General Sanitaria. Especializada en
                psicología clínico-social, con Premio Interno de Excelencia por mi
                investigación sobre Hipnosis.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-lg text-textSecondary leading-relaxed">
                Poseo un Máster en Psicología Clínica (Práctica Clínica en Salud Mental),
                especialización en Terapia Sexual y de Pareja, y Máster en Psicología Jurídica.
                Mantengo actualizada mi formación para ofrecer tratamientos innovadores e individualizados.
              </p>
            </ScrollReveal>

            {/* Charlas en Onda Cero */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 p-6 bg-secondary rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-textPrimary font-medium">
                      Colaboraciones en Onda Cero
                    </h3>
                    <p className="mt-1 text-textSecondary text-sm">
                      Participo regularmente en programas de radio hablando sobre
                      temas de salud mental, relaciones y bienestar emocional.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Experiencia profesional */}
            <ScrollReveal delay={0.5}>
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
                <h3 className="font-serif text-lg text-textPrimary font-medium mb-3">
                  Experiencia Profesional
                </h3>
                <ul className="text-sm text-textSecondary space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Psiquiátrico Provincial de Salamanca
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Hospital La Mancha-Centro (Psiquiatría Infantil)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Unidad de Salud Mental - Hospital de Tomelloso
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    CRPS y Centro Penitenciario de Alcázar de San Juan
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
