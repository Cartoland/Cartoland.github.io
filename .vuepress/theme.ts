import { hopeTheme } from "vuepress-theme-hope";
import { Page } from "vuepress";

import { enusNavbar, zhtwNavbar, zhcnNavbar } from "./navbar/index.js";
import { enusSidebar, zhtwSidebar, zhcnSidebar } from "./sidebar/index.js";

export default hopeTheme({
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.png",
  repo: "Cartoland/Cartoland",
  contributors: true,
  lastUpdated: true,
  darkmode: "enable",
  favicon: "/logo.png",

  locales: {
    "/zh-tw/": {
      navbar: zhtwNavbar,
      sidebar: zhtwSidebar,

      author: {
        name: "Cartoland",
        url: "https://github.com/Cartoland",
        email: "cartoland0101@gmail.com",
      },

      blog: {
        description: "一個圍繞 Minecraft 地圖製作的社群",
        medias: {
          Discord: "https://www.discord.com/invite/UMYxwHyRNE",
          GitHub: "https://github.com/Cartoland/",
        },
        name: "Cartoland",
        avatar: "/logo.png",
      },

      metaLocales: {
        editLink: "在 GitHub 上編輯此頁面",
      },
    },
    "/en-us/": {
      navbar: enusNavbar,
      sidebar: enusSidebar,

      author: {
        name: "Cartoland",
        url: "https://github.com/Cartoland",
        email: "cartoland0101@gmail.com",
      },

      blog: {
        description: "A community focused on Minecraft map making",
        medias: {
          Discord: "https://www.discord.com/invite/UMYxwHyRNE",
          GitHub: "https://github.com/Cartoland/",
        },
        name: "Cartoland",
        avatar: "/logo.png",
      },
    },
    "/zh-cn/": {
      navbar: zhcnNavbar,
      sidebar: zhcnSidebar,

      author: {
        name: "Cartoland",
        url: "https://github.com/Cartoland",
        email: "cartoland0101@gmail.com",
      },

      blog: {
        description: "一个围绕 Minecraft 地图制作的社群",
        medias: {
          Discord: "https://www.discord.com/invite/UMYxwHyRNE",
          GitHub: "https://github.com/Cartoland/",
        },
        name: "Cartoland",
        avatar: "/logo.png",
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页面",
      },
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: {
      filter: ({ frontmatter, filePathRelative, path }: Page) =>
        !!filePathRelative && !frontmatter.home && frontmatter.pageClass !== "hideInBlog",
    },

    redirect: {
      switchLocale: "modal",
      defaultBehavior: "homepage",
      defaultLocale: "/en-us/",
      config: {
        "/": "/en-us/",
      },
    },

    components: {
      components: ["Badge", "VPCard"],
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
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
