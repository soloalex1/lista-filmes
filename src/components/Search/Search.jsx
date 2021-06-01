const Search = ({ ...attr }) => {
  return (
    <input
      role="search"
      placeholder="Procure um filme..."
      className="shadow-md rounded-sm w-3/4 p-3"
      {...attr}
    />
  );
};

export default Search;
