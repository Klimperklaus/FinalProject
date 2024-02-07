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
        js: resolve("./script.js"),
        hoverSound: resolve("./audio/hover.mp3"),
        hover2Sound: resolve("./audio/hover2.mp3"),
      },
    },
  },
});
