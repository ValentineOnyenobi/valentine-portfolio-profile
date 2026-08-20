// Post-processing for GitHub Pages static hosting.
// - .nojekyll so /assets/_* files are served
// - 404.html fallback so deep links / unknown paths boot the client router
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const out = resolve(process.cwd(), "dist/client");
const index = resolve(out, "index.html");

if (!existsSync(index)) {
  console.error("[postbuild] dist/client/index.html missing — did the prerender step run?");
  process.exit(1);
}

writeFileSync(resolve(out, ".nojekyll"), "");
copyFileSync(index, resolve(out, "404.html"));

console.log("[postbuild] Wrote dist/client/.nojekyll and dist/client/404.html");
