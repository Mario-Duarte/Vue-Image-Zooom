import { createApp } from "vue";
import VueImageZooom from "./vue-image-zooom.vue";

const app = createApp({
  components: {
    VueImageZooom,
  },
  template: `
    <div>
      <h1 style="margin-bottom: 20px;">Vue Image Zoom Demo</h1>
      <div style="max-width: 600px;">
      <VueImageZooom 
        src="https://images.pexels.com/photos/32357295/pexels-photo-32357295.jpeg" 
        alt="Demo image" 
        width="300"
        height="200"
        zoom="250%"
      />
      </div>
    </div>
  `
});

app.mount("#app");
