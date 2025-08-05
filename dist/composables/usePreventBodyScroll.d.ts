import { Ref } from '../../vue/dist/vue.esm-bundler.js';
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
declare function usePreventBodyScroll(isZoomed: Ref<boolean>, elm?: Ref<HTMLElement | null>): void;
export default usePreventBodyScroll;
