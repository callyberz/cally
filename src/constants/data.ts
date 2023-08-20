interface WorkExperience {
  company: string;
  title: string;
  location: string;
  dateStart: string;
  dateEnd: string | null;
  descriptions: string[];
}

interface EducationExperience {
  school: string;
  location: string;
  programme: string;
  dateStart: string;
  dateEnd: string;
}

interface Skills {
  type: string;
  items: string[];
  highlights: string[];
}

interface TodoList {
  actionItem: string;
  finished: boolean;
}

export const education: EducationExperience[] = [
  {
    school: "The Hong Kong Polytechnic University",
    location: "Hong Kong",
    programme: "BEng (Hons) in Electronic and Information Engineering",
    dateStart: "2014",
    dateEnd: "2019",
  },
  {
    school: "University of Cincinnati",
    location: "Cincinnati, OH, United States",
    programme:
      "Exchange Student studying at Department of Electrical Engineering and Computer Science",
    dateStart: "Jan 2017",
    dateEnd: "May 2017",
  },
];

export const experiences: WorkExperience[] = [
  {
    company: "OKX",
    title: "Engineer II",
    location: "Hong Kong",
    dateStart: "May 2022",
    dateEnd: null,
    descriptions: [
      "Proficient in React.js, developed and maintained high-quality web applications using the framework, focusing on Account management",
      "Refactored and converted legacy codebases to use TypeScript, resulting in increased code maintainability and a reduction in bugs",
      "Integrated server-side rendering (SSR), resulting in improved performance and SEO and better UX (increase in >50% web vitals)",
      "Consistently delivered projects on time under face-paced crypto industry while maintaining high code quality standards",
      "Experience working in an Agile development environment",
    ],
  },
  {
    company: "Silverhorn Investment Advisors Ltd",
    title: "Software Engineer",
    location: "Hong Kong",
    dateStart: "June 2021",
    dateEnd: "Mar 2022",
    descriptions: [
      "Developed an internal system that integrates with centralized data management, allowing for streamlined dataaccess and improved efficiency",
      "Worked closely with the data management team to ensure proper integration and data security",
      "System/applications planning, development, deployment",
      "Work closely with outsourced team",
    ],
  },
  {
    company: "Midland Realty",
    title: "Analyst Programmer",
    location: "Hong Kong",
    dateStart: "June 2019",
    dateEnd: "June 2021",
    descriptions: [
      "Migrate Windows application to Web Application for agents CRUD the listings",
      "Work closely with the UI/UX designer to deliver quality IT solutions under agile measurement",
      "Cooperate with the vendor by combining both sides of projects",
      "Involve in system/applications planning, development, deployment",
      "Support official website daily operation",
    ],
  },
  {
    company: "Right Tech Ltd",
    title: "Programmer",
    location: "Hong Kong",
    dateStart: "June 2018",
    dateEnd: "May 2019",
    descriptions: [
      "Migrate Windows application to Web Application for agents CRUD the listings",
      "Expand Smart-packaging system to different industries in corporate with NFC",
      "Provide on-site and remote support to the production line system",
    ],
  },
];

export const skills: Skills[] = [
  {
    type: "Frontend",
    items: [
      "React",
      "Javascript",
      "Typescript",
      "Mobx",
      "React Native",
      "Jest",
    ],
    highlights: [
      "Develop Server Side Rendering",
      "Maintain cocorporate npm packages",
    ],
  },
  {
    type: "Backend",
    items: ["NodeJS", "ExpressJS", "GraphQL", "MongoDB"],
    highlights: [
      "Design and build RESTful & GraphQL API using Nodejs framework",
      "Perform testing using Selenium for automation",
    ],
  },
  {
    type: "DevOps",
    items: ["Docker", "Kong", "Jenkins", "GitLab Runner", "AWS", "Azure"],
    highlights: [
      "Deploy API gateway with OAuth2.0 using Kong",
      "Manage services using Docker and Kubernetes",
      "CI/CD tools: auto deploy changes using Jenkins, Github Actions, Gitlab Runner with the help of SCM",
    ],
  },
  {
    type: "Others",
    items: ["Solidity", "Ether.js"],
    highlights: ["Launch a couple of NFT website including smart contract"],
  },
];

export const certificates: string[] = [
  "AWS Associate Certified Developer (Issued Jun 2021 · Expires Jun 2024)",
];

export const spokenLanguages =
  "Native in Cantonese, fluent in English & Mandarin";

export const social = [
  { website: "LinkedIn", url: "https://www.linkedin.com/in/calvinlee26/" },
];

export const todoList: TodoList[] = [
  {
    actionItem: "Find out problems in life/work",
    finished: false,
  },
  {
    actionItem: "Blogging using markdown",
    finished: true,
  },
  {
    actionItem: "Supbase",
    finished: false,
  },
  {
    actionItem: "Vercel AI SDK",
    finished: false,
  },
];
