import React from "react";
import { Container, Row, Col } from "reactstrap";
import useLatestMovies from "../fetching/useLatestMovies";

export default function LatestMovies() {
  const { data: movies, error } = useLatestMovies(
    "https://api.themoviedb.org/3/movie/latest?language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
  );

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col sm="12">
          <h1 className="h1-responsive text-center"> Latest Movies</h1>
        </Col>
        <div className="list-movies">
          {/* movies.map(x => (
            <img
              title={x.original_title}
              key={x.id}
              src={`https://image.tmdb.org/t/p/w200${x.poster_path}`}
              className="img-fluid poster-movies mx-auto d-block rounded"
              alt={`${x.original_title}`}
            />
          )) */}
        </div>
      </Row>
    </Container>
  );
}
