import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '@/containers/pages/Home';
import MoviePage from '@/containers/pages/MoviePage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movie/:id" component={MoviePage} />
    </Switch>
  </BrowserRouter>
);

export default App;
