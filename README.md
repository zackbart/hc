
## 🛠️ Quick Start

### Prerequisites

- Node.js 18.14.1 or higher
- Git

### Create a new project

```bash
# npm
npm create astro@latest -- --template jdrhyne/volks-typo

# pnpm
pnpm create astro@latest --template jdrhyne/volks-typo

# yarn
yarn create astro --template jdrhyne/volks-typo
```

### Manual Installation

1. Clone this repository:
```bash
git clone https://github.com/jdrhyne/volks-typo.git my-blog
cd my-blog
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm run dev
# or
yarn dev
```

4. Open your browser at `http://localhost:4321`

## 📁 Project Structure

```
volks-typo/
├── public/
│   ├── favicon.svg          # Site favicon
│   └── site-title.svg       # Fraktur-style site title
├── src/
│   ├── components/
│   │   ├── Footer.astro     # Site footer with social links
│   │   ├── Header.astro     # Site header with navigation
│   │   ├── Layout.astro     # Main layout wrapper
│   │   └── Sidebar.astro    # Desktop sidebar component
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page
│   │   ├── blog.astro       # Blog listing page
│   │   ├── blog/
│   │   │   ├── [...slug].astro  # Dynamic blog post pages
│   │   │   └── *.md            # Your blog posts
│   │   ├── categories.astro # Categories listing
│   │   └── contact.astro    # Contact page
│   ├── styles/
│   │   └── global.css       # Global styles and CSS variables
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json
└── tsconfig.json           # TypeScript configuration
```

## ⚙️ Configuration

All site configuration is centralized in `src/config.ts`:

```typescript
export const config = {
  title: "Volks-Typo",
  description: "A blog exploring the intersection of design, typography, and history",
  author: {
    name: "Your Name",
    bio: "Writer, designer, and explorer of aesthetic tensions.",
    avatar: "/avatar.jpg"
  },
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com"
  },
  siteUrl: "https://yourdomain.com"
};
```

## 🎨 Design System

### Typography

Volks-Typo uses a modern, clean typography system focused on readability and strong hierarchy:

- **Primary Headings:** Oswald - Bold, condensed sans-serif for maximum impact
- **Secondary Headings:** Roboto Condensed - Clean, professional condensed font
- **Body Text:** Work Sans - Highly readable sans-serif optimized for web
- **Code/Monospace:** JetBrains Mono - Developer-friendly monospace font
- **Site Title:** Custom SVG with distinctive styling

### Color Palette

The theme uses a clean, professional monotone palette with strategic red accents:

**Monotone Base**
- White (`#ffffff`) - Primary background
- Light Gray (`#f5f5f5`) - Surface backgrounds, cards
- Medium Gray (`#888888`) - Muted text, borders
- Dark Gray (`#333333`) - Secondary text
- Black (`#000000`) - Primary text, maximum contrast

**Accent Color**
- Red (`#dc2626`) - Primary accent for headings, links, and interactive elements

### Layout System

- **Mobile/Tablet:** Single column, full-width content
- **Desktop (1024px+):** Two-column layout with left sidebar
- **Grid:** 8-point grid system for consistent spacing
- **Max Width:** 1200px container for optimal reading

![Volks-Typo Mobile View](screenshots/volks-typo-mobile-home.png)
*Responsive mobile layout with hamburger navigation*

![Volks-Typo Blog Page](screenshots/volks-typo-blog.png)
*Blog listing page with clean typography and organized layout*

## 📝 Writing Content

### Blog Posts

Create blog posts as Markdown files in `src/pages/blog/`:

```markdown
---
title: "The Intersection of Function and Form"
date: "2024-01-15"
author: "Your Name"
excerpt: "Exploring how Bauhaus principles shaped modern design thinking"
categories: ["Design", "History"]
tags: ["bauhaus", "modernism", "typography"]
image: "/images/bauhaus-poster.jpg"
draft: false
---

Your content here...
```

### Frontmatter Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `date` | string | Yes | Publication date (YYYY-MM-DD) |
| `author` | string | No | Author name (defaults to config) |
| `excerpt` | string | No | Brief description for listings |
| `categories` | array | No | Post categories |
| `tags` | array | No | Post tags |
| `image` | string | No | Featured image path |
| `draft` | boolean | No | Hide from listings if true |

## 🛠️ Commands

All commands are run from the root of the project:

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview your build locally |
| `npm run astro ...` | Run CLI commands like `astro add` |
| `npm run check` | Check TypeScript types |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

Volks-Typo generates a static site that can be deployed anywhere:

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Use Vercel CLI or GitHub integration
```

### GitHub Pages
1. Update `astro.config.mjs` with your repository name
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## 📊 Performance

Volks-Typo is optimized for speed and efficiency:

- **Zero JavaScript** - Pure HTML and CSS
- **Minimal CSS** - ~20KB gzipped total
- **Self-hosted fonts** - No external requests
- **Optimized images** - Using Astro's Image component
- **Static generation** - Fast page loads

## 🎯 Customization Guide

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  /* Monotone Palette */
  --color-white: #ffffff;
  --color-light-gray: #f5f5f5;
  --color-medium-gray: #888888;
  --color-dark-gray: #333333;
  --color-black: #000000;
  
  /* Accent Color */
  --color-accent-red: #dc2626;
}
```

### Typography

Modify font families in `src/styles/global.css`:

```css
:root {
  --font-heading-primary: 'Oswald', sans-serif;
  --font-heading-secondary: 'Roboto Condensed', sans-serif;
  --font-body: 'Work Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Layout

The theme uses CSS Grid for layouts. Key files:
- `src/components/Layout.astro` - Main grid container
- `src/components/Sidebar.astro` - Desktop sidebar
- `src/styles/global.css` - Responsive breakpoints

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design philosophy inspired by the Bauhaus movement, WW2-era monumental aesthetics, and street & subway signage from Vienna 🇦🇹
- Built with [Astro](https://astro.build)
- Typography powered by [Fontsource](https://fontsource.org/)

## 📋 Project Information

- **Changelog:** [CHANGELOG.md](CHANGELOG.md) - Detailed version history and release notes
- **Releases:** [GitHub Releases](https://github.com/jdrhyne/volks-typo/releases) - Download specific versions
- **Issues:** [GitHub Issues](https://github.com/jdrhyne/volks-typo/issues) - Bug reports and feature requests
- **Discussions:** [GitHub Discussions](https://github.com/jdrhyne/volks-typo/discussions) - Community support

## 💬 Support

- **Author:** [@jdrhyne](https://github.com/jdrhyne) • Personal blog: [jdrhyne.me](https://jdrhyne.me) (under construction 🚧) 
---

**[Volks-Typo](https://github.com/jdrhyne/volks-typo)** by [@jdrhyne](https://github.com/jdrhyne) • MIT License
