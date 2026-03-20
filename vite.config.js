import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const fileOpenFriendlyBuildPlugin = () => ({
  name: "file-open-friendly-build",
  enforce: "post",
  transformIndexHtml(html, ctx) {
    if (!ctx?.bundle) return html;
    const nextHtml = html.replace(
      /<script\b[^>]*\btype="module"[^>]*\bsrc="([^"]+)"[^>]*><\/script>/g,
      (_match, src) => `<script defer src="${src}"></script>`
    );
    return nextHtml.replace(/\s+crossorigin(="[^"]*")?/g, "");
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), fileOpenFriendlyBuildPlugin()],
  build: {
    outDir: "dist",
    cssCodeSplit: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "iife",
        name: "ResumeApp",
        inlineDynamicImports: true,
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 1234
  }
});
