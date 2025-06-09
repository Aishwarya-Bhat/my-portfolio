import React, { useContext, useState } from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"

const pageStyles = {
  dark_exep_container: {
    background: "var(--color-bg-variant)",
  },
  light_exep_container: {
    background: "var(--color-light-bg-variant)",
  },
  dark_hover_exp_container: {
    background: "transparent",
    borderColor: "var(--color-primary-variant)",
  },
  light_hover_exp_container: {
    background: "transparent",
    borderColor: "var(--color-light-primary-variant)",
  },
  dark_h3: {
    color: "var(--color-primary)",
  },
  light_h3: {
    color: "var(--color-light-primary)",
  },
};

// Reusable component for each skill detail
const ExperienceDetail = ({ label, darkMode }) => (
  <article className="experience__details">
    <BsFillPatchCheckFill
      className={
        darkMode
          ? "experience__details-icon"
          : "light__experience__details-icon"
      }
    />
    <h4>{label}</h4>
  </article>
);

// Reusable section container
const ExperienceSection = ({
  title,
  skills,
  darkMode,
  hoverState,
  onMouseEnter,
  onMouseLeave,
  containerClass,
  style,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.2 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, type: "spring" }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={style}
    className={containerClass}
  >
    <h3 style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}>{title}</h3>
    <div className="experience__content">
      {skills.map((skill) => (
        <ExperienceDetail key={skill} label={skill} darkMode={darkMode} />
      ))}
    </div>
  </motion.div>
);

// Reusable two-column section container
const ExperienceTwoSetsSection = ({
  leftTitle,
  leftSkills,
  rightTitle,
  rightSkills,
  darkMode,
  hoverState,
  onMouseEnter,
  onMouseLeave,
  containerClass,
  style,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.2 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2, type: "spring" }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={style}
    className={containerClass}
  >
    <div className="experience__twosets__content">
      <h3
        style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}
        className="twosets__heading"
      >
        {leftTitle}
      </h3>
      {leftSkills.map((skill) => (
        <ExperienceDetail key={skill} label={skill} darkMode={darkMode} />
      ))}
    </div>
    <div className="experience__twosets__content">
      <h3 style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}>
        {rightTitle}
      </h3>
      {rightSkills.map((skill) => (
        <ExperienceDetail key={skill} label={skill} darkMode={darkMode} />
      ))}
    </div>
  </motion.div>
);

const Experience = () => {
  const initialHoverState = [
    { id: 0, hover: false },
    { id: 1, hover: false },
    { id: 2, hover: false },
    { id: 3, hover: false },
  ];
  const [isHovering, setIsHovering] = useState(initialHoverState);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleMouseLeave = (index) => {
    const newState = initialHoverState.map((e) => {
      if (e.id === index) {
        return { ...e, hover: false };
      }
      return e;
    });
    setIsHovering(newState);
  };

  const handleMouseEnter = (index) => {
    const newState = initialHoverState.map((e) => {
      if (e.id === index) {
        return { ...e, hover: true };
      }
      return e;
    });
    setIsHovering(newState);
  };

  // Skill arrays
  const languages = [
    "JavaScript",
    "CSS",
    "HTML",
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "Typescript"
    
  ];
  const reactTools = [
    "React.js",
    "Redux",
    "Flux",
    "React Native",
    "React Hooks",
  ];
  const platforms = ["Git", "GitLab", "GitHub", "CI/CD Pipeline"];
  const feTools = ["NPM", "Yarn"];
  const editors = ["Visual Studio Code"];
  const libraries = ["Material UI", "Bootstrap"];
  const databases = [ "MongoDB", "MySQL"];
  const backend = ["Node.js", "Django"];

  // Section style helpers
  const getSectionStyle = (idx) =>
    darkMode
      ? isHovering[idx].hover
        ? pageStyles.dark_hover_exp_container
        : pageStyles.dark_exep_container
      : isHovering[idx].hover
        ? pageStyles.light_hover_exp_container
        : pageStyles.light_exep_container;

  return (
    <section id="experience">
      <h5 className={!darkMode && "light__h5"}>My Experience On</h5>
      <h2 className={!darkMode && "light__h2"}>Technical Skills</h2>

      <div className="full__container">
        <div className="container experience__container">
          <ExperienceSection
            title="Languages Known"
            skills={languages}
            darkMode={darkMode}
            hoverState={isHovering[0].hover}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            containerClass="experience__languages"
            style={getSectionStyle(0)}
          />
          <ExperienceSection
            title="React Tools"
            skills={reactTools}
            darkMode={darkMode}
            hoverState={isHovering[1].hover}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            containerClass="experience__reactTools"
            style={getSectionStyle(1)}
          />
        </div>

        <div className="container experience__twosets__container">
          <ExperienceTwoSetsSection
            leftTitle="Platforms and Systems"
            leftSkills={platforms}
            rightTitle="FE Tools and Package Manager"
            rightSkills={feTools}
            darkMode={darkMode}
            hoverState={isHovering[2].hover}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            containerClass="experience__twosets__skills"
            style={getSectionStyle(2)}
          />
          <ExperienceTwoSetsSection
            leftTitle="Development Software Editor"
            leftSkills={editors}
            rightTitle="Front End Libraries"
            rightSkills={libraries}
            darkMode={darkMode}
            hoverState={isHovering[3].hover}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            containerClass="experience__twosets__skills"
            style={getSectionStyle(3)}
          />
          <ExperienceTwoSetsSection
            leftTitle="Databases"
            leftSkills={databases}
            rightTitle="Backend Tools"
            rightSkills={backend}
            darkMode={darkMode}
            hoverState={false}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            containerClass="experience__twosets__skills"
            style={getSectionStyle(2)}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
