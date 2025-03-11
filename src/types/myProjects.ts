import supportwise from "../../public/images/projects/supportwise.png";
import taskify from "../../public/images/projects/taskify.png";

export type MeProject = {
  title: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
  technologies: string[];
  image: string;
};

export const myProjects: MeProject[] = [
  {
    title: "supportwise ⚡",
    description:
      "Supportwise is an application that uses the optimistic update method, localStorage to store information and form validation, with form validation functions.",
    codeLink: "https://github.com/sillasemanoel/supportwise",
    liveDemoLink: "#",
    technologies: [
      "Front-End",
      "React",
      "TypeScript",
      "styled-components",
      "localStorage",
    ],
    image: supportwise,
  },
  {
    title: "taskify 📝",
    description:
      "Taskify is an application that uses the optimistic update method and localStorage to store information, with the functions of storing, consulting, editing, deleting and archiving notes.",
    codeLink: "https://github.com/sillasemanoel/taskify",
    liveDemoLink: "#",
    technologies: [
      "Front-End",
      "React",
      "TypeScript",
      "styled-components",
      "localStorage",
    ],
    image: taskify,
  },
];
