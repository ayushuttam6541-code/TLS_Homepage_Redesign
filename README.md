# Tulas International School — Homepage Redesign

Modern animated homepage redesign for Tulas International School.

## Live Demo

[Live URL]

## Repository

[GitHub URL]

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Features

- Responsive design (375px, 768px, 1280px+)
- Scroll-triggered reveals
- Scroll progress indicator
- Custom cursor (desktop only)
- Interactive navigation with mobile menu
- Micro-interactions
- Accessible semantic HTML
- Data-driven architecture
- Modular component structure

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Production Build

```bash
npm run build
npm start
```

## Architecture

### Components

- **UI Components** (`src/components/ui/`)
  - `Button.tsx` - Reusable button component with variants (primary, secondary, outline) and sizes
  - `SectionHeading.tsx` - Section heading with label, title, and description
  - `Container.tsx` - Responsive container component
  - `Card.tsx` - Card component with optional hover effect
  - `Badge.tsx` - Badge component for tags and labels

- **Layout Components** (`src/components/layout/`)
  - `Navbar.tsx` - Sticky navigation with scroll-based transparency and mobile menu
  - `Footer.tsx` - Complete footer with navigation, contact info, and social links

- **Section Components** (`src/components/sections/`)
  - `HeroSection.tsx` - Hero section with animations and CTAs
  - `AboutSection.tsx` - About TIS section with editorial layout
  - `ExperienceSection.tsx` - Why Tulas differentiators
  - `SportsSection.tsx` - 16+ Olympic sports showcase
  - `StatisticsSection.tsx` - Key statistics display
  - `RankingsSection.tsx` - Rankings and recognition
  - `CampusSection.tsx` - Campus experience section
  - `AchievementsSection.tsx` - Influential personalities showcase
  - `AwardsSection.tsx` - Awards and recognition display
  - `VirtualTourSection.tsx` - Virtual tour CTA
  - `TestimonialsSection.tsx` - Parent testimonials carousel
  - `AdmissionsCTA.tsx` - Final conversion section

- **Animation Components** (`src/components/animation/`)
  - `ScrollProgress.tsx` - Fixed scroll progress bar at top
  - `CustomCursor.tsx` - Custom cursor for desktop with hover states
  - `Reveal.tsx` - Reusable scroll-triggered reveal animation

### Data Files (`src/data/`)

- `navigation.ts` - Navigation items and footer links
- `statistics.ts` - School statistics (22-acre campus, 16+ sports, etc.)
- `sports.ts` - List of 16+ Olympic sports
- `testimonials.ts` - Parent testimonials from official website
- `rankings.ts` - Official rankings and recognition
- `awards.ts` - Awards and achievements
- `personalities.ts` - Influential personalities (sports and leaders)
- `contact.ts` - Contact information and URLs

### Hooks (`src/hooks/`)

- `useMediaQuery.ts` - Custom hook for responsive media queries
- `useMousePosition.ts` - Custom hook for mouse position tracking

### Utilities (`src/lib/`)

- `utils.ts` - Utility functions (cn for className merging)

## Responsive Testing

The website has been designed and tested for:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px+

Additional breakpoints tested:
- 390px
- 1024px
- 1440px

## Standout Features

### 1. Scroll-Triggered Reveals

Using Framer Motion's `whileInView` and `viewport` props, elements animate into view as the user scrolls. The `Reveal` component provides a reusable interface with configurable delay, direction, and viewport amount.

```tsx
<Reveal delay={0.2} direction="up" amount={0.2}>
  <YourContent />
</Reveal>
```

### 2. Scroll Progress Bar

A fixed progress bar at the top of the page that indicates scroll position. Uses Framer Motion's `useScroll` hook and spring animation for smooth performance without React state on every scroll event.

### 3. Custom Cursor

Desktop-only custom cursor that:
- Hides on touch devices (`pointer: coarse`)
- Follows mouse with smooth spring animation
- Scales up on hover over interactive elements
- Uses motion values for optimal performance

## Performance Optimizations

- Next.js Image component for optimized images
- Lazy loading where appropriate
- Framer Motion with efficient use of motion values
- CSS transforms instead of layout-changing animations
- Minimal event listeners
- No unnecessary global state
- Staggered animations to avoid simultaneous DOM updates

## Accessibility

- Semantic HTML structure (header, nav, main, section, article, footer)
- Alt text for images
- Keyboard navigation support
- Visible focus states
- Accessible buttons with ARIA labels
- Sufficient color contrast
- Respects `prefers-reduced-motion` media query

## Brand Identity

All content is sourced from the official Tulas International School website (https://tis.edu.in/). The redesign preserves:
- Official school statistics
- Real testimonials from parents
- Actual rankings and awards
- Genuine contact information
- Authentic navigation structure
- Official colors and typography

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with default Next.js settings

### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `.next`

### GitHub Pages

Configure build and deployment scripts in `package.json` for static export.

## Development Notes

### Component Hierarchy

Components are organized by function:
- UI components are generic, reusable building blocks
- Layout components handle page structure
- Section components contain specific page sections
- Animation components provide motion effects

### Why Components Are Separated

- **Reusability**: UI components can be used across the project
- **Maintainability**: Smaller components are easier to understand and modify
- **Testing**: Isolated components are easier to test
- **Performance**: Smaller components enable better code splitting

### Animation Architecture

- Uses Framer Motion for declarative animations
- Motion values for performant state tracking
- Spring animations for natural feel
- Viewport-triggered animations for scroll effects
- Staggered delays for sequential reveals

### Custom Cursor Implementation

- Uses `useMousePosition` hook to track mouse coordinates
- Motion values with spring config for smooth following
- Media query check to disable on touch devices
- Hover detection for interactive element scaling
- Zero re-renders on mouse movement (motion values)

### Scroll Progress Implementation

- Uses `useScroll` hook from Framer Motion
- Motion value for scroll progress (0 to 1)
- Spring animation for smooth scaling
- Fixed positioning at top of viewport
- No React state updates on scroll (performance)

### State Management

- Local component state for interactive elements (mobile menu, testimonials)
- No global state management needed for this scope
- React hooks for data fetching and side effects

### Responsive Strategy

- Mobile-first approach in Tailwind CSS
- Responsive utilities (sm:, md:, lg:, xl:)
- Custom hooks for media queries
- Touch-friendly button sizes
- Optimized layouts for each breakpoint

### Data Architecture

- TypeScript data files for static content
- Centralized data sources in `src/data/`
- Components consume data via imports
- Easy to update content without touching components
- Type-safe data structures

### Performance Decisions

- Framer Motion over CSS animations for complex effects
- Motion values over React state for frequent updates
- CSS transforms over layout properties
- Minimal dependencies (only essential libraries)
- Static generation where possible
- Efficient animation timing (0.3s - 0.6s)

## License

This project is a redesign of the official Tulas International School website. All content belongs to Tulas International School.

## Credits

- Original website: [Tulas International School](https://tis.edu.in/)
- Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion
