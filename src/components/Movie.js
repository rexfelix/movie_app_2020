import React from "react";
import propTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

export default function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <div className={"movie"}>
      <Link
        id={"link"}
        to={{
          pathname: "/movie-detail",
          state: { year, title, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className={"movie_data"}>
          <h3 className={"movie_title"}>{title}</h3>
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
      </Link>
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
