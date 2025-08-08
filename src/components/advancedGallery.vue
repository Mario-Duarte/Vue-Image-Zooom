<script setup lang="ts">
import { ref } from 'vue'
import ImageZooom from 'vue-image-zooom';

const selectedImage = ref<string>('https://picsum.photos/seed/010/1920/1080');
</script>

<template>
    <div class="w-full grid grid-cols-[0.95fr_3fr] grid-rows-1 gap-4 p-6 bg-stone-200 rounded-sm">
        <div class="flex flex-col gap-2">
            <img class="border-5 border-white cursor-pointer" src="https://picsum.photos/seed/010/1920/1080" alt="A placeholder"
                @click="selectedImage = 'https://picsum.photos/seed/010/1920/1080'" />
            <img class="border-5 border-white cursor-pointer" src="https://picsum.photos/seed/011/1920/1080" alt="A placeholder"
                @click="selectedImage = 'https://picsum.photos/seed/011/1920/1080'" />
            <img class="border-5 border-white cursor-pointer" src="https://picsum.photos/seed/012/1920/1080" alt="A placeholder"
                @click="selectedImage = 'https://picsum.photos/seed/012/1920/1080'" />
        </div>
        <div>
            <ImageZooom class="border-10 border-white" :src="selectedImage" alt="Selected image" />
        </div>
    </div>
</template>