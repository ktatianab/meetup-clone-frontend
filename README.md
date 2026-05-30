# Meetup Clone Frontend
        
Frontend application for a Meetup-style platform built with Angular, PrimeNG, and Tailwind CSS.  
The app provides a responsive, mobile-first user experience with public pages, authentication screens, event detail views, and JWT-protected private routes.

## 🚀 Tech Stack
   
- **Angular 21**
- **TypeScript**
- **PrimeNG**
- **PrimeIcons**
- **Tailwind CSS**
- **Tailwind CSS PrimeUI**
- **RxJS**
- **Chart.js**
- **Quill**
- **Angular SSR**
- **Vitest**

## ✨ Features

- Public home page for visitors
- User login and registration views
- Protected dashboard route
- Protected user profile route
- Event detail page with dynamic route parameter
- JWT-based route protection
- Responsive and mobile-first layout
- UI components powered by PrimeNG
- Styling with Tailwind CSS
- Project structure organized by core, features, and shared modules
- Development workflow aligned with best practices such as routing, guarded routes, and clean component separation

## 📁 Project Structure

```bash
src/
└── app/
    ├── core/
    │   ├── auth.guard.ts
    │   └── auth.service.ts
    ├── features/
    │   ├── dashboard-component/
    │   ├── detalle-evento/
    │   ├── home/
    │   ├── home-sin-sesion/
    │   └── perfil/
    ├── shared/
    │   ├── login/
    │   └── register/
    └── app.routes.ts
