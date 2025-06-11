# Add Reading Time Estimate to Blog Posts

## Description
Add an estimated reading time feature to blog posts. This helps readers gauge how much time they'll need to read an article.

## Current Behavior
- Blog posts show date and categories
- No reading time information

## Desired Behavior
- Display "X min read" next to the post date
- Calculate based on average reading speed (200-250 words per minute)
- Show on both blog listing and individual post pages

## Technical Details
- Create a utility function to calculate reading time
- Modify blog post components to display the estimate
- Files to update:
  - Create: `src/utils/readingTime.ts`
  - Update: `src/pages/blog/[...slug].astro`
  - Update: `src/pages/blog.astro`
  - Update: `src/components/Sidebar.astro` (recent posts section)

## Implementation Hints
```typescript
// Example utility function structure
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
```

## Guidelines
- Use the monospace font for reading time display
- Style consistently with existing date display
- Keep it subtle - don't make it too prominent
- Consider internationalization (but English only for now is fine)

## How to Test
1. Add the utility function
2. Import and use in blog templates
3. Verify correct calculation for various post lengths
4. Check styling matches the theme aesthetic

## Acceptance Criteria
- [ ] Reading time displays on blog listing page
- [ ] Reading time displays on individual post pages
- [ ] Reading time displays in sidebar recent posts
- [ ] Calculation is accurate (test with known word counts)
- [ ] Styling is consistent with theme

This is a great first issue as it involves creating a new utility and integrating it into existing components!