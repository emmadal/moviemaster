import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import useCastMovie from "../fetching/useCastMovie";

export default function CastMovie(props) {
  useCastMovie(
    `https://api.themoviedb.org/3/movie/${props.movie_id}/credits?api_key=f18e966ce46365c9c78d821a876bf83e`
  );

  if (!props.loading) return "";
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="12">
          <h2 className="h2-responsive text-center"> Top Cast</h2>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
