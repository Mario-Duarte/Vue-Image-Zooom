import { ref, watch } from "vue";

interface ImageLoaderState {
  imgData: string | null;
  error: boolean;
  naturalWidth: number;
  naturalHeight: number;
}

export default function imageLoader(
  src: string,
  onError?: (error: ErrorEvent) => void
) {
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

  const handleError = (error: ErrorEvent) => {
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

    if (!src) {
      return;
    }

    img = new Image();
    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);
    img.src = src;
  };

  watch(
    () => [src, onError],
    () => {
      loadImage();
    },
    { immediate: true }
  );
  return state;
}
