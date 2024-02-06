import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: resolve("./index.html"),
        getgame: resolve("./getthegame.html"),
        guides: resolve("./guides.html"),
        social: resolve("./social.html"),
        team: resolve("./team.html"),
        impres: resolve("./impress.html"),
      },
    },
  },
});
