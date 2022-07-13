import React, { useContext } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import { themeContext } from "./Context";

const pageStyles = {
  darkTheme: {
    color: "var(--color-white)",
    background: "var(--color-bg)",
  },
  lightTheme: {
    color: "var(--color-light-white)",
    background: " var(--color-light-bg)",
  },
};

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div style={darkMode ? pageStyles.darkTheme : pageStyles.lightTheme}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Projects />
        {/* <Portfolio />
      <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
