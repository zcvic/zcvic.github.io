import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "代码笔记",
      icon: "laptop-code",
      prefix: "posts/code/",
      children: "structure",
    },
    {
      text: "其他笔记",
      icon: "laptop-code",
      prefix: "posts/other/",
      children: "structure",
    },
    "intro",
  ],
});
