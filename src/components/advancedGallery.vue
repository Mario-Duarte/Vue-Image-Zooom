<script setup lang="ts">
import { ref } from 'vue'
import ImageZooom from 'vue-image-zooom';

const selectedImage = ref<string>('https://picsum.photos/seed/010/1920/1080');
</script>

<template>
    <h2 class="text-2xl text-teal-700 font-bold mb-4 mt-6">Here is a more advanced example with image picker:
    </h2>

    <div class="w-full grid grid-cols-[0.95fr_3fr] grid-rows-1 gap-4 p-6 bg-stone-200 rounded-sm">
        <div class="flex flex-col gap-2">
            <img class="border-5 border-white cursor-pointer" src="https://picsum.photos/seed/010/1920/1080"
                alt="A placeholder" @click="selectedImage = 'https://picsum.photos/seed/010/1920/1080'" />
            <img class="border-5 border-white cursor-pointer" src="https://picsum.photos/seed/011/1920/1080"
                alt="A placeholder" @click="selectedImage = 'https://picsum.photos/seed/011/1920/1080'" />
            <img class="border-5 border-white cursor-pointer" src="https://picsum.photos/seed/012/1920/1080"
                alt="A placeholder" @click="selectedImage = 'https://picsum.photos/seed/012/1920/1080'" />
        </div>
        <div class="flex flex-row justify-start">
            <ImageZooom class="border-10 border-white" :src="selectedImage" alt="Selected image" />
        </div>
    </div>

    <VCodeBlock class="w-full mt-4" :code="`<script setup lang=&quot;ts&quot;>
import { ref } from 'vue'
import ImageZooom from 'vue-image-zooom';

const selectedImage = ref<string>('https://picsum.photos/seed/010/1920/1080');
</script>

<template>
    <div class=&quot;w-full grid grid-cols-[0.95fr_3fr] grid-rows-1 gap-4 p-6 bg-stone-200 rounded-sm&quot;>
        <div class=&quot;flex flex-col gap-2&quot;>
            <img class=&quot;border-5 border-white cursor-pointer&quot; src=&quot;https://picsum.photos/seed/010/1920/1080&quot; alt=&quot;A placeholder&quot;
                @click=&quot;selectedImage = 'https://picsum.photos/seed/010/1920/1080'&quot; />
            <img class=&quot;border-5 border-white cursor-pointer&quot; src=&quot;https://picsum.photos/seed/011/1920/1080&quot; alt=&quot;A placeholder&quot;
                @click=&quot;selectedImage = 'https://picsum.photos/seed/011/1920/1080'&quot; />
            <img class=&quot;border-5 border-white cursor-pointer&quot; src=&quot;https://picsum.photos/seed/012/1920/1080&quot; alt=&quot;A placeholder&quot;
                @click=&quot;selectedImage = 'https://picsum.photos/seed/012/1920/1080'&quot; />
        </div>
        <div class=&quot;flex flex-row justify-start&quot;>
            <ImageZooom class=&quot;border-10 border-white&quot; :src=&quot;selectedImage&quot; alt=&quot;Selected image&quot; />
        </div>
    </div>
</template>`" label="Interactive gallery code example:" lang="javascript" />
</template>
