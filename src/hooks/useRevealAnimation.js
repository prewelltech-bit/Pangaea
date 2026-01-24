import { useEffect, useRef, useState } from 'react';

/**
 * Easy Direction Variants - Simple animation directions
 * Usage: const variants = getDirectionVariants('up');
 */
export const getDirectionVariants = (direction = 'up', distance = 40) => {
  const directions = {
    // Vertical movements
    up: { 
      hidden: { opacity: 0, y: distance },
      visible: { opacity: 1, y: 0 }
    },
    down: { 
      hidden: { opacity: 0, y: -distance },
      visible: { opacity: 1, y: 0 }
    },
    // Horizontal movements
    left: { 
      hidden: { opacity: 0, x: -distance },
      visible: { opacity: 1, x: 0 }
    },
    right: { 
      hidden: { opacity: 0, x: distance },
      visible: { opacity: 1, x: 0 }
    },
  };

  const baseVariant = directions[direction] || directions.up;
  
  return {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
};

/**
 * Custom hook for reveal animations on scroll
 * Triggers animation when element comes into viewport
 */
export const useRevealAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isInView };
};

/**
 * Animation variants for Framer Motion
 */
export const revealVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Parallax scroll effect hook
 */
export const useParallaxScroll = () => {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollPosition = window.innerHeight - rect.top;
        setOffsetY(scrollPosition * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, offsetY };
};
