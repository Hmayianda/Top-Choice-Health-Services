import { V as jsxRuntimeExports } from "./worker-entry-mUCT4H1A.js";
import { F as FadeUp } from "./FadeUp-BAjr0ynT.js";
function PageHero({ eyebrow, title, subtitle, height = "md", image, children }) {
  const h = height === "sm" ? "min-h-[40vh]" : "min-h-[50vh]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `relative flex items-center justify-center overflow-hidden ${h} text-white`, children: [
    image && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: image,
        alt: "",
        "aria-hidden": "true",
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy/80 to-healthcare-blue/75" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: eyebrow }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl leading-tight sm:text-5xl", children: title }) }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-white/85", children: subtitle }) }),
      children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children })
    ] })
  ] });
}
export {
  PageHero as P
};
