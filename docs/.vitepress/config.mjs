import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { getSidebar } from "./utils/getSidebar";
export default defineConfig({
  title: "4triumph's Blog",
  titleTemplate: "4triumph",
  // md 文件根目录
  srcDir: "./src",
  lastUpdated: true,
  description:
    "4triumph's tech blog: An undergraduate's journey through frontend development, sharing insights, tips, and experiences in web technologies.",
  head: [
    ["script", { src: "/live2d.js" }],
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {},
      `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
    ],
    ["script", { defer: "", src: "/_vercel/insights/script.js" }],
  ],
  themeConfig: {
    logo: "/logo.jpg",
    // 顶部导航栏
    nav: [
      { text: "👋 About", link: "AboutMe.md" },
      { text: "💭 Blogs", link: "/Notes/index" },
      { text: "🦄 Projects", link: "Projects.md" },
      { text: "👫 Friends", link: "Friends.md" },
      { text: "🛫 Travel", link: "Travel.md" },
    ],
    // 文章页面左侧导航
    sidebar: {
      "/Notes/": getSidebar("/docs/src", "/Notes/"),
    },
    // 是否启动搜索功能
    search: {
      provider: "local",
    },
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [{ icon: "github", link: "https://github.com/4triumph" }],
    // 首页底部版权声明
    footer: {
      copyright: "Copyright © 2025-present 4triumph",
    },
    // 文章内导航栏标题
    outlineTitle: "导航栏",
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/UpdateTime.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/Footer.vue", import.meta.url)
          ),
        },
      ],
    },
  },
  markdown: {
    math: true,
  },
});
