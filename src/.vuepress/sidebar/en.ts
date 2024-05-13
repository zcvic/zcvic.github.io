import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "code note",
      icon: "book",
      prefix: "posts/code/",
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    },
  ],
});
