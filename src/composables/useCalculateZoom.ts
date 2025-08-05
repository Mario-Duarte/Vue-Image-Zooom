import { computed, onMounted, onUnmounted, ref, type Ref } from "vue";

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

function useCalculateZoom(
  zoom: string | number,
  fullWidth: boolean,
  naturalWidth: Ref<number>,
  elm?: Ref<HTMLElement | null>
) {
  const containerWidth = ref(0);
  let observer: ResizeObserver;

  onMounted(() => {
    if (elm?.value) {
      observer = new ResizeObserver((entries) => {
        if (entries[0]) {
          containerWidth.value = entries[0].contentRect.width;
        }
      });
      observer.observe(elm.value);
    }
  });

  onUnmounted(() => {
    if (observer && elm?.value) {
      observer.unobserve(elm.value);
    }
  });

  const zoomValue = computed(() => {
    if (!fullWidth || !naturalWidth || !containerWidth.value) return `${zoom}`;
    const zoomPercentage = (naturalWidth.value / containerWidth.value) * 100;
    return `${zoomPercentage < 100 ? zoom : zoomPercentage + "%"}`;
  });

  return zoomValue;
}

export default useCalculateZoom;
