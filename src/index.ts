import VueImageZooom from "./vue-image-zooom.vue";
import type { App } from "vue";

export interface VueImageZooomProps {
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

export default VueImageZooom;
export { VueImageZooom };

export const install = (app: App) => {
  app.component("VueImageZooom", VueImageZooom);
};
