import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="font-small mt-5">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="." className="text-white font-weight-bold text-center"> movie master</a> <br/>
          <a href=" https://www.themoviedb.org" className="text-white font-weight-bold text-center">Themoviedb </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
