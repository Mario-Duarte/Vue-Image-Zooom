(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@keyframes rotate-07586a75{0%{transform:rotate(0)}to{transform:rotate(360deg)}}div.error[data-v-07586a75]{display:flex;align-items:center;justify-content:center;min-height:200px;border:1px solid #eee;background-color:#f9f9f9;border-radius:10px}figure.image-zoom[data-v-07586a75]{position:relative;min-height:25vh;background-position:50% 50%;background-color:#eee;margin:0;overflow:hidden;-webkit-user-select:none;user-select:none;cursor:zoom-in}figure.image-zoom.loaded[data-v-07586a75]{min-height:auto}figure.image-zoom.zoomed[data-v-07586a75]{cursor:zoom-out}figure.image-zoom[data-v-07586a75]:before{content:"";background-color:transparent;position:absolute;top:0;left:0;right:0;width:100%;height:100%;opacity:1;transition:opacity .2s ease-in-out;z-index:1}figure.image-zoom[data-v-07586a75]:after{content:"";position:absolute;top:calc(50% - 25px);left:calc(50% - 25px);width:50px;height:50px;border-radius:50%;border:5px solid transparent;border-top-color:#333;border-right-color:#333;border-bottom-color:#333;opacity:1;animation:rotate-07586a75 2s linear infinite;transition:opacity .2s ease-in-out;z-index:2}figure.image-zoom.loaded[data-v-07586a75]:before,figure.image-zoom.loaded[data-v-07586a75]:after{opacity:0}figure.image-zoom img[data-v-07586a75]{opacity:1;display:block;width:100%;height:auto}figure.image-zoom.zoomed img[data-v-07586a75]{opacity:0}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { ref as s, watch as y, onMounted as L, onUnmounted as H, computed as g, defineComponent as B, useAttrs as R, getCurrentInstance as V, createElementBlock as k, openBlock as D, Fragment as O, withDirectives as E, createElementVNode as f, mergeProps as F, unref as h, createCommentVNode as N, vShow as M, normalizeStyle as X, toDisplayString as Y } from "vue";
function A(e, i) {
  const l = s({
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
  }, a = (u) => {
    l.value = {
      imgData: null,
      error: !0,
      naturalWidth: 0,
      naturalHeight: 0
    }, i?.(u);
  }, r = () => {
    l.value = {
      imgData: null,
      error: !1,
      naturalWidth: 0,
      naturalHeight: 0
    }, t && (t.removeEventListener("load", n), t.removeEventListener("error", a)), e && (t = new Image(), t.addEventListener("load", n), t.addEventListener("error", a), t.src = e);
  };
  return y(
    () => [e, i],
    () => {
      r();
    },
    { immediate: !0 }
  ), l;
}
function U(e, i, l, t) {
  const n = s(0);
  let a;
  return L(() => {
    t?.value && (a = new ResizeObserver((u) => {
      u[0] && (n.value = u[0].contentRect.width);
    }), a.observe(t.value));
  }), H(() => {
    a && t?.value && a.unobserve(t.value);
  }), g(() => {
    if (!i || !l || !n.value) return `${e}`;
    const u = l.value / n.value * 100;
    return `${u < 100 ? e : u + "%"}`;
  });
}
function j(e, i) {
  const l = getComputedStyle(document.body).overflow || "auto", t = (n) => {
    e.value && n.touches.length === 1 && n.preventDefault();
  };
  y([e], ([n]) => {
    n ? (document.body.style.overflow = "hidden", i.value && t(i.value)) : document.body.style.overflow = l;
  });
}
function q(e) {
  return { getZoomPosition: (l) => {
    if (!e?.value) return;
    const t = e.value.getBoundingClientRect();
    let n, a;
    if (((u) => "touches" in u)(l)) {
      const u = l.touches[0];
      n = (u.clientX - t.x) / t.width * 100, a = (u.clientY - t.y) / t.height * 100;
    } else
      n = (l.clientX - t.x) / t.width * 100, a = (l.clientY - t.y) / t.height * 100;
    return `${Math.max(0, Math.min(n, 100))}% ${Math.max(
      0,
      Math.min(a, 100)
    )}%`;
  } };
}
const G = ["id", "aria-label"], J = ["src", "alt"], K = /* @__PURE__ */ B({
  __name: "image-zooom",
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
  setup(e) {
    const i = R(), l = V(), t = s(l?.uid), n = s(!1), a = s(!1), r = s("50% 50%"), u = s(null), m = s(null), c = A(e.src, e.onErrorCallback), T = g(() => c.value.naturalWidth || 0), Z = U(e.zoom, e.fullWidth, T, u);
    j(a, m);
    const { getZoomPosition: P } = q(u);
    y(c, (o) => {
      n.value = o.imgData !== null;
    });
    const v = (o) => {
      if (a.value) {
        const d = P(o);
        d && (r.value = d);
      }
    }, w = (o) => {
      m.value = o instanceof TouchEvent ? o : null, a.value = !a.value, v(o);
    }, S = (o) => {
      w(o);
    }, W = (o) => {
      o.touches.length === 1 && w(o);
    }, C = (o) => {
      v(o);
    }, b = () => {
      m.value = null, a.value = !1, r.value = "50% 50%";
    }, I = (o) => {
      v(o);
    }, $ = () => {
      m.value = null, a.value = !1, r.value = "50% 50%";
    }, z = (o, d) => typeof o == "number" ? `${o}px` : typeof o == "string" && o.trim().length > 0 ? o : d, x = g(() => {
      const o = z(e.width, "100%"), d = z(e.height, "auto");
      return {
        width: o,
        height: d,
        backgroundImage: c.value.imgData ? `url(${c.value.imgData})` : "",
        backgroundSize: Z.value,
        backgroundPosition: r.value,
        cursor: a.value ? "zoom-out" : "zoom-in"
      };
    }), p = g(() => ({
      width: e.fullWidth ? "100%" : typeof e.width == "string" ? e.width : `${e.width}px`,
      height: typeof e.height == "string" ? e.height : `${e.height}px`
    }));
    return (o, d) => (D(), k(O, null, [
      E(f("figure", F({
        id: o.id || `image-zoom-${t.value}`,
        class: ["image-zoom", { loaded: n.value, loading: !n.value, zoomed: a.value, fullView: !a.value }],
        ref_key: "figureRef",
        ref: u,
        role: "button",
        "aria-label": "Zoomable image: " + o.alt,
        tabIndex: "0",
        style: x.value,
        onClick: S,
        onMousemove: I,
        onMouseleave: $,
        onTouchstart: W,
        onTouchmove: C,
        onTouchend: b,
        onTouchcancel: b
      }, h(i)), [
        h(c).imgData ? (D(), k("img", {
          key: 0,
          loading: "lazy",
          id: "imageZoom",
          src: h(c).imgData,
          alt: o.alt
        }, null, 8, J)) : N("", !0)
      ], 16, G), [
        [M, !h(c).error]
      ]),
      E(f("div", {
        class: "error",
        style: X(p.value)
      }, [
        f("p", null, Y(o.errorMessage), 1)
      ], 4), [
        [M, h(c).error]
      ])
    ], 64));
  }
}), Q = (e, i) => {
  const l = e.__vccOpts || e;
  for (const [t, n] of i)
    l[t] = n;
  return l;
}, _ = /* @__PURE__ */ Q(K, [["__scopeId", "data-v-07586a75"]]), te = (e) => {
  e.component("ImageZooom", _);
};
export {
  _ as ImageZooom,
  _ as default,
  te as install
};
