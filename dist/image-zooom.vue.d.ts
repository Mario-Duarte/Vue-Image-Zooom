import { ImageZooomProps } from './index.ts';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        error?(_: {}): any;
    };
    refs: {
        figureRef: HTMLElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('../vue/dist/vue.esm-bundler.js').DefineComponent<ImageZooomProps, {}, {}, {}, {}, import('../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<ImageZooomProps> & Readonly<{}>, {
    zoom: string | number;
    fullWidth: boolean;
    alt: string;
    width: string | number;
    height: string | number;
    id: string;
    onError: (error: Event | ErrorEvent) => void;
    errorMessage: string;
    theme: import('./index.ts').ImageZoomClasses;
}, {}, {}, {}, string, import('../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, false, {
    figureRef: HTMLElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
