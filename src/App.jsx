// Import hook useState dari React untuk mengelola state komponen
import { useState } from 'react'
// Import gambar logo dari folder assets
import logoImage from './assets/LOGO.png'
// Import file CSS untuk styling komponen App
import './App.css'
// Import komponen PasswordProtection untuk proteksi akses
import PasswordProtection from './components/PasswordProtection'

// Data awal untuk blok-blok konten yang akan ditampilkan dalam aplikasi
// Setiap blok berisi informasi tentang kategori dokumen atau layanan
const initialBlocks = [
  {
    id: '1', // ID unik untuk blok pertama
    title: 'PERATURAN', // Judul kategori
    color: '#4285f4', // Warna tema untuk blok
    icon: '📋', // Emoji ikon untuk visualisasi
    description: 'Peraturan International dan Nasional terkait keselamatan kapal dan pelayaran', // Deskripsi singkat
    link: 'https://drive.google.com/drive/folders/1B05dw3_--0eyAa6NHOrsC2g8QwFjL9Fe?usp=sharing' // Link Google Drive
  },
  {
    id: '2', // ID unik untuk blok kedua
    title: 'UJI PETIK KELAIKLAUTAN KAPAL', // Judul kategori uji petik
    color: '#34a853', // Warna hijau untuk tema
    icon: '⚓', // Ikon jangkar
    description: 'Dokumen dan data terkait uji petik kelaiklautan kapal', // Deskripsi dokumen uji petik
    link: 'https://drive.google.com/drive/folders/1aW4LzR3XZGOo8l1rr3I3VDejE2dZD79_?usp=sharing' // Link folder Google Drive
  },
  {
    id: '3', // ID unik untuk blok ketiga
    title: 'DATA PEGAWAI', // Judul kategori data pegawai
    color: '#ea4335', // Warna merah untuk tema
    icon: '👥', // Ikon orang banyak
    description: 'Data dan informasi pegawai Seksi Keselamatan Kapal', // Deskripsi data pegawai
    link: 'https://drive.google.com/drive/folders/1Igfwptg66zCNtsyJeRs4pQtei7gq7SWy?usp=sharing' // Link folder data pegawai
  },
  {
    id: 't4', // ID unik untuk blok keempat
    title: 'FORMULIR', // Judul kategori formulir
    color: '#fbbc04', // Warna kuning untuk tema
    icon: '📝', // Ikon formulir
    description: 'Formulir online untuk pengajuan dan pelaporan', // Deskripsi formulir online
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdYMQMK_7JHgdCUUuYZdDG8_sbXMptNvivDMaU0_Gh4_BV9Jw/viewform?usp=sharing&ouid=112593036533840644768' // Link Google Forms
  },
]


// Komponen utama App yang menampilkan website penghubung link Google Drive
function App() {
  // State untuk menentukan apakah user sudah terautentikasi (sudah memasukkan password yang benar)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // State untuk mengontrol mode tampilan: 'grid' atau 'list'
  const [viewMode, setViewMode] = useState('grid')
  // State untuk menyimpan array blok-blok konten (saat ini menggunakan data statis)
  // eslint-disable-next-line no-unused-vars
  const [blocks, setBlocks] = useState(initialBlocks) // setBlocks belum digunakan karena data bersifat statis

  // Fungsi yang dipanggil ketika password yang dimasukkan benar
  const handlePasswordCorrect = () => {
    setIsAuthenticated(true) // Mengubah state autentikasi menjadi true
  }

  // Menampilkan komponen password protection jika user belum terautentikasi
  if (!isAuthenticated) {
    return <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />
  }

  // Mengembalikan JSX untuk merender komponen utama aplikasi
  return (
    // Container utama aplikasi dengan wrapper
    <div className="app-wrapper">
      {/* Header aplikasi dengan informasi instansi */}
      <header className="header">
        {/* Bagian atas header dengan logo dan nama instansi */}
        <div className="header-top">
          {/* Gambar logo Kesyahbandaran */}
          <img src={logoImage} alt="Logo Kesyahbandaran" className="logo" />
          {/* Garis pemisah vertikal */}
          <div className="vertical-divider"></div>
          {/* Nama lengkap kantor */}
          <span className="small-title">KANTOR KESYAHBANDARAN DAN OTORITAS PELABUHAN UTAMA MAKASSAR</span>
        </div>
        {/* Garis pemisah horizontal */}
        <div className="header-divider"></div>
        {/* Judul utama seksi */}
        <h1 className="main-title">Seksi Keselamatan Kapal dan Pecegah Kapal</h1>
      </header>
      
      {/* Kontrol untuk mengubah mode tampilan antara grid dan list */}
      <div className="view-controls">
        {/* Tombol untuk mode tampilan grid */}
        <button
          className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} // Menambahkan class 'active' jika mode grid aktif
          onClick={() => setViewMode('grid')} // Mengubah viewMode menjadi 'grid' saat diklik
        >
          {/* SVG ikon grid */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
          </svg>
          Grid {/* Label tombol */}
        </button>
        {/* Tombol untuk mode tampilan list */}
        <button
          className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} // Menambahkan class 'active' jika mode list aktif
          onClick={() => setViewMode('list')} // Mengubah viewMode menjadi 'list' saat diklik
        >
          {/* SVG ikon list */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          </svg>
          List {/* Label tombol */}
        </button>
      </div>
      
      {/* Container utama untuk konten blok-blok dengan class dinamis berdasarkan viewMode */}
      <main className={`content-container ${viewMode}-view`}>
        {/* Mapping array blocks untuk merender setiap blok konten */}
        {blocks.map((block, index) => (
          // Link anchor yang membuka Google Drive di tab baru
          <a
            key={block.id} // Key unik untuk setiap elemen dalam list React
            href={block.link} // URL tujuan (Google Drive folder atau Google Forms)
            target="_blank" // Membuka di tab baru
            rel="noopener noreferrer" // Keamanan untuk link eksternal
            className={`content-block ${viewMode}-block`} // Class CSS dengan mode tampilan
            style={{
              '--block-color': block.color, // CSS custom property untuk warna tema
              animationDelay: `${index * 0.1}s` // Delay animasi untuk efek bertahap
            }}
          >
            {/* ID blok yang ditampilkan di pojok */}
            <div className="block-id">{block.id}</div>
            {/* Konten utama blok */}
            <div className="block-content">
              {/* Judul kategori blok */}
              <div className="block-title">{block.title}</div>
              {/* Deskripsi singkat tentang isi blok */}
              <div className="block-description">{block.description}</div>
              {/* Logo kecil di dalam blok */}
              <div className="block-logo">
                <img src={logoImage} alt="Logo" className="card-logo" />
              </div>
            </div>
            {/* Ikon emoji untuk visualisasi kategori */}
            <div className="block-icon">{block.icon}</div>
            {/* Overlay dengan petunjuk klik */}
            <div className="block-overlay">
              <span className="click-hint">Klik untuk membuka</span>
            </div>
          </a>
        ))}
      </main>
      
    </div>
  )
}

export default App
