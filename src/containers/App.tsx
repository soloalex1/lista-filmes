import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "@/containers/pages/HomePage";
import MoviePage from "@/containers/pages/MoviePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={MoviePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

