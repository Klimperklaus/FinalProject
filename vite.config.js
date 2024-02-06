import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: resolve("./index.html"),
        getgame: resolve("./getthegame.html"),
        specs: resolve("./specs.html"),
        social: resolve("./social.html"),
        team: resolve("./team.html"),
        impres: resolve("./impress.html"),
      },
    },
  },
});
