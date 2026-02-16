import { MaybeRefOrGetter } from '../../vue/dist/vue.esm-bundler.js';
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
declare function usePreventBodyScroll(isZoomed: MaybeRefOrGetter<boolean>, elm?: MaybeRefOrGetter<HTMLElement | null>): void;
export default usePreventBodyScroll;
