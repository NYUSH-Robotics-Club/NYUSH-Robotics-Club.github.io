// FLIP Animation Helper (First-Last-Invert-Play)
// Utility for smooth card expansion animations

export interface FLIPState {
  first: DOMRect;
  last: DOMRect;
  invert: { x: number; y: number; scaleX: number; scaleY: number };
}

/**
 * Get the initial (First) position and dimensions of an element
 */
export function getFirstRect(element: HTMLElement): DOMRect {
  return element.getBoundingClientRect();
}

/**
 * Calculate the invert transform needed to animate from first to last position
 */
export function calculateInvert(first: DOMRect, last: DOMRect): {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
} {
  const scaleX = first.width / last.width;
  const scaleY = first.height / last.height;
  const x = first.left - (last.left + (last.width - first.width) / 2);
  const y = first.top - (last.top + (last.height - first.height) / 2);

  return { x, y, scaleX, scaleY };
}

/**
 * Apply invert transform to element
 */
export function applyInvert(
  element: HTMLElement,
  invert: { x: number; y: number; scaleX: number; scaleY: number }
): void {
  element.style.transform = `translate(${invert.x}px, ${invert.y}px) scale(${invert.scaleX}, ${invert.scaleY})`;
  element.style.transformOrigin = 'center center';
}

/**
 * Play the animation by removing the invert transform
 */
export function play(element: HTMLElement): void {
  element.style.transform = '';
  element.style.transition = 'transform 0.4s cubic-bezier(0.6, 0.01, 0.05, 0.95)';
}

/**
 * Complete FLIP animation sequence
 */
export function flipAnimation(
  element: HTMLElement,
  targetRect: DOMRect,
  callback?: () => void
): void {
  const first = getFirstRect(element);
  const invert = calculateInvert(first, targetRect);
  
  // Apply invert immediately
  applyInvert(element, invert);
  
  // Force reflow
  element.offsetHeight;
  
  // Play animation
  requestAnimationFrame(() => {
    play(element);
    if (callback) {
      setTimeout(callback, 400);
    }
  });
}

