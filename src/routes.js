import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Composer from './pages/Composer';
import Showtime from './pages/Showtime';
import Page404 from './pages/Page404';

function Routes () {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter={true}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/composer">
                <Composer />
              </Route>
              <Route exact path="/showtime/:id">
                <Showtime />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default Routes;