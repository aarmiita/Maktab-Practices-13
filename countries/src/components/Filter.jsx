import React from "react";
import { ThemeContext } from "../context/ThemeContext";

const Filter = ({ onsearch }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <section className={`filter ${theme === "light" ? "filter-light" : ""}`}>
      <form className="form-control">
        <input
          className={`${theme === "light" ? "input-light" : ""}`}
          type="text"
          placeholder="search for country"
          onChange={onsearch}
        />
      </form>
    </section>
  );
};

export default Filter;
