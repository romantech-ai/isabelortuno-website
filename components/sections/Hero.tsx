"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

// Componente de contador animado
function AnimatedCounter({
  end,
  suffix = "",
  duration = 2500,
  delay = 0,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now() + delay;
          const animate = () => {
            const now = Date.now();
            if (now < startTime) {
              requestAnimationFrame(animate);
              return;
            }
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing: easeOutExpo
            const eased = 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, delay, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring para transiciones suaves
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  // Transformaciones parallax
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.4], [0, -50]);

  // Variantes de animación para el título
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Background con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />

      {/* Imagen de fondo con parallax */}
      <div className="absolute inset-0">
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0 origin-center"
        >
          <Image
            src="/images/gabinete.png"
            alt="Gabinete de Psicología Isabel Ortuño"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Overlays con gradientes */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/85 to-accent/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary/40" />

        {/* Stars overlay */}
        <div className="stars-overlay" />

        {/* Noise texture */}
        <div className="noise-overlay mix-blend-soft-light" />
      </div>

      {/* Orbes decorativos flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-accent/15 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-[10%] w-80 h-80 rounded-full bg-primary-light/15 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl"
        />
      </div>

      {/* Contenido Principal */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 min-h-[100svh] flex items-center"
      >
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light" />
                </span>
                <span className="text-white/90 font-sans text-sm tracking-wide">
                  Psicóloga Clínica en {siteConfig.address.city}
                </span>
              </span>
            </motion.div>

            {/* Cita de Jung con animación staggered */}
            <motion.blockquote
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="relative mb-8"
            >
              <span className="absolute -top-10 -left-4 text-[100px] sm:text-[140px] font-serif text-white/10 leading-none select-none pointer-events-none">
                &ldquo;
              </span>
              <motion.p
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1]"
              >
                <motion.span variants={wordVariants} className="inline-block mr-3">
                  Lo
                </motion.span>
                <motion.span variants={wordVariants} className="inline-block mr-3">
                  que
                </motion.span>
                <motion.span variants={wordVariants} className="inline-block mr-3">
                  niegas
                </motion.span>
                <motion.span variants={wordVariants} className="inline-block mr-3">
                  te
                </motion.span>
                <motion.span variants={wordVariants} className="inline-block">
                  somete,
                </motion.span>
                <br className="hidden sm:block" />
                <motion.span
                  variants={wordVariants}
                  className="inline-block mr-3 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #A78BFA 0%, #FAF5FF 50%, #8B5CF6 100%)",
                  }}
                >
                  lo
                </motion.span>
                <motion.span
                  variants={wordVariants}
                  className="inline-block mr-3 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #A78BFA 0%, #FAF5FF 50%, #8B5CF6 100%)",
                  }}
                >
                  que
                </motion.span>
                <motion.span
                  variants={wordVariants}
                  className="inline-block mr-3 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #A78BFA 0%, #FAF5FF 50%, #8B5CF6 100%)",
                  }}
                >
                  aceptas
                </motion.span>
                <motion.span
                  variants={wordVariants}
                  className="inline-block mr-3 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #A78BFA 0%, #FAF5FF 50%, #8B5CF6 100%)",
                  }}
                >
                  te
                </motion.span>
                <motion.span
                  variants={wordVariants}
                  className="inline-block text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #A78BFA 0%, #FAF5FF 50%, #8B5CF6 100%)",
                  }}
                >
                  transforma
                </motion.span>
              </motion.p>
            </motion.blockquote>

            {/* Autor */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="text-lg font-elegant italic text-white/60 mb-12"
            >
              &mdash; {siteConfig.taglineAuthor}
            </motion.p>

            {/* Nombre y título */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="mb-10"
            >
              <h1 className="text-2xl sm:text-3xl font-serif text-white">
                {siteConfig.professional.name}
              </h1>
              <p className="mt-2 text-white/70 text-lg">
                {siteConfig.professional.title} · {siteConfig.professional.subtitle}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.7}
              className="flex flex-wrap justify-center gap-4 mb-14"
            >
              <motion.a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white text-primary px-8 py-4 rounded-full font-medium text-base shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Pide tu cita
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                Ver servicios
              </motion.a>
            </motion.div>

            {/* Stats con contadores animados */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.85}
              className="flex flex-wrap justify-center gap-x-10 gap-y-6"
            >
              {[
                { value: 15, suffix: "+", label: "Años de experiencia" },
                { value: 2000, suffix: "+", label: "Pacientes atendidos" },
                { value: 4.8, suffix: "/5", label: "Google Reviews", isDecimal: true },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl lg:text-4xl font-serif text-white mb-1">
                    {stat.isDecimal ? (
                      <span className="tabular-nums">4.8</span>
                    ) : (
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={2000}
                        delay={index * 200}
                      />
                    )}
                    {stat.isDecimal && (
                      <span className="text-accent">{stat.suffix}</span>
                    )}
                  </p>
                  <p className="text-white/60 font-sans text-sm tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mensaje de apoyo en crisis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <p className="text-white/40 text-xs font-sans text-center max-w-sm px-4">
          Si estás en crisis, llama al Teléfono de la Esperanza: 717 003 717
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-white/50 text-xs font-sans uppercase tracking-[0.2em]">
            Conóceme
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
}
