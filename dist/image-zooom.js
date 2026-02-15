(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@keyframes rotate-6c4b544e{0%{transform:rotate(0)}to{transform:rotate(360deg)}}div.error[data-v-6c4b544e]{display:flex;align-items:center;justify-content:center;min-height:200px;border:1px solid #eee;background-color:#f9f9f9;border-radius:10px}figure.image-zoom[data-v-6c4b544e]{position:relative;display:inline-block;width:auto;min-height:25vh;background-position:50% 50%;background-color:#eee;margin:0;overflow:hidden;-webkit-user-select:none;user-select:none;cursor:zoom-in}figure.image-zoom.loaded[data-v-6c4b544e]{min-height:auto}figure.image-zoom.zoomed[data-v-6c4b544e]{cursor:zoom-out}figure.image-zoom[data-v-6c4b544e]:before{content:"";background-color:transparent;position:absolute;top:0;left:0;right:0;width:100%;height:100%;opacity:1;transition:opacity .2s ease-in-out;z-index:1}figure.image-zoom[data-v-6c4b544e]:after{content:"";position:absolute;top:calc(50% - 25px);left:calc(50% - 25px);width:50px;height:50px;border-radius:50%;border:5px solid transparent;border-top-color:#333;border-right-color:#333;border-bottom-color:#333;opacity:1;animation:rotate-6c4b544e 2s linear infinite;transition:opacity .2s ease-in-out;z-index:2}figure.image-zoom.loaded[data-v-6c4b544e]:before,figure.image-zoom.loaded[data-v-6c4b544e]:after{opacity:0}figure.image-zoom img[data-v-6c4b544e]{opacity:1;display:block}figure.image-zoom.zoomed img[data-v-6c4b544e]{opacity:0}p.image-zooom-error[data-v-6c4b544e]{width:100%;text-align:center;border:1px solid #f8f8f8;padding:8px 16px;border-radius:8px;color:#555}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { ref as f, watch as y, toValue as c, onMounted as H, onUnmounted as T, computed as p, defineComponent as V, useAttrs as B, toRef as O, getCurrentInstance as N, createElementBlock as w, unref as v, openBlock as b, mergeProps as X, createCommentVNode as Y, normalizeClass as A, normalizeStyle as F, renderSlot as U, createElementVNode as j, toDisplayString as q } from "vue";
function G(i, n) {
  const r = f({
    imgData: null,
    error: !1,
    naturalWidth: 0,
    naturalHeight: 0
  });
  let o = null;
  const a = () => {
    o && (r.value = {
      imgData: o.src,
      error: !1,
      naturalWidth: o.naturalWidth,
      naturalHeight: o.naturalHeight
    });
  }, u = (t) => {
    r.value = {
      imgData: null,
      error: !0,
      naturalWidth: 0,
      naturalHeight: 0
    }, n?.(t);
  }, s = () => {
    r.value = {
      imgData: null,
      error: !1,
      naturalWidth: 0,
      naturalHeight: 0
    }, o && (o.removeEventListener("load", a), o.removeEventListener("error", u));
    const t = c(i);
    t && (o = new Image(), o.addEventListener("load", a), o.addEventListener("error", u), o.src = t);
  };
  return y(
    () => [c(i)],
    () => {
      s();
    },
    { immediate: !0 }
  ), r;
}
function J(i, n, r, o) {
  const a = f(0);
  let u;
  return H(() => {
    const t = o ? c(o) : null;
    t && (u = new ResizeObserver((l) => {
      l[0] && (a.value = l[0].contentRect.width);
    }), u.observe(t));
  }), T(() => {
    const t = o ? c(o) : null;
    u && t && u.unobserve(t);
  }), p(() => {
    const t = c(i), l = c(n), d = c(r) ?? 0;
    if (!l || !a.value || !d) return `${t}`;
    const h = d / a.value * 100;
    return `${h < 100 ? t : h + "%"}`;
  });
}
function K(i, n) {
  const r = getComputedStyle(document.body).overflow || "auto";
  y([() => c(i)], ([s]) => {
    s ? document.body.style.overflow = "hidden" : document.body.style.overflow = r;
  });
  let o = null, a = null;
  const u = () => {
    o && a && (a.removeEventListener("touchmove", o), o = null, a = null);
  };
  y([() => c(i), () => c(n)], ([s, t]) => {
    if (u(), !t) return;
    const l = (d) => {
      s && d.touches.length === 1 && d.preventDefault();
    };
    s && (t.addEventListener("touchmove", l, { passive: !1 }), o = l, a = t);
  }), T(() => {
    document.body.style.overflow = r, u();
  });
}
function Q(i) {
  return { getZoomPosition: (r) => {
    const o = i ? c(i) : null;
    if (!o) return;
    const a = o.getBoundingClientRect();
    let u, s;
    if (((l) => "touches" in l)(r)) {
      const l = r.touches[0];
      u = (l.clientX - a.x) / a.width * 100, s = (l.clientY - a.y) / a.height * 100;
    } else
      u = (r.clientX - a.x) / a.width * 100, s = (r.clientY - a.y) / a.height * 100;
    return `${Math.max(0, Math.min(u, 100))}% ${Math.max(
      0,
      Math.min(s, 100)
    )}%`;
  } };
}
const ee = ["id", "aria-label"], te = ["src", "alt", "width", "height"], oe = { class: "image-zooom-error" }, ne = /* @__PURE__ */ V({
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
    onError: { type: Function, default: void 0 },
    errorMessage: { default: "There was a problem loading your image" },
    theme: { default: void 0 }
  },
  setup(i) {
    const n = i, r = B(), o = O(n, "src"), a = N(), u = f(a?.uid), s = f(!1), t = f(!1), l = f("50% 50%"), d = f(null), h = f(!1), g = G(o, n.onError ?? n.onErrorCallback), W = p(() => g.value.naturalWidth || 0), C = J(n.zoom, n.fullWidth, W, d);
    K(t, d);
    const { getZoomPosition: z } = Q(d);
    y(g, (e) => {
      s.value = e.imgData !== null, !e.imgData && !e.error && (t.value = !1, l.value = "50% 50%");
    });
    const E = (e) => {
      if (t.value) {
        const m = z(e);
        m && (l.value = m);
      }
    }, k = (e, m = !1) => {
      m && (h.value = !0);
      const M = !t.value;
      if (t.value = M, M) {
        const P = z(e);
        P && (l.value = P);
      } else
        l.value = "50% 50%";
    }, I = (e) => {
      if (h.value) {
        h.value = !1;
        return;
      }
      k(e);
    }, D = (e) => {
      e.touches.length === 1 && k(e, !0);
    }, L = (e) => {
      e.touches.length === 1 && (e.preventDefault(), h.value = !0, t.value ? E(e) : D(e));
    }, Z = () => {
      h.value = !1, t.value = !1, l.value = "50% 50%";
    }, S = (e) => {
      E(e);
    }, $ = () => {
      h.value = !1, t.value = !1, l.value = "50% 50%";
    }, _ = (e, m) => typeof e == "number" ? `${e}px` : typeof e == "string" && e.trim().length > 0 ? e : m, R = p(() => {
      const e = _(n.width, "100%"), m = _(n.height, "auto");
      return {
        width: e,
        height: m,
        backgroundImage: t.value && g.value.imgData ? `url(${g.value.imgData})` : "",
        backgroundSize: C.value,
        backgroundPosition: l.value,
        cursor: t.value ? "zoom-out" : "zoom-in"
      };
    }), x = p(() => ({
      width: n.fullWidth ? "100%" : typeof n.width == "string" ? n.width : `${n.width}px`,
      height: typeof n.height == "string" ? n.height : `${n.height}px`
    }));
    return (e, m) => v(g).error ? (b(), w("div", {
      key: 1,
      class: "error",
      style: F(x.value)
    }, [
      U(e.$slots, "error", {}, () => [
        j("p", oe, q(e.errorMessage), 1)
      ], !0)
    ], 4)) : (b(), w("figure", X({
      key: 0,
      id: n.id || `image-zoom-${u.value}`,
      class: ["image-zoom", { loaded: s.value, loading: !s.value, zoomed: t.value, fullView: !t.value }, n.theme?.root],
      ref_key: "figureRef",
      ref: d,
      role: "button",
      "aria-label": "Zoomable image: " + e.alt,
      tabIndex: "0",
      style: R.value,
      onClick: I,
      onMousemove: S,
      onMouseleave: $,
      onTouchstart: D,
      onTouchmove: L,
      onTouchend: Z,
      onTouchcancel: Z
    }, v(r)), [
      v(g).imgData ? (b(), w("img", {
        key: 0,
        loading: "lazy",
        id: "imageZoom",
        class: A(n.theme?.image),
        src: v(g).imgData,
        alt: e.alt,
        width: e.width,
        height: e.height
      }, null, 10, te)) : Y("", !0)
    ], 16, ee));
  }
}), ae = (i, n) => {
  const r = i.__vccOpts || i;
  for (const [o, a] of n)
    r[o] = a;
  return r;
}, le = /* @__PURE__ */ ae(ne, [["__scopeId", "data-v-6c4b544e"]]), ie = (i) => {
  i.component("ImageZooom", le);
};
export {
  le as ImageZooom,
  le as default,
  ie as install
};
