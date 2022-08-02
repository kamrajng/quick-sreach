import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./SearchEngine";
import "./Styles.css";

function App() {
  const searcharray = ["React", "Developer", "Olaitan", "Kamaldeen"];
  return (
    <div className="WeatherSearchEngine">
      <h1>Search Engine</h1>
      <SearchEngine searcharray={searcharray} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
