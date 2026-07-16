import { copyFileSync, existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const assetsToCopy = [
  {
    source: path.resolve(__dirname, "../../Downloads/ayoub-image.jpg"),
    dest: path.resolve(__dirname, "src/assets/images/ayoub-image.jpg"),
  },
  {
    source: path.resolve(__dirname, "../../Downloads/BARNAT-Ayoub-CV-fr.pdf"),
    dest: path.resolve(__dirname, "public/BARNAT-Ayoub-CV-fr.pdf"),
  },
];

function copyProfileAssetsPlugin() {
  return {
    name: "copy-profile-assets",
    buildStart() {
      for (const { source, dest } of assetsToCopy) {
        if (!existsSync(source)) continue;

        mkdirSync(path.dirname(dest), { recursive: true });
        copyFileSync(source, dest);
      }
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [copyProfileAssetsPlugin(), react(), tailwindcss()],
  server: {
    open: true,
    host: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});