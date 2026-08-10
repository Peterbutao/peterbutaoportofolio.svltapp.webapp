/**
 * Accessibility utilities for keyboard navigation and screen reader support
 */

/**
 * Detect if user is navigating with keyboard
 */
export function isKeyboardUser(): boolean {
  return typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Add keyboard event listeners for better navigation
 */
export function setupKeyboardNavigation() {
  if (typeof window === 'undefined') return;

  // Handle Escape key for closing modals/menus
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Dispatch custom event for components to listen to
      document.dispatchEvent(new CustomEvent('escape-key'));
    }
  });

  // Handle focus trap for modals
  document.addEventListener('focusin', (e) => {
    const modal = document.querySelector('[role="dialog"]');
    if (modal && !modal.contains(e.target as Node)) {
      // If focus moves outside modal, trap it inside
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  });
}

/**
 * Create a skip link for keyboard users
 */
export function createSkipLink(targetId: string = 'main-content'): HTMLElement {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.setAttribute('aria-label', 'Skip to main content');
  
  // Style the skip link
  Object.assign(skipLink.style, {
    position: 'absolute',
    top: '-40px',
    left: '0',
    background: '#000',
    color: '#fff',
    padding: '8px',
    zIndex: '100',
    transition: 'top 0.3s'
  });

  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });

  return skipLink;
}

/**
 * Announce messages to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Trap focus within an element (for modals, dropdowns, etc.)
 */
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  
  // Return cleanup function
  return () => element.removeEventListener('keydown', handleKeyDown);
}

/**
 * Check if element is visible for screen readers
 */
export function isVisuallyHidden(element: HTMLElement): boolean {
  return element.offsetParent === null;
}

/**
 * Add visually hidden class for screen reader only content
 */
export function addScreenReaderOnlyStyles() {
  if (document.querySelector('#sr-only-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'sr-only-styles';
  style.textContent = `
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    
    /* Focus visible styles for keyboard navigation */
    :focus-visible {
      outline: 2px solid var(--yl);
      outline-offset: 2px;
    }
    
    /* Hide custom cursor for keyboard users */
    @media (prefers-reduced-motion: reduce) {
      .cursor-blob {
        display: none !important;
      }
      
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
  
  document.head.appendChild(style);
}
