export const projects: {
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  image: string;
  tags: string[];
}[] = [
  {
    image: "clustering-visualizer.png",
    title: "Clustering Algorithm Visualizer",
    description:
      "This is a machine learning clustering algorithm visualizer. This project made it to the top 25 of Algoexpert SWE contest 2020",
    url: "https://clustering-visualizer.web.app/",
    githubUrl: "https://github.com/ArunMurugan78/clustering-visualizer",
    tags: [
      "machine learning",
      "reactjs",
      "material-ui",
      "redux",
      "web",
      "typescript",
    ],
  },
  {
    image: "portfolio-site.png",
    title: "Portfolio site (this)",
    description:
      "My Portfolio site. Designed using figma and implemented using gatsby.The blogs page fetches the latest data from firestore. ",
    tags: ["Gatsby", "Typescript", "Graphql", "Sass", "figma", "firebase"],
    url: "arunmurugan78.github.io",
    githubUrl: "https://github.com/ArunMurugan78/my-portfolio-site",
  },
  {
    image: "quizz-now.png",
    title: "Quizz Now",
    description: "A Quizz App made using Nestjs and Reactjs",
    githubUrl: "https://github.com/ArunMurugan78/QuizzNow",
    tags: ["full stack", "nestjs", "reactjs", "typescript", "nodejs"],
  },
  {
    image: "shortest-path-visualizer.png",
    title: "Shortest Path Finder",
    description: "Shortest Path finding Algorithm Visualizer",
    url: "https://shortest-path-finder.web.app/",
    githubUrl: "https://github.com/ArunMurugan78/Shortest-Path-Visualiser",
    tags: ["react", "javacsript", "algorithm", "bootstrap"],
  },
  {
    image: "cat-gallery.png",
    title: "Cat Gallery",
    description:
      "infintely Scroll through Cute Cat Image. Also can save and share the images",
    githubUrl: "https://github.com/ArunMurugan78/CatGallery",
    tags: ["flutter", "mobile"],
  },
  {
    image: "blog-website.png",
    title: "A Blog Web site",
    description:
      "Do all CRUD operations. made using express, react and mongoDB",
    url: "https://blogzzzz.herokuapp.com/",
    tags: ["expressjs", "nodejs", "react", "mongodb"],
  },
];