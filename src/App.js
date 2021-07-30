// import './App.css';
import React from 'react';
import Header from './components/Header';

import Watchlist from './components/Watchlist';
import Details from './components/Details';
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllResults  from './components/AllResults';
const HomeLazyComponent = React.lazy(() => import('./components/Home'));

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <React.Suspense fallback={<div />}>
              <HomeLazyComponent />
            </React.Suspense>
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/details/movie/:id">
            <Details />
          </Route>
          <Route path="/all-results">
            <AllResults />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
