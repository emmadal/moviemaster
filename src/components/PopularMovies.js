import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import usePopularMovies from "../fetching/usePopularMovies";
import { Link } from "react-router-dom";
import "../css/popular.css";

export default function PopularMovies() {
  const { data: movies } = usePopularMovies(
    "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
  );

  return (
    <MDBContainer fluid>
      <MDBRow className="mt-5">
        <MDBCol sm="12">
          <h1 className="h1-responsive text-center"> Popular Movies</h1>
        </MDBCol>
        <div className="list-movies">
          {movies.slice(0, 18).map(x => (
            <Link to={`/movie/${x.id}`} key={x.id}>
                <img
                  title={x.original_title}
                  src={`https://image.tmdb.org/t/p/w200${x.poster_path}`}
                  className="img-fluid poster-movies mx-auto d-block rounded"
                  alt={`${x.original_title}`}
                />
            </Link>
          ))}
        </div>
      </MDBRow>
    </MDBContainer>
  );
}
