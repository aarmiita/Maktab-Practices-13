import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "../country.css";

const Country = () => {
  const { theme } = useContext(ThemeContext);
  const [countryWeather, setCountryWeather] = useState({
    weather: [{ id: 1, main: "none", description: "none" }],
    wind: { speed: 0, deg: 0 },
  });
  const [country, setCountry] = useState([]);

  // const APIKEY = "817f8da2a5c7dadfac962c3a856a6086";
  const { capital } = useParams();
  useEffect(() => {
    const fetchCountryWeather = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=817f8da2a5c7dadfac962c3a856a6086`
      );
      const weather = await response.json();
      const weatherFromServer = await weather;
      setCountryWeather(weatherFromServer);
    };
    fetchCountryWeather();
  }, []);
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/capital/${capital}
        `
      );
      const country = await response.json();
      setCountry(country);
      // console.log(country);
    };
    fetchCountryData();
  }, []);
  console.log(countryWeather);

  return (
    <>
      <div className={theme === "light" ? "myCountry-light" : "myCountry"}>
        <div>
          <Link to="/" className="btn-back">
            <i className="fas fa-arrow-left"></i>Back Home
          </Link>
        </div>
        <section className="country">
          {country.map((myCountry) => {
            const {
              numericCode,
              flag,
              name,
              nativeName,
              population,
              region,
              subregion,
              capital,
              languages,
              currencies,
              borders,
            } = myCountry;
            return (
              <article className="subCountry" key={numericCode}>
                <div className="flag">
                  <img className="country-img" src={flag} alt={name} />
                </div>
                <div
                  className={`country-detailes ${
                    theme === "light" ? "country-detailes-light" : ""
                  }`}
                >
                  <h2>{name}</h2>
                  <h5>
                    Native Name :<span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population:<span>{population}</span>
                  </h5>
                  <h5>
                    Region:<span>{region}</span>
                  </h5>
                  <h5>
                    Subregion:<span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital:<span>{capital}</span>
                  </h5>
                  <div className="country-detailes-div">
                    <h5>
                      Currencies:<span>{currencies[0].name}</span>
                    </h5>
                    <h5>
                      Languages:<span>{languages[0].name}</span>
                    </h5>
                  </div>
                </div>
                <div>
                  <h3 className={theme === "light" ? "border-light" : ""}>
                    Border Countries :
                  </h3>
                  <div className="borders">
                    {borders.map((border) => {
                      return (
                        <ul key={border}>
                          <li>{border}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
          <div className={theme === "light" ? "light-weather" : "dark-weather"}>
            <h1>Weather:</h1>
            {countryWeather.weather.map((w) => {
              const { id, main, description } = w;
              return (
                <div key={id}>
                  <h4>
                    mainweather:<span>{main}</span>
                  </h4>
                  <h4>
                    description : <span>{description}</span>
                  </h4>
                </div>
              );
            })}
            <h4>
              wind's speed: <span>{countryWeather.wind.speed}</span>
            </h4>
          </div>
        </section>
      </div>
    </>
  );
};

export default Country;
