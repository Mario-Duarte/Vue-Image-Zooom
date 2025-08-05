import { ref as c, watch as h, onMounted as p, onUnmounted as D, computed as v, defineComponent as R, getCurrentInstance as V, createElementBlock as b, openBlock as z, Fragment as x, withDirectives as E, createElementVNode as g, normalizeStyle as T, normalizeClass as B, createCommentVNode as H, unref as d, vShow as k, toDisplayString as O } from "vue";
function F(t, u) {
  const n = c({
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
  }, l = (i) => {
    n.value = {
      imgData: null,
      error: !0,
      naturalWidth: 0,
      naturalHeight: 0
    }, u?.(i);
  }, r = () => {
    n.value = {
      imgData: null,
      error: !1,
      naturalWidth: 0,
      naturalHeight: 0
    }, e && (e.removeEventListener("load", o), e.removeEventListener("error", l)), t && (e = new Image(), e.addEventListener("load", o), e.addEventListener("error", l), e.src = t);
  };
  return h(
    () => [t, u],
    () => {
      r();
    },
    { immediate: !0 }
  ), n;
}
function N(t, u, n, e) {
  const o = c(0);
  let l;
  return p(() => {
    e?.value && (l = new ResizeObserver((i) => {
      i[0] && (o.value = i[0].contentRect.width);
    }), l.observe(e.value));
  }), D(() => {
    l && e?.value && l.unobserve(e.value);
  }), v(() => {
    if (!u || !n || !o.value) return `${t}`;
    const i = n.value / o.value * 100;
    return `${i < 100 ? t : i + "%"}`;
  });
}
function X(t, u) {
  const n = getComputedStyle(document.body).overflow || "auto", e = (o) => {
    t.value && o.preventDefault();
  };
  h([t], ([o]) => {
    o ? document.body.style.overflow = "hidden" : document.body.style.overflow = n;
  }), h(
    () => u?.value,
    (o, l) => {
      l && l.removeEventListener("touchmove", e), o && o.addEventListener("touchmove", e, { passive: !1 });
    },
    {
      immediate: !0
    }
  ), D(() => {
    document.body.style.overflow = n, u?.value && u.value.removeEventListener("touchmove", e);
  });
}
function Y(t) {
  return { getZoomPosition: (n) => {
    if (!t?.value) return;
    const e = t.value.getBoundingClientRect();
    let o, l;
    if (((i) => "touches" in i)(n)) {
      const i = n.touches[0];
      o = (i.clientX - e.x) / e.width * 100, l = (i.clientY - e.y) / e.height * 100;
    } else
      o = (n.clientX - e.x) / e.width * 100, l = (n.clientY - e.y) / e.height * 100;
    return `${Math.max(0, Math.min(o, 100))}% ${Math.max(
      0,
      Math.min(l, 100)
    )}%`;
  } };
}
const U = ["id", "aria-label"], j = ["src", "alt", "width", "height"], q = /* @__PURE__ */ R({
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
    const u = V(), n = c(u?.uid), e = c(!1), o = c(!1), l = c("50% 50%"), r = c(null), i = c(!1), s = F(t.src, t.onErrorCallback), M = v(() => s.value.naturalWidth || 0), Z = N(t.zoom, t.fullWidth, M, r);
    X(o, r), h(s, (a) => {
      e.value = a.imgData !== null;
    });
    const m = (a) => {
      if (i.value = a instanceof TouchEvent, o.value) {
        const f = Y(r);
        f && (l.value = f.getZoomPosition(a) ?? "");
      }
    }, y = (a) => {
      o.value = !o.value, i.value = a instanceof TouchEvent, m(a);
    }, C = (a) => {
      y(a);
    }, S = (a) => {
      y(a);
    }, L = (a) => {
      m(a);
    }, w = () => {
      i.value = !1, o.value = !1, l.value = "50% 50%";
    }, P = (a) => {
      m(a);
    }, W = () => {
      i.value = !1, o.value = !1, l.value = "50% 50%";
    }, I = v(() => ({
      backgroundImage: o.value && s.value.imgData ? `url(${s.value.imgData})` : "",
      backgroundSize: Z.value,
      backgroundPosition: l.value,
      cursor: o.value ? "zoom-out" : "zoom-in"
    })), $ = v(() => ({
      width: t.fullWidth ? "100%" : typeof t.width == "string" ? t.width : `${t.width}px`,
      height: typeof t.height == "string" ? t.height : `${t.height}px`
    }));
    return (a, f) => (z(), b(x, null, [
      E(g("figure", {
        id: a.id || `image-zoom-${n.value}`,
        class: B(["image-zoom", { loaded: e.value, zoomed: o.value }]),
        ref_key: "figureRef",
        ref: r,
        role: "button",
        "aria-label": "Zoomable image: " + a.alt,
        tabIndex: "0",
        style: T(I.value),
        onClick: C,
        onMousemove: P,
        onMouseleave: W,
        onTouchstart: S,
        onTouchmove: L,
        onTouchend: w,
        onTouchcancel: w
      }, [
        d(s).imgData ? (z(), b("img", {
          key: 0,
          loading: "lazy",
          id: "imageZoom",
          src: d(s).imgData,
          alt: a.alt,
          width: a.width,
          height: a.height
        }, null, 8, j)) : H("", !0)
      ], 46, U), [
        [k, !d(s).error]
      ]),
      E(g("div", {
        class: "error",
        style: T($.value)
      }, [
        g("p", null, O(a.errorMessage), 1)
      ], 4), [
        [k, d(s).error]
      ])
    ], 64));
  }
}), A = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [e, o] of u)
    n[e] = o;
  return n;
}, G = /* @__PURE__ */ A(q, [["__scopeId", "data-v-41314760"]]), K = (t) => {
  t.component("VueImageZooom", G);
};
export {
  G as VueImageZooom,
  G as default,
  K as install
};
