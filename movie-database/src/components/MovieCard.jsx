export default function MovieCard({
  movie,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h4>
          {movie.title} <span>({movie.year})</span>
        </h4>
        <p className="genre">{movie.genre}</p>

        <div className="tags">
          <span className="rating">⭐ {movie.rating}</span>
          {movie.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        className={`fav-btn ${isFavourite ? "active" : ""}`}
        onClick={() => onToggleFavourite(movie)}
      >
        {isFavourite ? "❤️ Favourited" : "🤍 Favourite"}
      </button>
    </div>
  );
}
