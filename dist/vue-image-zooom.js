import { defineComponent as i, ref as n, createElementBlock as a, openBlock as l, createCommentVNode as m } from "vue";
const d = ["id", "aria-label"], h = ["src", "alt", "width", "height"], r = /* @__PURE__ */ i({
  __name: "vue-image-zooom",
  props: {
    zoom: {},
    fullWidth: { type: Boolean },
    alt: {},
    width: {},
    height: {},
    src: {},
    id: {},
    onErrorCallback: { type: Function }
  },
  setup(e) {
    const t = n(null);
    return console.log({ zoom: e.zoom, fullWidth: e.fullWidth, alt: e.alt, width: e.width, height: e.height, src: e.src, id: e.id, onErrorCallback: e.onErrorCallback }), (o, c) => (l(), a("figure", {
      id: o.id,
      role: "button",
      "aria-label": "Zoomable image: " + o.alt,
      tabIndex: "{0}"
    }, [
      t.value ? (l(), a("img", {
        key: 0,
        loading: "lazy",
        id: "imageZoom",
        src: t.value,
        alt: o.alt,
        width: o.width,
        height: o.height,
        $isZoomed: "{isZoomed}"
      }, null, 8, h)) : m("", !0)
    ], 8, d));
  }
}), g = (e) => {
  e.component("VueImageZooom", r);
};
export {
  r as VueImageZooom,
  r as default,
  g as install
};
