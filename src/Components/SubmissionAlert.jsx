import React from "react";
import { Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const SubmissionAlert = ({ userRed }) => {
  return (
    <Container fluid>
      <Alert variant="success" className="shadow">
        <h4 className="">Solution Submitted Successfully!</h4>
        <h6 className="display-4 size-big mt-1">
          Dear {userRed.fullName}, your solution has been submitted
          successfully. Feel free to solve other challenges on the website.
        </h6>

        <hr />
        <div className="d-flex justify-content-end">
          <Link to={"/"} className=" card-link px-5 size py-2" type="submit">
            Go Back
          </Link>
        </div>
      </Alert>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userRed: state.user,
  };
};

export default connect(mapStateToProps)(SubmissionAlert);
