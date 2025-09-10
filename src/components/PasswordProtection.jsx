import { useState } from 'react'
import './PasswordProtection.css'

const PasswordProtection = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Default password - you can change this
  const correctPassword = 'admin123'

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate loading for better UX
    setTimeout(() => {
      if (password === correctPassword) {
        onPasswordCorrect()
      } else {
        setError('Password salah! Silakan coba lagi.')
        setPassword('')
      }
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="password-overlay">
      <div className="password-modal">
        <div className="password-header">
          <h2>🔐 Akses Terbatas</h2>
          <p>Masukkan password untuk mengakses website</p>
        </div>
        
        <form onSubmit={handleSubmit} className="password-form">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
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
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading || !password.trim()}
          >
            {isLoading ? 'Memverifikasi...' : 'Masuk'}
          </button>
        </form>
        
        <div className="password-footer">
          <small>Kontak administrator jika lupa password</small>
        </div>
      </div>
    </div>
  )
}

export default PasswordProtection

