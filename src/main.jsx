import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* Override slick-dots styles */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <style>
      {`
        .slick-dots li button:before {
          color: white;
        }

        .slick-dots li.slick-active button:before {
          color: white;
        }
      `}
    </style>
    <App />
  </StrictMode>,
)
