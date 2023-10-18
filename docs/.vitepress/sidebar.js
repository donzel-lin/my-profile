export const sidebar = {
  "/javascript/": [
    {
      text: "Javascript",
      items: [
        // This shows `/Javascript/index.md` page.
        { text: "Javascript1", link: "/javascript/" }, // /Javascript/index.md
        { text: "Javascript2", link: "/javascript/index2" },
      ],
    },
    {
      text: "Html",
      items: [
        // This shows `/Html/index.md` page.
        { text: "Html1", link: "/html/" }, // /config/index.md
        { text: "Html2", link: "/html/index2" },
      ],
    },
    {
      text: "css",
      items: [{ text: "css3", link: "/css3/" }],
    },
  ],
  "/threejs/": [
    {
      text: "基础",
      link: "/threejs/base/",
    },
    {
      text: "纹理",
      link: "/threejs/uv/",
    },
  ],
  "/canvas/": [
    {
      text: "canvas初识",
      link: "/canvas/base/",
    },
  ],
};
