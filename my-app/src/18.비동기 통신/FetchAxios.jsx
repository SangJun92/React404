import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchAxois(props) {
  const [temp, setTemp] = useState(true);
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [isReady, setReady] = useState(false);

  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d9070ac6d07fab60c68b0192691cb753";
  const url1 =
    "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=4c49a11e1bae445ba44fce8985736539";

  const url2 =
    "https://newsapi.org/v2/everything?q=tesla&from=2024-05-03&sortBy=publishedAt&apiKey=4c49a11e1bae445ba44fce8985736539";

  const url3 =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4c49a11e1bae445ba44fce8985736539";

  const url4 = "https://v.daum.net/v/20240603161302693";

  useEffect(() => {
    axios
      .get(url2)
      .then((response) => {
        console.log(response.data);
        // setTemp(response.data.main.temp);
        // setDesc(response.data.weather[0].main);
        // setIcon(response.data.weather[0].icon);
        // setReady(true);
      })
      .catch((err) => console.error(err));
    //   .then((result) => result.json())
    //   .then((jsonresult) => {
    //     setTemp(jsonresult.main.temp);
    //     setDesc(jsonresult.weather[0].main);
    //     setIcon(jsonresult.weather[0].icon);
    //     setReady(true);
    //   })
    //   .catch((err) => console.error(err));
  });

  return (
    <div>
      {isReady && (
        <div>
          <p>Temperature : {temp} </p>
          <p>Description : {desc} </p>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default FetchAxois;
