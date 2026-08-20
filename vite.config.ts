// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages: `STATIC_EXPORT=1 bun run build`.
// Nitro (server runtime) is skipped and every route is prerendered to HTML,
// with a SPA shell fallback so client-side routing/hydration keeps working.
const staticExport = process.env["STATIC_EXPORT"] === "1";

const prerenderPages = ["/", "/about", "/experience", "/contact", "/projects"];

export default defineConfig({
  ...(staticExport ? { nitro: false as const } : {}),
  tanstackStart: staticExport
    ? {
        // Fully static output — no server runtime.
        spa: { enabled: true, prerender: { crawlLinks: false } },
        prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true, retryCount: 1 },
        pages: prerenderPages.map((path) => ({ path, prerender: { enabled: true } })),
      }
    : {
        // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
        // nitro/vite builds from this
        server: { entry: "server" },
      },
});
