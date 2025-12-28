# MerkatoMart Website

A modern, animated website for MerkatoMart - an Ethiopian mini mart. This website celebrates Ethiopian culture with authentic design elements, smooth animations, and a user-friendly experience.

## Features

- 🎨 **Modern Design**: Clean layout with Ethiopian cultural elements (green, yellow, red color palette)
- ✨ **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🛍️ **Product Showcase**: Categorized product display with search and filtering
- 📍 **Location & Contact**: Interactive map, store hours, and contact form
- 🎭 **Cultural Storytelling**: About page connecting to Merkato market heritage
- ⚡ **Fast Performance**: Optimized with Vite and modern React practices

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
merkatoWebsite/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── ProductCard.tsx
│   │   └── LoadingScreen.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── About.tsx
│   │   ├── Location.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Pages

- **Home**: Hero section, featured products, categories, testimonials, newsletter
- **Products**: Categorized product display with search and filter functionality
- **About**: Story of MerkatoMart and connection to Merkato market
- **Location**: Store location with map, hours, and contact information
- **Contact**: Contact form with multiple contact methods

## Customization

### Colors

The Ethiopian flag colors are defined in `tailwind.config.js`:
- Green: `#078930`
- Yellow: `#FCDD09`
- Red: `#DA1212`

You can customize these in the `ethiopian` color palette.

### Adding Products

Edit the `products` array in `src/pages/Products.tsx` to add or modify products.

### Contact Information

Update contact details in:
- `src/components/Footer.tsx`
- `src/pages/Location.tsx`
- `src/pages/Contact.tsx`

## License

This project is created for MerkatoMart.

