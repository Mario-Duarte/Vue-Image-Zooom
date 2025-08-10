import { MaybeRefOrGetter } from '../../vue/dist/vue.esm-bundler.js';
/**
 * Prevents body scrolling when a zoomed state is active.
 *
 * Watches a `Ref<boolean>` indicating whether zoom is active, and optionally a `Ref<TouchEvent | null>`
 * for a specific touch event. When zoom is active, sets `document.body.style.overflow` to `"hidden"`
 * to prevent scrolling, and calls a preventScroll handler if a touch event is provided.
 * When zoom is inactive, restores the original overflow style.
 *
 * Cleanup is handled automatically on component unmount.
 *
 * @param isZoomed - A Vue ref indicating whether zoom is active.
 * @param isTouchEventRef - A Vue ref to a TouchEvent to handle touchmove prevention (optional).
 */
declare function usePreventBodyScroll(isZoomed: MaybeRefOrGetter<boolean>, isTouchEventRef: MaybeRefOrGetter<TouchEvent | null>): void;
export default usePreventBodyScroll;
