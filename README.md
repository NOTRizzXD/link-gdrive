# Website Penghubung Link Gdrive

Website untuk menghubungkan berbagai link Google Drive dengan interface yang modern dan responsif.

## Fitur

- **Password Protection**: Website dilindungi dengan password saat pertama kali dibuka
- **Grid/List View**: Tampilan dapat diubah antara grid dan list
- **Responsive Design**: Tampilan yang optimal di desktop dan mobile
- **Add New Cards**: Fitur untuk menambah card baru dengan custom icon dan warna
- **Modern UI**: Interface yang modern dengan animasi dan efek visual

## Password Default

Password default untuk mengakses website: `admin123`

*Anda dapat mengubah password ini di file `src/components/PasswordProtection.jsx` pada baris yang berisi `const correctPassword = 'admin123'`*

## Cara Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses website
4. Masukkan password untuk mengakses konten

## Struktur Project

- `src/App.jsx` - Komponen utama aplikasi
- `src/components/PasswordProtection.jsx` - Komponen password protection
- `src/components/PasswordProtection.css` - Styling untuk password protection
- `src/App.css` - Styling utama aplikasi

## Teknologi yang Digunakan

- React 19
- Vite
- CSS3 dengan modern features (gradients, animations, backdrop-filter)
- Responsive design dengan CSS Grid dan Flexbox
