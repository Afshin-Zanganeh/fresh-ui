# Fresh UI

Fresh UI is a React and TypeScript component library and portfolio project inspired by fruits and vegetables. Each fruit or vegetable gets its own design direction, component collection, and example website. The public showcase will let visitors explore the designs in use and see how details from the produce shaped the interface. Contributors should be able to add a new collection by following the same folder structure and guidelines.

## Project structure

Give each fruit or vegetable a top-level folder under `themes/`, named in kebab case. This is the proposed structure for the first collection.

```text
themes/
  orange/
    README.md     # Design brief and rationale
    tokens/       # Color, typography, spacing, shape, and motion values
    components/   # React components, their variants, and state styles
    motion/       # Animations, transitions, loaders, and reduced-motion styles
    assets/       # Illustrations, textures, and other theme assets
    showcase/    # Example website built with the collection
    index.ts      # Public exports for this collection
```

Keep all theme-specific components, behavior, styles, assets, and showcase content inside that collection's folder. A theme should never import from another theme. Share accessible interaction primitives, common types, and build tooling when they serve multiple themes. Keep the showcase navigation and theme registry shared, with each theme's example pages in its own folder.

## Designing a collection

1. Start with a short brief. Pick the produce, identify a few recognizable traits, and explain how they inform the interface. For Orange, peel and pith could inform colors and textures, while segments could influence shapes or progress indicators.
2. Define tokens by role for surfaces, text, actions, feedback, and focus, along with typography, spacing, radii, and motion. Check contrast and use text or icons alongside color when conveying status.
3. Start with Button, Text Field, Card, Badge, and Dialog. Give each component its own expression of the theme and document its API, variants, and applicable states. Cover default, hover, focus-visible, pressed, disabled, loading, selected, and validation states wherever relevant. Show empty, error, and success states in showcase flows that need them.
4. Design motion as part of the theme. Include entry and exit, interaction feedback, and loading treatments where useful. Honor `prefers-reduced-motion`, preserve readable status feedback, and verify that loading and transitions work with keyboard navigation and assistive technology.
5. Build a responsive example website using the collection's public components. Show a complete interaction and document the design decisions behind it. For the first collection, a produce-market site with an add-to-basket flow is a suggested starting point.

## Delivery milestones

- Build the first collection with component examples and a working showcase site.
- Add a second, visually distinct collection to verify that the structure supports new designs without changes to the first collection.
- Publish the React library, component documentation, and showcase. Write a portfolio case study that connects the produce inspiration to design decisions, accessible interactions, and the library structure.

## Working with AI

Use this README as project context when starting a new task. Name the collection and the deliverable. For example, “Read the Fresh UI README and design the Orange Button. Show its variants, keyboard focus, loading state, and reduced-motion behavior before implementing it.” Use [CONTRIBUTING.md](CONTRIBUTING.md) for branch and commit conventions.
