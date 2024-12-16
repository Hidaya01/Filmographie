import React, { useState } from 'react';
import './form.css'; 

function AddFilmForm({AddFilm }) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !director || !releaseYear || !genre || !rating) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    const newFilm = {
      title,
      director,
      releaseYear,
      genre,
      rating,
    };

    AddFilm(newFilm);
    setTitle('');
    setDirector('');
    setReleaseYear('');
    setGenre('');
    setRating('');
    setError('');
  };

  return (
    
    <form onSubmit={handleSubmit} className="add-film-form">
      {error && <p className="error">{error}</p>}
      <h2>Ajouter un Film</h2>
      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input id="title" type="text"value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      
      <div className="form-group">
        <label htmlFor="director">Réalisateur</label>
        <input type="text" value={director} onChange={(e) => setDirector(e.target.value)}/>
      </div>

      <div className="form-group">
        <label htmlFor="releaseYear">Année de sortie</label>
        <input
          id="releaseYear"
          type="number"
          placeholder="Année de sortie"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Sélectionnez un genre</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Action">Action</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="rating">Note</label>
        <input
          id="rating"
          type="number"
          placeholder="Note (0-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="10"
        />
      </div>

      <button type="submit" className="submit-btn">Ajouter un film</button>
    </form>
  );
}

export default AddFilmForm;
