import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";

const PROJECTS = [
  {
    id: 1,
    title: "Web based Chat application",
    description:
      "Aim of the project is to build a full stack chat application where people can send direct messages and create channels.",
    link: "https://chat-app-df397.web.app/",
    image: project3,
  },
  {
    id: 2,
    title: "Blockchain Crowdfunding",
    description:
      "Aim of the project is to build a Crowdfunding application based on Ethereum.",
    link: "https://kickstart.owanh.now.sh/",
    image: project2,
  },
  {
    id: 3,
    title: "Emotion Classification",
    description:
      "Aim of the project is to build a CNN which is used to detect emotion of a person using image.",
    link: "https://github.com/RitikJainRJ/Emotion-Classification-",
    image: project1,
  },
];

export default PROJECTS;
