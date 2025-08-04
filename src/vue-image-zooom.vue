<script setup lang="ts">
import { ref } from 'vue';
import type { VueImageZooomProps } from '.';
import imageLoader from './helpers/imageLoaded';

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
const imageState = imageLoader(src, onErrorCallback);

console.log({ zoom, fullWidth, alt, width, height, src, id, onErrorCallback });

</script>

<template>
    <figure :id="id" class="image-zoom" role="button" :aria-label="'Zoomable image: ' + alt" tabIndex="0"
        :style="{ minHeight: isLoaded ? '25vh' : 'auto', cursor: isZoomed ? 'zoom-out' : 'zoom-in' }">
        <img v-if="imageState.imgData" loading="lazy" id="imageZoom" :src="imageState.imgData" :alt="alt" :width="width" :height="height" />
    </figure>
</template>

<style scoped>
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
}
</style>