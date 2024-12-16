import React from "react";

const MovieDetails = ({movie}) => {
  return (
    <div>
      <h2>Détails du film</h2>
      <p><strong>Titre:</strong> {movie.title}</p>
      <p><strong>Réalisateur:</strong> {movie.director}</p>
      <p><strong>Année de sortie:</strong> {movie.releaseYear}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Note:</strong> {movie.rating}</p>
    </div>
  );
};

export default MovieDetails;
