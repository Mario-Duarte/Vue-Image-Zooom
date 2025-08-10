import { MaybeRefOrGetter } from '../../vue/dist/vue.esm-bundler.js';
/**
 * Loads an image from the specified source URL and tracks its loading state.
 *
 * @param src - The source URL of the image to load.
 * @param onError - Optional callback invoked when an error occurs during image loading.
 * @returns A Vue ref containing the image loading state, including image data, error status, and natural dimensions.
 *
 * The returned state object has the following properties:
 * - `imgData`: The loaded image's source URL, or `null` if not loaded or on error.
 * - `error`: Boolean indicating if an error occurred during loading.
 * - `naturalWidth`: The natural width of the loaded image.
 * - `naturalHeight`: The natural height of the loaded image.
 *
 * The image is reloaded whenever `src` or `onError` changes.
 */
interface ImageLoaderState {
    imgData: string | null;
    error: boolean;
    naturalWidth: number;
    naturalHeight: number;
}
declare function useImageLoaded(src: MaybeRefOrGetter<string | undefined>, onError?: (error: Event) => void): import('../../vue/dist/vue.esm-bundler.js').Ref<{
    imgData: string | null;
    error: boolean;
    naturalWidth: number;
    naturalHeight: number;
}, ImageLoaderState | {
    imgData: string | null;
    error: boolean;
    naturalWidth: number;
    naturalHeight: number;
}>;
export default useImageLoaded;
