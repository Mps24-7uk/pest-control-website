# 🐛 Professional Pest Control Website

A modern, responsive website for professional pest control services built with React, TypeScript, and Vite. Features a clean design, image slideshow, and comprehensive service information.

## 🌐 Live Demo

**Production Website**: [https://mps24-7uk.github.io/pest-control-website/](https://mps24-7uk.github.io/pest-control-website/)

## ✨ Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Image Slideshow**: Professional pest control service images with navigation
- **Service Showcase**: Detailed information about pest control services
- **About Section**: Company information and statistics
- **Testimonials**: Customer reviews and feedback
- **Contact Information**: Easy-to-find contact details
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
pest-control-website/
├── public/                 # Static assets
│   └── assets/
│       └── images/         # Public images
├── src/
│   ├── components/         # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── assets/
│   │   └── images/         # Source images (processed by Vite)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
└── dist/                   # Build output (auto-generated)
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mps24-7uk/pest-control-website.git
   cd pest-control-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to: `http://localhost:5173/pest-control-website/`

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
```

### Build Output
- **Development**: Runs on `http://localhost:5173/pest-control-website/`
- **Production**: Builds to `dist/` folder with optimized assets

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Push to main branch** triggers automatic deployment
2. **GitHub Actions** builds the project
3. **Deploys** to GitHub Pages from the `dist` folder

### Manual Deployment

If you need to deploy manually:

```bash
npm run build        # Build the project
# Deployment is handled by GitHub Actions workflow
```

## 🎨 Customization

### Adding New Images

1. **For slideshow images**: Add to `src/assets/images/home/`
2. **For other images**: Add to `src/assets/images/`
3. **Import in components**: Use Vite import syntax

Example:
```typescript
import newImage from '../assets/images/home/new-image.png';
```

### Modifying Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Services**: Edit `src/components/Services.tsx`
- **About**: Edit `src/components/About.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Styling

- **Global styles**: `src/index.css`
- **Component styles**: Tailwind CSS classes in each component
- **Configuration**: `tailwind.config.js`

## 🔧 Configuration

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/pest-control-website/',  // GitHub Pages base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
```

### GitHub Pages Setup

1. **Repository Settings** → **Pages**
2. **Source**: GitHub Actions
3. **Workflow**: `.github/workflows/deploy.yml`

## 📱 Component Overview

### 🏠 Hero Component
- Image slideshow with navigation
- Professional service presentation
- Call-to-action buttons

### 🛠️ Services Component
- Service categories and descriptions
- Feature highlights
- Professional imagery

### 👥 About Component
- Company information
- Experience statistics
- Team presentation

### 💬 Testimonials Component
- Customer reviews
- Rating display
- Social proof

### 📞 Contact Component
- Contact information
- Service areas
- Emergency contact details

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check image paths in `src/assets/images/`
   - Ensure proper import statements
   - Verify Vite base path configuration

2. **Build failures**
   - Ensure `index.html` uses development scripts
   - Check for TypeScript errors
   - Verify all imports are correct

3. **GitHub Pages not updating**
   - Check GitHub Actions workflow status
   - Ensure repository Pages settings use "GitHub Actions"
   - Wait for deployment to complete (2-3 minutes)

### Development vs Production

- **Development**: Uses `/src/main.tsx` entry point
- **Production**: Uses built assets with hashed filenames
- **Base Path**: `/pest-control-website/` for both environments

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For internal development:

1. Create a feature branch
2. Make your changes
3. Test locally
4. Create a pull request
5. Deploy automatically on merge

## 📞 Support

For technical support or questions about this project, please contact the development team.

---

**Built with ❤️ for professional pest control services**
