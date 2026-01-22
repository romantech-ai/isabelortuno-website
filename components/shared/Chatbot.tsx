"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { siteConfig } from "@/lib/config";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const WHATSAPP_NUMBER = siteConfig.whatsapp;
const STORAGE_KEY = siteConfig.chatbot.storageKey;
const ASSISTANT_NAME = siteConfig.chatbot.assistantName;

const quickReplies = siteConfig.chatbot.quickReplies;

const initialMessage: Message = {
  id: "1",
  role: "assistant",
  content: siteConfig.chatbot.welcomeMessage,
};

const extractConversationData = (messages: Message[]) => {
  const userContent = messages
    .filter(m => m.role === 'user' && m.content)
    .map(m => (m.content || '').toLowerCase())
    .join(' ');

  const motivos: Record<string, string> = {
    'ansiedad': 'ansiedad',
    'ansioso': 'ansiedad',
    'nervioso': 'ansiedad',
    'panico': 'ataques de pánico',
    'depresion': 'depresión',
    'deprimido': 'depresión',
    'triste': 'estado de ánimo bajo',
    'estres': 'estrés',
    'agotado': 'agotamiento/burnout',
    'burnout': 'burnout',
    'pareja': 'problemas de pareja',
    'relacion': 'problemas de pareja',
    'ruptura': 'ruptura sentimental',
    'separacion': 'separación',
    'hijo': 'problemas con hijo/a',
    'hija': 'problemas con hijo/a',
    'adolescente': 'adolescencia',
    'familia': 'problemas familiares',
    'dormir': 'problemas de sueño',
    'insomnio': 'insomnio',
  };

  let motivo = '';
  for (const [key, value] of Object.entries(motivos)) {
    if (userContent.includes(key)) {
      motivo = value;
      break;
    }
  }

  let tipoTerapia = '';
  if (userContent.includes('pareja') || userContent.includes('relacion')) {
    tipoTerapia = 'Terapia de pareja';
  } else if (userContent.includes('familia') || userContent.includes('hijo') || userContent.includes('hija')) {
    tipoTerapia = 'Terapia familiar';
  } else if (userContent.includes('adolescente')) {
    tipoTerapia = 'Terapia adolescentes';
  } else {
    tipoTerapia = 'Terapia individual';
  }

  return { motivo, tipoTerapia };
};

const generateWhatsAppMessage = (messages: Message[]): string => {
  const data = extractConversationData(messages);

  let mensaje = '-- SOLICITUD DE CITA --\n';
  mensaje += '(vía asistente web)\n\n';

  if (data.tipoTerapia) {
    mensaje += `TIPO: ${data.tipoTerapia}\n`;
  }

  if (data.motivo) {
    mensaje += `MOTIVO: ${data.motivo}\n`;
  }

  mensaje += '\nMe gustaría solicitar una cita.\n';
  mensaje += '\n--\nGracias.';

  return encodeURIComponent(mensaje);
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = useCallback(() => {
    const message = generateWhatsAppMessage(messages);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  }, [messages]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isOpen]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setShowQuickReplies(false);
        }
      } catch {
        // Invalid JSON
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleQuickReply = (label: string) => {
    setShowQuickReplies(false);
    sendMessage(label);
  };

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };

    const currentMessages = [...messages];
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const history = currentMessages
      .slice(1)
      .map(msg => ({ role: msg.role, content: msg.content }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...history, { role: 'user', content }]
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Disculpa, ha ocurrido un error. Por favor, contáctanos al 605 878 109 o por WhatsApp.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setShowQuickReplies(false);
    sendMessage(inputValue);
  };

  const clearChat = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([initialMessage]);
    setShowQuickReplies(true);
  };

  const shouldShowWhatsAppCTA = (content: string) => {
    const lowerContent = content.toLowerCase();
    return lowerContent.includes('whatsapp') ||
           lowerContent.includes('primera consulta') ||
           lowerContent.includes('pedir cita') ||
           lowerContent.includes('agendar') ||
           (lowerContent.includes('605') && lowerContent.includes('878'));
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Heart': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      'Users': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      'Calendar': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      'HelpCircle': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    };
    return icons[iconName] || null;
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            data-lenis-prevent
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-2rem)] sm:w-[350px] max-w-[400px] bg-white rounded-2xl shadow-2xl border border-primary/10 z-50 overflow-hidden flex flex-col font-sans"
            style={{ maxHeight: "min(600px, calc(100vh - 120px))", height: "min(500px, calc(100vh - 140px))" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg leading-tight">{ASSISTANT_NAME}</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Estamos aquí para ti
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <button
                    onClick={clearChat}
                    className="hover:bg-white/20 p-2 rounded-full transition-colors"
                    aria-label="Limpiar chat"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto overscroll-contain p-4 bg-secondary/30 space-y-4"
            >
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === "user" ? "bg-primary text-white" : "bg-primary-dark text-white"
                    }`}>
                      {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                    }`}>
                      <div className={`prose prose-sm max-w-none ${msg.role === "user" ? "prose-invert" : ""}`}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>

                  {msg.role === "assistant" && shouldShowWhatsAppCTA(msg.content) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-11 mt-2"
                    >
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-md"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Pedir cita por WhatsApp
                      </a>
                    </motion.div>
                  )}
                </div>
              ))}

              {showQuickReplies && messages.length === 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 ml-11"
                >
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={reply.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleQuickReply(reply.label)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-primary/20 rounded-full text-xs font-medium text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
                    >
                      {getIcon(reply.icon)}
                      {reply.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary-dark text-white flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Cuéntame cómo te sientes..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400">Powered by RomanTech AI</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center"
        aria-label="Abrir asistente"
      >
        <div className="relative">
          {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-light"></span>
            </span>
          )}
        </div>
      </motion.button>
    </>
  );
}

export default Chatbot;
