import React, { useContext, useState } from "react";
import "./contact.css";
import { GoMail } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const pageStyles = {
  light_input: {
    borderColor: "var(--color-light-primary)",
  },

  dark_input: {
    borderColor: "var(--color-primary)",
  },

  dark_option: {
    color: "var(--color-primary)",
    fontWeight: "bold",
  },
  light_option: {
    fontWeight: "bold",
    color: "var(--color-light-primary)",
  },

  dark_hover_option: {
    fontWeight: "bold",
    color: "var(--color-white)",
  },
  light_hover_option: {
    fontWeight: "bold",
    color: "var(--color-light-white)",
  },
};
const Contact = () => {
  const initialHoverState = [
    { id: 0, hover: false },
    { id: 1, hover: false },
    { id: 2, hover: false },
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

  const form = useRef();

  const sendEmail = (e) => {
    console.log("inside sendemail");
    e.preventDefault();

    emailjs.sendForm(
      "service_fro4y64",
      "template_j9eeyxm",
      form.current,
      "pEeb-iK_jCVzcI3tY" //public key of my account from email js site
    );

    e.target.reset(); //to reset the site pnce user is clicked submit
  };
  return (
    <section id="contact">
      <h5 className={!darkMode && "light__h5"}>Get in touch</h5>
      <h2 className={!darkMode && "light__h2"}> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className={
              darkMode
                ? "contact__option dark__contact__option"
                : "contact__option light__contact__option"
            }
          >
            <GoMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tgaishwarya.95@gmail.com</h5>
            <a
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
              style={
                darkMode
                  ? isHovering[0].hover
                    ? pageStyles.dark_hover_option
                    : pageStyles.dark_option
                  : isHovering[0].hover
                  ? pageStyles.light_hover_option
                  : pageStyles.light_option
              }
              href="mailto:tgaishwarya.95@gmail.com"
              target="_blank"
            >
              Send a mail
            </a>
          </article>

          <article
            className={
              darkMode
                ? "contact__option dark__contact__option"
                : "contact__option light__contact__option"
            }
          >
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Aishwarya Bhat</h5>
            <a
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
              style={
                darkMode
                  ? isHovering[1].hover
                    ? pageStyles.dark_hover_option
                    : pageStyles.dark_option
                  : isHovering[1].hover
                  ? pageStyles.light_hover_option
                  : pageStyles.light_option
              }
              href="https://m.me/aishwarya.bhat.95"
              target="_blank"
            >
              Send a messege
            </a>
          </article>

          <article
            className={
              darkMode
                ? "contact__option dark__contact__option"
                : "contact__option light__contact__option"
            }
          >
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Aishwarya</h5>
            <a
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
              style={
                darkMode
                  ? isHovering[2].hover
                    ? pageStyles.dark_hover_option
                    : pageStyles.dark_option
                  : isHovering[2].hover
                  ? pageStyles.light_hover_option
                  : pageStyles.light_option
              }
              href="https://wa.me/919621469775"
              target="_blank"
            >
              Send a messesge
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            style={darkMode ? pageStyles.dark_input : pageStyles.light_input}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            style={darkMode ? pageStyles.dark_input : pageStyles.light_input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            style={darkMode ? pageStyles.dark_input : pageStyles.light_input}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className={
              darkMode
                ? "buttn btn btn-primary"
                : "buttn light__btn light__btn-primary"
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
