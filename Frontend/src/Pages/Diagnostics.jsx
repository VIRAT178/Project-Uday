import React, { useState } from "react"
import {
  FaStethoscope,
  FaHeartbeat,
  FaThermometerHalf,
  FaLeaf,
  FaBug,
  FaCloudSunRain,
  FaTemperatureHigh,
  FaTint,
  FaWind,
} from "react-icons/fa"
import { GiChemicalDrop } from "react-icons/gi"
import { motion, AnimatePresence } from "framer-motion"

const diagnosticsItems = [
  {
    icon: <FaStethoscope className="text-blue-500" />,
    title: "स्वास्थ्य जाँच",
    description: "फसलों और मिट्टी की नियमित जांच करें।",
    details: (
      <>
        <p>
          फसलों की स्वस्थ स्थिति बनाए रखने के लिए साप्ताहिक जांच आवश्यक है।
          मिट्टी की उर्वरता और नमी स्तर जांचें। उचित पोषण एवं जल प्रबंधन करें।
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>
            <FaLeaf className="inline text-green-600 mr-2" />
            मिट्टी की pH मान जांचें
          </li>
          <li>
            <FaTint className="inline text-blue-500 mr-2" />
            नियमित जल स्रोत का प्रबंधन
          </li>
          <li>
            <FaLeaf className="inline text-green-600 mr-2" />
            सही उर्वरकों का चयन
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaHeartbeat className="text-red-500" />,
    title: "रोग एनालिसिस",
    description: "रोग और कीटों से बचाव के लिए समाधान खोजें।",
    details: (
      <>
        <p>
          रोगों की पहचान के लिए सफाई और रोग प्रतिरोधी फसलों का चयन महत्वपूर्ण
          है। कीट नियंत्रण के लिए जैविक और रासायनिक उपाय अपनाएं।
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>
            <FaBug className="inline text-red-600 mr-2" />
            जैविक नियंत्रण के विकल्प
          </li>
          <li>
            <GiChemicalDrop className="inline text-yellow-600 mr-2" />
            रासायनिक कीटनाशकों का सावधानी से उपयोग
          </li>
          <li>
            <FaHeartbeat className="inline text-red-600 mr-2" />
            फसलों का रोग प्रतिरोधक चयन
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <FaThermometerHalf className="text-yellow-500" />,
    title: "मौसम पूर्वानुमान",
    description: "मौसम की जानकारी लेकर खेती योजनाएं बनाएं।",
    details: null, // weather handled dynamically below
  },
]

const Diagnostics = () => {
  const [selected, setSelected] = useState(null)
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  const apiKey = "003de6422a0e75b635949c88e2002e09"

  const toggleSelect = (index) => {
    setSelected((prev) => (prev === index ? null : index))
    if (index !== 2) {
      setWeatherData(null)
      setError(null)
      setCity("")
    }
  }

  const fetchWeather = async (e) => {
    e.preventDefault()
    if (!city) return

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hi`
      )
      if (!response.ok) throw new Error("शहर नहीं मिला")
      const data = await response.json()
      setWeatherData({
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      })
      setError(null)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-green-100 via-green-200 to-teal-300 p-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-extrabold text-green-700 mb-8 text-center">
          डायग्नोस्टिक्स
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diagnosticsItems.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition ${
                selected === idx ? "ring-4 ring-green-400" : ""
              }`}
              onClick={() => toggleSelect(idx)}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-6xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
                <p className="text-center text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="expandedContent"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 p-8 bg-white rounded-3xl shadow-lg text-green-900 max-w-5xl mx-auto"
            >
              {selected !== 2 && diagnosticsItems[selected].details}
              {selected === 2 && (
                <form onSubmit={fetchWeather} className="space-y-6 max-w-md mx-auto">
                  <div className="flex items-center space-x-2">
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      placeholder="शहर का नाम दर्ज करें"
                      className="flex-grow border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2 transition"
                    >
                      खोजें
                    </button>
                  </div>
                  {error && (
                    <p className="text-center text-red-600 font-semibold mt-2">{error}</p>
                  )}
                  {weatherData && (
                    <div className="text-center space-y-2 mt-4">
                      <img
                        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                        alt={weatherData.description}
                        className="mx-auto"
                      />
                      <h4 className="text-3xl font-bold">{weatherData.temperature}°C</h4>
                      <p className="capitalize">{weatherData.description}</p>
                      <div className="flex justify-center space-x-6 mt-3 text-gray-800 font-semibold">
                        <div className="flex items-center space-x-1">
                          <FaTemperatureHigh className="text-red-500" />{" "}
                          <span>Feels: {weatherData.feelsLike}°C</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaTint className="text-blue-500" />{" "}
                          <span>Humidity: {weatherData.humidity}%</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaWind className="text-green-600" />{" "}
                          <span>Wind: {weatherData.windSpeed} m/s</span>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Diagnostics
