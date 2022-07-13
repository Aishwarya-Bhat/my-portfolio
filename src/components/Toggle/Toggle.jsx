import React, { useContext } from "react";
import "./toggle.css";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { themeContext } from "../../Context";

const pageStyles = {
  darkTheme: {
    left: "27px", //to change button from moving left to right when button is clicked
    background: "var(--color-bg)",
  },
  lightTheme: {
    right: "26.5px", //to change button from moving right to left when button is clicked
    background: "var(--color-light-bg)",
  },
  dark__toggle: {
    background: "var(--color-primary)",
  },
  light__toggle: {
    background: "var(--color-light-primary)",
  },
};
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleToggle = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div
      className="toggle"
      style={darkMode ? pageStyles.dark__toggle : pageStyles.light__toggle}
      onClick={handleToggle}
    >
      <FaRegMoon />
      <ImSun />

      <div
        style={darkMode ? pageStyles.darkTheme : pageStyles.lightTheme}
        className="toggle__button"
      ></div>
    </div>
  );
};

export default Toggle;
