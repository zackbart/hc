# Volks-Typo Ultra Minimal Theme

A brutally minimal Astro blog theme that strips away everything except pure content and typography.

## Features

- **Ultra Minimal Design**: No decorative elements, no visual noise
- **Perfect Readability**: Optimized typography with ideal line lengths and spacing
- **Single Font Family**: Work Sans for unified visual hierarchy
- **Left-Aligned Layout**: Natural reading flow throughout
- **Centered Container**: 1400px max-width, centered on page
- **Responsive Grid**: 3x2 features grid that adapts to screen size
- **Clean Code Blocks**: Minimal styling for code examples
- **Fast Performance**: Zero JavaScript, minimal CSS

## File Structure

```
src/
├── components/
│   └── UltraMinimalLayout.astro    # Dedicated layout component
├── pages/
│   └── ultra-minimal.astro         # Standalone theme page
└── styles/
    └── ultra-minimal.css           # Complete theme styles
```

## Usage

### Option 1: Standalone Theme
Use the ultra minimal theme as a complete standalone theme:

1. Copy `src/styles/ultra-minimal.css` to your project
2. Copy `src/components/UltraMinimalLayout.astro` 
3. Copy `src/pages/ultra-minimal.astro` as your index page
4. Install required fonts:
   ```bash
   npm install @fontsource/work-sans @fontsource/jetbrains-mono
   ```

### Option 2: Apply to Existing Theme
Apply ultra minimal styling to existing pages:

1. Import the CSS file:
   ```astro
   <style>
     @import '../styles/ultra-minimal.css';
   </style>
   ```

2. Use the dedicated layout:
   ```astro
   ---
   import UltraMinimalLayout from '../components/UltraMinimalLayout.astro';
   ---
   ```

## Design Principles

### Typography
- **Single Font**: Work Sans for everything (headings, body, UI)
- **Weight Hierarchy**: 400 (body), 500 (nav), 600 (headings)
- **Optimal Line Length**: 65 characters max for body text
- **Generous Line Height**: 1.7 for body text, 1.1-1.3 for headings

### Layout
- **Centered Container**: 1400px max-width with auto margins
- **Consistent Padding**: 120px left/right padding on all sections
- **Left Alignment**: All content flows naturally from left edge
- **Section Dividers**: Thin 1px lines between main sections
- **Responsive Breakpoints**: 900px and 600px for grid adaptation

### Colors
- **Pure Minimal**: White background, black text
- **Subtle Grays**: #333 for body text, #555 for descriptions, #666 for muted text
- **Single Accent**: Red (#ff0000) for primary actions only
- **Code Backgrounds**: Light gray (#f8f8f8) for code blocks

### Spacing
- **8px Grid System**: All spacing based on 8px increments
- **Generous Vertical**: 80px between sections
- **Clean Breathing Room**: Ample margins and padding throughout

## Customization

### Colors
Edit the CSS variables in `ultra-minimal.css`:

```css
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-accent-red: #ff0000;
  /* ... */
}
```

### Typography
Change font families:

```css
:root {
  --font-heading-primary: 'Your Font', sans-serif;
  --font-body: 'Your Font', sans-serif;
  --font-mono: 'Your Mono Font', monospace;
}
```

### Layout
Adjust container width:

```css
.site-wrapper {
  max-width: 1200px; /* Change from 1400px */
}
```

Modify section padding:

```css
:root {
  --brutal-padding: calc(var(--grid-unit) * 10); /* Change from 15 */
}
```

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Responsive design for all device sizes

## Performance

- **Zero JavaScript**: Pure CSS and HTML
- **Minimal CSS**: ~15KB gzipped
- **Self-hosted Fonts**: No external font requests
- **Fast Loading**: Optimized for speed

## License

MIT License - use freely for personal and commercial projects.