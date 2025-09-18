import React, { useState, useEffect, useRef } from "react"
import {
  FaRobot,
  FaUserCircle,
  FaPaperPlane,
  FaImage,
  FaRegFileImage,
} from "react-icons/fa"
import { motion } from "framer-motion"

const Help = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?" },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [image, setImage] = useState(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Simulated bot reply
  const botReply = (userMsg) => {
    setIsTyping(true)
    setTimeout(() => {
      let reply = "क्षमा करें, मैं आपकी सहायता कर नहीं पाया। कृपया पुनः प्रयास करें।"
      if (userMsg.toLowerCase().includes("mosam")) {
        reply = "आप मौसम पूर्वानुमान शीघ्र ही प्राप्त कर सकेंगे।"
      } else if (userMsg.toLowerCase().includes("kit")) {
        reply = "कीट नियंत्रण के लिए जैविक दवाओं का सुझाव।"
      }
      setMessages((msgs) => [
        ...msgs,
        { id: msgs.length + 1, sender: "bot", text: reply },
      ])
      setIsTyping(false)
    }, 1400)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim() && !image) return

    if (input.trim()) {
      setMessages((msgs) => [
        ...msgs,
        { id: msgs.length + 1, sender: "user", text: input.trim() },
      ])
      botReply(input.trim())
      setInput("")
    }

    if (image) {
      const imageMsg = {
        id: messages.length + 2,
        sender: "user",
        image: URL.createObjectURL(image),
        alt: image.name,
      }
      setMessages((msgs) => [...msgs, imageMsg])
      setImage(null)
      botReply("Image sent")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-500 flex flex-col items-center">
      <div className="w-full max-w-md mt-24 mb-10 rounded-3xl shadow-2xl bg-white flex flex-col h-[80vh]">
        <header className="bg-green-600 text-white font-bold text-xl p-4 rounded-t-3xl flex items-center gap-3">
          <FaRobot /> सहायता चैटबॉट
        </header>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map(({ id, sender, text, image: imgSrc, alt }) => (
            <motion.div
              key={id}
              className={`flex ${sender === "bot" ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`max-w-xs rounded-lg p-4 shadow break-words ${
                  sender === "bot"
                    ? "bg-green-100 text-green-900 rounded-bl-none"
                    : "bg-green-600 text-white rounded-br-none"
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {sender === "bot" ? (
                    <FaRobot className="text-green-700" />
                  ) : (
                    <FaUserCircle />
                  )}
                  <span className="text-sm font-semibold">
                    {sender === "bot" ? "सहायक" : "आप"}
                  </span>
                </div>
                {text && <p className="whitespace-pre-wrap">{text}</p>}
                {imgSrc && (
                  <img
                    className="max-w-full rounded-md mt-1"
                    src={imgSrc}
                    alt={alt || "User uploaded"}
                  />
                )}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <motion.div
                className="bg-green-100 px-4 py-2 rounded-lg shadow rounded-bl-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <p className="text-green-900 italic">टाइप कर रहा है...</p>
              </motion.div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex gap-2 p-4 border-t border-green-300 items-center"
        >
          <label htmlFor="imageUpload" className="cursor-pointer text-green-700">
            <FaRegFileImage size={28} title="Image Upload" />
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && setImage(e.target.files[0])}
            />
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="अपना संदेश टाइप करें..."
            className="flex-grow rounded-full border border-green-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white"
            aria-label="Send message"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Help
