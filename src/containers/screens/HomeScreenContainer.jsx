import { useEffect } from "react";
import { useDispatch } from "react-redux";
import client from "../../api";
import List from "../../components/List";
import Screen from "../../components/Screen";
import { setMoviesList } from "../../redux/actions";

const HomeScreenContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    client("trending/movie/day?")
      .then((data) => {
        console.log(data);
        dispatch(setMoviesList(data));
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Screen title="Página Inicial">
      <div className="container my-12 mx-auto px-4 md:px-12">
        <List />
      </div>
    </Screen>
  );
};

export default HomeScreenContainer;
