import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List";
import Screen from "../../components/Screen";
import useFetch from "../../hooks/useFetch";
import { setMoviesList } from "../../redux/actions";

const HomeScreenContainer = () => {
  const { response, loading, error } = useFetch("/trending/movie/day");

  const dispatch = useDispatch();

  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(setMoviesList(response));
    // eslint-disable-next-line
  }, [response]);

  useEffect(() => {
    console.log("store", store);
  }, [store]);

  return (
    <Screen title="Página Inicial">
      <div className="container my-12 mx-auto px-4 md:px-12">
        <List />
      </div>
    </Screen>
  );
};

export default HomeScreenContainer;
