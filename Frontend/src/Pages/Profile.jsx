import React, { useState } from "react"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaSave,
  FaLock,
  FaImage,
} from "react-icons/fa"
import { motion } from "framer-motion"

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    password: "",
    confirmPassword: "",
    avatar: null,
  })

  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setProfile((prev) => ({ ...prev, avatar: files[0] }))
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess("प्रोफ़ाइल सफलतापूर्वक अपडेट हुई!")
  }

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-green-200 via-green-300 to-green-500 p-8 flex justify-center items-center">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          प्रोफ़ाइल अपडेट करें
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border-b border-green-300 py-2">
            <FaUser className="text-green-600 mr-3 text-xl" />
            <input
              type="text"
              name="fullName"
              placeholder="पूरा नाम"
              value={profile.fullName}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-none py-1 px-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaEnvelope className="text-green-600 mr-3 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="ईमेल पता"
              value={profile.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-none py-1 px-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaPhone className="text-green-600 mr-3 text-xl" />
            <input
              type="tel"
              name="phone"
              placeholder="फोन नंबर"
              value={profile.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-none py-1 px-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaBirthdayCake className="text-green-600 mr-3 text-xl" />
            <input
              type="date"
              name="dob"
              placeholder="जन्मतिथि"
              value={profile.dob}
              onChange={handleChange}
              className="w-full bg-transparent border-none py-1 px-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaMapMarkerAlt className="text-green-600 mr-3 text-xl" />
            <textarea
              name="address"
              placeholder="पता"
              value={profile.address}
              onChange={handleChange}
              rows={3}
              className="w-full bg-transparent border-none py-1 px-2 text-gray-700 focus:outline-none resize-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaLock className="text-green-600 mr-3 text-xl" />
            <input
              type="password"
              name="password"
              placeholder="नया पासवर्ड"
              value={profile.password}
              onChange={handleChange}
              className="w-full bg-transparent border-none py-1 px-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-green-300 py-2">
            <FaLock className="text-green-600 mr-3 text-xl" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="पासवर्ड की पुष्टि करें"
              value={profile.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent border-none py-1 px-2 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="flex items-center py-2 space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <FaImage className="text-green-600 text-xl" />
              <span className="text-gray-700">प्रोफ़ाइल फोटो अपलोड करें</span>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            {profile.avatar && (
              <span className="text-green-600 font-semibold">
                {profile.avatar.name}
              </span>
            )}
          </div>

          <motion.button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold shadow-lg transition duration-300"
            whileTap={{ scale: 0.95 }}
          >
            अपडेट करें
          </motion.button>

          {success && (
            <p className="mt-4 text-green-700 font-semibold text-center">
              {success}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  )
}

export default Profile
