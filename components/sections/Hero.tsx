"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen grid lg:grid-cols-[1.2fr,1fr] overflow-hidden"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light lg:w-[60%]" />

      {/* Decoración abstracta */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none lg:w-[60%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-white blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-[80px]"
        />
      </div>

      {/* Columna Izquierda - Contenido */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-32 lg:py-20">
        <div className="max-w-xl">
          {/* Cita de Jung */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="absolute -top-8 -left-4 text-[120px] sm:text-[150px] font-serif text-white/10 leading-none select-none">
              &ldquo;
            </span>
            <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-white leading-tight">
              Lo que niegas te somete,
              <br />
              <span className="text-white/90">lo que aceptas te transforma</span>
            </p>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl font-elegant italic text-white/70"
          >
            &mdash; Carl Gustav Jung
          </motion.p>

          {/* Nombre y título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 lg:mt-16"
          >
            <h1 className="text-2xl sm:text-3xl font-serif text-white">
              María Isabel Ortuño Paniagua
            </h1>
            <p className="mt-2 text-white/70 text-lg">
              Psicóloga Clínica · Alcázar de San Juan
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="https://wa.me/34605878109"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium text-base shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Pide tu cita
            </motion.a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-full font-medium text-base hover:bg-white/10 transition-all duration-300"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Columna Derecha - Imagen */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-warm to-secondary" />

        {/* Imagen del gabinete */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Overlay decorativo */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent z-10" />

            {/* Logo del gabinete */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <Image
                  src="/images/logo.png"
                  alt="Gabinete de Psicología Isabel Ortuño"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </motion.div>
            </div>

            {/* Decoración geométrica */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-20 right-10 w-20 h-20 border-2 border-primary/20 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute bottom-32 left-10 w-32 h-32 border-2 border-accent/30 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-[30%]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50 tracking-widest uppercase">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-white/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
