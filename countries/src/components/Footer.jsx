import React from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <footer className={`footer ${theme === "light" ? "footer-light" : ""}`}>
        Designed by Romina Farokhzad
      </footer>
    </>
  );
};

export default Footer;
