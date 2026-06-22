'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, AlertTriangle } from 'lucide-react';

export default function DeleteToast({ message, onCancel }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

        {/* TOAST CARD */}
        <motion.div
          initial={{ scale: 0.6, y: 50, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="relative w-96 rounded-3xl p-6 text-center
                     bg-white/80 backdrop-blur-xl border border-red-200
                     shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
        >
          {/* WARNING ICON */}
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-3"
          >
            <AlertTriangle className="w-16 h-16 text-red-500 drop-shadow-lg" />
          </motion.div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-red-600">
            Delete Warning
          </h2>

          {/* MESSAGE */}
          <p className="text-gray-600 mt-2 mb-5">
            {message || "Are you sure you want to delete this item?"}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 justify-center">
            
            {/* CANCEL */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCancel}
              className="px-5 py-2 rounded-xl bg-gray-200 text-gray-700"
            >
              Ok
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}