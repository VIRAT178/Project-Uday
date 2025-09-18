import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaHome,
  FaStethoscope,
  FaChartLine,
  FaMicrophone,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../Contexts/langContext";

const navLinks = [
  { key: "home", icon: <FaHome />, route: "/" },
  { key: "diagnostics", icon: <FaStethoscope />, route: "/diagnostics" },
  { key: "marketPrice", icon: <FaChartLine />, route: "/market" },
  { key: "voiceSupport", icon: <FaMicrophone />, route: "/voice" },
  { key: "about", icon: <FaInfoCircle />, route: "/about" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white py-10 mt-12 select-none rounded-t-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center min-h-[18rem]">
          <div>
            <h2 className="text-3xl font-extrabold mb-3">{t("projectName")}</h2>
            <p className="text-gray-100">{t("footerDescription")}</p>
          </div>
          <p className="text-gray-300 text-xs mt-8">
            &copy; 2025 {t("projectName")}. {t("allRightsReserved")}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-xs bg-green-800/80 rounded-xl shadow-lg p-6 flex flex-col space-y-3">
            <h3 className="font-bold text-lg text-center mb-2">
              {t("navigation")}
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ key, icon, route }, i) => (
                <li key={i}>
                  <Link
                    to={route}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-900/60 transition font-semibold"
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="text-base">{t(key)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-end">
          <div className="bg-green-800/80 rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center space-y-5">
            <div className="flex space-x-4 text-2xl">
              {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white/20 p-2 rounded-full text-white hover:text-orange-300 hover:bg-orange-500/70 transition shadow-lg"
                    aria-label={`Social media link ${i + 1}`}
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>

            <form className="w-full flex flex-col items-center gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-base block text-center"
              >
                {t("newsletterSignup")}
              </label>
              <div className="flex w-full">
                <input
                  type="email"
                  id="email"
                  placeholder={t("emailPlaceholder")}
                  className="w-full rounded-l-md p-2  border-2 text-green-900 font-medium outline-none"
                />
                <button
                  type="submit"
                  className="bg-orange-500 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-orange-600 transition"
                >
                  {t("submit")}
                </button>
              </div>
            </form>
          </div>

          <div className="flex space-x-3 mt-6">
            <div className="w-10 h-10 bg-green-500 rounded-full animate-bounce flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3s4 7 4 11a4 4 0 01-8 0c0-4 4-11 4-11z"
                />
              </svg>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full animate-spin flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="5" stroke="orange" strokeWidth="2" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
