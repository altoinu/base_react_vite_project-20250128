import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  /*
  // TODO: Vitest?
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.mjs",
  },
  */
});
