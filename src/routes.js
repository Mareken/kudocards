import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Composer from './pages/Composer';

function Routes () {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default Routes;