/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Muhammad Ghufran's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Muhammad Ghufran Ali Portfolio",
    type: "website",
    url: "http://Muhammad Ghufran Ali.com/",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Ghufran  Ali",
  logo_name: "Muhammad Ghufran Ali",
  nickname: "ghoofy",
  subTitle:
    "I'm a dedicated full-stack developer with a deep passion for problem-solving and a relentless drive to learn. I'm always seeking out new challenges and opportunities to expand my skills.",
  resumeLink:
    "https://drive.google.com/file/d/1cKHLCcBc9GkgKdElGYoHd_aO5hOm-g3W/view?usp=drive_link",
  portfolio_repository: "https://github.com/ghufran2508/portfolio",
  githubProfile: "https://github.com/ghufran2508",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ghufran2508",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-ghufran-ali-b151b8229/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ghoofy.321@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjab University of Colleges and Information Technology",
      subtitle: "Bachelors in Information Technology",
      logo_path: "pucit.png",
      alt_name: "FCIT",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, OOP, PF etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "https://pucit.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "- freeCodeCamp",
      logo_path: "freecodecamp-logo.webp",
      certificate_link:
        "https://freecodecamp.org/certification/fccf20dddf7-9141-4737-b6bc-f9aefa0bf7e4/javascript-algorithms-and-data-structures",
      alt_name: "freeCodeCamp",
      color_code: "rgb(255 255 255 / 60%)",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- freeCodeCamp",
      logo_path: "freecodecamp-logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "rgb(255 255 255 / 60%)",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "- Hackerrank",
      logo_path: "google_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/76fd7f0affeb",
      alt_name: "freeCodeCamp",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Infostack Tech",
          company_url: "http://www.infostacktech.com/",
          logo_path: "infostack_tech_logo.jpg",
          duration: "June 2023 - ",
          location: "Lahore, Pakistan",
          description:
            "I am working on ai recruitment product. The projects involve artificial intelligence for process improvements and for significantly enhancing the recruitment process. Our goal is to make AI system which scales and removes human dependency on technical or non-technical interviews as much as possible.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Infostack Tech",
          company_url: "http://www.infostacktech.com/",
          logo_path: "infostack_tech_logo.jpg",
          duration: "June 2022 - ",
          location: "Lahore, Pakistan",
          description: "",
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Muhammad Ghufran.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Nextjs, React, React-Native, Node, S3, EC2, Vercel, Firebase, MongoDb, Express, Amplify.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
