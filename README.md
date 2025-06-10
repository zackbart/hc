# Volks-Typo Astro Theme

An Astro blog theme exploring the aesthetic tension between Bauhaus modernism and WW2-era monumental design. This theme creates a "dissonant harmony" that is visually striking, functional, and conceptually rich.

## Features

- **Bauhaus-Inspired Design**: Clean, functional aesthetic with bold typography
- **Monumental Typography**: Oversized headings with stripped classicism
- **Responsive Layout**: Mobile-first design with desktop sidebar
- **Fast Performance**: Optimized for speed with minimal CSS and self-hosted fonts
- **Full Blog Support**: Categories, tags, recent posts, and archive pages
- **SEO Optimized**: Built-in meta tags and structured data
- **Dark/Light Themes**: Carefully crafted color palettes
- **Zero JavaScript**: Pure CSS and HTML for maximum performance

## Demo

Visit the [live demo](https://volks-typo.example.com) to see the theme in action.

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/volks-typo.git
cd volks-typo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3001`

## Project Structure

```
volks-typo/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # Main layout wrapper
│   │   ├── Header.astro      # Site header with navigation
│   │   ├── Sidebar.astro     # Desktop sidebar (bio, recent posts, categories)
│   │   └── Footer.astro      # Site footer
│   ├── pages/
│   │   ├── index.astro       # Homepage/landing page
│   │   ├── blog.astro        # Blog listing page
│   │   ├── blog/
│   │   │   ├── [...slug].astro  # Blog post template
│   │   │   └── *.md            # Blog posts (Markdown)
│   │   ├── about.astro       # About page
│   │   ├── categories.astro  # Categories listing
│   │   └── contact.astro     # Contact page
│   ├── styles/
│   │   └── global.css        # Global styles and CSS variables
│   └── config.ts             # Site configuration
├── public/
│   ├── favicon.svg           # Site favicon
│   └── site-title.svg        # Fraktur-style site title
└── package.json
```

## Configuration

Edit `src/config.ts` to customize your site:

```typescript
export const config: SiteConfig = {
  title: "Volks-Typo",
  description: "A blog exploring the intersection of design, typography, and history",
  author: {
    name: "Your Name",
    bio: "Writer, designer, and explorer of aesthetic tensions between past and present.",
    avatar: "/avatar.jpg"
  },
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com"
  },
  siteUrl: "https://volks-typo.example.com"
};
```

## Design Philosophy

### Core Principles

1. **Form Follows Function (with a Twist)**: Bauhaus functionalism meets monumental design counterpoints
2. **Minimalism as a Base**: Clean, uncluttered aesthetic with generous white space
3. **Constructivist Influence**: Strong 8-point grid system for structural order
4. **Dissonant Harmony**: Intentional aesthetic tensions that create visual interest

### Typography

The theme uses a carefully curated typography system:

- **Headings**: "Stripped Classicism" approach
  - H1: Oswald - Bold, condensed sans-serif
  - H2, H3: Roboto Condensed - Geometric sans-serif
  - Styling: All caps, letter-spacing: 0.1em, font-weight: 700-900, Red accent color

- **Body Text**: "Bauhaus Purity"
  - Font: Work Sans - Clean, readable sans-serif
  - Size: 16px base
  - Line Height: 1.6
  - Color: Pure black (#000000)

- **Monospace/Code**: JetBrains Mono
- **Fraktur Accent**: Site title only (as SVG)

### Color Palette

The theme uses a minimalist monotone palette with a single accent color:

#### Core Colors
- `#ffffff` (Pure White) - Primary background
- `#f5f5f5` (Light Gray) - Surface backgrounds
- `#888888` (Medium Gray) - Borders and muted text
- `#333333` (Dark Gray) - Secondary text
- `#000000` (Pure Black) - Primary text

#### Accent Color
- `#dc2626` (Red) - Links, headings, active states

## Writing Blog Posts

Create new blog posts in `src/pages/blog/` as Markdown files:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
author: "Your Name"
excerpt: "A brief description of your post"
categories: ["Design", "Typography"]
tags: ["bauhaus", "modernism"]
---

Your post content here...
```

### Frontmatter Options

- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD)
- `author`: Author name (defaults to config author)
- `excerpt`: Brief description for listings
- `categories`: Array of categories
- `tags`: Array of tags
- `image`: Featured image URL
- `draft`: Set to `true` to hide from listings

## Customization

### Changing Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-accent-red: #dc2626;
  /* ... more color variables */
}
```

### Modifying Typography

Update font imports and families in `src/styles/global.css`:

```css
:root {
  --font-heading-primary: 'Oswald', sans-serif;
  --font-heading-secondary: 'Roboto Condensed', sans-serif;
  --font-body: 'Work Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Layout Adjustments

The theme uses a responsive grid system. Key breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px (two-column layout with sidebar)

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server on port 3001 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run Astro type checking |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Performance

The theme is optimized for performance:
- **Zero JavaScript**: Pure CSS and HTML
- **Self-hosted Fonts**: No external font requests
- **Minimal CSS**: ~20KB gzipped
- **Optimized Images**: Use Astro's Image component
- **Fast Build Times**: Leverages Astro's static generation

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Fully responsive design
- Print stylesheet included

## Deployment

The theme can be deployed to any static hosting service:

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy with Vercel CLI or GitHub integration
```

### GitHub Pages
```bash
npm run build
# Push to gh-pages branch
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Inspired by Bauhaus design principles and WW2-era monumental aesthetics
- Built with [Astro](https://astro.build)
- Typography: [Oswald](https://fonts.google.com/specimen/Oswald), [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed), [Work Sans](https://fonts.google.com/specimen/Work+Sans), [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## Support

For issues, questions, or suggestions:
- Open an issue on [GitHub](https://github.com/yourusername/volks-typo/issues)
- Contact via email at your.email@example.com