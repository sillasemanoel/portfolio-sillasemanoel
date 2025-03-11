import devlinks from "../../public/images/projects/devlinks.png";
import igniteFeed from "../../public/images/projects/ignite-feed.png";
import todo from "../../public/images/projects/todo.png";
import igniteTimer from "../../public/images/projects/ignite-timer.png";
import coffeDelivery from "../../public/images/projects/coffee-delivery.png";
import dtModey from "../../public/images/projects/dt-money.png";
import githubBlog from "../../public/images/projects/github-blog.png";

export type Studies = {
  title: string;
  description: string;
  codeLink: string;
  liveDemoLink: string;
  technologies: string[];
  image: string;
};

export const studies: Studies[] = [
  {
    title: "Github Blog 📚",
    description:
      "Github Blog is an application that uses the Github API to fetch data and display it on the page, demonstrating API consumption.",
    codeLink: "https://github.com/sillasemanoel/dt-money",
    liveDemoLink: "#",
    technologies: ["Front-End", "React", "TypeScript", "styled-components"],
    image: githubBlog,
  },
  {
    title: "DT Money 💸",
    description:
      "DT Money is a project that uses the Context API and localStorage to store information, allowing the user to control what they are earning and spending.",
    codeLink: "https://github.com/sillasemanoel/dt-money",
    liveDemoLink: "#",
    technologies: [
      "Front-End",
      "React",
      "TypeScript",
      "styled-components",
      "localStorage",
    ],
    image: dtModey,
  },
  {
    title: "Coffee Delivery ☕",
    description:
      "Coffee Delivery is an application that uses the Context API and localStorage to store information, allowing the user to have an experience to buy coffee.",
    codeLink: "https://github.com/sillasemanoel/coffee-delivery",
    liveDemoLink: "#",
    technologies: [
      "Front-End",
      "React",
      "TypeScript",
      "styled-components",
      "localStorage",
    ],
    image: coffeDelivery,
  },
  {
    title: "ignite timer ⏲️",
    description:
      "Ignite Timer is an application that uses the optimistic update method and localStorage to store information, allowing the user to have an experience to use the Pomodoro technique.",
    codeLink: "https://github.com/sillasemanoel/ignite-timer",
    liveDemoLink: "#",
    technologies: [
      "Front-End",
      "React",
      "TypeScript",
      "styled-components",
      "localStorage",
    ],
    image: igniteTimer,
  },
  {
    title: "todo 📌",
    description:
      "Todo is an application that uses the optimistic update method, allowing the user to have a more fluid and faster experience when dealing with the actions of adding, deleting and completing tasks.",
    codeLink: "https://github.com/sillasemanoel/todo-list",
    liveDemoLink: "#",
    technologies: ["Front-End", "React", "TypeScript"],
    image: todo,
  },
  {
    title: "ignite feed 💬",
    description:
      "Ignite Feed is an application that uses the optimistic update method, allowing the user to have a more fluid and faster experience when dealing with the actions of adding, deleting and applauding comments.",
    codeLink: "https://github.com/sillasemanoel/ignite-feed-ts",
    liveDemoLink: "#",
    technologies: ["Front-End", "React", "TypeScript"],
    image: igniteFeed,
  },
  {
    title: "devlinks 🔗",
    description:
      "Devlinks is an application where the study of styling and component manipulation was worked on.",
    codeLink: "https://github.com/sillasemanoel/devlinks",
    liveDemoLink: "#",
    technologies: ["Front-End", "HTML5", "CSS3", "JavaScript"],
    image: devlinks,
  },
];
