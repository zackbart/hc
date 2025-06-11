# Add Print Styles for Blog Posts

## Description
Create print-friendly CSS styles for blog posts. When users print articles, they should get a clean, readable format without navigation elements and with optimized typography.

## Current Behavior
- No specific print styles
- Navigation, sidebar, and other UI elements appear in print
- Colors and backgrounds waste ink

## Desired Behavior
- Hide non-content elements (navigation, sidebar, footer)
- Black text on white background
- Optimized margins and font sizes for print
- Show link URLs inline for reference
- Page breaks at logical points

## Technical Details
- Add print media queries to relevant components
- Primary file: Create `src/styles/print.css`
- Import in `src/pages/blog/[...slug].astro`

## Example Implementation
```css
@media print {
  /* Hide navigation elements */
  .site-header,
  .sidebar,
  .site-footer,
  .search-toggle {
    display: none !important;
  }

  /* Reset colors for print */
  body {
    color: #000;
    background: #fff;
  }

  /* Show URLs after links */
  a[href^="http"]:after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    font-style: italic;
  }

  /* Prevent page breaks in wrong places */
  h1, h2, h3, h4, h5, h6 {
    page-break-after: avoid;
  }

  pre, blockquote {
    page-break-inside: avoid;
  }
}
```

## Guidelines
- Test with actual print preview
- Ensure good readability on paper
- Keep the minimalist aesthetic even in print
- Consider environmental impact (minimize ink usage)

## How to Test
1. Navigate to any blog post
2. Open print preview (Ctrl/Cmd + P)
3. Verify only content is visible
4. Check typography is optimized
5. Test on different browsers

## Acceptance Criteria
- [ ] Navigation elements hidden in print
- [ ] Sidebar hidden in print
- [ ] Text is black on white background
- [ ] Links show URLs for reference
- [ ] Code blocks print cleanly
- [ ] Images print appropriately
- [ ] Page breaks are logical

This is perfect for someone wanting to learn about print CSS!