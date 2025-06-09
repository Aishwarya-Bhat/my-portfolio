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
                subject="6+ Years Working"
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
          I'm a passionate Software Engineer with 6 years of experience across Web, Mobile, 
          and Embedded application development. Over the past 3+ years, I’ve focused on building responsive 
          and intuitive web and mobile apps using modern front-end technologies like React JS, React Native, 
          JavaScript (ES6), HTML5, and CSS3. My background also includes 3 years of hands-on work in Embedded 
          Software using languages like C, C++, and Python. <br />

          I enjoy turning complex problems into simple, user-friendly solutions. Whether it’s creating dynamic 
          UIs, designing custom forms and components, or managing application state effectively with props and 
          hooks, I strive for clean and maintainable code. <br />

          I’m also experienced in working through the full software development life cycle—from requirement analysis 
          and implementation to estimation and delivery. I’ve contributed to Agile teams, tracked progress using tools 
          like Jira, and communicated regularly with stakeholders through demos, updates, and risk assessments. <br />

          <br /> Let’s build something great together.
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
