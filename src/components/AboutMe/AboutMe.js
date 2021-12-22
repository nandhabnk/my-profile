import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./AboutMe.scss";
const AboutMe = (props) => {
  const fetchMovieHandler = () => {
    fetch("https://swapi.dev/api/film/")
      .then((response) => {
        if (!response.ok)
          throw new Error(`Something went wrong - ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <div className="aboutMe-style">
        <span className="aboutMe-heading">ABOUT-ME</span>
        <Link to="bnk">BNK</Link>
      </div>
      <Routes>
        <Route path="bnk" element={<div>BNK DA!</div>} />
      </Routes>
      <div>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
