# ![Logo-ImageZooom](https://github.com/Mario-Duarte/Vue-Image-Zooom/blob/main/public/logo28.png?raw=true) Image-Zooom a Vue3 Component

[![react-image-zooom](https://nodei.co/npm/vue-image-zooom.png)](https://www.npmjs.com/package/vue-image-zooom)

Simple Vue3 component that will allow users to zoom in on your images, perfect for product images and galleries!

Small and light weight Vue port of [React-Image-Zooom](https://github.com/Mario-Duarte/react-image-zooom) component.

[![npm version](https://badge.fury.io/js/vue-image-zooom.svg)](https://www.npmjs.com/package/vue-image-zooom) 
[![https://img.shields.io/github/issues-raw/mario-duarte/vue-image-zooom](https://img.shields.io/github/issues-raw/mario-duarte/vue-image-zooom)](https://www.npmjs.com/package/vue-image-zooom) 

<a href="https://www.buymeacoffee.com/marioduarte"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" height="32px" alt="Buy me a coffee"></a><br/>
[Buy me a coffee to keep me going!](https://www.paypal.com/paypalme/MarioDuarte/2)

## How it works?

This component has a very minimal styling footprint only setting the minimum to make it work, and you can extend the styling to fit your needs.

For extra customization this component it will also add extra classes dynamically depending on its state.

It will have the class `loading` while the image is been preloaded and `loaded` once it has been loaded.

Additionally it will have the class `fullview` while the user has not initiated the zoom and `zoomed` once the user has taped/clicked in.

On touch enabled devices users can use one finger to zoom in and move the zoom location by dragging the finder on the image, this will disable the scrolling. Touching with more than 1 finger on the image will not activate the zoom and page will scroll as normal, this was decided this way as it is easier to use one finger to zoom and drag on the image.

### v1.4.0

Change log:
- Fixed issue where dynamicly changing the src attribute in the component would not cause the component to re-render due to the props of the `ImageZooom` been destructured and losing the ref status.

### v1.3.0

Change log:
- Passing attributes properly down to the `figure` tag using `useAttrs`
- Clarified fullWidth behavior: when fullWidth is true the zoom fits the image’s natural width to the container, it does not upscale images smaller than the container and will fall back to the provided zoom value.
- Sizing and defaults
    - `width`/`height` props accept string | number and are normalized in `image-zooom.vue` (numbers become px; empty strings fall back to 100%/auto).
The rendered `<img>` uses `width: 100%; height: auto;` inside the figure.

### V1.2.0

Change log:
- Renamed the package from `VueImageZooom` to `ImageZooom` and updated documentation.

## How to use

You can register the component globally as a plugin or import it directly into your components.


### 1. Install

```shell
npm i vue-image-zooom
```

### 2. Global Registration

In your main entry file (e.g., `main.ts`):

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ImageZooom from 'image-zooom'

const app = createApp(App)

app.use(ImageZooom)
app.mount('#app')
```

Then you can use it anywhere in your application:

```typescript
<template>
  <ImageZooom 
    src="path/to/your/image.jpg" 
    alt="A beautiful image" 
    :width="400"
    zoom="200%"
  />
</template>
```

### 3. Local Registration

Import the component directly into your Vue component:

```typescript
<script setup lang="ts">
import { ImageZooom } from 'vue-image-zooom';
</script>

<template>
  <ImageZooom 
    src="path/to/your/image.jpg" 
    alt="A beautiful image" 
    fullWidth
  />
</template>
```


## Props

| Prop              | Type                      | Default                               | Description                                                                 |
|-------------------|---------------------------|---------------------------------------|-----------------------------------------------------------------------------|
| `src`             | `string`                  | **Required**                          | The source URL of the image to display.                                     |
| `alt`             | `string`                  | `'This is an imageZoom image'`        | The alt text for the image.                                                 |
| `zoom`            | `string \| number`        | `'200'`                               | The zoom level as a percentage (e.g., '200%') or a number.                  |
| `width`           | `string \| number`        | `'100%'`                              | The width of the component container.                                       |
| `height`          | `string \| number`        | `'auto'`                              | The height of the component container.                                      |
| `fullWidth`       | `boolean`                 | `false`                               | If true, the zoom level is calculated to fit the image's natural width.     |
| `id`              | `string`                  | `undefined`                           | A custom ID for the figure element. A unique ID is generated if not provided. |
| `errorMessage`    | `string`                  | `'There was a problem...'`            | Custom message to display if the image fails to load.                       |
| `onErrorCallback` | `(error: Event) => void`  | `undefined`                           | A callback function that fires when the image fails to load.                |