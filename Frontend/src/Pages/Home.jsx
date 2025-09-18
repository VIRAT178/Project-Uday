import React from "react"
import CropAdviceCard from "../Components/CropAdviceCard"
import AlertItem from "../Components/AlertItem"
import MarketPriceRow from "../Components/MarketPriceRow"
import VoiceSupportButton from "../Components/VoiceSupportButton"
import { FaQuestionCircle } from "react-icons/fa"
import {
  GiCorn,
  GiSugarCane,
  GiWheat,
  GiSun,
  GiLeafSwirl,
  GiWaterDrop,
} from "react-icons/gi"
import { FaSeedling, FaExclamationTriangle, FaChartBar } from "react-icons/fa"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const sampleAlerts = [
  { message: "भारी बारिश की आशंका, सावधान रहें", date: "2025-09-17T09:30:00" },
  { message: "धान की कीट समस्या बढ़ रही है", date: "2025-09-16T16:45:00" },
  { message: "मच्छर जनित बीमारी सावधानी आवश्यक", date: "2025-09-15T10:20:00" },
  { message: "तीव्र उच्च तापमान से फसलों को नुकसान", date: "2025-09-14T11:15:00" },
]

const sampleMarketPrices = [
  { crop: "धान (Rice)", price: 2150, priceChange: 2.4 },
  { crop: "गेहूं (Wheat)", price: 2100, priceChange: -0.8 },
  { crop: "मकई (Corn)", price: 1950, priceChange: 1.2 },
  { crop: "गन्ना", price: 1200, priceChange: 3.1 },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-7xl mx-auto mt-28 p-6 space-y-10 relative">
      <section className="bg-green-700 rounded-2xl p-8 text-white shadow-lg flex flex-col items-center justify-center space-y-6">
        <motion.div
          className="text-3xl font-extrabold flex items-center space-x-4 mb-4"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaSeedling className="text-orange-400" />
          <span>प्रोजेक्ट उदय में आपका स्वागत है</span>
        </motion.div>
        <motion.div
          className="text-lg max-w-md text-center"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          किसानों और मवेशियों के लिए स्मार्ट सलाह और समय पर बाजार अपडेट्स।
        </motion.div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center gap-3">
          <FaSeedling className="text-green-600" /> आज की सिफारिशें
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CropAdviceCard
            cropName="धान"
            advice="सिंचाई सही समय पर करें।"
            icon={<GiWheat size={32} className="text-green-600" />}
            sticker={<GiWaterDrop size={28} className="text-blue-400" />}
          />
          <CropAdviceCard
            cropName="गेहूं"
            advice="खाद का सही उपयोग करें।"
            icon={<GiWheat size={32} className="text-green-600" />}
            sticker={<GiSun size={28} className="text-yellow-400" />}
          />
          <CropAdviceCard
            cropName="मकई"
            advice="बीज चयन सतर्कता से करें।"
            icon={<GiCorn size={32} className="text-green-700" />}
            sticker={<GiLeafSwirl size={28} className="text-green-700" />}
          />
          <CropAdviceCard
            cropName="मीठा मकई"
            advice="उत्तम किस्मों का चयन करें और बीज बोने में सावधानी बरतें।"
            icon={<GiCorn size={32} className="text-green-700" />}
            sticker={<GiSun size={28} className="text-orange-400" />}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-yellow-700 flex items-center gap-3">
          <FaExclamationTriangle /> ताज़ा अलर्ट्स
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleAlerts.slice(0, 4).map((alert, idx) => (
            <AlertItem key={idx} message={alert.message} date={alert.date} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-green-700 gap-1 flex items-center space-x-3">
          <FaChartBar /> बाजार भाव अपडेट
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1">
          {sampleMarketPrices.map((mp, idx) => (
            <MarketPriceRow
              key={idx}
              crop={mp.crop}
              price={mp.price}
              priceChange={mp.priceChange}
            />
          ))}
        </div>
      </section>

      <div>
        <div className="fixed bottom-6 left-6 z-50">
          <VoiceSupportButton />
        </div>
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => navigate("/help")}
            aria-label="Help"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center cursor-pointer transition"
          >
            <FaQuestionCircle size={28} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
