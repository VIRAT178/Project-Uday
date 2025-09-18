import React, { createContext, useContext, useState } from 'react'
const translations = {
  en: {
    projectName: "Project Uday",
    footerDescription: "Smart, timely advice and market info for farmers and livestock owners.",
    allRightsReserved: "All rights reserved.",
    navigation: "Navigation",
    home: "Home",
    diagnostics: "Diagnostics",
    marketPrice: "Market Price",
    voiceSupport: "Voice Support",
    about: "About Us",
    newsletterSignup: "Sign up for Newsletter:",
    emailPlaceholder: "Enter your email",
    submit: "Submit",
  },
  hi: {
    projectName: "प्रोजेक्ट उदय",
    footerDescription: "मवेशियों और किसानों के लिए स्मार्ट, समय पर सलाह एवं बाजार जानकारी।",
    allRightsReserved: "सभी अधिकार सुरक्षित।",
    navigation: "नेविगेशन",
    home: "होम",
    diagnostics: "निदान",
    marketPrice: "बाजार भाव",
    voiceSupport: "आवाज़ सहायता",
    about: "हमारे बारे में",
    newsletterSignup: "न्यूज़लेटर के लिए साइन अप करें:",
    emailPlaceholder: "आपका ईमेल",
    submit: "सबमिट",
  }
}



const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('hi')

  const toggleLanguage = () => setLang(lang === 'hi' ? 'en' : 'hi')

  const t = (key) => translations[lang][key] || key

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
