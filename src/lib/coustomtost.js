'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const CustomToast = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

        {/* FLOATING GLOW ORBS */}
        <motion.div
          className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />

        {/* TOAST CARD */}
        <motion.div
          initial={{ scale: 0.5, y: 80, rotateX: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          className="relative w-96 rounded-3xl p-6 text-center
                     bg-white/80 backdrop-blur-xl border border-white/30
                     shadow-[0_25px_80px_rgba(0,0,0,0.25)] overflow-hidden"
        >
          {/* SHIMMER LINE EFFECT */}
          <motion.div
            className="absolute top-0 left-[-50%] w-[200%] h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            animate={{ x: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* ICON */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="flex justify-center mb-3"
          >
            <CheckCircle2 className="w-16 h-16 text-blue-500 drop-shadow-lg" />
          </motion.div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-gray-800">
            Success
          </h2>

          {/* MESSAGE */}
          <p className="text-gray-600 mt-2 mb-5">
            {message}
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 to-blue-600
                       text-white px-6 py-2 rounded-xl shadow-lg"
          >
            OK  
          </motion.button>

          {/* PROGRESS BAR */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-blue-500"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 3, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};