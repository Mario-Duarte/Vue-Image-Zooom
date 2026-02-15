import { toValue, watch, onUnmounted, type MaybeRefOrGetter } from "vue";

/**
 * Prevents body scrolling when a zoomed state is active.
 *
 * When zoom is active, sets `document.body.style.overflow` to `"hidden"`
 * to prevent scrolling, and adds a touchmove event listener to the element
 * with `{ passive: false }` to prevent touch scrolling.
 * When zoom is inactive, restores the original overflow style.
 *
 * Cleanup is handled automatically on component unmount.
 *
 * @param isZoomed - A Vue ref indicating whether zoom is active.
 * @param elm - A Vue ref to the container HTMLElement for touch scroll prevention.
 */

function usePreventBodyScroll(
  isZoomed: MaybeRefOrGetter<boolean>,
  elm?: MaybeRefOrGetter<HTMLElement | null>,
) {
  const originalOverflow = getComputedStyle(document.body).overflow || "auto";

  watch([() => toValue(isZoomed)], ([zoomed]) => {
    if (zoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
  });

  let currentListener: ((e: TouchEvent) => void) | null = null;
  let currentElm: HTMLElement | null = null;

  const cleanup = () => {
    if (currentListener && currentElm) {
      currentElm.removeEventListener("touchmove", currentListener);
      currentListener = null;
      currentElm = null;
    }
  };

  watch([() => toValue(isZoomed), () => toValue(elm)], ([zoomed, el]) => {
    cleanup();

    if (!el) return;

    const preventScroll = (e: TouchEvent) => {
      if (zoomed && e.touches.length === 1) {
        e.preventDefault();
      }
    };

    if (zoomed) {
      el.addEventListener("touchmove", preventScroll, { passive: false });
      currentListener = preventScroll;
      currentElm = el;
    }
  });

  onUnmounted(() => {
    document.body.style.overflow = originalOverflow;
    cleanup();
  });
}

export default usePreventBodyScroll;
