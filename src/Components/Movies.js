import React, { useState, useEffect } from "react";
import movies from "../movies.json";
import Movie from "./Movie";

function Movies() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(movies);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const search = (e) => {
    let newList = [];
    movies.map((m) => {
      if (m.title.toLowerCase().includes(query.toLowerCase())) {
        console.log(true);
        newList.push(m);
      } else {
        console.log("not include ");
      }
    });
    setList(newList);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div>
      <div>
        <label for="search">Search With title: </label>
        <input
          type="text"
          name="search"
          placeholder="movie title"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={(e) => search(e)}>
          Submit
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {list.length >= 1 ? (
          list.map((m) => {
            return <Movie movie={m} key={m.id} />;
          })
        ) : (
          <h2>No Result found</h2>
        )}
      </div>
    </div>
  );
}

export default Movies;
