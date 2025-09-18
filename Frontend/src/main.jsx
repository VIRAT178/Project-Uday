import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'
import { LanguageProvider } from './Contexts/langContext'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
   <LanguageProvider>
    <App/>
   </LanguageProvider>
  </React.StrictMode>
)
