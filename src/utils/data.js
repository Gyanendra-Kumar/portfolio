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

export const about = {
  name: "Gyanendra Kumar",
  img: "/src/assets/gyanendra-photo.jpg",
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
    role: "Application Developer",
    Technologies:
      "React.js, Redux/Toolkit, React-Hook-Forms, HTML(JSX), Tailwind CSS, Javascript(ES6), Material UI",
    duration: "Sep 2022 - Nov 2023",
    location: "Kolkata",
    description: [
      "Responsible to develop new user interface for client application.",
      "Created reusable components that were being used in multiple components.",
      "Wrote test cases to validate the application after completion and uploaded to client tools.",
      "Collaborated with cross-functional team such as designers team. ",
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
    duration: "June 2020 - August 2021",
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
