/**
 * Shared animation utilities for GSAP animations
 * Reduces code duplication across components
 */

import type { gsap as GSAPType } from 'gsap';

export interface CursorRefs {
  cursorRef: HTMLDivElement | null;
}

export interface GlassRefs {
  glassRef: HTMLDivElement | null;
  glowRef: HTMLDivElement | null;
}

export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
}

/**
 * Initialize cursor animation
 */
export function initCursorAnimation(gsap: GSAPType, cursorRef: HTMLDivElement | null) {
  if (!cursorRef) return;
  gsap.set(cursorRef, { 
    xPercent: -50, 
    yPercent: -50, 
    x: window.innerWidth / 2, 
    y: window.innerHeight / 2,
    scale: 0 
  });
}

/**
 * Handle cursor movement on page
 */
export function onPageMove(gsap: GSAPType, cursorRef: HTMLDivElement | null, e: MouseEvent) {
  if (!gsap || !cursorRef) return;
  gsap.to(cursorRef, { 
    x: e.clientX, 
    y: e.clientY, 
    scale: 1, 
    duration: 0.35, 
    ease: 'power3.out' 
  });
}

/**
 * Handle cursor leaving page
 */
export function onPageLeave(gsap: GSAPType, cursorRef: HTMLDivElement | null) {
  if (!gsap || !cursorRef) return;
  gsap.to(cursorRef, { 
    scale: 0, 
    duration: 0.25, 
    ease: 'power2.out' 
  });
}

/**
 * Handle glass card tilt effect
 */
export function onGlassMove(
  gsap: GSAPType, 
  glassRef: HTMLDivElement | null, 
  glowRef: HTMLDivElement | null, 
  cursorRef: HTMLDivElement | null,
  e: MouseEvent,
  config: AnimationConfig = {}
) {
  if (!gsap || !glassRef || !glowRef) return;
  const r = glassRef.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;

  const { duration = 0.45, ease = 'power2.out' } = config;

  gsap.to(glassRef, {
    rotateX: ((y - r.height / 2) / r.height) * -6,
    rotateY: ((x - r.width / 2) / r.width) * 8,
    duration,
    ease
  });

  gsap.to(glowRef, {
    x: x - r.width / 2,
    y: y - r.height / 2,
    duration,
    ease
  });

  if (cursorRef) {
    gsap.to(cursorRef, { scale: 1.7, duration: 0.3, ease: 'power2.out' });
  }
}

/**
 * Reset glass card tilt effect
 */
export function onGlassLeave(
  gsap: GSAPType,
  glassRef: HTMLDivElement | null,
  glowRef: HTMLDivElement | null,
  cursorRef: HTMLDivElement | null
) {
  if (!gsap || !glassRef || !glowRef) return;
  gsap.to(glassRef, { 
    rotateX: 0, 
    rotateY: 0, 
    duration: 0.6, 
    ease: 'elastic.out(1, 0.5)' 
  });
  gsap.to(glowRef, { 
    x: 0, 
    y: 0, 
    duration: 0.6, 
    ease: 'power2.out' 
  });
  
  if (cursorRef) {
    gsap.to(cursorRef, { scale: 1, duration: 0.3, ease: 'power2.out' });
  }
}

/**
 * Set cursor mode (active/default)
 */
export function setCursorMode(
  gsap: GSAPType,
  cursorRef: HTMLDivElement | null,
  mode: 'default' | 'active'
) {
  if (!gsap || !cursorRef) return;
  cursorRef.classList.toggle('is-active', mode === 'active');
  gsap.to(cursorRef, {
    scale: mode === 'active' ? 1.7 : 1,
    duration: 0.25,
    ease: 'power2.out'
  });
}

/**
 * Magnetic button effect
 */
export function magnet(gsap: GSAPType, btn: HTMLAnchorElement, e: MouseEvent) {
  if (!gsap) return;
  const r = btn.getBoundingClientRect();
  gsap.to(btn, {
    x: (e.clientX - r.left - r.width / 2) * 0.3,
    y: (e.clientY - r.top - r.height / 2) * 0.3,
    duration: 0.4,
    ease: 'power3.out'
  });
}

/**
 * Reset magnetic button effect
 */
export function unMagnet(gsap: GSAPType, btn: HTMLAnchorElement) {
  if (!gsap) return;
  gsap.to(btn, { 
    x: 0, 
    y: 0, 
    duration: 0.7, 
    ease: 'elastic.out(1, 0.4)' 
  });
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Setup cursor hover targets
 */
export function setupCursorTargets(
  gsap: GSAPType,
  cursorRef: HTMLDivElement | null,
  setMode: (mode: 'default' | 'active') => void
) {
  if (!gsap || !cursorRef) return;
  
  const hoverTargets = Array.from(document.querySelectorAll('a, button, .page-section, .page-glass'));
  hoverTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => setMode('active'));
    target.addEventListener('mouseleave', () => setMode('default'));
  });
}

/**
 * Staggered entrance animation
 */
export function staggeredEntrance(
  gsap: GSAPType,
  elements: NodeListOf<Element>,
  config: AnimationConfig = {}
) {
  if (!gsap || !elements.length) return;
  
  const { duration = 0.6, ease = 'power2.out', delay = 0 } = config;
  
  gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration, stagger: 0.06, delay, ease }
  );
}

/**
 * Code text entrance animation
 */
export function codeEntrance(
  gsap: GSAPType,
  element: HTMLElement,
  config: AnimationConfig = {}
) {
  if (!gsap || !element) return;
  
  const { duration = 1.2, ease = 'elastic.out(1,0.5)', delay = 0.1 } = config;
  
  gsap.fromTo(
    element,
    { opacity: 0, scale: 1.8, y: -36, rotate: -10 },
    { opacity: 1, scale: 1, y: 0, rotate: 0, duration, ease, delay }
  );
}
