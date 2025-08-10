import { toValue, type MaybeRefOrGetter } from "vue";

/**
 * Composable function to calculate the zoom position as a percentage string
 * based on mouse or touch events relative to a given HTML element.
 *
 * @param elm - A Vue ref to an HTMLElement or null. The element to calculate the zoom position within.
 * @returns An object containing the `getZoomPosition` function.
 *
 * @function getZoomPosition
 * @param e - The mouse or touch event to calculate the position from.
 * @returns A string representing the x and y position as percentages (e.g., "50% 50%"),
 *          clamped between 0% and 100%. Returns `undefined` if the element is not available.
 */

function useZoomPosition(elm?:  MaybeRefOrGetter<HTMLElement | null>) {
  const getZoomPosition = (e: MouseEvent | TouchEvent) => {
    const el = elm ? toValue(elm) : null;
    if (!el) return;

    const zoomer = el.getBoundingClientRect();
    let x: number, y: number;

    const isTouchEvent = (
      event: MouseEvent | TouchEvent
    ): event is TouchEvent => "touches" in event;

    if (isTouchEvent(e)) {
      const touch = e.touches[0];
      x = ((touch.clientX - zoomer.x) / zoomer.width) * 100;
      y = ((touch.clientY - zoomer.y) / zoomer.height) * 100;
    } else {
      x = (((e as MouseEvent).clientX - zoomer.x) / zoomer.width) * 100;
      y = (((e as MouseEvent).clientY - zoomer.y) / zoomer.height) * 100;
    }

    return `${Math.max(0, Math.min(x, 100))}% ${Math.max(
      0,
      Math.min(y, 100)
    )}%`;
  };

  return { getZoomPosition };
}

export default useZoomPosition;
