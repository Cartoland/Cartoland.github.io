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
      description: "一個圍繞 Minecraft 地圖製作的社區",
    },
    "/en-us/": {
      lang: "en-US",
      title: "Cartoland",
      description: "A community focussed around Minecraft map making",
    },
  },

  lang: "en-US",
  title: "Cartoland",
  description: "A community focussed around Minecraft map making",

  theme,

  head: [
    ["meta", { property: "og:image", content: "https://avatars.githubusercontent.com/u/116450397" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "256" }],
    ["meta", { property: "og:image:height", content: "256" }],
    ["meta", { property: "theme-color", content: "#83c765" }],
  ],
});
