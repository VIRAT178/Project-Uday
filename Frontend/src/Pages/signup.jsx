import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center p-6">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 mt-20 relative overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <FaSeedling className="text-white text-4xl" />
        </motion.div>

        <h2 className="text-3xl font-extrabold text-green-700 mb-8 text-center mt-12">
          नया खाता बनाएँ
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border-b border-green-300 py-2">
            <FaUser className="text-green-600 mr-3 text-xl" />
            <input
              type="text"
              name="name"
              placeholder="पूरा नाम"
              value={formData.name}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaEnvelope className="text-green-600 mr-3 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="ईमेल पता"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaLock className="text-green-600 mr-3 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="पासवर्ड"
              value={formData.password}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaLock className="text-green-600 mr-3 text-xl" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="पासवर्ड की पुष्टि करें"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-bold shadow-lg transition duration-300"
            whileTap={{ scale: 0.95 }}
          >
            साइन अप करें
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
