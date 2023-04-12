import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movies from "../movies.json";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const param = useParams();
  const getMovie = (id) => {
    movies.map((m) => {
      if (m.id.toString() === id) setMovie(m);
    });
  };
  useEffect(() => {
    getMovie(param.id);
  }, []);

  return (
    <div>
      {movie != null ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <img
            src={require("../assets/images/" + movie.img)}
            alt="movie picture"
            style={{ maxWidth: "300px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              maxWidth: "800px",
              paddingInline: "40px",
              gap: "10px",
            }}
          >
            <p style={{ fontWeight: "600" }}>Year : {movie.year}</p>
            <p style={{ fontWeight: "600" }}>Genre : {movie.genre}</p>
            <p> {movie.description}</p>
            <p style={{ fontWeight: "600" }}>Description : </p>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <h2>Movie Not Found</h2>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
