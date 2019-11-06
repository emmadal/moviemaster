import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import DetailsMovies from "./components/DetailsMovies";
import DetailsTv from "./components/DetailsTv";
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
      <Route exact path="/" component={() => <Home />} />
      <Route
        path="/movie/:userId"
        render={props => <DetailsMovies movies={movies} {...props} />}
      />
      <Route
        path="/tv/:userId"
        render={props => <DetailsTv tv={tv} {...props} />}
      />
    </BrowserRouter>
  );
}

export default App;
