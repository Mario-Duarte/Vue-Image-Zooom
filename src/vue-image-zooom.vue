<script setup lang="ts">
import { ref } from 'vue';
import type { VueImageZooomProps } from '.';

const { zoom, fullWidth, alt, width, height, src, id, onErrorCallback } = defineProps<VueImageZooomProps>();

const imgData = ref<string | null>(null);

console.log({zoom, fullWidth, alt, width, height, src, id, onErrorCallback});

</script>

<template>
    <figure :id="id" role="button" :aria-label="'Zoomable image: ' + alt" tabIndex={0}>
        <img v-if="imgData" loading="lazy" id="imageZoom" :src="imgData" :alt="alt" :width="width" :height="height"
            $isZoomed={isZoomed} />
    </figure>
</template>

<style scoped></style>