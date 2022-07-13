import React, { useContext, useState } from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { themeContext } from "../../Context";

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
  return (
    <section id="experience">
      <h5 className={!darkMode && "light__h5"}>What skills I have</h5>
      <h2 className={!darkMode && "light__h2"}>My Experience</h2>

      <div className="full__container">
        <div className="container experience__container">
          {/* experience__frontend */}
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            style={
              darkMode
                ? isHovering[0].hover
                  ? pageStyles.dark_hover_exp_container
                  : pageStyles.dark_exep_container
                : isHovering[0].hover
                ? pageStyles.light_hover_exp_container
                : pageStyles.light_exep_container
            }
            className="experience__languages"
          >
            <h3 style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}>
              Languages Known
            </h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>JavaScript</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>CSS</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>HTML</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>C</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>C++</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>C#</h4>
              </article>
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            style={
              darkMode
                ? isHovering[1].hover
                  ? pageStyles.dark_hover_exp_container
                  : pageStyles.dark_exep_container
                : isHovering[1].hover
                ? pageStyles.light_hover_exp_container
                : pageStyles.light_exep_container
            }
            className="experience__reactTools"
          >
            <h3 style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}>
              React Tools
            </h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>React.js</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>Redux</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>Flux</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>React Native</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>React Hooks</h4>
              </article>
            </div>
          </div>
        </div>

        <div className="container experience__twosets__container">
          <div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            style={
              darkMode
                ? isHovering[2].hover
                  ? pageStyles.dark_hover_exp_container
                  : pageStyles.dark_exep_container
                : isHovering[2].hover
                ? pageStyles.light_hover_exp_container
                : pageStyles.light_exep_container
            }
            className="experience__twosets__skills"
          >
            <div className="experience__twosets__content">
              <h3
                style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}
                className="twosets__heading"
              >
                Platforms and Systems
              </h3>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>GitLab</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>GitHub</h4>
              </article>
            </div>

            <div className="experience__twosets__content">
              <h3 style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}>
                FE Tools and Package Manager
              </h3>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>NPM</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>Yarn</h4>
              </article>
            </div>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            style={
              darkMode
                ? isHovering[3].hover
                  ? pageStyles.dark_hover_exp_container
                  : pageStyles.dark_exep_container
                : isHovering[3].hover
                ? pageStyles.light_hover_exp_container
                : pageStyles.light_exep_container
            }
            className="experience__twosets__skills"
          >
            <div className="experience__twosets__content">
              <h3
                style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}
                className="twosets__heading"
              >
                Development Software Editor
              </h3>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>Visual Studio Code</h4>
              </article>
            </div>

            <div className="experience__twosets__content">
              <h3 style={darkMode ? pageStyles.dark_h3 : pageStyles.light_h3}>
                Front End Libraries
              </h3>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>Material UI</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill
                  className={
                    darkMode
                      ? "experience__details-icon"
                      : "light__experience__details-icon"
                  }
                />
                <h4>Bootstrap</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
