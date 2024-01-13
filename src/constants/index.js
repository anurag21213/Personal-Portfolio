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
    arogyawala,
    ineubytes,
    TCP,
    carrent,
    jobit,
    tripguide,
    threejs,
    arogya,
    estate
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++",
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
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Arogyawala",
      icon: arogyawala,
      iconBg: "#383E56",
      date: "Jan 2023 - Aug 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Internship at Ineubytes",
      company_name: "Ineubytes",
      icon: ineubytes,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Oct 2023",
      points: [
        "Developing and maintaining web applications according to task assigned.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Responsibility of developing visually appealing ui.",
       
      ],
    },
    {
      title: "Participated in Code Utsava 7.0",
      company_name: "NIT Raipur",
      icon: TCP,
      iconBg: "#383E56",
      date: "1 Nov 2023 - 2 Nov 2023",
      points: [
        "Codeutsava is an annual hackathon organized by the Turing Club of Programmers at NIT Raipur.",
        "Hackathons cover various domains such as AR/VR, AI, and ML. ",
        "We worked in the domain of machine learning.",
       
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
      name: "Arogyawala",
      description:
        "A web-based healthcare platform primarily designed to cater to individuals in need of special care following their discharge from the hospital. The platform offers services such as psychology, yoga training, and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: arogya,
      source_code_link: "https://github.com/",
      deploy_link: "https://www.arogyawala.com/",
    },
    {
      name: "Estate web Application",
      description:
        "Web application that enables users to search for estate, view estimated price ranges for estate, and locate available estate based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
      ],
      image: estate,
      source_code_link: "https://github.com/anurag21213/Estate-",
      deploy_link: "https://mern-estate-04cs.onrender.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };