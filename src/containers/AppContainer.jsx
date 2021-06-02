import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreenContainer from "./screens/HomeScreenContainer";
import MovieScreenContainer from "./screens/MovieScreenContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreenContainer} />
        <Route path="/movie/:id" component={MovieScreenContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
