import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home, Team, Podcast, Covidsations } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/team">
          < Team />
        </Route>
        <Route exact path ="/podcast">
          < Podcast />
        </Route>
        <Route exact path ="/blog">
          <p>Blog page</p>
        </Route>
        <Route path ="/blog/:blogId">
          <p>BlogId page</p>
        </Route>
        <Route exact path ="/covidsations">
          < Covidsations />
        </Route>
        <Route exact path ="/">
          < Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*

4

*/