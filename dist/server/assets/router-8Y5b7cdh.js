import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { S as SITE } from "./site-BRHCUyRr.js";
const appCss = "/assets/styles-BoX6dN4O.css";
function reportAppError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__appEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-7xl text-navy-deep", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-navy-deep", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-navy-deep", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-full border border-input px-5 py-2.5 text-sm font-semibold", children: "Go home" })
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Top Choice Health Services" },
      {
        name: "description",
        content: "Top Choice Health Services offers compassionate, personalized adult family home care in Port Orchard, WA."
      },
      { name: "author", content: "Top Choice Health Services" },
      { property: "og:site_name", content: "Top Choice Health Services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Top Choice Health Services" },
      { name: "twitter:title", content: "Top Choice Health Services" },
      { name: "description", content: "A healthcare website for Top Choice Health Services, offering adult family home care." },
      { property: "og:description", content: "A healthcare website for Top Choice Health Services, offering adult family home care." },
      { name: "twitter:description", content: "A healthcare website for Top Choice Health Services, offering adult family home care." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/about", "/services", "/our-home", "/contact"];
        const urls = paths.map(
          (p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./services-CbnsPN-Q.js");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Our Services | Top Choice Health Services"
    }, {
      name: "description",
      content: "Explore the full range of care services at Top Choice Health Services — personal care, medication management, memory support, meal prep, and more in Port Orchard, WA."
    }, {
      property: "og:title",
      content: "Our Services | Top Choice Health Services"
    }, {
      property: "og:description",
      content: "Personal care, medication management, memory care, meal prep, and 24-hour supervision in Port Orchard, WA."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./our-home-DRSVQNHq.js");
const Route$3 = createFileRoute("/our-home")({
  head: () => ({
    meta: [{
      title: "Our Home | Top Choice Health Services | Port Orchard, WA"
    }, {
      name: "description",
      content: "Take a virtual look inside Top Choice Health Services — comfortable bedrooms, safe living spaces, and a warm home environment in Port Orchard, WA."
    }, {
      property: "og:title",
      content: "Our Home | Top Choice Health Services"
    }, {
      property: "og:description",
      content: "Comfortable bedrooms, safe living spaces, and a warm home environment in Port Orchard, WA."
    }, {
      property: "og:url",
      content: "/our-home"
    }],
    links: [{
      rel: "canonical",
      href: "/our-home"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-D3BsIolq.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us | Top Choice Health Services | Port Orchard, WA"
    }, {
      name: "description",
      content: "Contact Top Choice Health Services to schedule a tour, ask questions, or learn more about our adult family home in Port Orchard, WA. Call 360-443-2310."
    }, {
      property: "og:title",
      content: "Contact Us | Top Choice Health Services"
    }, {
      property: "og:description",
      content: "Schedule a tour or ask questions. Call 360-443-2310."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-B2yaBFaO.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us | Top Choice Health Services"
    }, {
      name: "description",
      content: "Learn about Top Choice Health Services — our mission, values, and the compassionate team behind our licensed adult family home in Port Orchard, WA."
    }, {
      property: "og:title",
      content: "About Us | Top Choice Health Services"
    }, {
      property: "og:description",
      content: "Our mission, values, and compassionate team behind our licensed adult family home in Port Orchard, WA."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-58erXA44.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Top Choice Health Services"
    }, {
      name: "description",
      content: "Top Choice Health Services offers compassionate, personalized adult family home care in Port Orchard, WA. 24-hour care, medication management, memory support, and more."
    }, {
      property: "og:title",
      content: "Top Choice Health Services"
    }, {
      property: "og:description",
      content: "Compassionate, licensed adult family home care in Port Orchard, WA."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthcareProvider",
        name: SITE.name,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2763 Grand Fir Pl SE",
          addressLocality: "Port Orchard",
          addressRegion: "WA",
          postalCode: "98366",
          addressCountry: "US"
        },
        serviceType: "Adult Family Home"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const OurHomeRoute = Route$3.update({
  id: "/our-home",
  path: "/our-home",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  OurHomeRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
