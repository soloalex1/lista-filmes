import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import client from "../../api";
import List from "../../components/List";
import Loading from "../../components/Loading";
import Screen from "../../components/Screen";
import { setMoviesList } from "../../redux/actions";

const HomeScreenContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    console.log("vim daqui: ", history.location?.state?.from);
    setLoading(true);

    // só faz a consulta completa se eu não tiver sido redirecionado da tela de filme
    if (history.location?.state?.from !== "/movie/:id") {
      client("trending/movie/day?")
        .then((data) => {
          dispatch(setMoviesList(data));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      // senão, apaga o from
      const state = { ...history.location.state };
      delete state.from;
      history.replace({ ...history.location, state });
    }
    setLoading(false);

    // eslint-disable-next-line
  }, []);

  return (
    <Screen title="Página Inicial" loading={loading}>
      <div className="container my-12 mx-auto px-4 md:px-12">
        {loading && <Loading />}
        <List />
      </div>
    </Screen>
  );
};

export default HomeScreenContainer;
