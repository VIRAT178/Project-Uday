import React, { useState } from "react"
import { FaMicrophoneAlt, FaStopCircle } from "react-icons/fa"
import { LuAudioWaveform } from "react-icons/lu"
import { motion } from "framer-motion"

const VoiceSupport = () => {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")

  const startListening = () => {
    setListening(true)
    setTranscript("")
  }

  const stopListening = () => {
    setListening(false)
    setTranscript("यहाँ पर आपकी बोली गयी बात दिखाई देगी।")
  }

  const toggleListening = () => {
    if (listening) {
      stopListening()
    } else {
      startListening()
    }
  }

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-green-200 via-green-300 to-green-500 p-6 flex flex-col items-center justify-center">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full flex flex-col items-center space-y-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="rounded-full bg-gradient-to-tr from-green-600 to-green-400 p-6 shadow-lg cursor-pointer"
          onClick={toggleListening}
          whileTap={{ scale: 0.9 }}
          aria-label={listening ? "Stop Listening" : "Start Listening"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleListening()}
        >
          {listening ? (
            <FaStopCircle className="text-white text-6xl" />
          ) : (
            <FaMicrophoneAlt className="text-white text-6xl" />
          )}
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-lg p-6 w-full h-40 overflow-y-auto text-gray-800 font-medium text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {transcript || "यहाँ आपकी आवाज़ का ट्रांसक्रिप्ट दिखेगा..."}
        </motion.div>

        <div className="flex items-center space-x-3 text-green-700">
          <LuAudioWaveform className="text-3xl animate-pulse" />
          <span className="font-semibold text-xl">आवाज सहायता सक्रिय है</span>
        </div>
      </motion.div>
    </div>
  )
}

export default VoiceSupport
