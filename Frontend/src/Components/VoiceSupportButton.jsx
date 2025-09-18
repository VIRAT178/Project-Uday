import React, { useState } from "react"
import { FaMicrophone } from "react-icons/fa"
import { motion } from "framer-motion"

const VoiceSupportButton = ({ onStart, onStop }) => {
  const [listening, setListening] = useState(false)

  const toggleListening = () => {
    if (listening) {
      if (onStop) onStop()
    } else {
      if (onStart) onStart()
    }
    setListening(!listening)
  }

  return (
    <motion.button
      onClick={toggleListening}
      className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg focus:outline-none ${
        listening ? "bg-orange-500 text-white" : "bg-green-600 text-white"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-pressed={listening}
      aria-label={listening ? "Stop voice input" : "Start voice input"}
      aria-live="polite"
    >
      <motion.div
        animate={listening ? { scale: [1, 1.3, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <FaMicrophone size={32} />
      </motion.div>
    </motion.button>
  )
}

export default VoiceSupportButton
