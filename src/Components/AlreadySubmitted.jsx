import React from "react";
import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const AlreadySubmitted = ({ userRed }) => {
  return (
    <div>
      <Container fluid>
        <Alert variant="danger" className="shadow ">
          <Alert.Heading>Solution Already Submitted!!</Alert.Heading>
          <p>
            Dear {userRed.fullName}, your solution for this challenge has
            already been submitted. Please, Try other challenges!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link to={"/"} className="card-link px-5 size py-2" type="submit">
              Go Back
            </Link>
          </div>
        </Alert>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userRed: state.user,
  };
};

export default connect(mapStateToProps)(AlreadySubmitted);
