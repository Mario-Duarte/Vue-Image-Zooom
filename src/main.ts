import { createApp, ref } from "vue";
import ImageZooom from "./image-zooom.vue";

const app = createApp({
  setup() {
    const selectedImg = ref("https://picsum.photos/seed/000/600/400");
    return {
      selectedImg,
    };
  },
  components: {
    ImageZooom,
  },
  template: `
    <div>
      <h1 style="margin-bottom: 20px;">Vue Image Zoom Demo</h1>
      <div style="max-width: 600px; display: flex; flex-direction: column; gap: 20px; align-items: flex-start;">
      <ImageZooom 
        :class="'custom-class'"
        :src="selectedImg" 
        alt="Demo image" 
        :width="300"
        zoom="250%"
      />
      <button @click="selectedImg = 'https://picsum.photos/seed/002/600/400'">Change Image</button>
      <ImageZooom 
        src="https://picsum.photos/sed/000/1920/1080" 
        alt="Demo image error" 
        :width="300"
        zoom="250%"
      />
      <ImageZooom 
        src="https://picsum.photos/seed/000/1920/1080" 
        alt="Demo image full width" 
        fullWidth
      />
      <ImageZooom 
        src="https://picsum.photos/sed/000/1920/1080" 
        alt="Demo image custom error" 
        fullWidth
        :onErrorCallback="(error) => console.error('Image load error:', error)"
        :errorMessage="'Custom error message: Image failed to load'"
      />
      </div>
    </div>
  `,
});

app.mount("#app");
