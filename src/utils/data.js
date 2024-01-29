import { nanoid } from "nanoid";
import html from "../assets/html.png";
import css from "../assets/CSS3.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import reduxToolit from "../assets/redux-toolkit.svg";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import hook from "../assets/react-hook.jpg";
import formhook from "../assets/react-form-hook.png";
import mui from "../assets/mui.png";
import git from "../assets/github.png";
import reactCertification from "../assets/certifications/React-IBM-certification.png";
import BronzeLearner from "../assets/Achievements/Champion-Learner-Bronze-2023.png";
import DSA from "../assets/Achievements/DSA-mock-interview-scaler.png";
import myPhoto from "../assets/gyanendra-photo.jpg";

export const about = {
  name: "Gyanendra Kumar",
  img: myPhoto,
  introduction: "Hi, I'm Gyanendra Kumar Software Engineer.",
  description:
    "I'm an Application Developer specializing in Front-End Development at IBM in India. I'm dedicated to creating immersive user experiences through dynamic UI effects and animations, committed to seamlessly blending creativity with functionality in intuitive interfaces.",
};

export const profile = [
  {
    id: nanoid(),
    desc: "Working in IBM from March 2020.",
  },
  {
    id: nanoid(),
    desc: "Having a total of 3.5+ years of IT experience.",
  },
  {
    id: nanoid(),
    desc: "Trained and Certified in React.JS at IBM",
  },
  {
    id: nanoid(),
    desc: "I have 1.5 years of React.js experience.",
  },
  {
    id: nanoid(),
    desc: "Interacted with client to understand the requirements to produce Technical Solution.",
  },
  {
    id: nanoid(),
    desc: "My project managers, team members and clients have commended me on my ability to quickly grasp new concepts.",
  },
  {
    id: nanoid(),
    desc: "Achieved Champion Learner BRONZE at IBM in 2023",
  },
];

export const skills = [
  {
    id: nanoid(),
    image: html,
    name: "HTML",
  },
  {
    id: nanoid(),
    image: css,
    name: "CSS",
  },
  {
    id: nanoid(),
    image: tailwind,
    name: "Tailwind CSS",
  },
  {
    id: nanoid(),
    image: javascript,
    name: "JS/ES6",
  },
  {
    id: nanoid(),
    image: react,
    name: "React.JS",
  },
  {
    id: nanoid(),
    image: hook,
    name: "React Hook",
  },
  {
    id: nanoid(),
    image: reduxToolit,
    name: "Redux/Toolkit",
  },
  {
    id: nanoid(),
    image: formhook,
    name: "React Form",
  },
  {
    id: nanoid(),
    image: mui,
    name: "Material UI",
  },
  {
    id: nanoid(),
    image: firebase,
    name: "Firebase",
  },
  {
    id: nanoid(),
    image: git,
    name: "GitHub",
  },
];

export const companyProject = [
  {
    id: nanoid(),
    company: "IBM",
    role: "Application Developer - React.js",
    Technologies:
      "React.js, React Hooks, Redux Toolkit, Tailwind CSS, JavaScript, Rest API, JWT Auth, Material UI, Gi",
    duration: "Dec 2023 - Till Now",
    location: "Bangalore",
    description: [
      "Developing an E-Commerce web app with admin functionality.",
      "Using JWT Authentication and Authorization to based on the user roles.",
      "Created a Higher Order Component (HOC’S) to implement common features.",
      "Implementing redux toolkit and redux persist for state management and persisting data",
      "Admin can manage products, orders, users.",
      "Creating layout for Admin Dashboard.",
      "Implementing code splitting, implemented Lazy loading, Use Memo for application optimizations.",
    ],
  },
  {
    id: nanoid(),
    company: "IBM",
    role: "Application Developer",
    Technologies:
      "React.js, Redux/Toolkit, React-Hook-Forms, HTML(JSX), Tailwind CSS, Javascript(ES6), Material UI",
    duration: "Sep 2022 - Nov 2023",
    location: "Bangalore",
    description: [
      "Developed a web application called VIR using React.JS.",
      "Presented a high level overview about VIR application to development team and management team including Vice-President, Senior Manager Architect, SME’s.",
      "Created a Higher Order Component (HOC’S) that were being used in around 80 components.",
      "Created login and registration for VIR with feature to check password strength.",
      "Created layout for Dashboard.",
      "Created 50+ forms form VIR using React.js, React Form Hook library, Tailwind CSS, Material UI and implemented Lazy loading, Use Memo for optimizations.",
      "Wrote test cases for VIR to validate the application",
    ],
  },
  {
    id: nanoid(),
    company: "IBM",
    role: "Application Developer",
    Technologies: "FileNet, ACCE, WorkPlace, MySQL",
    duration: "August 2021 - July 2022",
    location: "Bangalore",
    description: [
      "Responsible to check incidents in Service Now",
      "Categorize tickets based on issues reported",
      "Check issues and provide solution to the end users before SLA target",
    ],
  },
  {
    id: nanoid(),
    company: "IBM",
    role: "Application Developer",
    Technologies: "FileNet, ACCE, WorkPlace",
    duration: "March 2020 - August 2021",
    location: "Bangalore",
    description: [
      "Ensure the application is up and running as expected",
      "Responsible forreceiving requestsfrom end-users, analyzing these, and either responding to the end-user with a solution or escalating it to the other IT teams.",
      "Dealing with the user issues with already scripted solutions and creating an incident to assign it to other teams.",
      "Providing Technical support for the application users",
    ],
  },
];

