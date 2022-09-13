## Poznamky

### Zajimave komponenty

- ContentRenderer.tsx
  - Converts text strings into HTML elements with predetermined tag
- SectionElement.tsx
  - Element that React-scroll scrolls to. Is styleable even though its .tsx, because it passes className prop + I use forwardRef to pass down ref from IntersectionObserver
