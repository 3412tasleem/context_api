import React, { useContext, useState } from "react";
import { Mycontext } from "./context/MyContext";

const Togel = () => {
  const { languages } = useContext(Mycontext);
  const [showLang, setShowLang] = useState("JavaScript");
  // console.log(showLang);
  // console.log(languages[1]);
  const showLangFunc = () => {
    setShowLang(languages[0]);

    // console.log(showLang);
    // for (let i = 0; i < languages.length - 1; i++) {
    //   // console.log(showLang);
    //   console.log(i);
    //   // debugger;
    //   console.log(showLang + "before if");

    //   if (showLang === languages[i]) {
    //     console.log(showLang);
    //     console.log(i + "inner level");
    //     // debugger;

    //     setShowLang(languages[i + 1]);
    //     console.log(showLang);

    //     // debugger;
    //     // console.log(languages[i + 1] + " kkkk");
    //   }
    //   // console.log(showLang + "" + i);
    // }

    // ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    setShowLang(languages[0]);
    const languageindex = languages.indexOf(showLang);
    console.log(showLang);
    console.log(languageindex);
    if (languageindex < languages.length - 1) {
      setShowLang(languages[languageindex + 1]);
    }
  };

  //   console.log(showLang);
  return (
    <div>
      <div>
        <p id="favoriteLanguage">favorite programing language: {showLang}</p>
        <button id="changeFavorite" onClick={showLangFunc}>
          press
        </button>
      </div>
    </div>
  );
};

export default Togel;
{
  weather.map((city) => (
    <li key={city}>
      <strong>{city}</strong>
      Temperature: {mockWeatherData[city].temperature}
      Humidity:{mockWeatherData[city].humidity}
      Wind Speed:{mockWeatherData[city].windSpeed}
    </li>
  ));
}
