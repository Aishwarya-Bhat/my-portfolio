import React, { useContext } from "react";
import { themeContext } from "../../Context";

const AboutCard = ({ icon, title, subject }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <article
        className={
          darkMode
            ? "about__card dark__about__card"
            : "about__card light__about__card"
        }
      >
        {React.createElement(icon, {
          fontSize: "1.4rem",
          color: darkMode
            ? "var(--color-primary)"
            : "var(--color-light-primary)",
        })}
        <h5>{title}</h5>
        <small>{subject}</small>
      </article>
    </div>
  );
};

export default AboutCard;
