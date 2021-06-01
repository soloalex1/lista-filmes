import { useEffect, useState } from "react";
import Screen from "../../components/Screen";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";

const HomeScreenContainer = () => {
  const [consulta, setConsulta] = useState("");

  const handleChange = (e) => {
    setConsulta(e.target.value);
  };

  const [listaFilmes, setListaFilmes] = useState([]);

  const debounceConsulta = useDebounce(consulta);

  const test = useFetch("/trending/movie/day");

  useEffect(() => {
    setListaFilmes(test.response?.results);
    console.log("lista de filmes", listaFilmes);
  }, [debounceConsulta]);

  useEffect(() => {
    if (debounceConsulta) {
    } else {
      setListaFilmes([]);
    }
  }, [debounceConsulta]);

  return (
    // <Screen title="Página Inicial">
    <div>
      <input
        className="shadow-md rounded-sm w-3/4 p-3"
        type="text"
        value={consulta}
        onChange={(e) => handleChange(e)}
      />

      <ul>
        {listaFilmes.length &&
          listaFilmes.map((filme) => (
            <li key={filme.id}>
              {filme.popularity} - {filme.title}
            </li>
          ))}
      </ul>
    </div>
    // </Screen>
  );
};

export default HomeScreenContainer;
