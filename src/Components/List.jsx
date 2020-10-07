import React from "react";
import CompletedChallengeCard from "./CompletedChallengeCard";
import { Row, Col, Container } from "react-bootstrap";

const List = ({ data }) => {
  const list = data.map((solution) => (
    <Col md={4} key={solution._id}>
      <CompletedChallengeCard solution={solution} />
    </Col>
  ));
  return (
    <Container>
      <Row>{list}</Row>
    </Container>
  );
};

export default List;
