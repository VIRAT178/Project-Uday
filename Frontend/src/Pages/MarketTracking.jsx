import React, { useState } from "react"
import { FaChartLine, FaArrowUp, FaArrowDown, FaSeedling, FaMapMarkerAlt } from "react-icons/fa"
import { Line } from "react-chartjs-2"
import { motion } from "framer-motion"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ModernPriceCard = ({ location, currentPrice, lastMonthPrice, nextMonthForecast }) => {
  const priceChange = currentPrice - lastMonthPrice
  const isUp = priceChange >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto mb-8"
    >
      <div className="flex items-center space-x-3 mb-4">
        <FaMapMarkerAlt className="text-green-600 text-2xl" />
        <h2 className="text-xl font-bold text-green-800">{location}</h2>
      </div>
      <div className="text-gray-700 space-y-2">
        <p className="text-lg">
          <FaSeedling className="inline text-green-600 mr-1" />
          वर्तमान प्राइस: <span className="font-semibold">₹{currentPrice}</span>
        </p>
        <p className="text-lg">
          <FaArrowDown className="inline text-red-600 mr-1" />
          पिछले महीने: <span className="font-semibold">₹{lastMonthPrice}</span>
        </p>
        <p className="text-lg">
          <FaArrowUp className="inline text-blue-600 mr-1" />
          अगले महीने का अनुमानित प्राइस:{" "}
          <span className="font-semibold">₹{nextMonthForecast}</span>
        </p>
        <p
          className={`text-lg font-semibold ${
            isUp ? "text-green-600" : "text-red-600"
          }`}
        >
          बदलाव: {isUp ? "+" : ""}
          {priceChange.toFixed(2)} ₹
        </p>
      </div>
    </motion.div>
  )
}

const MarketTracking = () => {
  const [crop, setCrop] = useState("")
  const [location, setLocation] = useState("")
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const examplePriceHistory = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: `धान (Rice) कीमत (₹/क्विंटल)`,
        data: [2200, 2190, 2250, 2300, 2350, 2400, 2420],
        fill: false,
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgb(34,197,94)",
        tension: 0.3,
      },
    ],
  }

  const currentPrice = 2420
  const lastMonthPrice = 2350
  const nextMonthForecast = 2450

  const handleSearch = (e) => {
    e.preventDefault()
    if (!crop || !location) {
      setError("कृपया फसल और स्थान दोनों दर्ज करें")
      return
    }
    setError(null)
    setLoading(true)

    setTimeout(() => {
      setChartData(examplePriceHistory)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-green-200 to-green-400 p-6">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 flex items-center justify-center gap-3">
          <FaChartLine /> बाजार भाव ट्रैकिंग
        </h1>

        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <input
            type="text"
            placeholder="फसल का नाम (जैसे धान)"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 sm:w-1/2"
            required
          />
          <input
            type="text"
            placeholder="स्थान (जैसे दिल्ली)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 sm:w-1/2"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold shadow-lg transition"
          >
            खोजें
          </button>
        </form>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {loading && (
          <p className="text-green-700 text-center font-semibold mb-4">लोड हो रहा है...</p>
        )}

        {chartData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "top" },
                    title: {
                      display: true,
                      text: `${crop} के लिए पिछले 7 महीनों के बाजार भाव (${location})`,
                      font: { size: 20 },
                    },
                  },
                }}
              />
            </div>

            <ModernPriceCard
              location={location}
              currentPrice={currentPrice}
              lastMonthPrice={lastMonthPrice}
              nextMonthForecast={nextMonthForecast}
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default MarketTracking
