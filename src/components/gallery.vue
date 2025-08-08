<script setup lang="ts">
import ImageZooom from 'vue-image-zooom';

</script>

<template>
    <h2 class="text-2xl text-teal-700 font-bold mb-4 mt-6">
                Here is an example of a custom gallery:
            </h2>

            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/006/1920/1080"
                    alt="A image to apply the ImageZoom plugin" zoom="300" />
                <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/007/1920/1080"
                    alt="A image to apply the ImageZoom plugin" zoom="300" />
                <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/008/1920/1080"
                    alt="A image to apply the ImageZoom plugin" zoom="300" />
                <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/009/1920/1080"
                    alt="A image to apply the ImageZoom plugin" zoom="300" />
            </div>

            <VCodeBlock class="w-full mt-4" :code='`<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/006/1920/1080"
    alt="A image to apply the ImageZoom plugin" zoom="300" />
    <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/007/1920/1080"
    alt="A image to apply the ImageZoom plugin" zoom="300" />
    <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/008/1920/1080"
    alt="A image to apply the ImageZoom plugin" zoom="300" />
    <ImageZooom className="border-10 border-black" src="https://picsum.photos/seed/009/1920/1080"
    alt="A image to apply the ImageZoom plugin" zoom="300" />
</div>`' label="Custom gallery code:" lang="javascript" />
</template>