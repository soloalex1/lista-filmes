const Search = ({ value, onChange, ...attr }) => {
  return (
    <input
      type="text"
      role="search"
      placeholder="Procure um filme..."
      className="shadow-md rounded-sm w-3/4 p-3"
      {...attr}
    />
  );
};

export default Search;
