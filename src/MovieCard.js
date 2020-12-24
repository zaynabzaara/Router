import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import Description from "./Description";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="card">
        <div className="imgBox">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.posterurl} alt="Posterimg" />
          </Link>
        </div>
        <div className="content">
          <h2 style={{ color: "sienna" }}>{movie.title}</h2>
          <h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
            />
          </h2>
          <p>{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
