<script setup lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="w-full bg-slate-600 py-8 p-x-6">
            <div class="max-w-5xl mx-auto text-center">
                <p class="text-md text-white">Made with ❤️ by Mario Duarte &copy; {{ currentYear }}</p>
            </div>
    </footer>
</template>