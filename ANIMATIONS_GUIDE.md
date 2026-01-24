# Reveal Animations Guide

## Overview
Your website now has smooth, professional reveal animations across all sections using Framer Motion and custom Intersection Observer hooks.

## What Was Created

### 1. **Custom Hook: `useRevealAnimation.js`**
Located in: `src/hooks/useRevealAnimation.js`

This hook provides:
- **useRevealAnimation()** - Detects when elements enter viewport and triggers animations
- **useParallaxScroll()** - Creates parallax scroll effects
- **revealVariants** - Pre-configured Framer Motion animation variants
- **staggerContainerVariants** - Staggers child element animations
- **itemVariants** - Individual element reveal animations

### 2. **Global Animations: `animations.css`**
Located in: `src/styles/animations.css`

Provides:
- Smooth scroll behavior
- Fade-in, scale-in, and slide-up animations
- Hover lift effects
- Stagger delays for multiple elements
- Loading pulse animations

## Updated Sections

### Hero Section (Section 1)
- ✨ Staggered reveal animations for all slides
- 📜 Smooth entrance when section comes into view
- 🎯 Individual animations for text and images

### Welcome Section (Section 2)
- 📱 Parallax scroll effect on background
- 🎨 Staggered reveal for heading, subtitle, and paragraphs
- ✨ Smooth viewport detection triggers

### Success Stories Section (Section 3)
- 🎬 Animated slide transitions
- ⭐ Staggered star ratings animation
- 🔄 Smooth carousel slide changes

### Demo/Events Section (Section 4)
- 📅 Reveal animation for event card
- 🎯 Staggered reveal for heading, icon, and button
- ✨ Smooth viewport detection

### Footer
- 📝 Staggered footer content reveal
- 🔗 Smooth entrance for brand, links, and social icons
- ✨ Bottom section reveal animation

## How to Use

### Basic Usage in Components
```jsx
import { useRevealAnimation, staggerContainerVariants, itemVariants } from '../hooks/useRevealAnimation';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const { ref, isInView } = useRevealAnimation(0.3); // 0.3 = 30% visibility threshold

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainerVariants}
    >
      <motion.h1 variants={itemVariants}>Title</motion.h1>
      <motion.p variants={itemVariants}>Description</motion.p>
    </motion.div>
  );
};
```

### Available Thresholds
- `0.2` - Triggers when 20% visible (early reveal)
- `0.3` - Triggers when 30% visible (standard)
- `0.4` - Triggers when 40% visible (late reveal)
- `0.5` - Triggers when 50% visible (middle)

### Animation Configurations

**For containers:**
```jsx
variants={staggerContainerVariants}
// Staggered timing with 0.15s delay between children
```

**For individual items:**
```jsx
variants={itemVariants}
// 0.6s duration, ease-out timing
// Fades in and slides up from Y: 20px
```

**Custom variants:**
```jsx
const customVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};
```

## Animation Details

### Parallax Scrolling
Uses the `useParallaxScroll()` hook:
```jsx
const { ref, offsetY } = useParallaxScroll();

<section ref={ref} style={{ transform: `translateY(${offsetY}px)` }}>
```

### Viewport Detection
Intersection Observer with configurable thresholds:
- Automatically unobserves after triggering (one-time animation)
- Optional `rootMargin` for fine-tuning trigger point

## CSS Classes Available

Add these classes to HTML elements for animations:
- `.fade-in` - Opacity fade animation
- `.scale-in` - Scale up with fade
- `.slide-up` - Slide from bottom
- `.slide-down` - Slide from top
- `.rotate-in` - Rotate and scale
- `.hover-lift` - Lifts on hover
- `.stagger-item` - Auto-staggered with nth-child delays
- `.prevent-shift` - Prevents layout shift during animations

## Timing & Easing

All animations use smooth cubic-bezier curves:
- **Easing**: `ease-out` for entrances, `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy effects
- **Duration**: 
  - Fast: 0.3s
  - Standard: 0.6s
  - Slow: 0.9s
- **Stagger**: 0.15s between child items

## Browser Compatibility
- Modern Chrome, Firefox, Safari, Edge
- CSS transforms and animations (will-change support)
- Intersection Observer API (widely supported)

## Performance Tips
1. Use `will-change: transform` for animated elements
2. Limit number of simultaneously animating elements
3. Use `backface-visibility: hidden` to prevent flickering
4. Test on slower devices for optimal experience

## Customization
To adjust animation timing globally:
1. Edit `src/hooks/useRevealAnimation.js`
2. Modify `duration`, `ease`, or `delay` values
3. Update stagger timings in `staggerContainerVariants`

## Troubleshooting

**Animations not triggering?**
- Check threshold value (lower = triggers earlier)
- Verify `isInView` is being used in `animate` prop
- Ensure component has `ref` attached

**Animations too fast/slow?**
- Adjust `duration` in animation variants
- Change `delay` values for stagger effect

**Layout shifts during animations?**
- Add `will-change: transform` to CSS
- Use `.prevent-shift` class

---

All animations are production-ready and optimized for smooth performance! 🚀