export const personalProject = [
  {
    id: nanoid(),
    projectName: "E-Commerce",
    role: "React Developer",
    Technologies:
      "React.js,React Form Hook, Tailwind CSS, React Router DOM, Material UI, Framer Motion, React Icons, Firebase, GitHub",
    description: [
      "Developed authentication and authorization functionality using React.js, React Hooks, Tailwind CSS, Redux Toolkit, Firebase, React Form Hook.",
      "Working on Admin dashboard to display graph, add new products, update the products, view and change order status.",
      "Non-Admin user cannot access admin dashboard",
      "Currently working on this Project.",
    ],
    demo: "https://eccomerce-gyanendra-kumars-projects.vercel.app/",
    github: "https://github.com/Huski-commando/eccomerce",
  },
  {
    id: nanoid(),
    projectName: "PortFolio",
    role: "React Developer",
    Technologies:
      "React.js, Tailwind CSS, React Router DOM, Material UI, Framer Motion, React Icons",
    description: [
      "Created Portfolio web app using above mentioned technologies",
      "Implemented react-router-dom latest features to allow users to view my resume, Github page for respective projects and live demo site of the respective projects",
      "Implemented tab feature to show organization projects and personal projects",
      "Implemented dialog feature to showcase contacts, certifications and achievements",
      "Data is being fetched dynamically",
    ],
    demo: "https://gyanendra-portfolio-0112.netlify.app/",
    github: "https://github.com/Huski-commando/portfolio",
  },
  {
    id: nanoid(),
    projectName: "Movix",
    role: "React Developer",
    Technologies:
      "React.js, Redux Toolkit, SCSS, Axios, React Router DOM, API integration",
    description: [
      "Created movie web app using above mentioned technologies",
      "Implemented react-router-dom latest features to navigate users to movie or TV Shows detail page",
      "Implemented Search and filter to find specific movie or TV shows",
      "Implemented skeleton loading while data is being fetched from API",
      "Implemented lazy loading for images",
      "Used Redux toolkit to store the movie, TV series and genres state",
    ],
    demo: "https://movix0112.netlify.app/",
    github: "https://github.com/Huski-commando/movix.git",
  },
  {
    id: nanoid(),
    projectName: "MixMaster",
    role: "React Developer",
    Technologies:
      "React.JS, CSS, React Query, API integration, Axios, React Router DOM, Toastify",
    description: [
      "User can search with Search bar",
      "React Query to cache data to fast reload",
      "Used React-Router-DOM for navigation",
      "React Hooks to manage state",
      "Axios to fetch data from given API",
    ],
    demo: "https://mixmaster0112.netlify.app/",
    github: "https://github.com/Huski-commando/mixmaster",
  },
  {
    id: nanoid(),
    projectName: "GYM Website",
    role: "React Developer",
    Technologies:
      "React.js, Tailwind CSS, API Integration, Axios, React Router DOM",

    description: [
      "Designed a GYM website with Rapid API",
      "React Router DOM to navigate to different exercises",
      "Implemented search functionality to search different exercises",
      "It displays similar exercises and YouTube videos",
      "React Hooks to manage state",
      "Axios to fetch data from API",
    ],
    demo: "https://gym-mania.netlify.app/",
    // github: "https://github.com/Huski-commando/mixmaster",
  },
];

export const certification = [
  {
    id: nanoid(),
    image: reactCertification,
    name: "IBM React Certificate",
  },
];
export const achievement = [
  {
    id: nanoid(),
    image: BronzeLearner,
    name: "IBM Champion Bronze Learner",
  },
  {
    id: nanoid(),
    image: DSA,
    name: "Scaler DSA Mock Interview",
  },
];

export const educations = [
  {
    id: nanoid(),
    duration: "2015 - 2019",
    degree: "Bachelor of Engineering",
    university: "VTU",
    course: "CSE",
  },
];
