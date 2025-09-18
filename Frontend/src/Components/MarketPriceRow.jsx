import React from "react";
import { FaArrowUp, FaArrowDown, FaLeaf, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const MarketPriceRow = ({ crop, price, priceChange }) => {
  const isPositive = priceChange >= 0;

  return (
    <motion.div
      className="flex justify-between items-center bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg p-5 max-w-md mx-auto my-3 cursor-pointer hover:shadow-2xl transition transform"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(34,197,94,0.35)",
      }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center space-x-5">
        <motion.div
          className="bg-green-200 text-green-700 p-4 rounded-full shadow-inner text-4xl font-extrabold uppercase flex items-center justify-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          aria-label={`${crop} icon`}
        >
          {crop[0]}
        </motion.div>
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-green-800 flex items-center gap-2">
            {crop}
            <FaLeaf className="text-green-600" />
          </h4>
          <span className="text-sm text-green-600">ताज़ा बाजार भाव</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-2xl font-extrabold text-gray-900">₹ {price}</span>
        <motion.div
          className={`flex items-center space-x-1 font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          {isPositive ? <FaArrowUp /> : <FaArrowDown />}
          <span>{Math.abs(priceChange)}%</span>
        </motion.div>
      </div>
      <motion.div
        className={`w-10 h-10 rounded-full flex items-center ml-2 justify-center shadow-lg ${
          isPositive ? "bg-green-400" : "bg-red-400"
        }`}
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        aria-hidden="true"
      >
        {isPositive ? (
          <FaChartLine className="text-white" />
        ) : (
          <FaChartLine className="text-white" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default MarketPriceRow;
