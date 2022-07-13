import React, { useContext, useState } from "react";
import "./footer.css";
import { ImLinkedin2 } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { themeContext } from "../../Context";

const pageStyles = {
  dark_footer: {
    color: "var(--color-bg)",
  },
  light_footer: {
    color: "var(--color-light-bg)",
  },

  dark_hover_footer: {
    color: "var(--color-white)",
  },
  light_hover_footer: {
    color: "var(--color-light-white)",
  },
  dark_footer_background: {
    background: "var(--color-primary)",
  },
  light_footer_background: {
    background: "var(--color-light-primary)",
  },
  dark_footer_socials: {
    background: "var(--color-bg)",
    color: "var(--color-white)",
  },
  light_footer_socials: {
    background: "var(--color-light-bg)",
    color: "var(--color-light-white)",
  },
  dark_hover_footer_socials: {
    background: "transparent",
    color: "var(--color-bg)",
    borderColor: "var(--color-bg)",
  },
  light_hover_footer_socials: {
    background: "transparent",
    color: "var(--color-light-bg)",
    borderColor: "var(--color-light-bg)",
  },
};
const Footer = () => {
  const initialHoverState = [
    { id: 0, hover: false },
    { id: 1, hover: false },
    { id: 2, hover: false },
    { id: 3, hover: false },
    { id: 4, hover: false },
    { id: 5, hover: false },
    { id: 6, hover: false },
    { id: 7, hover: false },
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleMouseLeave = (index) => {
    const newState = initialHoverState.map((e) => {
      // 👇️ if id equals index, update hover property
      if (e.id === index) {
        return { ...e, hover: false };
      }
      // 👇️ otherwise return object as is
      return e;
    });
    setIsHovering(newState);
  };

  const handleMouseEnter = (index) => {
    const newState = initialHoverState.map((e) => {
      // 👇️ if id equals index, update hover property
      if (e.id === index) {
        return { ...e, hover: true };
      }
      // 👇️ otherwise return object as is
      return e;
    });
    setIsHovering(newState);
  };
  const [isHovering, setIsHovering] = useState(initialHoverState);
  return (
    <footer
      style={
        darkMode
          ? pageStyles.dark_footer_background
          : pageStyles.light_footer_background
      }
    >
      <a
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
        style={
          darkMode
            ? isHovering[0].hover
              ? pageStyles.dark_hover_footer
              : pageStyles.dark_footer
            : isHovering[0].hover
            ? pageStyles.light_hover_footer
            : pageStyles.light_footer
        }
        href="#"
        className="footer__logo"
      >
        AISHWARYA BHAT
      </a>

      <ul className="permalinks">
        <li>
          <a
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            style={
              darkMode
                ? isHovering[1].hover
                  ? pageStyles.dark_hover_footer
                  : pageStyles.dark_footer
                : isHovering[1].hover
                ? pageStyles.light_hover_footer
                : pageStyles.light_footer
            }
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            style={
              darkMode
                ? isHovering[2].hover
                  ? pageStyles.dark_hover_footer
                  : pageStyles.dark_footer
                : isHovering[2].hover
                ? pageStyles.light_hover_footer
                : pageStyles.light_footer
            }
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            style={
              darkMode
                ? isHovering[3].hover
                  ? pageStyles.dark_hover_footer
                  : pageStyles.dark_footer
                : isHovering[3].hover
                ? pageStyles.light_hover_footer
                : pageStyles.light_footer
            }
            href="#experience"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
            style={
              darkMode
                ? isHovering[4].hover
                  ? pageStyles.dark_hover_footer
                  : pageStyles.dark_footer
                : isHovering[4].hover
                ? pageStyles.light_hover_footer
                : pageStyles.light_footer
            }
            href="#services"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(5)}
            style={
              darkMode
                ? isHovering[5].hover
                  ? pageStyles.dark_hover_footer
                  : pageStyles.dark_footer
                : isHovering[5].hover
                ? pageStyles.light_hover_footer
                : pageStyles.light_footer
            }
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={() => handleMouseLeave(6)}
          style={
            darkMode
              ? isHovering[6].hover
                ? pageStyles.dark_hover_footer_socials
                : pageStyles.dark_footer_socials
              : isHovering[6].hover
              ? pageStyles.light_hover_footer_socials
              : pageStyles.light_footer_socials
          }
          href="https://linkedin.com/in/aishwarya-bhat-143b6a108"
          target="_blank"
        >
          <ImLinkedin2 />
        </a>
        <a
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={() => handleMouseLeave(7)}
          style={
            darkMode
              ? isHovering[7].hover
                ? pageStyles.dark_hover_footer_socials
                : pageStyles.dark_footer_socials
              : isHovering[7].hover
              ? pageStyles.light_hover_footer_socials
              : pageStyles.light_footer_socials
          }
          href="https://github.com"
          target="_blank"
        >
          <VscGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
