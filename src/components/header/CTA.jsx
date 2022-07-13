import React, { useContext } from "react";
import CV from "../../assets/Aishwarya_CV.pdf";
import { themeContext } from "../../Context";

const CTA = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="cta">
      <a
        href={CV}
        download
        className={darkMode ? "buttn btn" : "buttn light__btn "}
      >
        Download CV
      </a>
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
  );
};

export default CTA;
