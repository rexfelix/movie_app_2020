import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

export default function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className={"movie"}>
      <img src={poster} alt={title} title={title} />
      <div className={"movie_data"}>
        <h3 className={"movie_title"}>{title}</h3>F
        <h5 className={"movie_year"}>{year}</h5>
        <ul className={"movie_genres"}>
          {genres.map((genres, index) => {
            return (
              <li key={index} className={"movie_genre"}>
                {genres}
              </li>
            );
          })}
        </ul>
        <p className={"movie_summary"}>{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
