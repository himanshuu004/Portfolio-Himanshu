# Portfolio - React.js & Tailwind CSS

A modern, fully responsive portfolio website built with React.js and Tailwind CSS.

## Features

- ✅ Fully responsive (mobile-first approach)
- ✅ Dark mode, Light mode, and System theme support
- ✅ Smooth animations with Framer Motion
- ✅ React Hook Form for contact form
- ✅ Typed.js for typing effect
- ✅ Scroll-to-top button
- ✅ Loading animation on page load
- ✅ Navbar highlights current section on scroll
- ✅ Smooth scroll behavior
- ✅ React Router integration
- ✅ React Icons for all icons
- ✅ SEO optimized meta tags
- ✅ "Beyond Coding" section for artistic background

## Technology Stack

- **React** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Hook Form** - Form handling
- **Typed.js** - Typing effect
- **React Icons** - Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/himanshuu004/Portfolio.git
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
portfolio-react/
├── public/
│   └── assets/          # Images, videos, and other static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── BeyondCoding.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Loading.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Sections

1. **Hero** - Introduction with typing effect
2. **About** - Professional introduction
3. **Projects** - Showcase of projects
4. **Beyond Coding** - Artistic and creative interests
5. **Contact** - Contact form and information

## Customization

### Update Personal Information

Edit the following components to update your information:
- `src/components/Hero.jsx` - Name, title, bio
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information

### Update Social Links

Modify social links in:
- `src/components/Hero.jsx` - Hero section social icons
- `src/components/Footer.jsx` - Footer social icons

### Update Projects

Edit `src/components/Projects.jsx` to add or modify project entries.

### Update Theme Colors

Modify `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: 'rgb(110, 87, 224)',
  'primary-hover': 'rgb(40, 91, 212)',
  secondary: 'rgb(0, 201, 255)',
  tertiary: 'rgb(10, 221, 168)',
}
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Deploy to Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run `npm run deploy`

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Himanshu Rawat**
- Email: himanshuu004@gmail.com
- LinkedIn: [himanshu-rawat](https://www.linkedin.com/in/himanshu-rawat-3ba9a9265/)
- GitHub: [himanshuu004](https://github.com/himanshuu004)

