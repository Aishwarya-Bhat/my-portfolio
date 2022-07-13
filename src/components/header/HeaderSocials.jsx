import React, { useContext, useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { themeContext } from "../../Context";

const pageStyles = {
  light_header_socials: {
    background: "var(--color-light-primary)",
  },

  dark_header_socials: {
    background: "var(--color-primary)",
  },

  light_social_icon: {
    color: "var(--color-light-primary)",
  },
  dark_social_icon: {
    color: "var(--color-primary)",
  },
  light_hover_social_icon: {
    color: "var(--color-light-white)",
  },
  dark_hover_social_icon: {
    color: "var(--color-white)",
  },
};
const HeaderSocials = () => {
  const initialHoverState = [
    { id: 0, hover: false },
    { id: 1, hover: false },
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
    <div className={darkMode ? "header__socials" : "header__light__socials"}>
      <a
        style={
          darkMode
            ? isHovering[0].hover
              ? pageStyles.dark_hover_social_icon
              : pageStyles.dark_social_icon
            : isHovering[0].hover
            ? pageStyles.light_hover_social_icon
            : pageStyles.light_social_icon
        }
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
        href="https://linkedin.com/in/aishwarya-bhat-143b6a108"
        target="_blank"
      >
        <GrLinkedin />
      </a>
      <a
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
        style={
          darkMode
            ? isHovering[1].hover
              ? pageStyles.dark_hover_social_icon
              : pageStyles.dark_social_icon
            : isHovering[1].hover
            ? pageStyles.light_hover_social_icon
            : pageStyles.light_social_icon
        }
        href="https://github.com"
        target="_blank"
      >
        <GoMarkGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
