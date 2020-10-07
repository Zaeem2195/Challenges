import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { connect } from "react-redux";

const MyNavbar = ({ isLoggedInRed }) => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-between align-items-center "
      >
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="160"
            height="60"
            className="d-inline-block align-top "
          />
        </Navbar.Brand>
        <div>
          {!isLoggedInRed && (
            <Link to="/sign-up" className="mr-2 shadow sign-up-link text-white">
              Sign Up
            </Link>
          )}
        </div>
      </Navbar>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedInRed: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(MyNavbar);
