import React, { useContext, useEffect, useState } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsJournalBookmark } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { themeContext } from "../../Context";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={
          activeNav === "#" ? (darkMode ? "active" : "light_active") : ""
        }
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={
          activeNav === "#about" ? (darkMode ? "active" : "light_active") : ""
        }
      >
        <FaRegUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={
          activeNav === "#experience"
            ? darkMode
              ? "active"
              : "light_active"
            : ""
        }
      >
        <BsJournalBookmark />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={
          activeNav === "#services"
            ? darkMode
              ? "active"
              : "light_active"
            : ""
        }
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={
          activeNav === "#contact" ? (darkMode ? "active" : "light_active") : ""
        }
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
