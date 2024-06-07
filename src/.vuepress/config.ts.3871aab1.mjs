// src/.vuepress/config.ts
import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/en/",
  "/en/portfolio",
  "/en/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/en/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" }
    ]
  }
]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/",
  "/portfolio",
  // "/demo/",
  {
    text: "\u4EE3\u7801\u7B14\u8BB0",
    icon: "laptop-code",
    prefix: "/posts/code/",
    children: [
      {
        text: "\u524D\u7AEF",
        prefix: "front/",
        children: ["uniapp/", "vue2/", "vue3/"]
      },
      {
        text: "\u540E\u7AEF",
        prefix: "end/",
        children: ["java/", "python/"]
      }
    ]
  },
  {
    text: "\u5176\u4ED6\u7B14\u8BB0",
    icon: "other",
    prefix: "/posts/other/",
    children: ["error/", "linux/", "software/"]
  }
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

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "code note",
      icon: "book",
      link: "posts/code/",
      prefix: "posts/code/",
      children: "structure"
    },
    "intro"
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/": [
    "",
    {
      text: "\u4EE3\u7801\u7B14\u8BB0",
      icon: "code",
      link: "posts/code/",
      prefix: "posts/code/",
      children: "structure"
    },
    {
      text: "\u5176\u4ED6\u7B14\u8BB0",
      icon: "other",
      link: "posts/other/",
      prefix: "posts/other/",
      children: "structure"
    },
    "intro"
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://blog.zwymw.top",
  author: {
    name: "\u8352\u829C",
    url: "https://blog.zwymw.top",
    email: "2484068670@qq.com"
  },
  iconAssets: "//at.alicdn.com/t/c/font_4562321_mfwftc24qcd.css",
  // iconAssets: "fontawesome-with-brands",
  logo: "logo.png",
  fullscreen: true,
  repo: "zcvic/zcvic.github.io",
  docsDir: "src",
  blog: {
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:2484068670@qq.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/zswljy",
      GitHub: "https://github.com/zcvic",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=2484068670&site=qq&menu=yes"
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    }
  },
  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "\u8352\u829Cblog",
      displayFooter: true,
      blog: {
        description: "\u5E73\u5E73\u65E0\u5947\u6253\u5DE5\u4EBA",
        intro: "/intro.html"
      },
      // page meta
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    },
    "/en/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      blog: {
        description: "A FrontEnd programmer",
        intro: "/en/intro.html"
      },
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/en/demo/encrypt.html": ["1234"]
    }
  },
  // enable it to preview all changes in time
  // hotReload: true,
  plugins: {
    blog: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Giscus",
    //   repo: "zcvic/zcvic.github.io",
    //   repoId: "R_kgDOL6tQwg",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOL6tQws4Cfoqc",
    // },
    comment: {
      provider: "Waline",
      serverURL: "https://waline.zwymw.top",
      // your server url
      reaction: true,
      emoji: [
        "//unpkg.com/@waline/emojis@1.2.0/weibo",
        "//unpkg.com/@waline/emojis@1.2.0/bmoji",
        "//unpkg.com/@waline/emojis@1.2.0/bilibili",
        "//unpkg.com/@waline/emojis@1.2.0/soul-emoji"
      ]
    },
    components: {
      components: ["Badge", "VPCard"]
    },
    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true
      // install chart.js before enabling it
      // chart: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // install katex before enabling it
      // katex: true,
      // install mathjax-full before enabling it
      // mathjax: true,
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    }
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
}, { custom: true });

