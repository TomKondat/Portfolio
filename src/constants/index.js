import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  bootstrap,
  nomad,
  memories,
  bag,
  idf,
  sapir,
  comp,
  github,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "github",
    icon: github,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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

export { services, technologies, experiences, testimonials, projects };
