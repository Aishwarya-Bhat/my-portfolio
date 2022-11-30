import React, { useContext, useState } from "react";
import { themeContext } from "../../Context";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion"
import "./projects.css";


const Projects = () => {
  const projectDetails = [
    {
      projectTypeHeading: "React Web Applications",
      workList: [
        "Orbis App: Experienced in rendering data as XY Chart, Bubblechart, Stack chart, Pie chart, Donut chart for the visualizations of revolution using library like Am charts.",
        "Proficient with displaying UI input elements such as drop down list with check- box, switch, and radio buttons, parametric to the data on the graph.",
        "Design and development of “Oxyshare” Application, a not for profit tool to rent oxygen concentrators during the Covid Pandemic. Users request for Concentrators, donors would approve and track devices which also gives effective reuse and maximise the availability.",
        "Incorporated responsive web app design for the app to seamlessly work, irrespective of the size of the screen, orientation and platform.",
        "Scripbox Web App: Implemented react stepper, radio card, news card, blog card, and video card feature components, screen to link all unlinked funds in an account of family memebers.",
        "Created an online Student Feedback System to reduce paper work."
      ]
    },
    {
      projectTypeHeading: "React Native Applications",
      workList: [
        "Scripbox App: Implemented react stepper, radio card, news card, blog card, and video card feature components for making the application user friendly.",
        "Built reusable components and optimized all screesn in every possible ways.",
        "Displayed a list of unlinked funds where user will have an option to link funds to the required family member.",
        "To detect and list a set of external SIP while giving a user an option to edit, track and untrack required funds.",
        "Meal Recipes App: Displaying a list of Meal Categories and Step by step preparation details with Images.",
        "Created a Drawer navigator with filters buttons and Implemented provision for the users to save Favourite Meals.",
        "Shop App: Built an authentication Screen with Email and Password.",
        "Incorporated control to add new products and details only for the administrators and Interface design for customers to add items to cart and order.",
        "Banking App: Implemented a graph for displaying the account balance for each day of six months using Victory native library.",
      ]
    },
    {
      projectTypeHeading: "Embedded Projects",
      workList: [
        "Colour validations Of HDMI protocol using Perl.",
        "SMARC sAMX8 BSP Development on i.MX8QM reference board and custom board.",
        "Windows GUI Application for AD, DAC, DIO using C# framework.",
        "Linux Kernel and Device driver porting to Cyclone V custom board.",
        "Linux Kernel and Device driver porting with Arria 10 custom board.",
        "Software Development for zynq processor custom board.",
        "Development of application codes for Network protocol."

      ]
    },
  ]

  const [projectNum, setProjectNum] = useState(0);
  const [showMotion, setShowMotion] = useState(false)

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const variants = {

    scaleChange: { scale: 0.5, transition: { duration: 1, type: "spring", } },
    stop: { scale: 1 }

  };

  const handleClick = (slide) => {
    setProjectNum(slide);
    setShowMotion(true);
    setTimeout(() => {
      setShowMotion(false);
    }, 1000);


  }
  return (
    <section id="services">
      <h5
        style={
          darkMode
            ? { color: "var(--color-light)" }
            : { color: "var(--color-light-light)" }
        }
      >
        What I offer
      </h5>
      <h2
        style={
          darkMode
            ? { color: "var(--color-primary)" }
            : { color: "var(--color-light-primary)" }
        }
      >
        Projects
      </h2>
      <div className="container buttons_container">
        <button
          // type="submit"
          className={
            darkMode
              ? "buttn btn btn-primary active"
              : "buttn light__btn light__btn-primary"
          }
          onClick={() => handleClick(0)}
        >
          React Web Applications
        </button>
        <button
          // type="submit"
          className={
            darkMode
              ? "buttn btn btn-primary"
              : "buttn light__btn light__btn-primary"
          }
          onClick={() => handleClick(1)}
        >
          React Native Applications
        </button>
        <button
          // type="submit"
          className={
            darkMode
              ? "buttn btn btn-primary"
              : "buttn light__btn light__btn-primary"
          }
          onClick={() => handleClick(2)}
        >
          Embedded Applications
        </button>
      </div>
      <motion.div
        variants={variants}
        animate={showMotion ? 'scaleChange' : 'stop'}
        className="container projects__container">

        <ProjectCard
          projectTypeNum={projectNum}
          projectTypeHeading={projectDetails[projectNum].projectTypeHeading}
          workList={projectDetails[projectNum].workList}
        />

      </motion.div>
    </section>
  );
};

export default Projects;
