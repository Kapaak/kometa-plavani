## Kometa plavani

### Popisek

- Web application for swimming courses of Kometa Brno

### Interesting components

- ContentRenderer.tsx
  - Converts text strings into HTML elements with predetermined tag
- SectionElement.tsx

  - Element that React-scroll scrolls to. Is styleable even though its .tsx, because it passes className prop + I use forwardRef to pass down ref from IntersectionObserver

### TODO

- projdi si lighthouse score
- najdi best practices SEO
- optimalizuj appku
- pri redirectu asi smaz shadow u headeru, protoze to se ted neoddelava pri zmene stranky
- co kdyz budu met kazdou page obalenou komponentem, ktery bude checkovat # za url a bude scrollovat
- resolvni vsechny TODO
