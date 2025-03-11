import Nav from "./components/nav/nav";
import Home from "./components/sections/home/home";
import About from "./components/sections/about/about";
import Project from "./components/sections/projects/projects";
import Contact from "./components/sections/contact/contact";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <Nav home="Home" about="About" projects="Projects" contact="Contact" />
      <Home
        classTitle=""
        title="Full Stack Next.js Developer"
        hand=""
        description="Hello, I'm Sillas Emanoel. A Full Stack Next.js Developer based in Ereré, Ceará, Brazil.📍"
        stack="Tech Stack"
      />
      <About
        title="About me"
        caption="A dedicated Full Stack Developer based in Ereré, Ceará, Brazil 📍"
        text="As a Full Stack Developer, I have an impressive arsenal of skills that allow me to design and implement complete solutions. My approach includes declarative programming, which allows me to describe what I want to achieve clearly and concisely, and I follow clean code principles, ensuring that the code is clean, readable, and easy to maintain. I excel at creating dynamic and engaging interfaces, as well as building robust and scalable systems, all while using optimized code. I am also a team player who thrives on collaborating with cross-functional teams to produce great web applications."
      />
      <Project
        title="PORTFOLIO"
        description="Each project is a unique piece of development 🧩"
      />
      <Contact
        title="Contact"
        caption="Don't be shy! Hit me up! 👇"
        locationTitle="Location"
        locationText="Ereré, Ceará, Brazil"
        mailTitle="Mail"
        curriculumTitle="Curriculum"
        curriculumDownload="Download 🫶"
      />
      <Footer rights="Copyright © 2023. All rights are reserved" />
    </>
  );
}
