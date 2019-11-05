import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBillAlt, faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import useInfo from "../fetching/useInfo";

export default function RestInfo(props) {

  const { hour, minutes, data } = useInfo(
    `https://api.themoviedb.org/3/movie/${props.movie_id}?api_key=f18e966ce46365c9c78d821a876bf83e&language=en-US`
  );

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
          <i>Runtime <FontAwesomeIcon icon={faClock} /></i> 
          <p className="font-weight-bold">
            { hour >=1 ? (<i>{hour}h {minutes} min</i>) : (<i>{minutes} min</i>)}
          </p>
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

      {/* <MDBRow className="mt-2">
        <MDBCol sm="12">
          <h3 className="h3-responsive text-center my-2">Production companies</h3>
        </MDBCol>
      </MDBRow> */}

    </MDBContainer>
  );
}
