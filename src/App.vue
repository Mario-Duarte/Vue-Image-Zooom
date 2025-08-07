<script setup lang="ts">
import VueImageZooom from 'vue-image-zooom'
</script>

<template>
    <div>
        <h1 style="margin-bottom: 20px;">Vue Image Zoom Demo</h1>
        <div style="max-width: 600px; display: flex; flex-direction: column; gap: 20px; align-items: flex-start;">
            <VueImageZooom src="https://images.pexels.com/photos/32357295/pexels-photo-32357295.jpeg" alt="Demo image"
                :width="300" :height="200" zoom="250%" />
            <VueImageZooom src="https://images.pexsels.com/photos/32357295/pexels-photo-32357295.jpeg"
                alt="Demo image error" :width="300" :height="200" zoom="250%" />
            <VueImageZooom src="https://images.pexels.com/photos/32357295/pexels-photo-32357295.jpeg"
                alt="Demo image full width" fullWidth />
            <VueImageZooom src="https://images.pexsels.com/photos/32357295/pexels-photo-32357295.jpeg"
                alt="Demo image custom error" fullWidth
                :onErrorCallback="(error: Error) => console.error('Image load error:', error)"
                :errorMessage="'Custom error message: Image failed to load'" />
        </div>
    </div>
</template>