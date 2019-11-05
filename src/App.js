import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import DetailsMovies from "./components/DetailsMovies";
import usePopularMovies from './fetching/usePopularMovies'
import Home from './components/Home'

function App() {
  const { data: movies } = usePopularMovies(
    "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
  );
  return (
    <BrowserRouter>
      <Route exact path="/" component={() => <Home />} />
      <Route path="/movie/:userId" render={(props) => <DetailsMovies movies={movies} {...props}/>}/>
    </BrowserRouter>
  );
}

export default App;
