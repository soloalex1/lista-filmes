import { useEffect } from "react";
import { useDispatch } from "react-redux";
import List from "../../components/List";
import Screen from "../../components/Screen";
import useFetch from "../../hooks/useFetch";
import { setMoviesList } from "../../redux/actions";

const HomeScreenContainer = () => {
  const movies = useFetch("/trending/movie/day");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMoviesList(movies.response));
    // eslint-disable-next-line
  }, [movies.response]);

  return (
    <Screen title="Página Inicial">
      <div className="container my-12 mx-auto px-4 md:px-12">
        <List />
      </div>
    </Screen>
  );
};

export default HomeScreenContainer;
