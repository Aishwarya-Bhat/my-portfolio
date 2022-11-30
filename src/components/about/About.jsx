import React, { useContext } from "react";
import "./about.css";
import ME from "../../assets/women__laptop.png";
// import ME from "../../assets/cute_girl.webp";
// import ME from "../../assets/Bali2.JPG";
import AboutCard from "./AboutCard";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsFillFolderFill } from "react-icons/bs";
import { motion } from "framer-motion"
import { themeContext } from "../../Context";

const transition = {
  delay: 0.5,
  duration: 1,
  ease: [0.075, 0.82, 0.165, 1],
  repeat: 1,
  repeatType: "reverse"
}

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="about">
      <h5 className={!darkMode && "light__h5"}>Get To Know</h5>
      <h2 className={!darkMode && "light__h2"}>About Me</h2>
      <div className="container about__container">
        <div
          className={
            darkMode
              ? "about__me dark__about__me"
              : "about__me light__about__me"
          }
        >
          <div className="about__me__image">
            <img src={ME} alt="Aish" />
          </div>
        </div>

        <div
          className={
            darkMode ? "dark__about__content" : "light__about__content"
          }
        >
          <div className="about__cards">
            <motion.div
              initial={{ y: 0 }}
              whileInView={{ x: -70, rotate: 360 }}
              transition={transition}
            >
              <AboutCard
                icon={FaAward}
                title="Experience"
                subject="3+ Years Working"
              />
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              whileInView={{ y: -70, rotate: 360 }}
              transition={transition}
            >
              <AboutCard
                icon={ImUsers}
                title="Clients"
                subject="10+ world wide"
              />
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              whileInView={{ x: 70, rotate: 360 }}
              transition={transition}>
              <AboutCard
                icon={BsFillFolderFill}
                title="Projects"
                subject="10+ Projects"
              />
            </motion.div>
          </div>
          <p>
            Software Engineer with a total experience of 5 Years in Web and
            Mobile Application development (1 year) and Embedded Software (4
            Years). Extensive experience in designing UI web applications using
            frontend technologies like HTML5, CSS3, JavaScript, React JS,
            React-native, & ES6. Proficient in usage of states and props.
            Experience in designing various forms, tooltips, menus, tabs,
            widgets, data and time selector. Experience in Software life cycle
            phases like Requirement Analysis, Implementation and estimating the
            timelines for the project.
          </p>
          <a
            href="#contact"
            className={
              darkMode
                ? "buttn btn btn-primary"
                : "buttn light__btn light__btn-primary"
            }
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
