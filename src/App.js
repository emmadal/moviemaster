import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import {slide as Menu} from 'react-burger-menu'
import DetailsMovies from "./components/DetailsMovies";
import DetailsTv from "./components/DetailsTv";
import FooterPage from "./components/FooterPage";
import usePopularMovies from "./fetching/usePopularMovies";
import usePopularTv from "./fetching/usePopularTv";
import Home from "./components/Home";

function App() {
  const { data: movies } = usePopularMovies(
    "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
  );
  const { data: tv } = usePopularTv(
    "https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
  );
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            path="/movie/:userId"
            render={props => <DetailsMovies movies={movies} {...props} />}
          />
          <Route
            path="/tv/:userId"
            render={props => <DetailsTv tv={tv} {...props} />}
          />
        </Switch>
        <FooterPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
