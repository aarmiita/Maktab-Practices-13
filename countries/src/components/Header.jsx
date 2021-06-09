import React from "react";
import { ThemeContext } from "../context/ThemeContext";
// import { WiMoonAltWaxingCrescent5 } from "@react-icons/all-files/fa/WiMoonAltWaxingCrescent5";

const Header = () => {
  const { toggleTheme, theme } = React.useContext(ThemeContext);
  return (
    <>
      <header className={`header ${theme === "light" ? "header-light" : ""}`}>
        <div>
          <h1>Countries</h1>
        </div>
        <button
          className={`dark-mode ${theme === "light" ? "light-mode" : ""}`}
          onClick={() => toggleTheme()}
        >
          <i
            className={`fas fa-moon ${
              theme === "light" ? "fa-moon-light" : ""
            }`}
          ></i>
          {/* <WiMoonAltWaxingCrescent5 /> */}
        </button>
      </header>
    </>
  );
};

export default Header;
