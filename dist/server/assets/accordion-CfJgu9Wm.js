import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function ServiceCard({ icon: Icon, title, description }) {
  return /* @__PURE__ */ jsxs("article", { className: "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", children: [
    /* @__PURE__ */ jsx("span", { className: "absolute inset-x-6 top-0 h-1 rounded-b-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gold-soft text-gold", children: /* @__PURE__ */ jsx(Icon, { size: 24, strokeWidth: 2.25 }) }),
    /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-navy-deep", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: description })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export {
  Accordion as A,
  ServiceCard as S,
  AccordionItem as a,
  AccordionTrigger as b,
  AccordionContent as c
};
