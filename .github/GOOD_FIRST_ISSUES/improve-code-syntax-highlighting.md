# Improve Code Syntax Highlighting

## Description
Enhance the code block syntax highlighting to support more languages and improve the visual design while maintaining the theme's aesthetic.

## Current Behavior
- Basic syntax highlighting with limited language support
- Black background with colored syntax
- No language labels on code blocks
- No copy-to-clipboard functionality

## Desired Behavior
- Extended language support (Python, Go, Rust, etc.)
- Language label in top-right corner of code blocks
- Refined color scheme that matches the theme
- Optional: Copy button for code blocks

## Technical Details
- Currently using Astro's built-in Shiki
- May need to configure additional languages
- Files to modify:
  - `astro.config.mjs` (Shiki configuration)
  - `src/styles/global.css` (code block styles)

## Implementation Ideas
```javascript
// In astro.config.mjs
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['js', 'ts', 'python', 'rust', 'go', 'bash'],
      wrap: true,
    },
  },
});
```

## Style Guidelines
- Keep the black background (it's part of the theme identity)
- Ensure sufficient contrast for accessibility
- Language labels should use the monospace font
- If adding a copy button, make it subtle

## How to Test
1. Create test blog post with various code languages
2. Verify syntax highlighting works for each
3. Check visual consistency across languages
4. Test on both light and dark system preferences
5. Ensure mobile responsiveness

## Acceptance Criteria
- [ ] Support for at least 10 popular languages
- [ ] Language labels display correctly
- [ ] Colors are accessible (WCAG AA compliant)
- [ ] Consistent styling across all code blocks
- [ ] Mobile-friendly display

## Bonus Points
- Add line numbers option
- Implement copy-to-clipboard functionality
- Add highlighting for specific lines

This issue is great for learning about syntax highlighting in static site generators!