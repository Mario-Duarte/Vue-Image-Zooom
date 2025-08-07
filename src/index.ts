import ImageZooom from "./image-zooom.vue";
import type { App } from "vue";

export interface ImageZooomProps {
  zoom?: string | number;
  fullWidth?: boolean;
  alt?: string;
  width?: string | number;
  height?: string | number;
  src: string;
  id?: string;
  onErrorCallback?: (error: Event) => void;
  errorMessage?: string;
}

export default ImageZooom;
export { ImageZooom };

export const install = (app: App) => {
  app.component("ImageZooom", ImageZooom);
};
