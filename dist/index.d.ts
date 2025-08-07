import { default as ImageZooom } from './image-zooom.vue';
import { App } from '../vue/dist/vue.esm-bundler.js';
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
export declare const install: (app: App) => void;
