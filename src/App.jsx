import { useState } from 'react'
import logoImage from './assets/LOGO.png'
import './App.css'
import PasswordProtection from './components/PasswordProtection'

const initialBlocks = [
  { 
    id: '001', 
    title: 'PERATURAN', 
    color: '#4285f4', 
    icon: '📋',
    description: 'Peraturan International dan Nasional terkait keselamatan kapal dan pelayaran',
    link: 'https://drive.google.com/drive/folders/1B05dw3_--0eyAa6NHOrsC2g8QwFjL9Fe?usp=sharing'
  },
  { 
    id: '002', 
    title: 'UJI PETIK KELAIKLAUTAN KAPAL', 
    color: '#34a853', 
    icon: '⚓',
    description: 'Dokumen dan data terkait uji petik kelaiklautan kapal',
    link: 'https://drive.google.com/drive/folders/1aW4LzR3XZGOo8l1rr3I3VDejE2dZD79_?usp=sharing'
  },
  { 
    id: '003', 
    title: 'DATA PEGAWAI', 
    color: '#ea4335', 
    icon: '👥',
    description: 'Data dan informasi pegawai Seksi Keselamatan Kapal',
    link: 'https://drive.google.com/drive/folders/1Igfwptg66zCNtsyJeRs4pQtei7gq7SWy?usp=sharing'
  },
  { 
    id: '004', 
    title: 'FORMULIR', 
    color: '#fbbc04', 
    icon: '📝',
    description: 'Formulir online untuk pengajuan dan pelaporan',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdYMQMK_7JHgdCUUuYZdDG8_sbXMptNvivDMaU0_Gh4_BV9Jw/viewform?usp=sharing&ouid=112593036533840644768'
  },
]

const iconOptions = [
  '📋', '⚓', '👥', '📝', '🚢', '🛡️', '🎓', '🔍', '📊', '📁', '📄', '🔗', 
  '📞', '📧', '🌐', '⚙️', '🔧', '📈', '📉', '✅', '❌', '⚠️', 'ℹ️', '💡'
]

const colorOptions = [
  '#4285f4', '#34a853', '#ea4335', '#fbbc04', '#9c27b0', '#ff5722', 
  '#2196f3', '#4caf50', '#ff9800', '#795548', '#607d8b', '#e91e63'
]

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [blocks, setBlocks] = useState(initialBlocks)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newCard, setNewCard] = useState({
    title: '',
    description: '',
    link: '',
    icon: '📋',
    color: '#4285f4'
  })

  const handlePasswordCorrect = () => {
    setIsAuthenticated(true)
  }

  const addNewCard = () => {
    if (newCard.title && newCard.description && newCard.link) {
      const newId = String(blocks.length + 1).padStart(3, '0')
      const cardToAdd = {
        id: newId,
        ...newCard
      }
      setBlocks([...blocks, cardToAdd])
      setNewCard({
        title: '',
        description: '',
        link: '',
        icon: '📋',
        color: '#4285f4'
      })
      setShowAddForm(false)
    }
  }

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />
  }

  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="header-top">
          <img src={logoImage} alt="Logo Kesyahbandaran" className="logo" />
          <div className="vertical-divider"></div>
          <span className="small-title">KANTOR KESYAHBANDARAN DAN OTORITAS PELABUHAN UTAMA MAKASSAR</span>
        </div>
        <div className="header-divider"></div>
        <h1 className="main-title">Seksi Keselamatan Kapal dan Pecengah Kapal</h1>
      </header>
      
      <div className="view-controls">
        <button 
          className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
          </svg>
          Grid
        </button>
        <button 
          className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          </svg>
          List
        </button>
      </div>
      
      <main className={`content-container ${viewMode}-view`}>
        {blocks.map((block, index) => (
          <a
            key={block.id}
            href={block.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`content-block ${viewMode}-block`}
            style={{ 
              '--block-color': block.color,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="block-id">{block.id}</div>
            <div className="block-content">
              <div className="block-title">{block.title}</div>
              <div className="block-description">{block.description}</div>
              <div className="block-logo">
                <img src={logoImage} alt="Logo" className="card-logo" />
              </div>
            </div>
            <div className="block-icon">{block.icon}</div>
            <div className="block-overlay">
              <span className="click-hint">Klik untuk membuka</span>
            </div>
          </a>
        ))}
      </main>
      
      <div className="bottom-controls">
        <button 
          className="add-card-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
          {showAddForm ? 'Tutup Form' : 'Tambah Card Baru'}
        </button>
      </div>
      
      {showAddForm && (
        <div className="add-card-form">
          <div className="form-header">
            <h3>Tambah Card Baru</h3>
            <button 
              className="close-btn"
              onClick={() => setShowAddForm(false)}
            >
              ✕
            </button>
          </div>
          
          <div className="form-content">
            <div className="form-group">
              <label>Judul Card:</label>
              <input
                type="text"
                value={newCard.title}
                onChange={(e) => setNewCard({...newCard, title: e.target.value})}
                placeholder="Masukkan judul card..."
              />
            </div>
            
            <div className="form-group">
              <label>Keterangan:</label>
              <textarea
                value={newCard.description}
                onChange={(e) => setNewCard({...newCard, description: e.target.value})}
                placeholder="Masukkan keterangan card..."
                rows="3"
              />
            </div>
            
            <div className="form-group">
              <label>Link Google Drive:</label>
              <input
                type="url"
                value={newCard.link}
                onChange={(e) => setNewCard({...newCard, link: e.target.value})}
                placeholder="https://drive.google.com/..."
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Icon:</label>
                <div className="icon-selector">
                  {iconOptions.map((icon, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`icon-option ${newCard.icon === icon ? 'selected' : ''}`}
                      onClick={() => setNewCard({...newCard, icon})}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label>Warna:</label>
                <div className="color-selector">
                  {colorOptions.map((color, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`color-option ${newCard.color === color ? 'selected' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setNewCard({...newCard, color})}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowAddForm(false)}
              >
                Batal
              </button>
              <button 
                className="submit-btn"
                onClick={addNewCard}
                disabled={!newCard.title || !newCard.description || !newCard.link}
              >
                Tambah Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
