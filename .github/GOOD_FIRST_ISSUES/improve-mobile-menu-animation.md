# Improve Mobile Menu Animation

## Description
The current mobile menu slides in from the left, but the animation could be smoother and more polished. We'd like to enhance the transition effects to make the mobile navigation experience feel more premium.

## Current Behavior
- Menu slides in from left with a basic transform transition
- No easing function applied
- Hamburger icon doesn't animate when toggled

## Desired Behavior
- Smooth cubic-bezier easing for menu slide
- Animated hamburger icon that transforms to an X when open
- Subtle fade-in effect for menu items (staggered)
- Improved performance using CSS transforms

## Technical Details
- File to modify: `src/components/Header.astro`
- Keep all functionality intact
- Ensure animations are performant on older devices
- Test on various mobile devices/browsers

## Guidelines
- Follow existing CSS patterns in the project
- Use CSS custom properties where appropriate
- Maintain accessibility (no motion for users who prefer reduced motion)
- Keep the minimalist aesthetic

## How to Test
1. Run the development server
2. Resize browser to mobile view
3. Click hamburger menu
4. Verify smooth animations
5. Test with keyboard navigation
6. Check performance in DevTools

## Resources
- [CSS Tricks: Hamburger Menu Animations](https://css-tricks.com/hamburger-menu-animations/)
- [Web.dev: Prefers Reduced Motion](https://web.dev/prefers-reduced-motion/)

Good luck! Feel free to ask questions in the issue comments.