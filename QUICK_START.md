# Quick Start Guide

## Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Customization Checklist

### Update Personal Information
- [ ] Edit `src/components/Hero.jsx` - Update name, bio, and social links
- [ ] Edit `src/components/About.jsx` - Update introduction text
- [ ] Edit `src/components/Contact.jsx` - Update email and phone number
- [ ] Update resume link in `src/components/Navbar.jsx` and `src/components/About.jsx`

### Update Projects
- [ ] Edit `src/components/Projects.jsx` - Add/remove/modify projects
- [ ] Update project videos/images in `public/assets/projects pic/`

### Update "Beyond Coding" Section
- [ ] Edit `src/components/BeyondCoding.jsx` - Customize artistic interests

### Update Color Scheme
- [ ] Edit `tailwind.config.js` to change primary/secondary/tertiary colors

## Features Implemented

✅ Fully responsive (mobile-first)
✅ Dark mode, Light mode, and System theme
✅ Smooth animations with Framer Motion
✅ Typed.js typing effect in Hero section
✅ Scroll-to-top button
✅ Loading animation
✅ Active navbar link highlighting
✅ Smooth scroll behavior
✅ React Hook Form for contact form
✅ Custom 404 page
✅ SEO optimized
✅ "Beyond Coding" section for artistic background

## File Structure

```
portfolio-react/
├── public/
│   └── assets/          # Images, videos, PDFs
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation with theme toggle
│   │   ├── Hero.jsx         # Hero section with typing effect
│   │   ├── About.jsx        # About section
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── BeyondCoding.jsx # Artistic background
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx      # Footer with social links
│   │   ├── ScrollToTop.jsx # Scroll-to-top button
│   │   ├── Loading.jsx     # Loading animation
│   │   └── NotFound.jsx    # 404 page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
└── [config files]
```

## Theme System

The portfolio supports three theme modes:
1. **Light Mode** - Clean, bright interface
2. **Dark Mode** - Dark interface with primary colors
3. **System Theme** - Automatically follows OS preference

Theme preference is saved in localStorage and persists across sessions.

## Deployment

See the main README.md for deployment instructions to Vercel, Netlify, or GitHub Pages.

