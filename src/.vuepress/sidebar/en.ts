import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "code note",
      icon: "book",
      link: "posts/code/",
      prefix: "posts/code/",
      children: "structure",
    },
    "intro",
  ],
});
