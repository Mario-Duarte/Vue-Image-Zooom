import { computed } from "vue";

/**
 * Computes the zoom percentage for an image based on its natural width, container width,
 * and zoom settings. Returns a computed ref with the appropriate zoom value as a string percentage.
 *
 * @param zoom - The desired zoom level, either as a string or number.
 * @param fullWidth - Whether the image should be displayed at its full width.
 * @param naturalWidth - The natural width of the image in pixels.
 * @param containerRef - Optional reference to the container HTMLElement.
 * @returns A computed ref containing the zoom percentage as a string (e.g., "100%").
 */

function useCalculateZoom(
  zoom: string | number,
  fullWidth: boolean,
  naturalWidth: number,
  containerRef?: HTMLElement | null
) {
  return computed(() => {
    const containerWidth = containerRef?.clientWidth || 0;

    if ((fullWidth || !!naturalWidth) && !!containerWidth) {
      const zoomPercentage = (naturalWidth / containerWidth) * 100;
      return `${zoomPercentage < 100 ? zoom : zoomPercentage}%`;
    }

    return `${zoom}%`;
  });
}

export default useCalculateZoom;
