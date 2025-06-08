# Volks-Typo Astro Theme

## Project Overview
An Astro blog theme exploring the aesthetic tension between Bauhaus modernism and WW2-era monumental design. The theme creates a "dissonant harmony" that is visually striking, functional, and conceptually rich.

## Core Design Philosophy
- **Form Follows Function (with a Twist)**: Bauhaus functionalism with monumental design counterpoints
- **Minimalism as a Base**: Clean, uncluttered aesthetic with generous white space
- **Constructivist Influence**: Strong grid system (8-point grid) for structural order

## Color Palette

### Primary Palette (Bauhaus)
- `#f0e9d6` (Parchment White) - Backgrounds
- `#2c2c2c` (Charcoal Black) - Body Text
- `#c13127` (Muted Red) - Links, active states
- `#005a8d` (Deep Blue) - Secondary accents, blockquotes
- `#e8a100` (Ochre Yellow) - Tertiary accents (tags, categories)

### Secondary Palette (WW2-Era)
- `#8b0000` (Blood Red) - Oversized headings, monumental rule
- `#d4c8a0` (Stone Beige) - Header and footer backgrounds
- `#3d3d3d` (Steel Gray) - Borders and dividers

## Typography

### Headings (H1, H2, H3) - "Stripped Classicism"
- **H1**: Cormorant Garamond
- **H2, H3**: Playfair Display
- **Styling**: All caps, letter-spacing: 0.1em, font-weight: 900, Blood Red color

### Body Text - "Bauhaus Purity"
- **Font**: Inter
- **Size**: 16-18px
- **Line Height**: 1.6
- **Color**: Charcoal Black

### Monospace/Code
- **Font**: JetBrains Mono
- **Background**: Parchment White with borders

### Fraktur Accent
- **Usage**: Main site title only (as SVG)

## Layout Architecture

### Responsive Design
- Mobile/Tablet: Single column
- Desktop (1024px+): Two-column with left sidebar

### Core Components
1. **Layout.astro** - Main wrapper with CSS grid
2. **Header.astro** - Full-width with Stone Beige background
3. **Sidebar.astro** - Bio, Recent Posts, Categories
4. **Footer.astro** - Copyright and social links
5. **[...slug].astro** - Blog post template with Blood Red rule

## Technical Implementation
- **Styling**: Astro Scoped CSS
- **Colors**: CSS Variables in global stylesheet
- **Fonts**: Self-hosted via @fontsource
- **Configuration**: Central src/config.ts file
- **Social Links**: GitHub, X, Instagram, LinkedIn, Email

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Run type checking
npm run check
```