import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Search() {
  const [cardShow, setCardShow] = useState(true);
  function clickRegion() {
    setSearches(!searches);
  }
  const [searches, setSearches] = useState(false);
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [paraValue, setParaValue] = useState("");
  const [regionValue, setRegionValue] = useState([]);
  function keydownHandler(e) {
    if (e.target.value === "") {
      setCardShow(true);
    } else {
      setCardShow(false);
      setValue(e.target.value);
    }
  }
  function regionHandler(e) {
    setFilterData([]);
    setCardShow(false);
    setParaValue(e.target.innerHTML);
  }
  useEffect(() => {
    if (filterData) {
      axios
        .get(
          `https://restcountries.com/v3.1/name/${value.toLowerCase()}?fullText=true`
        )
        .then((res) => setFilterData(res.data));
    }
  }, [value]);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${paraValue}`)
      .then((res) => setRegionValue(res.data));
  }, [paraValue]);
  return (
    <>
      <div className="container-search">
        <div className="left-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search By Full Name ..."
            onKeyUp={keydownHandler}
          />
        </div>
        <div className="right-search" onClick={clickRegion}>
          <div className="top-region">
            <p>Filter By Region</p>
          </div>
          {searches ? (
            <div className="bottom-region">
              <p className="region">Filter by Region</p>
              <p name="africa" className="region" onClick={regionHandler}>
                Africa
              </p>
              <p name="america" className="region" onClick={regionHandler}>
                America
              </p>
              <p name="asia" className="region" onClick={regionHandler}>
                Asia
              </p>
              <p name="europe" className="region" onClick={regionHandler}>
                Europe
              </p>
              <p name="oceania" className="region" onClick={regionHandler}>
                Oceania
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {cardShow ? (
        <Card />
      ) : (
        <div className="container-card">
          {filterData.map((ele) => (
            <Link className="card" to={`/name/${ele.name.common}`}>
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
            </Link>
          ))}
        </div>
      )}
      {paraValue ? (
        <div className="container-card">
          {regionValue.map((ele) => (
            <Link className="card" to={`/name/${ele.name.common}`}>
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
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Search;
