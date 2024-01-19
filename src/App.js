import "./App.css";
import { Mycontext } from "./context/MyContext";
import Weather from "./weather";
function App() {
  const languages = [
    "JavaScript",
    "Python",
    "c++",
    "dart",
    "golang",
    "urdu",
    "english",
  ];

  const mockWeatherData = {
    NewYork: {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    LosAngeles: {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  return (
    <div>
      <Mycontext.Provider value={{ languages, mockWeatherData }}>
        <Weather />
      </Mycontext.Provider>
    </div>
  );
}

export default App;
