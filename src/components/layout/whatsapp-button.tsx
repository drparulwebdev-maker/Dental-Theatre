"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Background Pulse Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
      />
      
      <Link
        href={siteConfig.links.whatsapp}
        target="_blank"
        className="flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
        <span className="sr-only">Chat on WhatsApp</span>
        
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 size-3.5 bg-red-500 border-2 border-white rounded-full" />

        {/* Tooltip/Label */}
        <span className="absolute right-full mr-4 bg-white text-foreground text-sm font-semibold py-2 px-4 rounded-xl shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-border/50 backdrop-blur-sm">
          Chat with us
        </span>
      </Link>
    </motion.div>
  );
}
