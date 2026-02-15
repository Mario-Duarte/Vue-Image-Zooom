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

On touch enabled devices users can use one finger to zoom in and move the zoom location by dragging the finger on the image, this will disable the scrolling. Touching with more than 1 finger on the image will not activate the zoom and page will scroll as normal, this was decided this way as it is easier to use one finger to zoom and drag on the image.

### v1.5.0

Change log:

- Added `onError` prop as the preferred error callback, the existing `onErrorCallback` prop is now deprecated but still fully functional.
- Added `theme` prop accepting `{ root?: string, image?: string }` for targeted custom CSS classes on the figure and image elements.
- Added `<slot name="error">` for custom error UI. When provided, it replaces the default error message. The existing `errorMessage` prop continues to work as the default slot content.
- Added `ImageZoomClasses` type export for TypeScript consumers.
- `width` and `height` props are now passed through to the `<img>` element.
- Added `display: inline-block` to the base figure CSS.
- Fixed touch/click deduplication to prevent the mobile double-fire bug where both `touchstart` and `click` events would trigger zoom.
- `backgroundImage` is now only set when zoomed, avoiding unnecessary background rendering.
- Enhanced `handleTouchMove` to call `preventDefault()` for single-touch and initiate zoom during drag if not already zoomed.
- Improved `usePreventBodyScroll` composable with element-level `touchmove` listener using `{ passive: false }` for more robust scroll prevention on touch devices.
- Switched error rendering from `v-show` to `v-if`/`v-else` to avoid rendering the figure DOM when an error occurs.
- Merged duplicate internal watchers into a single watcher.
- Added `p.image-zooom-error` CSS styling for error messages.

[View changelog](https://github.com/Mario-Duarte/Vue-Image-Zooom/blob/main/CHANGELOG.md) for previous release notes.

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

| Prop              | Type                              | Default                               | Description                                                                 |
|-------------------|-----------------------------------|---------------------------------------|-----------------------------------------------------------------------------|
| `src`             | `string`                          | **Required**                          | The source URL of the image to display.                                     |
| `alt`             | `string`                          | `'This is an imageZoom image'`        | The alt text for the image.                                                 |
| `zoom`            | `string \| number`                | `'200'`                               | The zoom level as a percentage (e.g., '200%') or a number.                  |
| `width`           | `string \| number`                | `'100%'`                              | The width of the component container.                                       |
| `height`          | `string \| number`                | `'auto'`                              | The height of the component container.                                      |
| `fullWidth`       | `boolean`                         | `false`                               | If true, the zoom level is calculated to fit the image's natural width.     |
| `id`              | `string`                          | `undefined`                           | A custom ID for the figure element. A unique ID is generated if not provided. |
| `errorMessage`    | `string`                          | `'There was a problem...'`            | Custom message to display if the image fails to load.                       |
| `onError`         | `(error: Event \| ErrorEvent) => void` | `undefined`                      | A callback function that fires when the image fails to load.                |
| `onErrorCallback` | `(error: Event) => void`          | `undefined`                           | **Deprecated.** Use `onError` instead. Still functional for backward compatibility. |
| `theme`           | `{ root?: string, image?: string }` | `undefined`                         | Custom CSS classes for the figure (`root`) and image (`image`) elements.    |