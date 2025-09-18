import React from "react"
import { GiWheat, GiCorn, GiSun, GiWaterDrop } from "react-icons/gi"
import { motion } from "framer-motion"

const CropAdviceCard = ({ cropName, advice, icon, sticker }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-green-100 via-green-200 to-green-500 rounded-2xl shadow-xl p-7 mt-1 mx-auto max-w-xs flex flex-col items-center justify-between border border-green-200 relative overflow-hidden"
      whileHover={{ scale: 1.06, boxShadow: "0 8px 24px rgba(34,197,94,0.25)" }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    
      <div className="bg-white p-4 rounded-full shadow-lg mt-2 mb-4">
        {icon || <GiWheat size={36} className="text-green-600" />}
      </div>
      
      <div className="text-green-800 font-extrabold text-xl mb-2">{cropName}</div>
     
      <div className="text-gray-700 text-base text-center mb-6">{advice}</div>
      <motion.div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        {sticker || <GiSun size={32} className="text-orange-400" />}
      </motion.div>
    </motion.div>
  )
}

export default CropAdviceCard
