export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder='Search movies (e.g. "Interstellar", "Star")'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setQuery("")}>Reset</button>
    </div>
  );
}
