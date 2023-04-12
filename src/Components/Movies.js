import React from "react";
import movies from "../movies.json";
import Movie from "./Movie";

function Movies() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {movies.map((m) => {
        return <Movie movie={m} key={m.id} />;
      })}
    </div>
  );
}

export default Movies;
