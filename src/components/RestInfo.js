import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBillAlt, faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import useInfo from "../fetching/useInfo";

export default function RestInfo(props) {
    
  const { data }  = useInfo(
    `https://api.themoviedb.org/3/movie/${props.movie_id}?api_key=f18e966ce46365c9c78d821a876bf83e&language=en-US`
  );
  console.l
  if (!props.loading) return "";
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="12">
          <h2 className="h2-responsive text-center font-weight-bold">
            {" "}
            More Details
          </h2>
          <hr />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol sm="3" className="text-center">
          <i>Release <FontAwesomeIcon icon={faClock} /></i> 
          <p className="font-weight-bold">{data["release_date"]}</p>
        </MDBCol>
        <MDBCol sm="3" className="text-center">
          <i>Budget <FontAwesomeIcon icon={faMoneyBillAlt} /></i> 
          <p className="font-weight-bold">${data["budget"]}</p>
        </MDBCol>
        <MDBCol sm="3" className="text-center">
          <i>Rating <FontAwesomeIcon icon={faHandPointUp} /></i> 
          <p className="font-weight-bold">{data["vote_average"]}/10</p>
        </MDBCol>
        <MDBCol sm="3" className="text-center">
           <i>Revenue <FontAwesomeIcon icon={faMoneyBillAlt} /></i> 
          <p className="font-weight-bold">${data["revenue"]}</p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mt-2">
        <MDBCol sm="12">
          <h4 className="h4-responsive text-center">Production companies</h4>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}
