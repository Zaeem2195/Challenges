import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import ChallengeCard from "./ChallengeCard";

const CardDisplay = ({ data }) => {
  const display = data.map((challenge) => {
    return (
      <Col md={4} key={challenge._id}>
        <ChallengeCard challenge={challenge} />
      </Col>
    );
  });

  return (
    <Container fluid>
      <Row>{display}</Row>
    </Container>
  );
};
export default CardDisplay;
