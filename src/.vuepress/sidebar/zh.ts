import { sidebar } from "vuepress-theme-hope";

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
}
const back_code = {
  text: '返回代码笔记',
  icon: 'code',
  link: '/posts/code/',
}
const back_other = {
  text: '返回其他笔记',
  icon: 'other',
  link: '/posts/other/',
}

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "代码笔记",
      icon: "code",
      link: "posts/code/",
      prefix: "posts/code/",
      children: "structure",
    },
    {
      text: "其他笔记",
      icon: "other",
      link: "posts/other/",
      prefix: "posts/other/",
      children: "structure",
    },
    "intro",
  ],
  "/posts/code/": [
    back_posts,
    {
      text: "代码笔记",
      icon: "code",
      link: "/posts/code/",
      children: "structure",
    },
  ],
  "/posts/code/end/": [
    back_code,
    {
      text: "后端",
      icon: "service",
      link: "/posts/code/end/",
      children: "structure",
    },
  ],
  "/posts/code/front/": [
    back_code,
    {
      text: "前端",
      icon: "front",
      link: "/posts/code/front/",
      children: "structure",
    },
  ],
  "/posts/other/": [
    back_posts,
    {
      text: "其他笔记",
      icon: "other",
      link: "/posts/other/",
      children: "structure",
    }
  ],
  "/posts/other/error/": [
    back_other,
    {
      text: "报错处理",
      icon: "error-fill",
      link: "/posts/other/error/",
      children: "structure",
    }
  ],
  "/posts/other/develop/": [
    back_other,
    {
      text: "开发问题解决",
      icon: "question",
      link: "/posts/other/develop/",
      children: "structure",
    }
  ],
  "/posts/other/software/": [
    back_other,
    {
      text: "软件笔记",
      icon: "software",
      link: "/posts/other/software/",
      children: "structure",
    }
  ],
  "/posts/other/docker/": [
    back_other,
    {
      text: "docker",
      icon: "docker",
      link: "/posts/other/docker/",
      children: "structure",
    }
  ],
  "/posts/other/linux/": [
    back_other,
    {
      text: "linux",
      icon: "linux",
      link: "/posts/other/linux/",
      children: "structure",
    }
  ],
  "/posts/other/ros/": [
    back_other,
    {
      text: "ros",
      icon: "ros",
      link: "/posts/other/ros/",
      children: "structure",
    }
  ]
})