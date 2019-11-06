// @ts-nocheck
import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import CastMovie from "../components/CastMovie";
import RestInfo from "../components/RestInfo";
import "../css/details.css";

export default function DetailsTv({ match, tv }) {
  const [movieId, setMovieId] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  function handleState() {
    setMovieId(match.params.userId);
    setIsLoad(!isLoad);
  }
  return (
    <MDBContainer fluid>
      {tv
        .filter(m => m.id == match.params.userId)
        .map((x, key) => (
          <MDBRow key={key} className="mt-5">
            <MDBCol sm="7" className="mt-5">
              <img
                title={x.original_title}
                src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`}
                className="img-fluid mx-auto d-block rounded thumbnail"
                alt={`${x.original_title}`}
              />
            </MDBCol>
            <MDBCol sm="5" className="mt-5">
              <h4 className="h4-responsive font-weight-bold">
                {x.original_title}
              </h4>
              <hr />
              <h5 className="h5-responsive"> Description</h5>
              <p className="text-justify my-3">{x.overview}</p>
              <hr />
              <p>
                Language:{" "}
                {x.original_language === "en" ? (
                  <img
                    src={require("../assets/gb.png")}
                    alt="en"
                    title="english"
                  />
                ) : (
                  <img src={require("../assets/cn.png")} alt="Chineese" />
                )}
              </p>
              <hr />
              <MDBBtn outline gradient="purple" onClick={handleState}>
                {isLoad ? "Show less" : "More Info"}
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        ))}
      <RestInfo movie_id={movieId} loading={isLoad} />
      <CastMovie movie_id={movieId} loading={isLoad} />
    </MDBContainer>
  );
}
