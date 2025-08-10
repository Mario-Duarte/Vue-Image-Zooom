(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@keyframes rotate-53d63c0a{0%{transform:rotate(0)}to{transform:rotate(360deg)}}div.error[data-v-53d63c0a]{display:flex;align-items:center;justify-content:center;min-height:200px;border:1px solid #eee;background-color:#f9f9f9;border-radius:10px}figure.image-zoom[data-v-53d63c0a]{position:relative;min-height:25vh;background-position:50% 50%;background-color:#eee;margin:0;overflow:hidden;-webkit-user-select:none;user-select:none;cursor:zoom-in}figure.image-zoom.loaded[data-v-53d63c0a]{min-height:auto}figure.image-zoom.zoomed[data-v-53d63c0a]{cursor:zoom-out}figure.image-zoom[data-v-53d63c0a]:before{content:"";background-color:transparent;position:absolute;top:0;left:0;right:0;width:100%;height:100%;opacity:1;transition:opacity .2s ease-in-out;z-index:1}figure.image-zoom[data-v-53d63c0a]:after{content:"";position:absolute;top:calc(50% - 25px);left:calc(50% - 25px);width:50px;height:50px;border-radius:50%;border:5px solid transparent;border-top-color:#333;border-right-color:#333;border-bottom-color:#333;opacity:1;animation:rotate-53d63c0a 2s linear infinite;transition:opacity .2s ease-in-out;z-index:2}figure.image-zoom.loaded[data-v-53d63c0a]:before,figure.image-zoom.loaded[data-v-53d63c0a]:after{opacity:0}figure.image-zoom img[data-v-53d63c0a]{opacity:1;display:block;width:100%;height:auto}figure.image-zoom.zoomed img[data-v-53d63c0a]{opacity:0}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { ref as h, watch as y, toValue as c, onMounted as H, onUnmounted as V, computed as p, defineComponent as B, useAttrs as O, toRef as N, getCurrentInstance as X, createElementBlock as _, openBlock as T, Fragment as Y, withDirectives as k, createElementVNode as b, mergeProps as A, unref as v, createCommentVNode as F, vShow as M, normalizeStyle as U, toDisplayString as j } from "vue";
function q(r, a) {
  const l = h({
    imgData: null,
    error: !1,
    naturalWidth: 0,
    naturalHeight: 0
  });
  let t = null;
  const n = () => {
    t && (l.value = {
      imgData: t.src,
      error: !1,
      naturalWidth: t.naturalWidth,
      naturalHeight: t.naturalHeight
    });
  }, i = (o) => {
    l.value = {
      imgData: null,
      error: !0,
      naturalWidth: 0,
      naturalHeight: 0
    }, a?.(o);
  }, s = () => {
    l.value = {
      imgData: null,
      error: !1,
      naturalWidth: 0,
      naturalHeight: 0
    }, t && (t.removeEventListener("load", n), t.removeEventListener("error", i));
    const o = c(r);
    o && (t = new Image(), t.addEventListener("load", n), t.addEventListener("error", i), t.src = o);
  };
  return y(
    () => [c(r)],
    () => {
      s();
    },
    { immediate: !0 }
  ), l;
}
function G(r, a, l, t) {
  const n = h(0);
  let i;
  return H(() => {
    const o = t ? c(t) : null;
    o && (i = new ResizeObserver((u) => {
      u[0] && (n.value = u[0].contentRect.width);
    }), i.observe(o));
  }), V(() => {
    const o = t ? c(t) : null;
    i && o && i.unobserve(o);
  }), p(() => {
    const o = c(r), u = c(a), f = c(l) ?? 0;
    if (!u || !n.value || !f) return `${o}`;
    const m = f / n.value * 100;
    return `${m < 100 ? o : m + "%"}`;
  });
}
function J(r, a) {
  const l = getComputedStyle(document.body).overflow || "auto", t = (n) => {
    c(r) && n.touches.length === 1 && n.preventDefault();
  };
  y([() => c(r)], ([n]) => {
    if (n) {
      document.body.style.overflow = "hidden";
      const i = c(a);
      i && t(i);
    } else
      document.body.style.overflow = l;
  });
}
function K(r) {
  return { getZoomPosition: (l) => {
    const t = r ? c(r) : null;
    if (!t) return;
    const n = t.getBoundingClientRect();
    let i, s;
    if (((u) => "touches" in u)(l)) {
      const u = l.touches[0];
      i = (u.clientX - n.x) / n.width * 100, s = (u.clientY - n.y) / n.height * 100;
    } else
      i = (l.clientX - n.x) / n.width * 100, s = (l.clientY - n.y) / n.height * 100;
    return `${Math.max(0, Math.min(i, 100))}% ${Math.max(
      0,
      Math.min(s, 100)
    )}%`;
  } };
}
const Q = ["id", "aria-label"], ee = ["src", "alt"], te = /* @__PURE__ */ B({
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
    const a = r, l = O(), t = N(a, "src"), n = X(), i = h(n?.uid), s = h(!1), o = h(!1), u = h("50% 50%"), f = h(null), m = h(null), d = q(t, a.onErrorCallback), W = p(() => d.value.naturalWidth || 0), Z = G(a.zoom, a.fullWidth, W, f);
    J(o, m);
    const { getZoomPosition: P } = K(f);
    y(d, (e) => {
      s.value = e.imgData !== null;
    });
    const w = (e) => {
      if (o.value) {
        const g = P(e);
        g && (u.value = g);
      }
    }, z = (e) => {
      m.value = e instanceof TouchEvent ? e : null, o.value = !o.value, w(e);
    }, C = (e) => {
      z(e);
    }, S = (e) => {
      e.touches.length === 1 && z(e);
    }, x = (e) => {
      w(e);
    }, D = () => {
      m.value = null, o.value = !1, u.value = "50% 50%";
    }, I = (e) => {
      w(e);
    }, $ = () => {
      m.value = null, o.value = !1, u.value = "50% 50%";
    };
    y(d, (e) => {
      s.value = e.imgData !== null, !e.imgData && !e.error && (o.value = !1, u.value = "50% 50%");
    });
    const E = (e, g) => typeof e == "number" ? `${e}px` : typeof e == "string" && e.trim().length > 0 ? e : g, R = p(() => {
      const e = E(a.width, "100%"), g = E(a.height, "auto");
      return {
        width: e,
        height: g,
        backgroundImage: d.value.imgData ? `url(${d.value.imgData})` : "",
        backgroundSize: Z.value,
        backgroundPosition: u.value,
        cursor: o.value ? "zoom-out" : "zoom-in"
      };
    }), L = p(() => ({
      width: a.fullWidth ? "100%" : typeof a.width == "string" ? a.width : `${a.width}px`,
      height: typeof a.height == "string" ? a.height : `${a.height}px`
    }));
    return (e, g) => (T(), _(Y, null, [
      k(b("figure", A({
        id: a.id || `image-zoom-${i.value}`,
        class: ["image-zoom", { loaded: s.value, loading: !s.value, zoomed: o.value, fullView: !o.value }],
        ref_key: "figureRef",
        ref: f,
        role: "button",
        "aria-label": "Zoomable image: " + e.alt,
        tabIndex: "0",
        style: R.value,
        onClick: C,
        onMousemove: I,
        onMouseleave: $,
        onTouchstart: S,
        onTouchmove: x,
        onTouchend: D,
        onTouchcancel: D
      }, v(l)), [
        v(d).imgData ? (T(), _("img", {
          key: 0,
          loading: "lazy",
          id: "imageZoom",
          src: v(d).imgData,
          alt: e.alt
        }, null, 8, ee)) : F("", !0)
      ], 16, Q), [
        [M, !v(d).error]
      ]),
      k(b("div", {
        class: "error",
        style: U(L.value)
      }, [
        b("p", null, j(e.errorMessage), 1)
      ], 4), [
        [M, v(d).error]
      ])
    ], 64));
  }
}), oe = (r, a) => {
  const l = r.__vccOpts || r;
  for (const [t, n] of a)
    l[t] = n;
  return l;
}, ne = /* @__PURE__ */ oe(te, [["__scopeId", "data-v-53d63c0a"]]), le = (r) => {
  r.component("ImageZooom", ne);
};
export {
  ne as ImageZooom,
  ne as default,
  le as install
};
