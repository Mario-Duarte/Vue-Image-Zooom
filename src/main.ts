import { createApp } from 'vue'
import VueImageZooom from './vue-image-zooom.vue'

const app = createApp({
  components: {
    VueImageZooom
  },
  template: `
    <div>
      <h1>Vue Image Zoom Demo</h1>
      <VueImageZooom 
        src="https://via.placeholder.com/600x400" 
        alt="Demo image" 
        width="300" 
        height="200"
        zoom="2"
      />
    </div>
  `
})

app.mount('#app')