import React from "react";
import './movielist.css';

const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <div className="moviechart">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item" onClick={() => setSelectedMovie(movie)}>
          <img src={movie.image} alt={movie.title} className="movie-image"/>
          <h2>{movie.title}</h2>
          <p>{movie.genre} - {movie.releaseYear} - {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
