"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/config";

// Eventos de tracking predefinidos
export const trackingEvents = {
  whatsappClicked: (location: string) => {
    trackEvent("whatsapp_clicked", { location });
  },
  chatbotOpened: () => {
    trackEvent("chatbot_opened", {});
  },
  chatbotMessageSent: (messageType: string) => {
    trackEvent("chatbot_message_sent", { message_type: messageType });
  },
  contactFormSubmitted: () => {
    trackEvent("contact_form_submitted", {});
  },
  serviceViewed: (serviceName: string) => {
    trackEvent("service_viewed", { service_name: serviceName });
  },
  ctaClicked: (ctaName: string, location: string) => {
    trackEvent("cta_clicked", { cta_name: ctaName, location });
  },
  pageScrolled: (percentage: number) => {
    trackEvent("page_scrolled", { scroll_percentage: percentage });
  },
};

// Función genérica para enviar eventos a GA4
export function trackEvent(
  eventName: string,
  eventParams: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export function GoogleAnalytics() {
  const gaId = siteConfig.analytics.gaId;

  // Si no hay ID de GA, no renderizar nada
  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
