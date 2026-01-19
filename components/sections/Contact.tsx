"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <ScrollReveal>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Contacto
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-textPrimary">
              Hablemos
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-xl font-elegant italic text-primary/80">
              El primer paso hacia el cambio es decidir que lo mereces
            </p>
          </ScrollReveal>

          {/* Información de contacto */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {/* Teléfono */}
              <a
                href="tel:+34605878109"
                className="group p-6 rounded-2xl bg-secondary hover:bg-primary/5 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-medium text-textPrimary">Teléfono</p>
                <p className="mt-1 text-primary font-medium">605 878 109</p>
              </a>

              {/* Email */}
              <a
                href="mailto:isabel@isabelortunopsicologia.com"
                className="group p-6 rounded-2xl bg-secondary hover:bg-primary/5 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-medium text-textPrimary">Email</p>
                <p className="mt-1 text-primary font-medium text-sm break-all">
                  isabel@isabelortunopsicologia.com
                </p>
              </a>

              {/* Dirección */}
              <a
                href="https://maps.google.com/?q=Calle+Emilio+Castelar+36+Alcazar+de+San+Juan"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-secondary hover:bg-primary/5 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-medium text-textPrimary">Dirección</p>
                <p className="mt-1 text-textSecondary text-sm">
                  C/ Emilio Castelar, 36, 2ºB
                  <br />
                  13600 Alcázar de San Juan
                </p>
              </a>
            </div>
          </ScrollReveal>

          {/* CTA Principal - WhatsApp */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12">
              <motion.a
                href="https://wa.me/34605878109"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Enviar mensaje por WhatsApp
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Redes sociales */}
          <ScrollReveal delay={0.5}>
            <div className="mt-12">
              <p className="text-textSecondary mb-4">Sígueme en redes:</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/GabinetePsicologicoMariaIsabelOrtunoPaniagua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/IsabeOrtuno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Mapa */}
          <ScrollReveal delay={0.6}>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-soft-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.7961088097656!2d-3.2099886!3d39.3903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6915a6b6c4c22f%3A0x0!2sCalle%20Emilio%20Castelar%2C%2036%2C%2013600%20Alc%C3%A1zar%20de%20San%20Juan%2C%20Ciudad%20Real!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Gabinete de Psicología Isabel Ortuño"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
