import { useEffect, useState } from "react";
import List from "../../components/List";
import Loading from "../../components/Loading";
import Screen from "../../components/Screen";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";

const HomeScreenContainer = () => {
  const [consulta, setConsulta] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setConsulta(e.target.value);
  };

  const [listaFilmes, setListaFilmes] = useState([]);

  const debounceConsulta = useDebounce(consulta);

  const test = useFetch("/trending/movie/day");

  useEffect(() => {
    if (test.response) {
      setLoading(true);
      setListaFilmes([...test?.response?.results]);
      setLoading(false);
    }
    console.log("lista de filmes", listaFilmes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceConsulta]);

  useEffect(() => {
    if (debounceConsulta) {
    } else {
      setListaFilmes([]);
    }
  }, [debounceConsulta]);

  return (
    <Screen title="Página Inicial">
      <div>
        {loading && <Loading />}
        <input
          className="shadow-md rounded-sm w-3/4 p-3"
          type="text"
          value={consulta}
          onChange={(e) => handleChange(e)}
        />

        <button onClick={() => setLoading(true)}>loading</button>

        {listaFilmes.length && <List list={listaFilmes} />}
      </div>
    </Screen>
  );
};

export default HomeScreenContainer;
