import { nav } from "./nav";
import { sidebar } from "./sidebar";
export default {
  themeConfig: {
    siteTitle: "Alvin custom page",
    description: "Just playing around.",
    logo: "/logo.jpeg",
    nav: nav,
    sidebar: sidebar,
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
  },
};
