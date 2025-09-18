import React, { useState } from "react"
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi"
import { FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom" 
import projectUdayLogo from "../assets/favi1.png"
import { useLanguage } from "../Contexts/langContext"
import NotificationBadge from "../Components/NotificationBadge"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { lang, toggleLanguage, t } = useLanguage()
  const isLoggedIn = true
  const notificationCount = 3 // Example count

  const navigate = useNavigate() 

  const toggleNav = () => setNavOpen(!navOpen)
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen)

  const handleLogout = () => {
    localStorage.clear()
    setUserMenuOpen(false)
    navigate("/login")
  }

  return (
    <header className="fixed top-0 w-full bg-green-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-white p-1 rounded-3xl">
            <img
              src={projectUdayLogo}
              alt="Project Uday Logo"
              className="h-10 w-10 rounded-2xl"
            />
          </div>
          <span className="text-white font-extrabold text-xl md:text-2xl select-none">
            {t("projectName")}
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 font-semibold text-white">
          {[t("home"), t("diagnostics"), t("marketPrice"), t("voiceSupport"), t("about")].map(
            (item, idx) => {
              const routes = ["/", "/diagnostics", "/market", "/voice", "/about"]
              return (
                <Link
                  key={idx}
                  to={routes[idx]}
                  className="hover:text-orange-400 transition"
                >
                  {item}
                </Link>
              )
            }
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-white hover:text-orange-400 font-semibold px-3 py-1 border border-white rounded-md focus:outline-none"
            aria-label="Toggle language"
          >
            {lang === "hi" ? "English" : "हिन्दी"}
          </button>

          <NotificationBadge count={notificationCount} />

          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="text-white text-3xl hover:text-orange-400 focus:outline-none"
              aria-label="User menu"
            >
              <HiUserCircle />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 text-gray-700 font-medium">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 hover:bg-green-100"
                    >
                      <FaUser className="mr-2" /> {t("profile")}
                    </Link>
                    <button
                      className="flex items-center px-4 py-2 hover:bg-green-100 w-full"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="mr-2" /> {t("logout")}
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      {t("login")}
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      {t("signup")}
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          <button
            className="md:hidden text-3xl text-white hover:text-orange-400 focus:outline-none"
            onClick={toggleNav}
            aria-label="Toggle menu"
          >
            {navOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {navOpen && (
        <nav className="md:hidden bg-green-600 px-5 py-4 space-y-3 font-semibold text-white">
          {[t("home"), t("diagnostics"), t("marketPrice"), t("voiceSupport"), t("about")].map(
            (item, idx) => {
              const routes = ["/", "/diagnostics", "/market", "/voice", "/about"]
              return (
                <Link
                  key={idx}
                  to={routes[idx]}
                  className="block hover:text-orange-300 transition"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </Link>
              )
            }
          )}
        </nav>
      )}
    </header>
  )
}

export default Header
