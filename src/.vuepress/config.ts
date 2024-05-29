import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "荒芜blog",
      description: "荒芜blog",
    },
    "/en/": {
      lang: "en-US",
      title: "hw-blog",
      description: "hw-blog",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});
