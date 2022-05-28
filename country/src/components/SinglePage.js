import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";

export default function SinglePage() {
  const { country } = useParams();
  const [single, setSingle] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => setSingle(res.data));
  }, [country]);
  return (
    <div className="mode">
      <Nav />
      <Link to="/" className="back">
        Back
      </Link>
      <div>
        {single.map((ele) => (
          <div className="container-single">
            <div className="left-single">
              <img className="img-single" src={ele.flags.png} alt="img" />
            </div>
            <div className="right-single">
              <h3 className="title-single">{ele.name.common}</h3>
              <div className="c-single-info">
                <p>
                  <span>Native Name :</span> {ele.name.common}
                </p>
                <p>
                  <span>Top Level Domain :</span> {ele.tld}
                </p>
              </div>
              <div className="c-single-info">
                <p>
                  <span>Population:</span> {ele.population}
                </p>
                <p>
                  <span>Region :</span> {ele.region}
                </p>
              </div>
              <div className="c-single-info">
                <p>
                  <span>Capital:</span> {ele.capital}
                </p>
                <p>
                  <span>Continent :</span> {ele.continents}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
