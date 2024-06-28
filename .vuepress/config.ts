import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 9090,
  // open: true,

  locales: {
    "/zh-tw/": {
      lang: "zh-TW",
      title: "Cartoland",
      description: "一個圍繞 Minecraft 地圖製作的社群",
    },
    "/en-us/": {
      lang: "en-US",
      title: "Cartoland",
      description: "A community focused on Minecraft map making",
    },
    "/zh-cn/": {
      lang: "zh-CN",
      title: "Cartoland",
      description: "一个围绕 Minecraft 地图制作的社群",
    },
  },

  lang: "en-US",
  title: "Cartoland",
  description: "A community focused on Minecraft map making",

  theme,

  head: [
    ["meta", { property: "og:image", content: "/logo.png" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "256" }],
    ["meta", { property: "og:image:height", content: "256" }],
    ["meta", { property: "theme-color", content: "#83c765" }],
  ],
});
