"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig, services } from "@/lib/config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor, completa los campos obligatorios.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.privacy) {
      setError("Debes aceptar la política de privacidad.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Crear mensaje para WhatsApp con los datos del formulario
      const whatsappMessage = encodeURIComponent(
        `-- CONTACTO WEB --\n\n` +
          `Nombre: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `${formData.phone ? `Teléfono: ${formData.phone}\n` : ""}` +
          `${formData.service ? `Servicio: ${formData.service}\n` : ""}` +
          `\nMensaje:\n${formData.message}\n\n` +
          `--\nEnviado desde el formulario web`
      );

      // Abrir WhatsApp con el mensaje
      window.open(
        `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`,
        "_blank"
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        privacy: false,
      });
    } catch {
      setError("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
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
          </div>

          {/* Grid: Formulario + Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <ScrollReveal delay={0.3}>
              <div className="bg-secondary rounded-3xl p-8">
                <h3 className="text-xl font-serif text-textPrimary mb-6">
                  Envíame un mensaje
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
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
                    </div>
                    <h4 className="text-lg font-medium text-textPrimary mb-2">
                      Mensaje preparado
                    </h4>
                    <p className="text-textSecondary mb-4">
                      Se ha abierto WhatsApp con tu mensaje. Si no se ha
                      abierto, puedes contactarme directamente.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-textPrimary mb-1.5"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-textPrimary mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-textPrimary mb-1.5"
                      >
                        Teléfono (opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="600 000 000"
                      />
                    </div>

                    {/* Servicio */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-textPrimary mb-1.5"
                      >
                        Servicio de interés (opcional)
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-textPrimary mb-1.5"
                      >
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Cuéntame brevemente cómo puedo ayudarte..."
                      />
                    </div>

                    {/* Privacidad */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-textSecondary"
                      >
                        Acepto la política de privacidad y el tratamiento de mis
                        datos para gestionar mi consulta. *
                      </label>
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        "Enviar mensaje"
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Información de contacto */}
            <div className="space-y-6">
              <ScrollReveal delay={0.4}>
                <div className="space-y-4">
                  {/* Teléfono */}
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-secondary hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        className="w-5 h-5 text-primary"
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
                    <div>
                      <p className="font-medium text-textPrimary">Teléfono</p>
                      <p className="text-primary font-medium">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-secondary hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        className="w-5 h-5 text-primary"
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
                    <div>
                      <p className="font-medium text-textPrimary">Email</p>
                      <p className="text-primary font-medium text-sm">
                        {siteConfig.email}
                      </p>
                    </div>
                  </a>

                  {/* Dirección */}
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-secondary hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        className="w-5 h-5 text-primary"
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
                    <div>
                      <p className="font-medium text-textPrimary">Dirección</p>
                      <p className="text-textSecondary text-sm">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.postalCode} {siteConfig.address.city}
                      </p>
                    </div>
                  </a>

                  {/* Horario */}
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-secondary">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-textPrimary">Horario</p>
                      <p className="text-textSecondary text-sm">
                        L-V: {siteConfig.schedule.weekdays}
                        <br />
                        Sáb: {siteConfig.schedule.saturday}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA WhatsApp */}
              <ScrollReveal delay={0.5}>
                <motion.a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contactar por WhatsApp
                </motion.a>
              </ScrollReveal>

              {/* Redes sociales */}
              <ScrollReveal delay={0.6}>
                <div className="text-center">
                  <p className="text-textSecondary mb-3 text-sm">
                    Sígueme en redes:
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Mapa */}
          <ScrollReveal delay={0.7}>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-soft-xl">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.7961088097656!2d${siteConfig.coordinates.lng}!3d${siteConfig.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(siteConfig.address.full)}!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses`}
                width="100%"
                height="350"
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
