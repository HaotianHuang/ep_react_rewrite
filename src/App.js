import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/team">
          <p>Team page</p>
        </Route>
        <Route exact path ="/podcast">
          <p>Podcast page</p>
        </Route>
        <Route exact path ="/blog">
          <p>Blog page</p>
        </Route>
        <Route path ="/blog/:blogId">
          <p>BlogId page</p>
        </Route>
        <Route exact path ="/covidsations">
          <p>Covidsation page</p>
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

10

*/