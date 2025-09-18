import React from "react"
import { MdOutlineReportProblem } from "react-icons/md"
import { motion } from "framer-motion"

const AlertItem = ({ message, date }) => {
  return (
    <motion.div
      className="relative flex items-start space-x-4 p-5 bg-red-50 border border-red-400 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex-shrink-0 rounded-full bg-red-500 text-white p-3 shadow-lg"
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-label="Alert icon"
      >
        <MdOutlineReportProblem size={28} />
      </motion.div>

      <div className="flex flex-col">
        <p className="font-semibold text-red-700 text-lg">{message}</p>
        {date && (
          <span className="text-xs text-red-400 mt-1 select-none">
            {new Date(date).toLocaleString("hi-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        )}
      </div>

      <motion.div
        className="absolute right-3 bottom-3 w-12 h-12 rounded-full border border-red-200 bg-red-100 opacity-30"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        aria-hidden="true"
      />
    </motion.div>
  )
}

export default AlertItem
