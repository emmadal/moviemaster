import React from "react";
import { slide as Menu } from "react-burger-menu";
import {MDBBtn} from 'mdbreact'
import {Link} from 'react-router-dom'

export default function MyMenu() {
  return (
    <MDBBtn outline success>
      <Menu scaleRotate>
        <Link to="/movies"> Popular movies</Link>
        <Link to="/tv"> Popular Tv shows</Link>
      </Menu>
    </MDBBtn>
  );
}
