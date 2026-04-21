# 🎬 UMANG FILMS - Photo Gallery Website

![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.1.0-purple) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

A modern, responsive photo gallery website built with React and Vite, designed to showcase professional photography services. This project demonstrates expertise in front-end development, UI/UX design, and responsive web technologies.

## ✨ Features

- **📸 Photo Gallery**: Stunning display of photography work with optimized images
- **🏠 Hero Section**: Eye-catching landing page with smooth animations
- **🧭 Navigation**: Clean, responsive navbar for seamless user experience
- **💼 Services**: Detailed showcase of photography services offered
- **📝 Blog**: Platform for sharing photography tips and stories
- **📅 Booking System**: Integrated booking functionality for client inquiries
- **⭐ Testimonials**: Client reviews and feedback section
- **📞 Contact Footer**: Professional contact information and social links
- **📱 Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: CSS3 with custom animations
- **Linting**: ESLint
- **Version Control**: Git

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Harshika-Coder/Photo-Gallery.git
   cd Photo-Gallery
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

6. **Start the backend server**
   ```bash
   npm run server
   ```

## 📖 Usage

- Navigate through different sections using the navbar
- View the photo gallery in the main showcase
- Explore services and read blog posts
- Use the booking form to inquire about services
- Check out client testimonials

## 🧩 Backend API Uses

The backend is powered by Express and is used to support dynamic form submissions and future API-driven content.

- `GET /api/health` — health check endpoint, useful for verifying the backend is running
- `GET /api/gallery` — returns gallery metadata the frontend can use for the gallery page
- `GET /api/services` — returns the services list for the services section
- `POST /api/bookings` — accepts booking/contact requests from the frontend booking form
- `POST /api/contact` — accepts generic contact inquiries when you want a dedicated contact endpoint

## 🚀 Running the application

1. Start the frontend:
   ```bash
   npm run dev
   ```
2. Start the backend server:
   ```bash
   npm run server
   ```
3. In development, the frontend proxies `/api` requests to `http://localhost:4000`.

## 🎨 Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Services.jsx
│   ├── Blog.jsx
│   ├── Booking.jsx
│   ├── Testimonials.jsx
│   └── Footer.jsx
├── assets/
│   └── (photography images)
├── styles/
│   └── (CSS files)
├── animations.js
├── App.jsx
└── main.jsx
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

**Harshika**  
GitHub: [@Harshika-Coder](https://github.com/Harshika-Coder)

---

_Built with ❤️ using React & Vite_
