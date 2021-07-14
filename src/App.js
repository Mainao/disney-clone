import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import Details from './components/Details';
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllResults  from './components/AllResults';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
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
