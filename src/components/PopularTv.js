import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
import "../css/popular.css";
import usePopularTv from "../fetching/usePopularTv";

export default function PopularTv() {
  const { data: tv } = usePopularTv(
    "https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=f18e966ce46365c9c78d821a876bf83e"
  );

  return (
    <MDBContainer fluid>
      <MDBRow className="mt-5">
        <MDBCol sm="12">
          <h1 className="h1-responsive font-weight-bold text-center"> Popular Tv Shows</h1>
        </MDBCol>
        <div className="list-movies">
          {tv.slice(0, 18).map(x => (
            <Link to={`/tv/${x.id}`} key={x.id}>
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
 