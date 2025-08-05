<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { VueImageZooomProps } from '.';
import useImageLoaded from './composables/useImageLoaded';
import useCalculateZoom from './composables/useCalculateZoom';
import usePreventBodyScroll from './composables/usePreventBodyScroll';
import useZoomPosition from './composables/useZoomPosition';

const {
    zoom = "200",
    fullWidth = false,
    alt = "This is an imageZoom image",
    width = "100%",
    height = "auto",
    src,
    id,
    onErrorCallback
} = defineProps<VueImageZooomProps>();

const isLoaded = ref(false);
const isZoomed = ref(false);
const zoomPosition = ref('50% 50%');
const figureRef = ref<HTMLElement | null>(null);
const isTouchEventRef = ref(false);

const imageState = useImageLoaded(src, onErrorCallback);
const naturalWidth = computed(() => imageState.value.naturalWidth || 0);
const calculatedZoom = useCalculateZoom(zoom, fullWidth, naturalWidth, figureRef);
usePreventBodyScroll(isZoomed, figureRef);


console.log({ zoom, fullWidth, alt, width, height, src, id, onErrorCallback });

watch(imageState, (newState) => {
    isLoaded.value = newState.imgData !== null;
});

watch([isZoomed, calculatedZoom], ([zoomed, zoom]) => {
    console.log({ zoomed, zoom });
});

const toggleZoom = () => {
    isZoomed.value = !isZoomed.value;
};

const updatePosition = (
    e: MouseEvent | TouchEvent
) => {
    if (isZoomed.value) {
        const newPosition = useZoomPosition(figureRef);
        if (newPosition) {
            zoomPosition.value = newPosition.getZoomPosition(e) ?? '';
        }
    }
};

const handleMove = (e: MouseEvent | TouchEvent) => {
    updatePosition(e);
};

const handleMoveOut = () => {
    isTouchEventRef.value = false;
    isZoomed.value = false;
    zoomPosition.value = "50% 50%";
};

const figureStyle = computed(() => {
    return {
      backgroundImage: isZoomed.value && imageState.value.imgData ? `url(${imageState.value.imgData})` : '',
      backgroundSize: calculatedZoom.value,
      backgroundPosition: zoomPosition.value,
      cursor: isZoomed.value ? 'zoom-out' : 'zoom-in'
    };
});

</script>

<template>
    <figure
        v-show="!imageState.error"
        :id="id" 
        :class="['image-zoom', { loaded: isLoaded, zoomed: isZoomed }]" 
        ref="figureRef" 
        role="button"
        :aria-label="'Zoomable image: ' + alt" tabIndex="0" 
        :style="figureStyle"
        @mousemove="handleMove"
        @mouseleave="handleMoveOut"
        @click="toggleZoom">
        <img v-if="imageState.imgData" loading="lazy" id="imageZoom" :src="imageState.imgData" :alt="alt" :width="width"
            :height="height"/>
    </figure>
    <div v-show="imageState.error" class="error">
        <p>There was a problem loading your image</p>
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
    width: 100%;
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
</style>