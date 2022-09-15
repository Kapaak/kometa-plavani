## Poznamky

### Zajimave komponenty

- ContentRenderer.tsx
  - Converts text strings into HTML elements with predetermined tag
- SectionElement.tsx

  - Element that React-scroll scrolls to. Is styleable even though its .tsx, because it passes className prop + I use forwardRef to pass down ref from IntersectionObserver

  TODO

  - scrollTarget v Service.tsx by mel byt typu enum scrollTargets
  - udelej shared/interface.ts pro sdileny typy
  - udelej interface.ts pro kazdej komponent a typy ber odtama
  - mozna u kazdyho interface preexportuj shared/interface element, pokud se nekde pouziva
  - prejmenuj vsechny data.ts na ComponentName.data.ts
