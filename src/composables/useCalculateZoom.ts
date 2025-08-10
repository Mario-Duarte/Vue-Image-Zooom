import { computed, onMounted, onUnmounted, ref, toValue, type MaybeRefOrGetter, type Ref } from "vue";

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
  zoom: MaybeRefOrGetter<string | number>,
  fullWidth: MaybeRefOrGetter<boolean>,
  naturalWidth: MaybeRefOrGetter<number>,
  elm?: MaybeRefOrGetter<HTMLElement | null>
) {
  const containerWidth = ref(0);
  let observer: ResizeObserver | undefined;

  onMounted(() => {
    const el = elm ? toValue(elm) : null;
    if (el) {
      observer = new ResizeObserver((entries) => {
        if (entries[0]) {
          containerWidth.value = entries[0].contentRect.width;
        }
      });
      observer.observe(el);
    }
  });

  onUnmounted(() => {
    const el = elm ? toValue(elm) : null;
    if (observer && el) {
      observer.unobserve(el);
    }
  });

  const zoomValue = computed(() => {
    const z = toValue(zoom);
    const fw = toValue(fullWidth);
    const nw = toValue(naturalWidth) ?? 0;

    if (!fw || !containerWidth.value || !nw) return `${z}`;

    const zoomPercentage = (nw / containerWidth.value) * 100;
    return `${zoomPercentage < 100 ? z : zoomPercentage + "%"}`;
  });

  return zoomValue;
}

export default useCalculateZoom;
