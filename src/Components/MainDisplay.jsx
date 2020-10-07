import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChallengeDisplay from "./ChallengeDisplay";
import LoginBox from "./LoginBox";
import UserBanner from "./UserBanner";
import { connect } from "react-redux";

const MainDisplay = ({ isLoggedInRed }) => {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={10}>
          <ChallengeDisplay />
        </Col>
        <Col md={2}>{isLoggedInRed ? <UserBanner /> : <LoginBox />}</Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedInRed: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(MainDisplay);
