# Basic Web Project with TailwindCSS, GSAP, and Firebase

A modern web project template featuring smooth animations and Firebase integration.

## Features

- Modern UI with TailwindCSS
- Smooth animations using GSAP
- Firebase integration for backend services
- Responsive design
- Vite for fast development

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure Firebase:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Replace the Firebase configuration in `src/services/firebase.js` with your project's config

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project Structure

- `/src` - Source files
  - `/services` - Firebase and other service configurations
  - `/styles` - CSS files including Tailwind
- `index.html` - Main HTML file
- `main.js` - Main JavaScript file with GSAP animations
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration

## Technologies Used

- TailwindCSS for styling
- GSAP for animations
- Firebase for backend services
- Vite for build tool and development server
