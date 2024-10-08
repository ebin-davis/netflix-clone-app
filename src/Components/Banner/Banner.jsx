import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/constants";
function Banner() {
  const [movie, setMovie] = useState();
  const rand=Math.floor(Math.random()*20);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[rand]);
        setMovie(response.data.results[rand]);
      });
  }, []);

  return (
    <div className="banner"  style=
    {{
      backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
    }} >
      
      
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
