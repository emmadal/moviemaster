import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import useCastTv from "../fetching/useCastTv";
import "../css/cast.css";

export default function CastTv(props) {
  const { data: top_cast } = useCastTv(
    `https://api.themoviedb.org/3/tv/${props.tv_id}/credits?api_key=f18e966ce46365c9c78d821a876bf83e`
  );
  if (!props.loading) return "";
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="12">
          <h2 className="h2-responsive text-center font-weight-bold">
            {" "}
            Top cast
          </h2>
          <hr />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol sm="12" className="cast_card">
          {top_cast.map(m => (
            <div className="mycard img-cast text-center" key={m.id}>
              <img
                style={{ width: "150px", height: "150px" }}
                title={`${m.name}`}
                src={`https://image.tmdb.org/t/p/w200${m.profile_path}`}
                alt={`${m.name}`}
                className="text-center rounded-circle"
              />
              <hr />
              <i className="text-monospace font-weight-bold green-text">
                {m.name}
              </i>
              <br />
              <i className="font-weight-bold red-text">{m.character}</i>
            </div>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
