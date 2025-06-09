import React, { useContext, useState } from "react";
import CTA from "./CTA";
import "./header.css";
import Myphoto from "../../assets/women_cropped.png";
// import Myphoto from "../../assets/mepic.png";
import HeaderSocials from "./HeaderSocials";
import Toggle from "../Toggle/Toggle";
import { motion } from "framer-motion"
import { themeContext } from "../../Context";

const pageStyles = {
  toggle: {
    display: "flex",
    justifyContent: "center",
  },
  dark_scroll: {
    color: "var(--color-primary)",
  },
  light_scroll: {
    color: "var(--color-light-primary)",
  },
  dark_hover_scroll: {
    color: "var(--color-white)",
  },
  light_hover_scroll: {
    color: "var(--color-light-white)",
  },
};

// transition
const transition = {
  duration: 3,
  damping: 3,
  type: "spring",
};


const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <header>
      <div style={pageStyles.toggle}>
        <Toggle />
      </div>
      <div className="container header__container">
        <motion.div
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={transition}
        >
          <h5>Hello I'm</h5>
          <h1>Aishwarya Bhat</h1>
          <h5 className={darkMode ? "dark__text-light" : "light__text-light"}>
            Fullstack Developer
          </h5>
          <CTA />
        </motion.div>
        <HeaderSocials />

        <div className={darkMode ? "myphoto" : "light_myphoto"}>
          <img src={Myphoto} alt="myphoto" />
        </div>

        <a
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={
            darkMode
              ? isHovering
                ? pageStyles.dark_hover_scroll
                : pageStyles.dark_scroll
              : isHovering
                ? pageStyles.light_hover_scroll
                : pageStyles.light_scroll
          }
          href="#contact"
          className="scroll__down"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
