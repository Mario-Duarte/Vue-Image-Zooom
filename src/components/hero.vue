<script setup lang="ts">
import ImageZooom from 'vue-image-zooom';

</script>

<template>
    <div class="min-h-[20dvh] w-full max-w-5xl flex flex-col items-center justify-center px-6 py-12">
        <img src="/logo.svg" alt="Vue Image Zooom Logo" class="w-12 h-12">
        <h1 class="text-4xl text-teal-700 font-bold mb-4 mt-4">&lt;ImageZoom&#x0002F;&gt;</h1>

        <a href="https://www.npmjs.com/package/vue-image-zooom" target="_blank"
            class="bg-slate-600 text-neutral-50 rounded-md px-2 py-1 mb-4">npm i vue-image-zooom</a>

        <p class="text-center mb-4">
            Simple Vue component that will allow users to zoom in on your images, perfect for product images and
            galleries!
        </p>
        <p class="text-center">
            Small and light weight!<br />
            Give it a try and check the docs <a href="https://github.com/Mario-Duarte/vue-image-zooom" target="_blank"
                class="text-rose-600 hover:underline">here</a>.
        </p>

    </div>

    <div class="h-auto w-full">
        <ImageZooom src="https://picsum.photos/seed/000/1920/1080" alt="Demo image full width" />
    </div>
</template>