import React from "react";
import { Container, Row, Col } from "reactstrap";
import usePopularMovies from "../fetching/usePopularMovies";
import { HashLoader } from "react-spinners";
import "../css/popular.css";

export default function PopularMovies() {
  const { data: movies, error } = usePopularMovies(
    "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
  );

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm="12">
          <h1 className="h1-responsive text-center"> Popular Movies</h1>
        </Col>
        <div className="list-movies">
          {movies.slice(0, 18).map(x => (
            <img
              title={x.original_title}
              key={x.id}
              src={`https://image.tmdb.org/t/p/w200${x.poster_path}`}
              className="img-fluid poster-movies rounded"
              alt={`${x.original_title}`}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
}
