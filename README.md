# 🛡️ Admin Panel

A modern, full-stack **Admin Panel** built with React, Redux Toolkit, and TypeScript. Manage users and products with a clean UI and seamless API integration.

🔗 **Live Demo:** [admin-panelpa01.netlify.app](https://admin-panelpa01.netlify.app)

---

## 📸 Preview

<!-- Buraya ekran görüntüsü ekle: resmi GitHub'a sürükle bırak, linki buraya yapıştır -->
![Admin Panel Preview](BURAYA_RESIM_LINKINI_YAPISTIR)

---

## ✨<img width="1918" height="1037" alt="Screenshot 2026-03-31 184541" src="https://github.com/user-attachments/assets/0a32d22c-47ee-4c5c-ae72-e81476b3287f" />
<img width="1919" height="900" alt="Screenshot 2026-03-31 184630" src="https://github.com/user-attachments/assets/4aac3824-7335-4713-909a-a66c59693b0a" />
 Features

- 🔐 JWT Authentication (Login / Register)
- 👥 User Management (List, Edit, Delete)
- 📦 Product Management (List, Edit, Delete)
- 📄 Pagination
- ⚡ Fast & responsive UI with Tailwind CSS
- 🔄 Global state management with Redux Toolkit

---

## 🚀 Tech Stack

| Frontend | Backend |
|----------|---------|
| React 19 | Node.js + Express |
| TypeScript | REST API |
| Redux Toolkit | JWT Auth |
| Vite | Render.com |
| Tailwind CSS | |
| React Router v6 | |

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

---

## 📁 Project Structure

```
src/
├── api/          # Axios client
├── components/   # Reusable UI components
├── constants/    # Navigation, messages
├── hooks/        # Custom React hooks
├── pages/        # Page components
├── store/        # Redux slices
├── types/        # TypeScript types
└── services/     # API service functions
```

---

## 📝 License

MIT
