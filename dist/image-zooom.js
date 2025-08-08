(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@keyframes rotate-53d63c0a{0%{transform:rotate(0)}to{transform:rotate(360deg)}}div.error[data-v-53d63c0a]{display:flex;align-items:center;justify-content:center;min-height:200px;border:1px solid #eee;background-color:#f9f9f9;border-radius:10px}figure.image-zoom[data-v-53d63c0a]{position:relative;min-height:25vh;background-position:50% 50%;background-color:#eee;margin:0;overflow:hidden;-webkit-user-select:none;user-select:none;cursor:zoom-in}figure.image-zoom.loaded[data-v-53d63c0a]{min-height:auto}figure.image-zoom.zoomed[data-v-53d63c0a]{cursor:zoom-out}figure.image-zoom[data-v-53d63c0a]:before{content:"";background-color:transparent;position:absolute;top:0;left:0;right:0;width:100%;height:100%;opacity:1;transition:opacity .2s ease-in-out;z-index:1}figure.image-zoom[data-v-53d63c0a]:after{content:"";position:absolute;top:calc(50% - 25px);left:calc(50% - 25px);width:50px;height:50px;border-radius:50%;border:5px solid transparent;border-top-color:#333;border-right-color:#333;border-bottom-color:#333;opacity:1;animation:rotate-53d63c0a 2s linear infinite;transition:opacity .2s ease-in-out;z-index:2}figure.image-zoom.loaded[data-v-53d63c0a]:before,figure.image-zoom.loaded[data-v-53d63c0a]:after{opacity:0}figure.image-zoom img[data-v-53d63c0a]{opacity:1;display:block;width:100%;height:auto}figure.image-zoom.zoomed img[data-v-53d63c0a]{opacity:0}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { ref as c, watch as f, unref as h, onMounted as R, onUnmounted as H, computed as v, defineComponent as B, useAttrs as V, toRef as O, getCurrentInstance as N, createElementBlock as _, openBlock as E, Fragment as X, withDirectives as k, createElementVNode as w, mergeProps as Y, createCommentVNode as A, vShow as M, normalizeStyle as F, toDisplayString as U } from "vue";
function j(r, a) {
  const n = c({
    imgData: null,
    error: !1,
    naturalWidth: 0,
    naturalHeight: 0
  });
  let t = null;
  const l = () => {
    t && (n.value = {
      imgData: t.src,
      error: !1,
      naturalWidth: t.naturalWidth,
      naturalHeight: t.naturalHeight
    });
  }, u = (o) => {
    n.value = {
      imgData: null,
      error: !0,
      naturalWidth: 0,
      naturalHeight: 0
    }, a?.(o);
  }, s = () => {
    n.value = {
      imgData: null,
      error: !1,
      naturalWidth: 0,
      naturalHeight: 0
    }, t && (t.removeEventListener("load", l), t.removeEventListener("error", u));
    const o = h(r);
    o && (t = new Image(), t.addEventListener("load", l), t.addEventListener("error", u), t.src = o);
  };
  return f(
    () => [h(r)],
    () => {
      s();
    },
    { immediate: !0 }
  ), n;
}
function q(r, a, n, t) {
  const l = c(0);
  let u;
  return R(() => {
    t?.value && (u = new ResizeObserver((o) => {
      o[0] && (l.value = o[0].contentRect.width);
    }), u.observe(t.value));
  }), H(() => {
    u && t?.value && u.unobserve(t.value);
  }), v(() => {
    if (!a || !n || !l.value) return `${r}`;
    const o = n.value / l.value * 100;
    return `${o < 100 ? r : o + "%"}`;
  });
}
function G(r, a) {
  const n = getComputedStyle(document.body).overflow || "auto", t = (l) => {
    r.value && l.touches.length === 1 && l.preventDefault();
  };
  f([r], ([l]) => {
    l ? (document.body.style.overflow = "hidden", a.value && t(a.value)) : document.body.style.overflow = n;
  });
}
function J(r) {
  return { getZoomPosition: (n) => {
    if (!r?.value) return;
    const t = r.value.getBoundingClientRect();
    let l, u;
    if (((o) => "touches" in o)(n)) {
      const o = n.touches[0];
      l = (o.clientX - t.x) / t.width * 100, u = (o.clientY - t.y) / t.height * 100;
    } else
      l = (n.clientX - t.x) / t.width * 100, u = (n.clientY - t.y) / t.height * 100;
    return `${Math.max(0, Math.min(l, 100))}% ${Math.max(
      0,
      Math.min(u, 100)
    )}%`;
  } };
}
const K = ["id", "aria-label"], Q = ["src", "alt"], ee = /* @__PURE__ */ B({
  __name: "image-zooom",
  props: {
    zoom: { default: "200" },
    fullWidth: { type: Boolean, default: !1 },
    alt: { default: "This is an imageZoom image" },
    width: { default: "100%" },
    height: { default: "auto" },
    src: {},
    id: { default: void 0 },
    onErrorCallback: {},
    errorMessage: { default: "There was a problem loading your image" }
  },
  setup(r) {
    const a = r, n = V(), t = O(a, "src"), l = N(), u = c(l?.uid), s = c(!1), o = c(!1), m = c("50% 50%"), p = c(null), g = c(null), i = j(t, a.onErrorCallback), T = v(() => i.value.naturalWidth || 0), Z = q(a.zoom, a.fullWidth, T, p);
    G(o, g);
    const { getZoomPosition: P } = J(p);
    f(i, (e) => {
      s.value = e.imgData !== null;
    });
    const y = (e) => {
      if (o.value) {
        const d = P(e);
        d && (m.value = d);
      }
    }, b = (e) => {
      g.value = e instanceof TouchEvent ? e : null, o.value = !o.value, y(e);
    }, W = (e) => {
      b(e);
    }, C = (e) => {
      e.touches.length === 1 && b(e);
    }, S = (e) => {
      y(e);
    }, z = () => {
      g.value = null, o.value = !1, m.value = "50% 50%";
    }, x = (e) => {
      y(e);
    }, I = () => {
      g.value = null, o.value = !1, m.value = "50% 50%";
    };
    f(i, (e) => {
      s.value = e.imgData !== null, !e.imgData && !e.error && (o.value = !1, m.value = "50% 50%");
    });
    const D = (e, d) => typeof e == "number" ? `${e}px` : typeof e == "string" && e.trim().length > 0 ? e : d, $ = v(() => {
      const e = D(a.width, "100%"), d = D(a.height, "auto");
      return {
        width: e,
        height: d,
        backgroundImage: i.value.imgData ? `url(${i.value.imgData})` : "",
        backgroundSize: Z.value,
        backgroundPosition: m.value,
        cursor: o.value ? "zoom-out" : "zoom-in"
      };
    }), L = v(() => ({
      width: a.fullWidth ? "100%" : typeof a.width == "string" ? a.width : `${a.width}px`,
      height: typeof a.height == "string" ? a.height : `${a.height}px`
    }));
    return (e, d) => (E(), _(X, null, [
      k(w("figure", Y({
        id: a.id || `image-zoom-${u.value}`,
        class: ["image-zoom", { loaded: s.value, loading: !s.value, zoomed: o.value, fullView: !o.value }],
        ref_key: "figureRef",
        ref: p,
        role: "button",
        "aria-label": "Zoomable image: " + e.alt,
        tabIndex: "0",
        style: $.value,
        onClick: W,
        onMousemove: x,
        onMouseleave: I,
        onTouchstart: C,
        onTouchmove: S,
        onTouchend: z,
        onTouchcancel: z
      }, h(n)), [
        h(i).imgData ? (E(), _("img", {
          key: 0,
          loading: "lazy",
          id: "imageZoom",
          src: h(i).imgData,
          alt: e.alt
        }, null, 8, Q)) : A("", !0)
      ], 16, K), [
        [M, !h(i).error]
      ]),
      k(w("div", {
        class: "error",
        style: F(L.value)
      }, [
        w("p", null, U(e.errorMessage), 1)
      ], 4), [
        [M, h(i).error]
      ])
    ], 64));
  }
}), te = (r, a) => {
  const n = r.__vccOpts || r;
  for (const [t, l] of a)
    n[t] = l;
  return n;
}, oe = /* @__PURE__ */ te(ee, [["__scopeId", "data-v-53d63c0a"]]), ne = (r) => {
  r.component("ImageZooom", oe);
};
export {
  oe as ImageZooom,
  oe as default,
  ne as install
};
