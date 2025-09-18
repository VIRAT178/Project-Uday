import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

import Home from './Pages/Home.jsx'
import Diagnostics from './Pages/Diagnostics.jsx'
import MarketTracking from './Pages/MarketTracking.jsx'
import VoiceSupport from './Pages/VoiceSupport.jsx'
import Profile from './Pages/Profile.jsx'
import About from './Pages/About.jsx'
import Help from './Pages/Help.jsx'
import Login from './Pages/login.jsx'
import Signup from './Pages/signup.jsx'
import '../src/index.css'

const PrivateRoute = ({ children }) => {
  const isAuth = !!localStorage.getItem("userEmail")
  return isAuth ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route 
              path="/" 
              element={<PrivateRoute><Home /></PrivateRoute>} 
            />
            <Route 
              path="/diagnostics" 
              element={<PrivateRoute><Diagnostics /></PrivateRoute>} 
            />
            <Route 
              path="/market" 
              element={<PrivateRoute><MarketTracking /></PrivateRoute>} 
            />
            <Route 
              path="/voice" 
              element={<PrivateRoute><VoiceSupport /></PrivateRoute>} 
            />
            <Route 
              path="/profile" 
              element={<PrivateRoute><Profile /></PrivateRoute>} 
            />
            <Route 
              path="/about" 
              element={<PrivateRoute><About /></PrivateRoute>} 
            />
            <Route 
              path="/help" 
              element={<PrivateRoute><Help /></PrivateRoute>} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
