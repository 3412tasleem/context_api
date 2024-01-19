import { useContext, useState } from "react";
import { Mycontext } from "./context/MyContext";

const Mosam = () => {
  const { mockWeatherData } = useContext(Mycontext);
  const weatherValue = Object.keys(mockWeatherData);

  const inputChangeHandle = (e) => {
    const eventValue = e.target.value.toLowerCase();
    const searchdata = weatherValue.filter((city) => {
      city.toLowerCase().includes(eventValue);
      console.log(city);
    });
    console.log(searchdata);
  };
  const searchHandle = () => {};
  return (
    <div>
      <h1>hello</h1>
      <input type="text" onChange={inputChangeHandle} />
      <button onClick={searchHandle}>search</button>
    </div>
  );
};
export default Mosam;
