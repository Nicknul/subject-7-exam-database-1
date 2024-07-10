// styleHandlers.ts
export function setVisible(element: HTMLElement, visible: boolean): void {
  element.style.visibility = visible ? 'visible' : 'hidden';
}

export function setTransformAndOpacity(
  element: HTMLElement,
  transform: string,
  opacity: string,
): void {
  element.style.transform = transform;
  element.style.opacity = opacity;
}

export function setWidth(element: HTMLElement, width: string): void {
  element.style.width = width;
}

export function applyTransformTransition(
  element: HTMLElement,
  scale: number,
  duration: string,
): void {
  element.style.transform = `scale(${scale})`;
  element.style.transition = `transform ${duration} ease`;
}
