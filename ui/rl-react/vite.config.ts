import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages serves the demo from /<repository>/; everywhere else the app sits at the root.
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: {
    // Same port and proxy as the Angular dev server, so the README's swa command keeps working.
    port: 4200,
    proxy: {
      "/api": { target: "http://localhost:3000", secure: false },
    },
  },
  build: {
    // Flat output: update_pi.sh copies dist with `cp *.*`, which skips subfolders.
    assetsDir: "",
  },
});
