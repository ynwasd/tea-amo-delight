import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // VPS root: npm run build (base /). GitHub Pages: npm run build:gh-pages (base /tea-amo-delight/)
  base: process.env.VITE_BASE ?? "/",
  build: {
    // Allow different output folders via VITE_OUT_DIR (e.g. dist-vps, dist-gh-pages)
    outDir: process.env.VITE_OUT_DIR ?? "dist",
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
