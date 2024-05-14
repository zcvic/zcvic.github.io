import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "code note",
      icon: "book",
      prefix: "posts/code/",
      children: "structure",
    },
    "intro",
  ],
});
