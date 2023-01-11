import React from 'react'
import ReactDOM from 'react-dom/client'
import { PasajerosApp } from './PasajerosApp'
import { BrowserRouter } from "react-router-dom";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PasajerosApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)
