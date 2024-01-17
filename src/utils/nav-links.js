export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About me",
    path: "/about",
  },
  {
    name: "Publications",
    id: 3,
    children: [
      {
        id: 1,
        name: "Reports",
        path: "/articles",
      },
      {
        id: 3,
        name: "Book Chapters",
        path: "/book-chapters",
      },
    ],
  },
  {
    id: 4,
    name: "Interviews",
    path: "/interviews",
  },
  {
    id: 7,
    name: "stories",
    path: "/stories",
  },
  {
    id: 6,
    name: "Contact Me",
    path: "/contact-me",
  },
];

export const short_links = [
  {
    id: 1,
    name: "Reports",
    icon: "/icons/articles.svg",
    count: 4,
    path: "/articles",
  },
  // {
  //   id: 2,
  //   name: "Reports",
  //   icon: "/icons/reports.svg",
  //   count: 8,
  //   path: "/reports",
  // },
  {
    id: 3,
    name: "Book chapters",
    icon: "/icons/books.svg",
    count: 2,
    path: "/book-chapters",
  },
  {
    id: 4,
    name: "Interviews",
    icon: "/icons/interviews.svg",
    count: 12,
    path: "/interviews",
  },
  {
    id: 7,
    name: "Stories",
    icon: "/icons/stories.svg",
    count: 4,
    path: "/stories",
  },
];
