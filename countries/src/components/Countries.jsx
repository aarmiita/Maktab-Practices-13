import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Filter from "./Filter";
import SubCountry from "./SubCountry";
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
            return <SubCountry country={country} />;
          })}
      </section>
    </>
  );
};

export default Countries;
