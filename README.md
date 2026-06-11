Project Title

Top Choice Health Services: A Vite + TypeScript web app with React-style .tsx components and a small server entry (server.ts).
Description

Overview: A modern, component-driven website for a health services provider. UI is organized under src/components/ and routes live in src/routes/. The app uses Vite for dev/build tooling and TypeScript for types.
Purpose: Site content and interactive UI for services, contact, sitemap, and informational pages.
Quick Start

Prerequisites: Node.js (16+ recommended), npm or yarn.
Install:
Run (development):
Build:
Preview production build:
Note: Confirm exact scripts in package.json.
Project Structure (high level)

Source: src/
Routes: src/routes/ — pages like index.tsx, about.tsx, services.tsx, contact.tsx.
Components: src/components/ — layout, UI primitives, and sections (lots of reusable .tsx components).
Server / Start: src/server.ts and src/start.ts — server entry points / startup.
Config: vite.config.ts, tsconfig.json, package.json.
Features

Reusable UI system (buttons, forms, cards, navigation, modals, etc.).
Route-based pages for services, contact, sitemap, and the homepage.
Server-side entry points suggest optional SSR or a small Node-based server.
