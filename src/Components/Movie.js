import React from "react";
import { NavLink } from "react-router-dom";

function Movie(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "400px",
        padding: "40px",
        gap: "10px",
      }}
    >
      <img
        src={require("../assets/images/" + props.movie.img)}
        alt="movie picture"
        style={{ maxWidth: "300px", paddingBottom: "80px" }}
      />
      <NavLink to={"/movies/" + [props.movie.id]} style={{ color: "black" }}>
        <h2>{props.movie.title}</h2>
      </NavLink>
      <p>Year : {props.movie.year}</p>
      <p>Genre : {props.movie.genre}</p>
      <p>Description : {props.movie.description}</p>
    </div>
  );
}

export default Movie;
