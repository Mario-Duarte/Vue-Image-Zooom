import { onUnmounted, watch, type Ref } from "vue";

/**
 * Composable to prevent body scrolling when a zoomed state is active.
 *
 * This function watches a `Ref<boolean>` indicating whether zoom is active,
 * and optionally a `Ref<HTMLElement | null>` for a specific element.
 * When zoom is active, it sets `document.body.style.overflow` to `"hidden"`
 * to prevent scrolling, and attaches a `touchmove` event listener to the element
 * to prevent touch scrolling. When zoom is inactive, it restores the original
 * overflow style and removes the event listener.
 *
 * The cleanup is handled automatically on component unmount.
 *
 * @param isZoomed - A Vue ref indicating whether zoom is active.
 * @param elm - (Optional) A Vue ref to an HTMLElement to attach the touchmove event listener.
 */

function usePreventBodyScroll(
  isZoomed: Ref<boolean>,
  elm?: Ref<HTMLElement | null>
) {
  const originalOverflow = getComputedStyle(document.body).overflow || "auto";

  const preventScroll = (e: TouchEvent) => {
    if (isZoomed.value) {
      e.preventDefault();
    }
  };

  watch([isZoomed], ([zoomed]) => {
    if (zoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
  });

  watch(
    () => elm?.value,
    (newElm, oldElm) => {
      if (oldElm) {
        oldElm.removeEventListener("touchmove", preventScroll);
      }
      if (!newElm) return;

      newElm.addEventListener("touchmove", preventScroll, { passive: false });
    },
    {
      immediate: true,
    }
  );

  onUnmounted(() => {
    document.body.style.overflow = originalOverflow;
    if (elm?.value) {
      elm.value.removeEventListener("touchmove", preventScroll);
    }
  });
}

export default usePreventBodyScroll;
