import React, { useContext, useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { themeContext } from "../../Context";
import "./projects.css";

const pageStyles = {
  dark_list_icon: {
    color: "var(--color-primary)",
    marginTop: "2px",
    flexShrink: 0,
  },
  light_list_icon: {
    color: "var(--color-light-primary)",
    marginTop: "2px",
    flexShrink: 0,
  },
  dark_project_headingh3: {
    color: "var(--color-bg)",
  },
  light_project_headingh3: {
    color: "var(--color-light-bg)",
  },
  dark_project_heading: {
    background: "var(--color-primary)",
  },
  light_project_heading: {
    background: "var(--color-light-primary)",
  },
  dark_project: {
    background: "var(--color-bg-variant)",
    border: "1px solid var(--color-primary)",
  },
  dark_hover_project: {
    background: "transparent",
    border: "1px solid var(--color-primary-variant)",
  },
  light_project: {
    background: "var(--color-light-bg-variant)",
    border: "1px solid var(--color-light-primary)",
  },
  light_hover_project: {
    background: "transparent",
    border: "1px solid var(--color-light-primary)",
  },
};

const Projects = () => {
  const initialHoverState = [
    { id: 0, hover: false },
    { id: 1, hover: false },
    { id: 2, hover: false },
  ];
  const [isHovering, setIsHovering] = useState(initialHoverState);
  // const [isHovering, setIsHovering] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleMouseLeave = (index) => {
    // setIsHovering(false);
    console.log("handleMouseLeave**************", index);
    const newState = initialHoverState.map((e) => {
      // 👇️ if id equals index, update hover property
      if (e.id === index) {
        return { ...e, hover: false };
      }
      // 👇️ otherwise return object as is
      return e;
    });
    // console.log("*******newstate:", newState);
    setIsHovering(newState);
  };

  const handleMouseEnter = (index) => {
    // setIsHovering[index](true);
    console.log("handleMouseEnter******", index);
    const newState = initialHoverState.map((e) => {
      // 👇️ if id equals index, update hover property
      if (e.id === index) {
        return { ...e, hover: true };
      }
      // 👇️ otherwise return object as is
      return e;
    });
    // console.log("*******newstate:", newState);

    setIsHovering(newState);
  };
  console.log("ishovering-------------", isHovering[0].hover);
  return (
    <section id="services">
      <h5
        style={
          darkMode
            ? { color: "var(--color-light)" }
            : { color: "var(--color-light-light)" }
        }
      >
        What I offer
      </h5>
      <h2
        style={
          darkMode
            ? { color: "var(--color-primary)" }
            : { color: "var(--color-light-primary)" }
        }
      >
        Projects
      </h2>

      <div className="container projects__container">
        <article
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          style={
            darkMode
              ? // ? isHovering[0].hover
                //   ? console.log(" darkmode true")
                //   : console.log("darkmode false")
                // : isHovering[0].hover
                // ? console.log(" lightmode true")
                // : console.log("lioghtmode false")
                isHovering[0].hover
                ? pageStyles.dark_hover_project
                : pageStyles.dark_project
              : isHovering[0].hover
              ? pageStyles.light_hover_project
              : pageStyles.light_project

            //   isHovering[0].hover
            //   ? console.log(
            //       "Hello hover  dark true",
            //       isHovering[0].id,
            //       isHovering[0].hover
            //     )
            //   : console.log("Hello hover dark false", isHovering[0].id)
            // : isHovering[0].hover
            // ? console.log(
            //     "Hello hover  light true",
            //     isHovering[0].id,
            //     isHovering[0].hover
            //   )
            // : console.log("Hello hover  light false", isHovering[0].id)

            //   isHovering[0].hover
            //   ? { background: "transparent" }
            //   : { background: "black" }
            // : isHovering[0].hover
            // ? { background: "transparent" }
            // : { background: "yellow" }
            // darkMode
            //   ? isHovering
            //     ? { background: "transparent" }
            //     : { background: "var(--color-bg-variant)" }
            //   : isHovering
            //   ? { background: "transparent" }
            //   : { background: "var(--color-light-bg-variant)" }

            // isHovering
            //   ? { background: "transparent" }
            //   : { background: "var(--color-light-bg-variant)" }
            // darkMode ? pageStyles.dark_project : pageStyles.light_project
          }
          className="projects"
        >
          <div
            style={
              darkMode
                ? pageStyles.dark_project_heading
                : pageStyles.light_project_heading
            }
            className="projects__heading"
          >
            <h3
              style={
                darkMode
                  ? pageStyles.dark_project_headingh3
                  : pageStyles.light_project_headingh3
              }
            >
              React Web Applications
            </h3>
          </div>

          <ul className="projects__list">
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Orbis App: Experienced in rendering data as XY Chart, Bubble
                chart, Stack chart, Pie chart, Donut chart for the
                visualizations of revolution using library like Am charts.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Proficient with displaying UI input elements such as drop down
                list with check- box, switch, and radio buttons, parametric to
                the data on the graph.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Design and development of “Oxyshare” Application, a not for
                profit tool to rent oxygen concentrators during the Covid
                Pandemic. Users request for Concentrators, donors would approve
                and track devices which also gives effective reuse and maximise
                the availability.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Incorporated responsive web app design for the app to seamlessly
                work, irrespective of the size of the screen, orientation and
                platform.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Scripbox Web App: Implemented react stepper, radio card, news
                card, blog card, and video card feature components, screen to
                link all unlinked funds in an account of family memebers.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Created an online Student Feedback System to reduce paper work.
              </p>
            </li>
          </ul>
        </article>

        <article
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          style={
            darkMode
              ? isHovering[1].hover
                ? pageStyles.dark_hover_project
                : pageStyles.dark_project
              : isHovering[1].hover
              ? pageStyles.light_hover_project
              : pageStyles.light_project
          }
          className="projects"
        >
          <div
            style={
              darkMode
                ? pageStyles.dark_project_heading
                : pageStyles.light_project_heading
            }
            className="projects__heading"
          >
            <h3
              style={
                darkMode
                  ? pageStyles.dark_project_headingh3
                  : pageStyles.light_project_headingh3
              }
            >
              React Native Applications
            </h3>
          </div>

          <ul className="projects__list">
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Scripbox App: Implemented react stepper, radio card, news card,
                blog card, and video card feature components for making the
                application user friendly.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Built reusable components and optimized all screesn in every
                possible ways.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Displayed a list of unlinked funds where user will have an
                option to link funds to the required family member.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                To detect and list a set of external SIP while giving a user an
                option to edit, track and untrack required funds.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Meal Recipes App: Displaying a list of Meal Categories and Step
                by step preparation details with Images.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Created a Drawer navigator with filters buttons and Implemented
                provision for the users to save Favourite Meals.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Shop App: Built an authentication Screen with Email and
                Password.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Incorporated control to add new products and details only for
                the administrators and Interface design for customers to add
                items to cart and order.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Banking App: Implemented a graph for displaying the account
                balance for each day of six months using Victory native library.
              </p>
            </li>
          </ul>
        </article>

        <article
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          style={
            darkMode
              ? isHovering[2].hover
                ? pageStyles.dark_hover_project
                : pageStyles.dark_project
              : isHovering[2].hover
              ? pageStyles.light_hover_project
              : pageStyles.light_project
          }
          className="projects"
        >
          <div
            style={
              darkMode
                ? pageStyles.dark_project_heading
                : pageStyles.light_project_heading
            }
            className="projects__heading"
          >
            <h3
              style={
                darkMode
                  ? pageStyles.dark_project_headingh3
                  : pageStyles.light_project_headingh3
              }
            >
              Embedded Projects
            </h3>
          </div>

          <ul className="projects__list">
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>Colour validations Of HDMI protocol using Perl.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                SMARC sAMX8 BSP Development on i.MX8QM reference board and
                custom board
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Windows GUI Application for AD, DAC, DIO using C# framework.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Linux Kernel and Device driver porting to Cyclone V custom
                board.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>
                Linux Kernel and Device driver porting with Arria 10 custom
                board.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>Software Development for zynq processor custom board.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                style={
                  darkMode
                    ? pageStyles.dark_list_icon
                    : pageStyles.light_list_icon
                }
              />
              <p>Development of application codes for Network protocol.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Projects;
