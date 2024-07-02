import { defineClientConfig } from "vuepress/client";
import wool from "./components/wool.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("wool", wool);
  },
});
