// Import komponen StrictMode dari React untuk mendeteksi masalah potensial dalam aplikasi
import { StrictMode } from 'react'
// Import fungsi createRoot dari react-dom/client untuk membuat root React baru
import { createRoot } from 'react-dom/client'
// Import file CSS global untuk styling dasar aplikasi
import './index.css'
// Import komponen utama App dari file App.jsx
import App from './App.jsx'

// Membuat root React dan merender aplikasi ke dalam elemen dengan id 'root' di HTML
createRoot(document.getElementById('root')).render(
  // StrictMode membantu mendeteksi masalah dalam aplikasi selama development
  <StrictMode>
    {/* Merender komponen utama App sebagai root komponen aplikasi */}
    <App />
  </StrictMode>,
)
