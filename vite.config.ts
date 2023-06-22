import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import electron from "vite-plugin-electron"
import electronRenderer from "vite-plugin-electron-renderer"
import postcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
      },
    ]),
    electronRenderer(),
  ],
  css: {
    postcss: {
      plugins: [postcss],
    },
  },
})
