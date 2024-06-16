import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/portfolio",
  // "/demo/",
  {
    text: "代码笔记",
    icon: "laptop-code",
    prefix: "/posts/code/",
    children:[
      {
        text: "前端",
        prefix: "front/",
        children:["uniapp/","vue2/","vue3/"]
      },
      {
        text: "后端",
        prefix: "end/",
        children:["java/","python/"]
      }
    ]
  },
  {
    text: "其他笔记",
    icon: "other",
    prefix: "/posts/other/",
    children: ["error/","develop/","software/","docker/","linux/","ros/"]
  },
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //   ],
  // },
]);
