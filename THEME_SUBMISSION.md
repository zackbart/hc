# Volks-Typo - Astro Theme Submission Guide

This guide helps you prepare and submit Volks-Typo to the Astro theme portal.

## Pre-Submission Checklist

### ✅ Best Practices (Required)
- [x] Uses the latest release of Astro
- [x] Free theme source code is available in a public repo
- [x] All NPM dependencies used are public
- [x] Informative README to help users get started

### ✅ Screenshots (Required)
Before submitting, generate the required screenshots:

1. Install Playwright: `npm install`
2. Start the dev server: `npm run dev`
3. In a new terminal, run: `npm run generate-screenshots`

This will create:
- `volks-typo-featured.png` (1280x640) - Featured image for the portal
- `volks-typo-desktop.png` - Desktop view with sidebar
- `volks-typo-mobile.png` - Mobile responsive view
- `volks-typo-blog-post.png` - Blog post typography showcase
- `volks-typo-categories.png` - Categories page

**Note:** You may want to manually create a more polished featured image that combines multiple views or adds text overlays.

## Submission Form Information

### Theme Info

**Theme name:** Volks-Typo

**Is your theme free or paid?** Free

**Public repo URL:** https://github.com/jdrhyne/volks-typo

**Live demo URL:** [Your deployed demo URL]

**Short description:**
```
A striking Astro blog theme exploring the aesthetic tension between Bauhaus modernism and WW2-era monumental design. Features a sophisticated dual-palette system, carefully curated typography, and ultra-fast performance with zero JavaScript.
```

**Full description for the theme detail page:**
```
Volks-Typo is a unique Astro blog theme that creates a "dissonant harmony" between Bauhaus functionalism and WW2-era monumental aesthetics. 

Key Features:
• Dual design philosophy with Bauhaus minimalism and monumental counterpoints
• Sophisticated typography system using Cormorant Garamond, Playfair Display, and Inter
• Two-tone color palettes: Bauhaus (warm neutrals) and Monumental (bold reds)
• Lightning-fast performance with zero JavaScript and minimal CSS (~20KB)
• Full blog support with categories, tags, and archives
• Mobile-first responsive design with elegant desktop sidebar
• SEO optimized with meta tags and structured data
• Fully accessible with semantic HTML
• Self-hosted fonts for privacy
• TypeScript support throughout

Perfect for design-conscious bloggers, creative professionals, and anyone who appreciates the tension between historical design movements.
```

### Tools Used
Select all that apply:
- [x] TypeScript
- [x] CSS Variables
- [x] Responsive Design
- [x] SEO
- [x] Accessibility
- [x] Blog

### Categories
Select all that apply:
- [x] Blog
- [x] Minimal
- [x] Portfolio (if applicable)

## Deployment for Demo

Before submitting, deploy a live demo:

1. **Option 1: Vercel**
   - Connect your GitHub repo to Vercel
   - Deploy with default settings
   - Use the generated URL for your demo

2. **Option 2: Netlify**
   - Connect your GitHub repo to Netlify
   - Deploy with default settings
   - Use the generated URL for your demo

3. **Option 3: GitHub Pages**
   - Update `astro.config.mjs` with your repo name
   - Use GitHub Actions for deployment
   - URL will be: `https://[username].github.io/volks-typo`

## Final Steps

1. Ensure all screenshots are optimized (< 500KB each)
2. Deploy your live demo
3. Double-check all links work correctly
4. Submit via: https://portal.astro.build/themes/submit

## Post-Submission

- Monitor the GitHub repo for issues/questions
- Be ready to address any feedback from the Astro team
- Share on social media once approved!

Good luck with your submission! 🚀