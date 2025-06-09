import React, { useContext, useState } from "react";
import { themeContext } from "../../Context";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion"
import "./projects.css";


const Projects = () => {
  const projectDetails = [
    {
      projectTypeHeading: "Full Stack Web Applications",
      workList: [
        "Personal Finance Tracker:  A full-stack web application developed for streamlined financial management.",
        "Built using React.js for the frontend, Django for the backend, and MySQL for data storage.",
        "Enabled users to log and manage income and expenses, with a comprehensive transaction history view.",
        "Customized Reports were implemented for generating detailed monthly and yearly financial summaries for better budget planning.",
        "Data Management with CRUD (Create, Read, Update, Delete) operations, allowing users to modify, add, or delete financial records as needed.",
        "Managed repositories with structured branching strategies and regularly created and reviewed pull/merge requests to ensure clean, maintainable code.",
        "Cravebytes Recipe Fullstack Web App: CraveBytes is a comprehensive web application designed to transform the way users discover, save, and interact with recipes.",
        "Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this application combines powerful search capabilities with personalized user features to create an engaging culinary experience.",
        "The application addresses common challenges faced by cooking enthusiasts: finding recipes based on specific dietary needs, organizing favorite recipes, and maintaining a searchable history of culinary explorations.",
        "By integrating with the Spoonacular API, Cravebytes provides users access to a vast database of recipes while offering a personalized experience through user accounts.",
      ]
    },
    {
      projectTypeHeading: "React Web Applications",
      workList: [
        "Orbis App: Experienced in rendering data as XY Chart, Bubblechart, Stack chart, Pie chart, Donut chart for the visualizations of revolution using library like Am charts.",
        "Proficient with displaying UI input elements such as drop down list with check- box, switch, and radio buttons, parametric to the data on the graph.",
        "Design and development of 'Oxyshare' Application, a not for profit tool to rent oxygen concentrators during the Covid Pandemic. Users request for Concentrators, donors would approve and track devices which also gives effective reuse and maximise the availability.",
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
    if (slide === projectNum) return;
    setShowMotion(true);
    setTimeout(() => {
      setProjectNum(slide);
      setShowMotion(false);
    }, 300); // shorter duration for snappier transition
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
        My Contributions on
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
        {projectDetails.map((project, idx) => (
          <motion.button
            key={project.projectTypeHeading}
            className={
              darkMode
                ? `buttn btn btn-primary${projectNum === idx ? " active" : ""}`
                : "buttn light__btn light__btn-primary"
            }
            whileTap={{ scale: 0.92 }}
            animate={projectNum === idx ? { scale: 1.08 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={
              projectNum === idx
                ? {
                    boxShadow: darkMode
                      ? "0 0 0.5rem var(--color-primary)"
                      : "0 0 0.5rem var(--color-light-primary)",
                    zIndex: 1,
                  }
                : {}
            }
            onClick={() => handleClick(idx)}
          >
            {project.projectTypeHeading}
          </motion.button>
        ))}
      </div>
      <div className="container projects__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={projectNum}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, type: "tween" }}
          >
            <ProjectCard
              projectTypeNum={projectNum}
              projectTypeHeading={projectDetails[projectNum].projectTypeHeading}
              workList={projectDetails[projectNum].workList}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
