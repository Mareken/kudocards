import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Composer from './pages/Composer';

function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/composer">
          <Composer />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;