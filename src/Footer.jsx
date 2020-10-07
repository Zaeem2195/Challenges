import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "./images/logo.png";

const Footer = () => {
  return (
    <div className="marginFooter">
      <Navbar
        bg="primary"
        variant="success"
        className="d-flex justify-content-between align-items-center mt-5"
      >
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="160"
            height="60"
            className="d-inline-block align-top ml-3"
          />
        </Navbar.Brand>
        <p className="text-white mr-5">
          THE CHALLENGE &copy;. All Rights Reserved
        </p>
      </Navbar>
    </div>
  );
};

export default Footer;
