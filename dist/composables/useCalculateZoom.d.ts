import { Ref } from '../../vue/dist/vue.esm-bundler.js';
/**
 * Computes the zoom percentage for an image based on its natural width, container width,
 * and zoom settings. Returns a computed ref with the appropriate zoom value as a string percentage.
 *
 * @param zoom - The desired zoom level, either as a string or number.
 * @param fullWidth - Whether the image should be displayed at its full width.
 * @param naturalWidth - A reactive source for the natural width of the image.
 * @param elm - Optional reference to the container HTMLElement.
 * @returns A computed ref containing the zoom percentage as a string (e.g., "100%").
 */
declare function useCalculateZoom(zoom: string | number, fullWidth: boolean, naturalWidth: Ref<number>, elm?: Ref<HTMLElement | null>): import('../../vue/dist/vue.esm-bundler.js').ComputedRef<string>;
export default useCalculateZoom;
