import React from "react"
import { FaBell } from "react-icons/fa"
import { motion } from "framer-motion"

const NotificationBadge = ({ count }) => {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <FaBell className="text-white text-3xl cursor-pointer" />
      {count > 0 && (
        <motion.span
          className="absolute -top-1 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold shadow-lg select-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {count}
        </motion.span>
      )}
    </motion.div>
  )
}

export default NotificationBadge
