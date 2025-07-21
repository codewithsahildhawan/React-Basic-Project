# DevTech Labs – React Basic Project

A modern, modular React web application for an IT & Web Development company, built with Vite, React Router, and Bootstrap. This project demonstrates best practices in component structure, routing, and data management.

## Features
- **React 19 + Vite**: Fast development and build tooling
- **React Router v7**: Multi-page navigation (Home, About, Services, Service Detail, Contact Us)
- **Bootstrap 5**: Responsive, modern UI
- **Component-based structure**: Reusable headers, footers, sections, and layouts
- **Centralized data**: All site content and service data in `src/data/`
- **ESLint**: Code quality enforced
- **React Toastify**: User notifications
- **Swiper**: Modern slider for testimonials or banners

## Project Structure
```
src/
  App.jsx                # Main app with routes
  main.jsx               # Entry point, sets up router
  components/            # All UI components
    headers/             # Page and Home headers
    footers/             # Footer component
    navbar/              # Navigation bar
    sections/            # About, Services, Slider, Partner, Testimonial
    TopBanner/           # Top banner for pages
  layouts/               # HomeLayout, PageLayout for consistent page structure
  pages/                 # Home, About, Services, ServiceDetail, ContactUs
  data/                  # Centralized content and about info
  styles/                # Global and module CSS
```

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Linting
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Known Issues & Best Practices
- **JSX className**: Always use `className` instead of `class` in JSX. Some files (e.g., `ContactUs.jsx`) use `class` and should be updated for React compatibility.
- **External Links**: Use `<a href="mailto:...">` for email links, not React Router's `<Link>`.
- **Empty CSS Modules**: Some `.module.css` files are empty. Remove or fill as needed.
- **Demo Form**: The contact form does not submit to a backend; it only shows toast notifications.

## Credits
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Swiper](https://swiperjs.com/)

---

© 2025 DevTech Labs. All rights reserved. Designed by Sahil Dhawan.
