import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  python,
  java,
  csharp,
  redux,
  django,
  bootstrap,
  nomad,
  trend,
  memories,
  todo2,
  realestate,
  bag,
  idf,
  elevation,
  deloitte,
  sapir,
  comp,
  github,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Computer Science Graduate",
    icon: web,
  },
  {
    title: "Full Stack Bootcamp Graduate",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "github",
  //   icon: github,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#e7f0f6",
    date: "2024 - Present",
    points: [
      "Develop responsive HTML/CSS code for personalized and dynamic email communications using AMPscript.",
      "Provide technical solutions in a team of developers for consultants at Deloitte Digital.",
      "Build HTML pages using Server-Side JavaScript and segment audiences utilizing SQL and other Marketing Cloud tools.",
    ],
  },
  {
    title: "Full Stack Bootcamp Student",
    company_name: "Elevation",
    icon: elevation,
    iconBg: "#7FAAD0",
    date: "2024 - 2024",
    points: [
      "An industry-based intensive 3-month coding Bootcamp that covered the entire MERN stack and beyond.",
      "Built a number of end-to-end projects from scratch while adhering to solid OOP principles and communicating with a number of external APIs.",
      "Used git as source control management and collaborated on GitHub.",
    ],
  },
  // {
  //   title: "Junior Software Developer",
  //   company_name: "Home",
  //   icon: comp,
  //   iconBg: "#7FAAD0",
  //   date: "2023 - Present",
  //   points: [
  //     "Currently looking for a full time position as a junior software developer.",
  //     "Building and developing personal projects to expand my technology stack.",
  //     "Constantly exploring and adapting to new technologies in web development.",
  //   ],
  // },
  {
    title: "Computer Science Student",
    company_name: "Sapir Academic College",
    icon: sapir,
    iconBg: "#E6DEDD",
    date: "2020 - 2023",
    points: [
      "Successfully completed a degree in Computer Science with a GPA of 80.",
      "Acquired a strong foundation in computer science with a specialized focus on web development.",
      "Completed a 52-hour DevOps course by Analiza.",
    ],
  },
  {
    title: "Combat Soldier",
    company_name: "IDF",
    icon: idf,
    iconBg: "#383E56",
    date: "2015 - 2018",
    points: [
      "A combat soldier in the Search and Rescue unit of the Israeli Defense Forces.",
      "Participated in the 2016 underground parking lot collapse rescue operation in Tel Aviv's Ramat Hahayal.",
      "Currently on active reserve duty.",
    ],
  },
];

const projects = [
  {
    name: "Nomad",
    description:
      "Nomad is a mobile-first web app designed to facilitate business meetups at conventions and conferences. Users can search and filter events by distance, navigate to chosen conventions, and utilize the built-in chat feature powered by Agora.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    type: "Full Stack Project",
    image: nomad,
    source_code_link: "https://github.com/TomKondat/nomad",
  },
  {
    name: "Next Nest",
    description:
      "Built a full-stack real estate platform connecting agents and buyers, as the final project for my bootcamp. Developed in collaboration with a team using React.js, React Bootstrap, Node.js, Express, MongoDB, and JWT for secure user authentication, with code managed via GitHub.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    type: "Full Stack Project",
    image: realestate,
    source_code_link: "https://github.com/TomKondat/real-estate",
  },
  {
    name: "Memories",
    description:
      "A social web app built on the MERN stack and the Material-UI library, enabling users to create, upload, and like posts. It features integrated Google OAuth 2.0 for user authentication, allowing users to log in with their Google accounts. ",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    type: "Full Stack Project",
    image: memories,
    source_code_link:
      "https://github.com/TomKondat/memories?tab=readme-ov-file",
  },
  {
    name: "Todo List App",
    description:
      "Developed a full-stack to-do list app with React.js, Redux, and React Bootstrap for responsive UI. Backend built with Node.js, Express, and MongoDB for data management. Secured user authentication using JWT for personalized task lists.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    type: "Full Stack Project",
    image: todo2,
    source_code_link: "https://github.com/TomKondat/todo-list",
  },
  {
    name: "Bag World",
    description:
      "Developed a web-based e-store frontend with React-Bootstrap for a web development course. Designed to be user-friendly, the project allows easy searching, filtering, adding products to the shopping cart, and placing orders.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "html&css",
        color: "pink-text-gradient",
      },
    ],
    type: "Frontend Project",
    image: bag,
    source_code_link: "https://github.com/TomKondat/bag-world",
  },
  {
    name: "Tv Trends",
    description:
      "Tv Trends is a web application built with React.js and Bootstrap to showcase trending movies and TV shows. Utilizing data fetched from IMDb, users can discover trending entertainment content and easily filter it according to their preferences.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "html&css",
        color: "pink-text-gradient",
      },
    ],
    type: "Frontend Project",
    image: trend,
    source_code_link: "https://github.com/TomKondat/Tv-Trends",
  },
];

export { services, technologies, experiences, projects };
