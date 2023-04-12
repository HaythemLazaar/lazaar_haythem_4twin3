import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Movie(props) {
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0.0);
  const handleChange = (e) => {
    setRating(e.target.value);
  };

  const addRating = () => {
    let newRatings = [...ratings];
    newRatings.push(rating);
    setRatings(newRatings);
  };
  useEffect(() => {
    setAverageRating();
  }, [ratings]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "600px",
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
      <h2>Movie Rating</h2>
      <div>
        <label for="rating">Add your rating: </label>
        <input
          type="text"
          name="rating"
          placeholder="rating"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={(e) => addRating(e)}>
          Add
        </button>
      </div>
      {ratings.length >= 1 ? <div></div> : <h3>No Ratings yet </h3>}
    </div>
  );
}

export default Movie;
