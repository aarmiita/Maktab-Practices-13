import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Filter from "./Filter";
const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const { theme } = React.useContext(ThemeContext);
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountryData();
  }, []);
  const [name] = country;
  return (
    <>
      <Filter
        onsearch={(e) => {
          setSearch(e.target.value);
        }}
      />
      <section
        className={`container ${theme === "light" ? "container-light" : ""}`}
      >
        {country
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((country) => {
            const { name, numericCode, population, region, capital, flag } =
              country;
            return (
              <article className="subCountry" key={numericCode}>
                <div
                  className={`details ${
                    theme === "light" ? "details-light" : ""
                  }`}
                >
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
                  <h4>{theme}</h4>
                  <div className="buttons">
                    <Link to={`/countries/${capital}`} className="btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default Countries;
