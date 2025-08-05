<script setup lang="ts">
import { ref, watch, type VNodeRef } from 'vue';
import type { VueImageZooomProps } from '.';
import useImageLoaded from './helpers/useImageLoaded';
import useCalculateZoom from './helpers/useCalculateZoom';

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
const figureRef = ref<VNodeRef | null>(null);

const imageState = useImageLoaded(src, onErrorCallback);
const calculatedZoom = useCalculateZoom(zoom, fullWidth, imageState.value.naturalWidth, figureRef.value);

console.log({ zoom, fullWidth, alt, width, height, src, id, onErrorCallback });
console.log({ 'value': calculatedZoom.value });


watch(imageState, (newState) => {
    isLoaded.value = newState.imgData !== null;
});

</script>

<template>
    <figure :id="id" :class="['image-zoom', { loaded: isLoaded, zoomed: isZoomed }]" :ref="figureRef" role="button"
        :aria-label="'Zoomable image: ' + alt" tabIndex="0" :style="{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }"
        @click="isZoomed = !isZoomed" @touchstart="isZoomed = !isZoomed">
        <img v-if="imageState.imgData" loading="lazy" id="imageZoom" :src="imageState.imgData" :alt="alt" :width="width"
            :height="height" :style="{ opacity: isZoomed ? 1 : 0 }" />
    </figure>
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
    display: block;
}
</style>