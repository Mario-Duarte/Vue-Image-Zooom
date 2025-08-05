import { Ref } from '../../vue/dist/vue.esm-bundler.js';
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
declare function useZoomPosition(elm?: Ref<HTMLElement | null>): {
    getZoomPosition: (e: MouseEvent | TouchEvent) => string | undefined;
};
export default useZoomPosition;
