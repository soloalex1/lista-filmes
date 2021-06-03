import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = ({ ...attr }) => {
  const [consulta, setConsulta] = useState("");

  const handleChange = (e) => {
    setConsulta(e.target.value);
  };

  const debounceConsulta = useDebounce(consulta);

  useEffect(() => {
    // chamar as paradinhas do redux aqui
    console.log(debounceConsulta);
  }, [debounceConsulta]);

  return (
    <input
      type="text"
      role="search"
      placeholder="Procure um filme..."
      className="shadow-md rounded-sm w-3/4 p-3"
      value={consulta}
      onChange={handleChange}
      {...attr}
    />
  );
};

export default Search;
