# Change log

## v1.5.0

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