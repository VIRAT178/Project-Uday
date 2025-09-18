import React, { useState } from "react"
import {
  FaLeaf,
  FaUsers,
  FaGlobeAmericas,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { motion } from "framer-motion"

const About = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-green-200 via-green-300 to-green-500 p-8 flex flex-col items-center">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-5xl p-10 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-extrabold text-green-800 mb-8 text-center">
          परियोजना उदय के बारे में
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          परियोजना उदय किसानों और मवेशियों के लिए एक स्मार्ट प्लेटफ़ॉर्म है जो
          खेती को सरल, स्मार्ट और लाभकारी बनाने की दिशा में काम करता है। हम नवीनतम
          तकनीक और स्थानीय ज्ञान के साथ किसानों की सहायता करते हैं।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaLeaf className="text-green-600 text-5xl" />
            <p className="text-green-700 font-semibold text-xl">
              प्राकृतिक खेती को प्रोत्साहन
            </p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FaUsers className="text-green-600 text-5xl" />
            <p className="text-green-700 font-semibold text-xl">
              किसान समुदाय के लिए रोजगार सृजन
            </p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaGlobeAmericas className="text-green-600 text-5xl" />
            <p className="text-green-700 font-semibold text-xl">
              वैश्विक कृषि बाजार तक पहुंच
            </p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <FaHandshake className="text-green-600 text-5xl" />
            <p className="text-green-700 font-semibold text-xl">
              स्थायी और लाभकारी सहयोग
            </p>
          </motion.div>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Contact Us
          </h2>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-6"
              noValidate
            >
              <div className="flex items-center border-b border-green-300 py-2">
                <FaUsers className="text-green-600 mr-3 text-xl" />
                <input
                  type="text"
                  name="name"
                  placeholder="पूरा नाम"
                  value={contactForm.name}
                  onChange={handleChange}
                  required
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>

              <div className="flex items-center border-b border-green-300 py-2">
                <FaEnvelope className="text-green-600 mr-3 text-xl" />
                <input
                  type="email"
                  name="email"
                  placeholder="ईमेल पता"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-green-700 font-semibold mb-2" htmlFor="message">
                  संदेश
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="अपना संदेश लिखें"
                  value={contactForm.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="resize-none rounded border border-green-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-bold shadow-lg transition duration-300"
                whileTap={{ scale: 0.95 }}
              >
                सबमिट करें
              </motion.button>
            </form>
          ) : (
            <p className="text-center text-green-700 font-semibold text-lg">
              धन्यवाद! आपका संदेश प्राप्त हो गया है।
            </p>
          )}
        </section>
      </motion.div>
    </div>
  )
}

export default About
