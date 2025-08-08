import { ref, unref, watch, type Ref } from "vue";

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

function useImageLoaded(src: Ref<string | undefined>, onError?: (error: Event) => void) {
  const state = ref<ImageLoaderState>({
    imgData: null,
    error: false,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  let img: HTMLImageElement | null = null;

  const handleLoad = () => {
    if (img) {
      state.value = {
        imgData: img.src,
        error: false,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      };
    }
  };

  const handleError = (error: Event) => {
    state.value = {
      imgData: null,
      error: true,
      naturalWidth: 0,
      naturalHeight: 0,
    };
    onError?.(error);
  };

  const loadImage = () => {
    // Reset state
    state.value = {
      imgData: null,
      error: false,
      naturalWidth: 0,
      naturalHeight: 0,
    };

    if (img) {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    }

    const currentSrc = unref(src);
    if (!currentSrc) {
      return;
    }

    img = new Image();
    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);
    img.src = currentSrc;
  };

  watch(
    () => [unref(src)],
    () => {
      loadImage();
    },
    { immediate: true }
  );
  return state;
}

export default useImageLoaded;
