import ImageZooom from "./image-zooom.vue";
import type { App } from "vue";

export type ImageZoomClasses = {
  root?: string;
  image?: string;
};

export interface ImageZooomProps {
  zoom?: string | number;
  fullWidth?: boolean;
  alt?: string;
  width?: string | number;
  height?: string | number;
  src: string;
  id?: string;
  /**
   * @deprecated Use the `onError` prop instead.
   */
  onErrorCallback?: (error: Event) => void;
  /** Callback fired when the image fails to load. */
  onError?: (error: Event | ErrorEvent) => void;
  errorMessage?: string;
  /** Optional theme object for custom styling classes on root and image elements. */
  theme?: ImageZoomClasses;
}

export default ImageZooom;
export { ImageZooom };

export const install = (app: App) => {
  app.component("ImageZooom", ImageZooom);
};
