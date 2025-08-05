import { default as VueImageZooom } from './vue-image-zooom.vue';
import { App } from '../vue/dist/vue.esm-bundler.js';
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
export declare const install: (app: App) => void;