// src/.vuepress/config.ts
var __vite_injected_original_import_meta_url = "file:///D:/Desolate/Documents/job/project/blog/blog/src/.vuepress/config.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "\u8352\u829Cblog",
      description: "\u8352\u829Cblog\uFF0C\u8352\u829C\u535A\u5BA2\uFF0C\u8BB0\u5F55\u5206\u4EAB\u4E00\u4E9B\u7B14\u8BB0"
    },
    "/en/": {
      lang: "en-US",
      title: "hw-blog",
      description: "hw-blog\uFF0C\u8BB0\u5F55\u5206\u4EAB\u4E00\u4E9B\u7B14\u8BB0"
    }
  },
  theme: theme_default,
  // Enable it with pwa
  // shouldPrefetch: false,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    )
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovRGVzb2xhdGUvRG9jdW1lbnRzL2pvYi9wcm9qZWN0L2Jsb2cvYmxvZy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEZXNvbGF0ZVxcXFxEb2N1bWVudHNcXFxcam9iXFxcXHByb2plY3RcXFxcYmxvZ1xcXFxibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXNvbGF0ZS9Eb2N1bWVudHMvam9iL3Byb2plY3QvYmxvZy9ibG9nL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZ2V0RGlybmFtZSwgcGF0aCB9IGZyb20gXCJ2dWVwcmVzcy91dGlsc1wiO1xyXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xyXG5cclxuY29uc3QgX19kaXJuYW1lID0gZ2V0RGlybmFtZShpbXBvcnQubWV0YS51cmwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XHJcbiAgYmFzZTogXCIvXCIsXHJcblxyXG4gIGxvY2FsZXM6IHtcclxuICAgIFwiL1wiOiB7XHJcbiAgICAgIGxhbmc6IFwiemgtQ05cIixcclxuICAgICAgdGl0bGU6IFwiXHU4MzUyXHU4MjlDYmxvZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJcdTgzNTJcdTgyOUNibG9nXHVGRjBDXHU4MzUyXHU4MjlDXHU1MzVBXHU1QkEyXHVGRjBDXHU4QkIwXHU1RjU1XHU1MjA2XHU0RUFCXHU0RTAwXHU0RTlCXHU3QjE0XHU4QkIwXCIsXHJcbiAgICB9LFxyXG4gICAgXCIvZW4vXCI6IHtcclxuICAgICAgbGFuZzogXCJlbi1VU1wiLFxyXG4gICAgICB0aXRsZTogXCJody1ibG9nXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcImh3LWJsb2dcdUZGMENcdThCQjBcdTVGNTVcdTUyMDZcdTRFQUJcdTRFMDBcdTRFOUJcdTdCMTRcdThCQjBcIixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB0aGVtZSxcclxuXHJcbiAgLy8gRW5hYmxlIGl0IHdpdGggcHdhXHJcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxyXG5cclxuICBhbGlhczoge1xyXG4gICAgXCJAdGhlbWUtaG9wZS9tb2R1bGVzL2Jsb2cvY29tcG9uZW50cy9CbG9nSGVyb1wiOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgIF9fZGlybmFtZSxcclxuICAgICAgXCIuL2NvbXBvbmVudHMvQmxvZ0hlcm8udnVlXCIsXHJcbiAgICApLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0Rlc29sYXRlL0RvY3VtZW50cy9qb2IvcHJvamVjdC9ibG9nL2Jsb2cvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVzb2xhdGVcXFxcRG9jdW1lbnRzXFxcXGpvYlxcXFxwcm9qZWN0XFxcXGJsb2dcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXNvbGF0ZS9Eb2N1bWVudHMvam9iL3Byb2plY3QvYmxvZy9ibG9nL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5pbXBvcnQgeyBlbk5hdmJhciwgemhOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZW5TaWRlYmFyLCB6aFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyL2luZGV4LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vYmxvZy56d3ltdy50b3BcIixcclxuXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBcIlx1ODM1Mlx1ODI5Q1wiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYmxvZy56d3ltdy50b3BcIixcclxuICAgIGVtYWlsOiBcIjI0ODQwNjg2NzBAcXEuY29tXCIsXHJcbiAgfSxcclxuXHJcbiAgaWNvbkFzc2V0czogXCIvL2F0LmFsaWNkbi5jb20vdC9jL2ZvbnRfNDU2MjMyMV9tZndmdGMyNHFjZC5jc3NcIixcclxuICAvLyBpY29uQXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXHJcblxyXG4gIGxvZ286IFwibG9nby5wbmdcIixcclxuICBmdWxsc2NyZWVuOiB0cnVlLFxyXG4gIHJlcG86IFwiemN2aWMvemN2aWMuZ2l0aHViLmlvXCIsXHJcblxyXG4gIGRvY3NEaXI6IFwic3JjXCIsXHJcbiAgYmxvZzoge1xyXG4gICAgbWVkaWFzOiB7XHJcbiAgICAgIC8vIEJhaWR1OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gQmlsaUJpbGk6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBCaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBEaW5nZGluZzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIERpc2NvcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBEcmliYmJsZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIEVtYWlsOiBcIm1haWx0bzoyNDg0MDY4NjcwQHFxLmNvbVwiLFxyXG4gICAgICAvLyBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIEZhY2Vib29rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gRmxpcGJvYXJkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9naXRlZS5jb20venN3bGp5XCIsXHJcbiAgICAgIEdpdEh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vemN2aWNcIixcclxuICAgICAgLy8gR2l0bGFiOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gR21haWw6IFwibWFpbHRvOmluZm9AZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gTGFyazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIExpbmVzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBQaW50ZXJlc3Q6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBQb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBRUTogXCJodHRwOi8vd3BhLnFxLmNvbS9tc2dyZD92PTMmdWluPTI0ODQwNjg2NzAmc2l0ZT1xcSZtZW51PXllc1wiLFxyXG4gICAgICAvLyBRem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFJlZGRpdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFJzczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gVHdpdHRlcjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFdlY2hhdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gV2hhdHNhcHA6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBZb3V0dWJlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy8gWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvLyBNckhvcGU6IFtcImh0dHBzOi8vbWlzdGVyLWhvcGUuY29tXCIsIE1SX0hPUEVfQVZBVEFSXSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbG9jYWxlczoge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hpbmVzZSBsb2NhbGUgY29uZmlnXHJcbiAgICAgKi9cclxuICAgIFwiL1wiOiB7XHJcbiAgICAgIC8vIG5hdmJhclxyXG4gICAgICBuYXZiYXI6IHpoTmF2YmFyLFxyXG5cclxuICAgICAgLy8gc2lkZWJhclxyXG4gICAgICBzaWRlYmFyOiB6aFNpZGViYXIsXHJcblxyXG4gICAgICBmb290ZXI6IFwiXHU4MzUyXHU4MjlDYmxvZ1wiLFxyXG5cclxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcclxuXHJcbiAgICAgIGJsb2c6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcdTVFNzNcdTVFNzNcdTY1RTBcdTU5NDdcdTYyNTNcdTVERTVcdTRFQkFcIixcclxuICAgICAgICBpbnRybzogXCIvaW50cm8uaHRtbFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gcGFnZSBtZXRhXHJcbiAgICAgIG1ldGFMb2NhbGVzOiB7XHJcbiAgICAgICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIi9lbi9cIjoge1xyXG4gICAgICAvLyBuYXZiYXJcclxuICAgICAgbmF2YmFyOiBlbk5hdmJhcixcclxuXHJcbiAgICAgIC8vIHNpZGViYXJcclxuICAgICAgc2lkZWJhcjogZW5TaWRlYmFyLFxyXG5cclxuICAgICAgZm9vdGVyOiBcIkRlZmF1bHQgZm9vdGVyXCIsXHJcblxyXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG5cclxuICAgICAgYmxvZzoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgRnJvbnRFbmQgcHJvZ3JhbW1lclwiLFxyXG4gICAgICAgIGludHJvOiBcIi9lbi9pbnRyby5odG1sXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBtZXRhTG9jYWxlczoge1xyXG4gICAgICAgIGVkaXRMaW5rOiBcIkVkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgfSxcclxuXHJcbiAgZW5jcnlwdDoge1xyXG4gICAgY29uZmlnOiB7XHJcbiAgICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXHJcbiAgICAgIFwiL2VuL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIGVuYWJsZSBpdCB0byBwcmV2aWV3IGFsbCBjaGFuZ2VzIGluIHRpbWVcclxuICAvLyBob3RSZWxvYWQ6IHRydWUsXHJcblxyXG4gIHBsdWdpbnM6IHtcclxuICAgIGJsb2c6IHRydWUsXHJcblxyXG4gICAgLy8gSW5zdGFsbCBAd2FsaW5lL2NsaWVudCBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgIC8vIE5vdGU6IFRoaXMgaXMgZm9yIHRlc3RpbmcgT05MWSFcclxuICAgIC8vIFlvdSBNVVNUIGdlbmVyYXRlIGFuZCB1c2UgeW91ciBvd24gY29tbWVudCBzZXJ2aWNlIGluIHByb2R1Y3Rpb24uXHJcbiAgICAvLyBjb21tZW50OiB7XHJcbiAgICAvLyAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxyXG4gICAgLy8gICByZXBvOiBcInpjdmljL3pjdmljLmdpdGh1Yi5pb1wiLFxyXG4gICAgLy8gICByZXBvSWQ6IFwiUl9rZ0RPTDZ0UXdnXCIsXHJcbiAgICAvLyAgIGNhdGVnb3J5OiBcIkFubm91bmNlbWVudHNcIixcclxuICAgIC8vICAgY2F0ZWdvcnlJZDogXCJESUNfa3dET0w2dFF3czRDZm9xY1wiLFxyXG4gICAgLy8gfSxcclxuXHJcbiAgICBjb21tZW50OiB7XHJcbiAgICAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxyXG4gICAgICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly93YWxpbmUuend5bXcudG9wXCIsIC8vIHlvdXIgc2VydmVyIHVybFxyXG4gICAgICByZWFjdGlvbjp0cnVlLFxyXG4gICAgICBlbW9qaTogW1xyXG4gICAgICAgICcvL3VucGtnLmNvbS9Ad2FsaW5lL2Vtb2ppc0AxLjIuMC93ZWlibycsXHJcbiAgICAgICAgJy8vdW5wa2cuY29tL0B3YWxpbmUvZW1vamlzQDEuMi4wL2Jtb2ppJyxcclxuICAgICAgICAnLy91bnBrZy5jb20vQHdhbGluZS9lbW9qaXNAMS4yLjAvYmlsaWJpbGknLFxyXG4gICAgICAgICcvL3VucGtnLmNvbS9Ad2FsaW5lL2Vtb2ppc0AxLjIuMC9zb3VsLWVtb2ppJ1xyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRoZXNlIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcclxuICAgIG1kRW5oYW5jZToge1xyXG4gICAgICBhbGlnbjogdHJ1ZSxcclxuICAgICAgYXR0cnM6IHRydWUsXHJcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxyXG4gICAgICBjb21wb25lbnQ6IHRydWUsXHJcbiAgICAgIGRlbW86IHRydWUsXHJcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcclxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgIGltZ1NpemU6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IHRydWUsXHJcbiAgICAgIG1hcms6IHRydWUsXHJcbiAgICAgIHBsYW50dW1sOiB0cnVlLFxyXG4gICAgICBzcG9pbGVyOiB0cnVlLFxyXG4gICAgICBzdHlsaXplOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXHJcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICBzdXA6IHRydWUsXHJcbiAgICAgIHRhYnM6IHRydWUsXHJcbiAgICAgIHRhc2tsaXN0OiB0cnVlLFxyXG4gICAgICB2UHJlOiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgLy8gY2hhcnQ6IHRydWUsXHJcblxyXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBlY2hhcnRzIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBmbG93Y2hhcnQudHMgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIGdmbSByZXF1aXJlcyBtYXRoamF4LWZ1bGwgdG8gcHJvdmlkZSB0ZXggc3VwcG9ydFxyXG4gICAgICAvLyBnZm06IHRydWUsXHJcblxyXG4gICAgICAvLyBpbnN0YWxsIGthdGV4IGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBrYXRleDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIGluc3RhbGwgbWF0aGpheC1mdWxsIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBtYXRoamF4OiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBtZXJtYWlkIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBtZXJtYWlkOiB0cnVlLFxyXG5cclxuICAgICAgLy8gcGxheWdyb3VuZDoge1xyXG4gICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxyXG4gICAgICAvLyB9LFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCByZXZlYWwuanMgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAgIC8vIHJldmVhbEpzOiB7XHJcbiAgICAgIC8vICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIC8vIGluc3RhbGwgQHZ1ZS9yZXBsIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBzYW5kcGFjay12dWUzIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBzYW5kcGFjazogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gaW5zdGFsbCBAdnVlcHJlc3MvcGx1Z2luLXB3YSBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXHJcbiAgICAvLyBwd2E6IHtcclxuICAgIC8vICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcclxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxyXG4gICAgLy8gICBjYWNoZUltYWdlOiB0cnVlLFxyXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxyXG4gICAgLy8gICBhcHBsZToge1xyXG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxyXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIG1zVGlsZToge1xyXG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcclxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIG1hbmlmZXN0OiB7XHJcbiAgICAvLyAgICAgaWNvbnM6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXHJcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxyXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXHJcbiAgICAvLyAgICAgICAgIGljb25zOiBbXHJcbiAgICAvLyAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcclxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgXSxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgfSxcclxufSx7Y3VzdG9tOnRydWV9KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0Rlc29sYXRlL0RvY3VtZW50cy9qb2IvcHJvamVjdC9ibG9nL2Jsb2cvc3JjLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERlc29sYXRlXFxcXERvY3VtZW50c1xcXFxqb2JcXFxccHJvamVjdFxcXFxibG9nXFxcXGJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc29sYXRlL0RvY3VtZW50cy9qb2IvcHJvamVjdC9ibG9nL2Jsb2cvc3JjLy52dWVwcmVzcy9uYXZiYXIvZW4udHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuTmF2YmFyID0gbmF2YmFyKFtcclxuICBcIi9lbi9cIixcclxuICBcIi9lbi9wb3J0Zm9saW9cIixcclxuICBcIi9lbi9kZW1vL1wiLFxyXG4gIHtcclxuICAgIHRleHQ6IFwiUG9zdHNcIixcclxuICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgcHJlZml4OiBcIi9lbi9wb3N0cy9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkFwcGxlXCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImFwcGxlL1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGUxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIkFwcGxlMlwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyXCIgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiQmFuYW5hXCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkJhbmFuYSAxXCIsXHJcbiAgICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIjFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiQmFuYW5hIDJcIixcclxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiMlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIkNoZXJyeVwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiRHJhZ29uIEZydWl0XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImRyYWdvbmZydWl0XCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovRGVzb2xhdGUvRG9jdW1lbnRzL2pvYi9wcm9qZWN0L2Jsb2cvYmxvZy9zcmMvLnZ1ZXByZXNzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVzb2xhdGVcXFxcRG9jdW1lbnRzXFxcXGpvYlxcXFxwcm9qZWN0XFxcXGJsb2dcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGVzb2xhdGUvRG9jdW1lbnRzL2pvYi9wcm9qZWN0L2Jsb2cvYmxvZy9zcmMvLnZ1ZXByZXNzL25hdmJhci96aC50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xyXG4gIFwiL1wiLFxyXG4gIFwiL3BvcnRmb2xpb1wiLFxyXG4gIC8vIFwiL2RlbW8vXCIsXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTRFRTNcdTc4MDFcdTdCMTRcdThCQjBcIixcclxuICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcclxuICAgIHByZWZpeDogXCIvcG9zdHMvY29kZS9cIixcclxuICAgIGNoaWxkcmVuOltcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1MjREXHU3QUVGXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImZyb250L1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOltcInVuaWFwcC9cIixcInZ1ZTIvXCIsXCJ2dWUzL1wiXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTU0MEVcdTdBRUZcIixcclxuICAgICAgICBwcmVmaXg6IFwiZW5kL1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOltcImphdmEvXCIsXCJweXRob24vXCJdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU1MTc2XHU0RUQ2XHU3QjE0XHU4QkIwXCIsXHJcbiAgICBpY29uOiBcIm90aGVyXCIsXHJcbiAgICBwcmVmaXg6IFwiL3Bvc3RzL290aGVyL1wiLFxyXG4gICAgY2hpbGRyZW46IFtcImVycm9yL1wiLFwibGludXgvXCIsXCJzb2Z0d2FyZS9cIl1cclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHRleHQ6IFwiXHU1MzVBXHU2NTg3XCIsXHJcbiAgLy8gICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAvLyAgIHByZWZpeDogXCIvcG9zdHMvXCIsXHJcbiAgLy8gICBjaGlsZHJlbjogW1xyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgdGV4dDogXCJcdTgyRjlcdTY3OUNcIixcclxuICAvLyAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAvLyAgICAgICBwcmVmaXg6IFwiYXBwbGUvXCIsXHJcbiAgLy8gICAgICAgY2hpbGRyZW46IFtcclxuICAvLyAgICAgICAgIHsgdGV4dDogXCJcdTgyRjlcdTY3OUMxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxyXG4gIC8vICAgICAgICAgeyB0ZXh0OiBcIlx1ODJGOVx1Njc5QzJcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMlwiIH0sXHJcbiAgLy8gICAgICAgICBcIjNcIixcclxuICAvLyAgICAgICAgIFwiNFwiLFxyXG4gIC8vICAgICAgIF0sXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OVwiLFxyXG4gIC8vICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gIC8vICAgICAgIHByZWZpeDogXCJiYW5hbmEvXCIsXHJcbiAgLy8gICAgICAgY2hpbGRyZW46IFtcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgdGV4dDogXCJcdTk5OTlcdTg1NDkgMVwiLFxyXG4gIC8vICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAvLyAgICAgICAgICAgbGluazogXCIxXCIsXHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAyXCIsXHJcbiAgLy8gICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gIC8vICAgICAgICAgICBsaW5rOiBcIjJcIixcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICBcIjNcIixcclxuICAvLyAgICAgICAgIFwiNFwiLFxyXG4gIC8vICAgICAgIF0sXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHsgdGV4dDogXCJcdTZBMzFcdTY4NDNcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiY2hlcnJ5XCIgfSxcclxuICAvLyAgICAgeyB0ZXh0OiBcIlx1NzA2Qlx1OUY5OVx1Njc5Q1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJkcmFnb25mcnVpdFwiIH0sXHJcbiAgLy8gICAgIFwidG9tYXRvXCIsXHJcbiAgLy8gICBdLFxyXG4gIC8vIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L0Rlc29sYXRlL0RvY3VtZW50cy9qb2IvcHJvamVjdC9ibG9nL2Jsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEZXNvbGF0ZVxcXFxEb2N1bWVudHNcXFxcam9iXFxcXHByb2plY3RcXFxcYmxvZ1xcXFxibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGVzb2xhdGUvRG9jdW1lbnRzL2pvYi9wcm9qZWN0L2Jsb2cvYmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlblNpZGViYXIgPSBzaWRlYmFyKHtcclxuICBcIi9lbi9cIjogW1xyXG4gICAgXCJcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJjb2RlIG5vdGVcIixcclxuICAgICAgaWNvbjogXCJib29rXCIsXHJcbiAgICAgIGxpbms6IFwicG9zdHMvY29kZS9cIixcclxuICAgICAgcHJlZml4OiBcInBvc3RzL2NvZGUvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxyXG4gICAgfSxcclxuICAgIFwiaW50cm9cIixcclxuICBdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9EZXNvbGF0ZS9Eb2N1bWVudHMvam9iL3Byb2plY3QvYmxvZy9ibG9nL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVzb2xhdGVcXFxcRG9jdW1lbnRzXFxcXGpvYlxcXFxwcm9qZWN0XFxcXGJsb2dcXFxcYmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc29sYXRlL0RvY3VtZW50cy9qb2IvcHJvamVjdC9ibG9nL2Jsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgemhTaWRlYmFyID0gc2lkZWJhcih7XHJcbiAgXCIvXCI6IFtcclxuICAgIFwiXCIsXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU0RUUzXHU3ODAxXHU3QjE0XHU4QkIwXCIsXHJcbiAgICAgIGljb246IFwiY29kZVwiLFxyXG4gICAgICBsaW5rOiBcInBvc3RzL2NvZGUvXCIsXHJcbiAgICAgIHByZWZpeDogXCJwb3N0cy9jb2RlL1wiLFxyXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU1MTc2XHU0RUQ2XHU3QjE0XHU4QkIwXCIsXHJcbiAgICAgIGljb246IFwib3RoZXJcIixcclxuICAgICAgbGluazogXCJwb3N0cy9vdGhlci9cIixcclxuICAgICAgcHJlZml4OiBcInBvc3RzL290aGVyL1wiLFxyXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAgIH0sXHJcbiAgICBcImludHJvXCIsXHJcbiAgXSxcclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTZWLFNBQVMsWUFBWSxZQUFZO0FBQzlYLFNBQVMsd0JBQXdCOzs7QUNEMFQsU0FBUyxpQkFBaUI7OztBQ0FWLFNBQVMsY0FBYztBQUUzWCxJQUFNLFdBQVcsT0FBTztBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFBaUIsTUFBTSxJQUFJO0FBQUEsVUFDbkQsRUFBRSxNQUFNLFVBQVUsTUFBTSxpQkFBaUIsTUFBTSxJQUFJO0FBQUEsVUFDbkQ7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FB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QTtBQUFBO0FBQUE7QUFBQSxFQTBERjtBQUNGLEdBQUUsRUFBQyxRQUFPLEtBQUksQ0FBQzs7O0FEblIrTSxJQUFNLDJDQUEyQztBQUkvUSxJQUFNLFlBQVksV0FBVyx3Q0FBZTtBQUU1QyxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUVBO0FBQUE7QUFBQTtBQUFBLEVBS0EsT0FBTztBQUFBLElBQ0wsZ0RBQWdELEtBQUs7QUFBQSxNQUNuRDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIm5hdmJhciIsICJuYXZiYXIiLCAic2lkZWJhciIsICJzaWRlYmFyIl0KfQo=
