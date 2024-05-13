import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "荒芜blog",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/en/": {
      lang: "en-US",
      title: "hw-blog",
      description: "A blog demo for vuepress-theme-hope",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
