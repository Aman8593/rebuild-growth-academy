import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card />
    <About />
    <Contact />
  </StrictMode>
)