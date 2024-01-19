import React, { useContext, useState } from "react";
import { Mycontext } from "./context/MyContext";

const Weather = () => {
  const { mockWeatherData } = useContext(Mycontext);

  const [searchInput, setSearchInput] = useState("");

  const results = Object.keys(mockWeatherData);

  const [weather, setWeather] = useState([]);

  const [value, setValue] = useState([]);

  const [history, setHistory] = useState();

  const onchangehandle = (e) => {
    const term = e.target.value.toLowerCase();

    // setSearchInput(term);

    console.log(term);

    // console.log(searchInput);

    const results = Object.keys(mockWeatherData);

    const searched_data = results.filter((city) =>
      city.toLowerCase().includes(term)
    );
    console.log(searched_data);
    if (term !== "") {
      console.log("hhhhhhh");
      setWeather(searched_data);
      setHistory(searched_data);
    } else if (!term !== "") {
      setWeather([]);
    }
  };

  function onhandel() {
    setValue(weather);
    setHistory(weather);
    console.log(value);
  }

  return (
    <div>
      <div>
        {value ? (
          value.map((result, index) => (
            <p key={index}>
              <strong>{result}</strong>
              <br />
              Temperature: {mockWeatherData[result].temperature}
              <br />
              Humidity:{mockWeatherData[result].humidity}
              <br />
              Wind Speed:{mockWeatherData[result].windSpeed}
              <br />
            </p>
          ))
        ) : (
          <div>searchInput</div>
        )}
      </div>
      <div>
        <input onChange={onchangehandle} />

        <button onClick={onhandel}>Search</button>
      </div>
    </div>
  );
};

export default Weather;
