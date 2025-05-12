import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/babybet',
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      examples: "/src/examples",
      routes: "/src/routes",
      layouts: "/src/layouts",
      pages: "/src/pages",
      context: "/src/context",
    },
  },
});