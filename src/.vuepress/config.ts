import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "荒芜",
      description: "荒芜,荒芜blog，荒芜博客，记录分享一些笔记",
    },
    "/en/": {
      lang: "en-US",
      title: "hw",
      description: "hw,hw-blog，记录分享一些笔记",
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
