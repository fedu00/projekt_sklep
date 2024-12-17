import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./",
  build: {
    outDir: "public",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "frontend/main.ts"), // Plik wejściowy
      },
    },
  },
});
