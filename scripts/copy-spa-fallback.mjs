// GitHub Pages serves static files only, so a direct visit to a client-side
// route (e.g. /vehicles) has no matching file and returns 404. Copying the
// built index.html to 404.html makes GitHub Pages serve the app shell for
// any unknown path, letting React Router take over from there.
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "..", "dist");
copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
console.log("Copied dist/index.html -> dist/404.html for SPA routing on GitHub Pages.");
