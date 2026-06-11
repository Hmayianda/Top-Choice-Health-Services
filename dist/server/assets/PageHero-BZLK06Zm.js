import { jsxs, jsx } from "react/jsx-runtime";
import { F as FadeUp } from "./FadeUp-BLf91Iec.js";
function PageHero({ eyebrow, title, subtitle, height = "md", children }) {
  const h = height === "sm" ? "min-h-[40vh]" : "min-h-[50vh]";
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: `relative flex items-center justify-center overflow-hidden ${h} bg-gradient-to-br from-navy-deep via-navy to-healthcare-blue text-white`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-6 py-20 text-center", children: [
          /* @__PURE__ */ jsx(FadeUp, { children: /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold", children: eyebrow }) }),
          /* @__PURE__ */ jsx(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl leading-tight sm:text-5xl", children: title }) }),
          subtitle && /* @__PURE__ */ jsx(FadeUp, { delay: 0.2, children: /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-white/85", children: subtitle }) }),
          children && /* @__PURE__ */ jsx("div", { className: "mt-8", children })
        ] })
      ]
    }
  );
}
export {
  PageHero as P
};
