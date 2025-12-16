export default function FavouriteMovies({ favourites }) {
  return (
    <section className="favourites-section">
      <h3 className="section-title">⭐ Favourite Movies</h3>

      {favourites.length === 0 && (
        <p className="hint-text">
          You haven't added any favourites yet.
        </p>
      )}

      {favourites.map((movie) => (
        <p key={movie.id} className="fav-item">
          {movie.title} ({movie.year})
        </p>
      ))}
    </section>
  );
}
