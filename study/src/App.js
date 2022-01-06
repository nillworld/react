import { useState } from "react";
import "./App.css";

// https://sangminem.tistory.com/28  - js 크롤링
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

function App() {
  const [resultList, setResultList] = useState([]);
  const [cnt, setCnt] = useState(0);

  const getHTML = (url) => {
    return new Promise((resolve) => {
      delay(300).then(() => {
        axios.get(url).then((data) => {
          resolve(data);
        });
      });
    });
  };

  const getHTML2 = async (url) => {
    await delay(300);
    return await axios.get(url);
  };

  const delay = (ms) => setTimeout(ms);

  return (
    <div className="App">
      <h1>hi</h1>
      <div>{getHTML2(`https://sangminem.tistory.com/28`)}</div>
    </div>
  );
}

export default App;
