(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@keyframes rotate-fcfc95a6{0%{transform:rotate(0)}to{transform:rotate(360deg)}}div.error[data-v-fcfc95a6]{display:flex;align-items:center;justify-content:center;min-height:200px;border:1px solid #eee;background-color:#f9f9f9;border-radius:10px}figure.image-zoom[data-v-fcfc95a6]{position:relative;display:inline-block;width:auto;min-height:25vh;background-position:50% 50%;background-color:#eee;margin:0;overflow:hidden;-webkit-user-select:none;user-select:none;cursor:zoom-in}figure.image-zoom.loaded[data-v-fcfc95a6]{min-height:auto}figure.image-zoom.zoomed[data-v-fcfc95a6]{cursor:zoom-out}figure.image-zoom[data-v-fcfc95a6]:before{content:"";background-color:transparent;position:absolute;top:0;left:0;right:0;width:100%;height:100%;opacity:1;transition:opacity .2s ease-in-out;z-index:1}figure.image-zoom[data-v-fcfc95a6]:after{content:"";position:absolute;top:calc(50% - 25px);left:calc(50% - 25px);width:50px;height:50px;border-radius:50%;border:5px solid transparent;border-top-color:#333;border-right-color:#333;border-bottom-color:#333;opacity:1;animation:rotate-fcfc95a6 2s linear infinite;transition:opacity .2s ease-in-out;z-index:2}figure.image-zoom.loaded[data-v-fcfc95a6]:before,figure.image-zoom.loaded[data-v-fcfc95a6]:after{opacity:0}figure.image-zoom img[data-v-fcfc95a6]{opacity:1;display:block}figure.image-zoom.zoomed img[data-v-fcfc95a6]{opacity:0}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { ref as s, watch as f, onMounted as V, onUnmounted as p, computed as h, defineComponent as x, getCurrentInstance as B, createElementBlock as b, openBlock as z, Fragment as H, withDirectives as k, createElementVNode as g, normalizeStyle as D, normalizeClass as R, createCommentVNode as O, unref as d, vShow as E, toDisplayString as F } from "vue";
function N(t, i) {
  const n = s({
    imgData: null,
    error: !1,
    naturalWidth: 0,
    naturalHeight: 0
  });
  let e = null;
  const o = () => {
    e && (n.value = {
      imgData: e.src,
      error: !1,
      naturalWidth: e.naturalWidth,
      naturalHeight: e.naturalHeight
    });
  }, u = (l) => {
    n.value = {
      imgData: null,
      error: !0,
      naturalWidth: 0,
      naturalHeight: 0
    }, i?.(l);
  }, c = () => {
    n.value = {
      imgData: null,
      error: !1,
      naturalWidth: 0,
      naturalHeight: 0
    }, e && (e.removeEventListener("load", o), e.removeEventListener("error", u)), t && (e = new Image(), e.addEventListener("load", o), e.addEventListener("error", u), e.src = t);
  };
  return f(
    () => [t, i],
    () => {
      c();
    },
    { immediate: !0 }
  ), n;
}
function X(t, i, n, e) {
  const o = s(0);
  let u;
  return V(() => {
    e?.value && (u = new ResizeObserver((l) => {
      l[0] && (o.value = l[0].contentRect.width);
    }), u.observe(e.value));
  }), p(() => {
    u && e?.value && u.unobserve(e.value);
  }), h(() => {
    if (!i || !n || !o.value) return `${t}`;
    const l = n.value / o.value * 100;
    return `${l < 100 ? t : l + "%"}`;
  });
}
function Y(t, i) {
  const n = getComputedStyle(document.body).overflow || "auto", e = (o) => {
    t.value && o.touches.length === 1 && o.preventDefault();
  };
  f([t], ([o]) => {
    o ? (document.body.style.overflow = "hidden", i.value && e(i.value)) : document.body.style.overflow = n;
  });
}
function U(t) {
  return { getZoomPosition: (n) => {
    if (!t?.value) return;
    const e = t.value.getBoundingClientRect();
    let o, u;
    if (((l) => "touches" in l)(n)) {
      const l = n.touches[0];
      o = (l.clientX - e.x) / e.width * 100, u = (l.clientY - e.y) / e.height * 100;
    } else
      o = (n.clientX - e.x) / e.width * 100, u = (n.clientY - e.y) / e.height * 100;
    return `${Math.max(0, Math.min(o, 100))}% ${Math.max(
      0,
      Math.min(u, 100)
    )}%`;
  } };
}
const j = ["id", "aria-label"], q = ["src", "alt", "width", "height"], A = /* @__PURE__ */ x({
  __name: "vue-image-zooom",
  props: {
    zoom: { default: "200" },
    fullWidth: { type: Boolean, default: !1 },
    alt: { default: "This is an imageZoom image" },
    width: { default: "100%" },
    height: { default: "auto" },
    src: {},
    id: {},
    onErrorCallback: { type: Function },
    errorMessage: { default: "There was a problem loading your image" }
  },
  setup(t) {
    const i = B(), n = s(i?.uid), e = s(!1), o = s(!1), u = s("50% 50%"), c = s(null), l = s(null), r = N(t.src, t.onErrorCallback), M = h(() => r.value.naturalWidth || 0), T = X(t.zoom, t.fullWidth, M, c);
    Y(o, l);
    const { getZoomPosition: Z } = U(c);
    f(r, (a) => {
      e.value = a.imgData !== null;
    });
    const m = (a) => {
      if (o.value) {
        const v = Z(a);
        v && (u.value = v);
      }
    }, y = (a) => {
      l.value = a instanceof TouchEvent ? a : null, o.value = !o.value, m(a);
    }, C = (a) => {
      y(a);
    }, S = (a) => {
      a.touches.length === 1 && y(a);
    }, P = (a) => {
      m(a);
    }, w = () => {
      l.value = null, o.value = !1, u.value = "50% 50%";
    }, W = (a) => {
      m(a);
    }, I = () => {
      l.value = null, o.value = !1, u.value = "50% 50%";
    }, $ = h(() => ({
      backgroundImage: r.value.imgData ? `url(${r.value.imgData})` : "",
      backgroundSize: T.value,
      backgroundPosition: u.value,
      cursor: o.value ? "zoom-out" : "zoom-in"
    })), L = h(() => ({
      width: t.fullWidth ? "100%" : typeof t.width == "string" ? t.width : `${t.width}px`,
      height: typeof t.height == "string" ? t.height : `${t.height}px`
    }));
    return (a, v) => (z(), b(H, null, [
      k(g("figure", {
        id: a.id || `image-zoom-${n.value}`,
        class: R(["image-zoom", { loaded: e.value, loading: !e.value, zoomed: o.value, fullView: !o.value }]),
        ref_key: "figureRef",
        ref: c,
        role: "button",
        "aria-label": "Zoomable image: " + a.alt,
        tabIndex: "0",
        style: D($.value),
        onClick: C,
        onMousemove: W,
        onMouseleave: I,
        onTouchstart: S,
        onTouchmove: P,
        onTouchend: w,
        onTouchcancel: w
      }, [
        d(r).imgData ? (z(), b("img", {
          key: 0,
          loading: "lazy",
          id: "imageZoom",
          src: d(r).imgData,
          alt: a.alt,
          width: a.width,
          height: a.height
        }, null, 8, q)) : O("", !0)
      ], 46, j), [
        [E, !d(r).error]
      ]),
      k(g("div", {
        class: "error",
        style: D(L.value)
      }, [
        g("p", null, F(a.errorMessage), 1)
      ], 4), [
        [E, d(r).error]
      ])
    ], 64));
  }
}), G = (t, i) => {
  const n = t.__vccOpts || t;
  for (const [e, o] of i)
    n[e] = o;
  return n;
}, J = /* @__PURE__ */ G(A, [["__scopeId", "data-v-fcfc95a6"]]), Q = (t) => {
  t.component("VueImageZooom", J);
};
export {
  J as VueImageZooom,
  J as default,
  Q as install
};
