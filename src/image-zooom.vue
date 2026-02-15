<script setup lang="ts">
import { computed, getCurrentInstance, ref, watch, useAttrs, toRef } from 'vue';
import type { ImageZooomProps } from './index.ts';
import useImageLoaded from './composables/useImageLoaded.ts';
import useCalculateZoom from './composables/useCalculateZoom.ts';
import usePreventBodyScroll from './composables/usePreventBodyScroll.ts';
import useZoomPosition from './composables/useZoomPosition.ts';

const props = withDefaults(defineProps<ImageZooomProps>(), {
  zoom: "200",
  id: undefined,
  fullWidth: false,
  alt: "This is an imageZoom image",
  width: "100%",
  height: "auto",
  errorMessage: "There was a problem loading your image",
  onError: undefined,
  theme: undefined,
});

const attrs = useAttrs();
const srcRef = toRef(props, 'src');
const instance = getCurrentInstance();
const uid = ref(instance?.uid);
const isLoaded = ref(false);
const isZoomed = ref(false);
const zoomPosition = ref('50% 50%');
const figureRef = ref<HTMLElement | null>(null);
const isTouchEventRef = ref<boolean>(false);

const imageState = useImageLoaded(srcRef, props.onError ?? props.onErrorCallback);
const naturalWidth = computed(() => imageState.value.naturalWidth || 0);
const calculatedZoom = useCalculateZoom(props.zoom, props.fullWidth, naturalWidth, figureRef);
usePreventBodyScroll(isZoomed, figureRef);
const { getZoomPosition } = useZoomPosition(figureRef);

watch(imageState, (newState) => {
    isLoaded.value = newState.imgData !== null;

    if (!newState.imgData && !newState.error) {
        isZoomed.value = false;
        zoomPosition.value = '50% 50%';
    }
});

const updatePosition = (
    e: MouseEvent | TouchEvent
) => {
    if (isZoomed.value) {
        const newPosition = getZoomPosition(e);
        if (newPosition) {
            zoomPosition.value = newPosition;
        }
    }
};

const toggleZoom = (e: MouseEvent | TouchEvent, isTouchEvent: boolean = false) => {
    if (isTouchEvent) {
        isTouchEventRef.value = true;
    }

    const newIsZoomed = !isZoomed.value;
    isZoomed.value = newIsZoomed;

    if (newIsZoomed) {
        const newPosition = getZoomPosition(e);
        if (newPosition) {
            zoomPosition.value = newPosition;
        }
    } else {
        zoomPosition.value = "50% 50%";
    }
};

const handleClick = (e: MouseEvent) => {
    if (isTouchEventRef.value) {
        isTouchEventRef.value = false;
        return;
    }
    toggleZoom(e);
};

const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 1) {
        toggleZoom(e, true);
    }
};

const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 1) {
        e.preventDefault();
        isTouchEventRef.value = true;

        if (isZoomed.value) {
            updatePosition(e);
        } else {
            handleTouchStart(e);
        }
    }
};

const handleTouchEnd = () => {
    isTouchEventRef.value = false;
    isZoomed.value = false;
    zoomPosition.value = "50% 50%";
};

const handleMove = (e: MouseEvent) => {
    updatePosition(e);
};

const handleMoveOut = () => {
    isTouchEventRef.value = false;
    isZoomed.value = false;
    zoomPosition.value = "50% 50%";
};

const normalize = (val: string | number | undefined, fallback: string) => {
    if (typeof val === 'number') return `${val}px`;
    if (typeof val === 'string' && val.trim().length > 0) return val;
    return fallback;
};

const figureStyle = computed(() => {
    const computedWidth = normalize(props.width, '100%');
    const computedHeight = normalize(props.height, 'auto');

    return {
        width: computedWidth,
        height: computedHeight,
        backgroundImage: isZoomed.value && imageState.value.imgData ? `url(${imageState.value.imgData})` : '',
        backgroundSize: calculatedZoom.value,
        backgroundPosition: zoomPosition.value,
        cursor: isZoomed.value ? 'zoom-out' : 'zoom-in'
    };
});

const errorStyle = computed(() => {
    return {
        width: props.fullWidth ? '100%' : typeof props.width === 'string' ? props.width : `${props.width}px`,
        height: typeof props.height === 'string' ? props.height : `${props.height}px`
    };
});

</script>

<template>
    <figure v-if="!imageState.error" :id="props.id || `image-zoom-${uid}`"
        :class="['image-zoom', { loaded: isLoaded, loading: !isLoaded, zoomed: isZoomed, fullView: !isZoomed }, props.theme?.root]"
        ref="figureRef" role="button" :aria-label="'Zoomable image: ' + alt" tabIndex="0" :style="figureStyle"
        @click="handleClick" @mousemove="handleMove" @mouseleave="handleMoveOut" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd" @touchcancel="handleTouchEnd" v-bind="attrs">
        <img v-if="imageState.imgData" loading="lazy" id="imageZoom" :class="props.theme?.image" :src="imageState.imgData" :alt="alt" :width="width" :height="height" />
    </figure>
    <div v-else class="error" :style="errorStyle">
        <slot name="error">
            <p class="image-zooom-error">{{ errorMessage }}</p>
        </slot>
    </div>
</template>

<style scoped>
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

div.error {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    border: 1px solid #eee;
    background-color: #f9f9f9;
    border-radius: 10px;
}

figure.image-zoom {
    position: relative;
    display: inline-block;
    width: auto;
    min-height: 25vh;
    background-position: 50% 50%;
    background-color: #eee;
    margin: 0;
    overflow: hidden;
    user-select: none;
    cursor: zoom-in;
}

figure.image-zoom.loaded {
    min-height: auto;
}

figure.image-zoom.zoomed {
    cursor: zoom-out;
}

figure.image-zoom::before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    z-index: 1;
}

figure.image-zoom::after {
    content: "";
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #333;
    border-right-color: #333;
    border-bottom-color: #333;
    opacity: 1;
    animation: rotate 2s linear infinite;
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
}

figure.image-zoom.loaded::before,
figure.image-zoom.loaded::after {
    opacity: 0;
}

figure.image-zoom img {
    opacity: 1;
    display: block;
}

figure.image-zoom.zoomed img {
    opacity: 0;
}

p.image-zooom-error {
    width: 100%;
    text-align: center;
    border: 1px solid #f8f8f8;
    padding: 8px 16px;
    border-radius: 8px;
    color: #555;
}
</style>