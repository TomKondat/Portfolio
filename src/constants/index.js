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
  django,
  bootstrap,
  nomad,
  memories,
  bag,
  idf,
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
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Highly Motivated Learner",
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
    name: "bootstrap",
    icon: bootstrap,
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
    name: "django",
    icon: django,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Home",
    icon: comp,
    iconBg: "#7FAAD0",
    date: "2023 - Present",
    points: [
      "Currently looking for a full time position as a junior software developer.",
      "Building and developing personal projects to expand my technology stack.",
      "Constantly exploring and adapting to new technologies in web development.",
    ],
  },
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
        name: "react",
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
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    type: "Full Stack Project",
    image: memories,
    source_code_link:
      "https://github.com/TomKondat/memories?tab=readme-ov-file",
  },
  {
    name: "Bag World",
    description:
      "Developed a web-based e-store frontend with React-Bootstrap for a web development course. Designed to be user-friendly, the project allows easy searching, filtering, adding products to the shopping cart, and placing orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    type: "Frontend Project",
    image: bag,
    source_code_link: "https://github.com/TomKondat/bag-world",
  },
];

export { services, technologies, experiences, projects };
