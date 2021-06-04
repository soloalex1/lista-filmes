import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import client from "../../api";
import List from "../../components/List";
import Loading from "../../components/Loading";
import Screen from "../../components/Screen";
import { setMoviesList } from "../../redux/actions";

const HomeScreenContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    client("trending/movie/day?")
      .then((data) => {
        dispatch(setMoviesList(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
