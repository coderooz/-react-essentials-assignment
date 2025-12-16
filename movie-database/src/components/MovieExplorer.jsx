import { useState } from "react";
import { movies } from "../data/movies";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import FavouriteMovies from "./FavouriteMovies";

export default function MovieExplorer() {
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState([]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const toggleFavourite = (movie) => {
    setFavourites((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  return (
    <div className="movie-container">
      <header className="header">
        <h1>🎬 Movie Explorer</h1>
        <p className="subtitle">
          Search, filter, and favourite movies. Built using React state.
        </p>
      </header>

      <SearchBar query={query} setQuery={setQuery} />

      {/* Conditional Rendering */}
      {query === "" && (
        <p className="hint-text">No input → start typing to search</p>
      )}

      {query !== "" && filteredMovies.length === 0 && (
        <p className="hint-text">No matching movies found</p>
      )}

      {filteredMovies.length > 0 && (
        <section>
          <h3 className="section-title">
            Matching Movies ({filteredMovies.length})
          </h3>

          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavourite={favourites.some((m) => m.id === movie.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </section>
      )}

      <FavouriteMovies favourites={favourites} />
    </div>
  );
}
