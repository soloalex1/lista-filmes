import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreenContainer from "./screens/HomeScreenContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreenContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
