// Import hook useState dari React untuk mengelola state komponen
import { useState } from 'react'
// Import file CSS untuk styling komponen password protection
import './PasswordProtection.css'

// Komponen PasswordProtection yang menampilkan form input password untuk akses terbatas
// Props: onPasswordCorrect - fungsi callback yang dipanggil ketika password benar
const PasswordProtection = ({ onPasswordCorrect }) => {
  // State untuk menyimpan nilai input password dari user
  const [password, setPassword] = useState('')
  // State untuk menyimpan pesan error jika password salah
  const [error, setError] = useState('')
  // State untuk menampilkan loading state selama verifikasi password
  const [isLoading, setIsLoading] = useState(false)

  // Password default yang dapat diubah sesuai kebutuhan
  const correctPassword = 'admin123'

  // Fungsi untuk menangani submit form password
  const handleSubmit = (e) => {
    // Mencegah reload halaman saat form disubmit
    e.preventDefault()
    // Mengaktifkan state loading untuk memberikan feedback visual
    setIsLoading(true)
    // Menghapus pesan error sebelumnya
    setError('')

    // Simulasi loading selama 500ms untuk pengalaman user yang lebih baik
    setTimeout(() => {
      // Mengecek apakah password yang dimasukkan sama dengan password yang benar
      if (password === correctPassword) {
        // Jika benar, panggil fungsi callback untuk memberikan akses
        onPasswordCorrect()
      } else {
        // Jika salah, tampilkan pesan error dan reset input password
        setError('Password salah! Silakan coba lagi.')
        setPassword('')
      }
      // Menonaktifkan state loading setelah proses selesai
      setIsLoading(false)
    }, 500)
  }

  // Mengembalikan JSX untuk merender komponen password protection
  return (
    // Container overlay yang menutupi seluruh layar
    <div className="password-overlay">
      {/* Modal utama yang berisi form password */}
      <div className="password-modal">
        {/* Header modal dengan judul dan deskripsi */}
        <div className="password-header">
          <h2>🔐 Akses Terbatas</h2>
          <p>Masukkan password untuk mengakses website</p>
        </div>

        {/* Form untuk input password dengan event handler onSubmit */}
        <form onSubmit={handleSubmit} className="password-form">
          {/* Grup form untuk input field password */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            {/* Input field untuk password dengan controlled component */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password..."
              required
              disabled={isLoading}
            />
          </div>

          {/* Menampilkan pesan error jika ada (conditional rendering) */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* Tombol submit dengan kondisi disabled berdasarkan state loading dan input */}
          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading || !password.trim()}
          >
            {/* Menampilkan teks berbeda berdasarkan state loading */}
            {isLoading ? 'Memverifikasi...' : 'Masuk'}
          </button>
        </form>

        {/* Footer modal dengan informasi tambahan */}
        <div className="password-footer">
          <small>Kontak administrator jika lupa password</small>
        </div>
      </div>
    </div>
  )
}

export default PasswordProtection

