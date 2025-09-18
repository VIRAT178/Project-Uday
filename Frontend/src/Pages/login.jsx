import React, { useState } from "react";
import { FaUser, FaLock, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPassword", formData.password);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-teal-300 mt-10 flex items-center justify-center p-6">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.55 }}
      >
        <motion.div
          className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-teal-500 rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        >
          <FaLeaf className="text-white text-4xl" />
        </motion.div>

        <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center mt-15">
          लॉगिन करें
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border-b border-teal-300 py-2">
            <FaUser className="text-teal-500 mr-3 text-xl" />
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

          <div className="flex items-center border-b border-teal-300 py-2">
            <FaLock className="text-teal-500 mr-3 text-xl" />
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

          <motion.button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-full text-lg font-bold shadow-lg transition duration-300"
            whileTap={{ scale: 0.95 }}
          >
            लॉगिन करें
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
