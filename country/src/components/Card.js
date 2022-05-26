import { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountry(res.data));
  }, []);
  return (
    <>
      <div className="container-card">
        {country.map((ele) => (
          <div className="card">
            <div className="top-card">
              <img src={ele.flags.png} alt="img" />
            </div>
            <div className="bottom-card">
              <h4>{ele.name.common}</h4>
              <p>
                <span>Population</span> : {ele.population}
              </p>
              <p>
                <span>Region</span> : {ele.region}
              </p>
              <p>
                <span>Capital</span> : {ele.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
