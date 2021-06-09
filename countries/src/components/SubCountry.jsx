import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const SubCountry = ({ country }) => {
  const { theme } = React.useContext(ThemeContext);

  const { name, numericCode, population, region, capital, flag } = country;
  return (
    <article className="subCountry">
      <div className={`details ${theme === "light" ? "details-light" : ""}`}>
        <img className="countryImg" src={flag} alt={name} />

        <h3>{name}</h3>
        <h4>
          population:<span>{population}</span>
        </h4>
        <h4>
          region:<span>{region}</span>
        </h4>
        <h4>
          capital:<span>{capital}</span>
        </h4>
        <div className="buttons">
          <Link to={`/countries/${capital}`} className="btn">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SubCountry;
