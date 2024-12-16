import React, {useState} from "react";
import Header from "./composants/header";
import MovieList from "./composants/Movielist";
import SearchBar from "./composants/SearchBar";
import SortButtons from "./composants/SortButtons";
import MovieDetails from "./composants/MovieDetails";
import AddFilmForm from "./composants/Addfilm";
import Footer from "./composants/ffoter";

const moviesData = [
  { "title": "Inception", "director": "Christopher Nolan", "releaseYear": 2010, "genre": "Science Fiction", "rating": 8.8 , image:"/images/inception.jpeg"},
  { "title": "The Godfather", "director": "Francis Ford Coppola", "releaseYear": 1972, "genre": "Crime", "rating": 9.2 , image:"/images/theGodfather.jpeg"},
  { "title": "The Dark Knight", "director": "Christopher Nolan", "releaseYear": 2008, "genre": "Action", "rating": 9.0 , image:"/images/theDarkknight.jpeg"},
  { "title": "Pulp Fiction", "director": "Quentin Tarantino", "releaseYear": 1994, "genre": "Crime", "rating": 8.9 , image:"/images/pulpfiction.jpeg"},
  { "title": "Schindler's List", "director": "Steven Spielberg", "releaseYear": 1993, "genre": "Historical Drama", "rating": 9.0 , image:"/images/schindler'slist.jpeg"},
  { "title": "The Shawshank Redemption", "director": "Frank Darabont", "releaseYear": 1994, "genre": "Drama", "rating": 9.3 , image:"/images/shawshank.jpeg"},
  { "title": "Forrest Gump", "director": "Robert Zemeckis", "releaseYear": 1994, "genre": "Comedy-Drama", "rating": 8.8 , image:"/images/forrest.jpeg"},
  { "title": "The Matrix", "director": "Lana Wachowski, Lilly Wachowski", "releaseYear": 1999, "genre": "Science Fiction", "rating": 8.7, image:"/images/matrix.jpeg" },
  { "title": "Fight Club", "director": "David Fincher", "releaseYear": 1999, "genre": "Drama", "rating": 8.8 , image:"/images/fightclub.jpg"},
  { "title": "The Lord of the Rings: The Return of the King", "director": "Peter Jackson", "releaseYear": 2003, "genre": "Fantasy", "rating": 9.0 , image:"/images/lordof.jpeg"}
];

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = (type) => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (type === "rating") {
        return b.rating - a.rating;
      } else if (type === "releaseYear") {
        return b.releaseYear - a.releaseYear;
      }
      return 0;
    });
    setMovies(sortedMovies);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header/>
      <SearchBar search={search} handleSearch={handleSearch} />
      <SortButtons handleSort={handleSort} />
      <MovieList movies={filteredMovies} setSelectedMovie={setSelectedMovie} />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <AddFilmForm/>
      <Footer/>
    </div>
  );
};

export default App;
