import React from "react";
import { Card, Alert } from "react-bootstrap";
import styled from "styled-components";

const DifficultyDisplay = styled.div`
  border: ${(props) => {
    if (props.difficulty.toLowerCase().includes("easy")) {
      return "rgb(52, 206, 14) 2px solid";
    } else if (props.difficulty.toLowerCase().includes("medium")) {
      return "rgb(250, 184, 4) 2px solid";
    } else {
      return "red 2px solid";
    }
  }};
  color: ${(props) => {
    if (props.difficulty.toLowerCase().includes("easy")) {
      return "rgb(52, 206, 14)";
    } else if (props.difficulty.toLowerCase().includes("medium")) {
      return "rgb(250, 184, 4)";
    } else {
      return "red ";
    }
  }};

  border-radius: 10px;
  margin: 0px 100px;
  padding: 10px 0px;
`;

const CompletedChallengeCard = ({ solution }) => {
  return (
    <div className="mt-5 padding-card">
      <Card className="text-center shadow">
        <Card.Header>
          <h3 className="display-4 style size-huge italic  text-center">
            {solution.challenge.title}
          </h3>
        </Card.Header>
        <Card.Body>
          <Alert
            variant="success"
            className="text-center display-4 size-big alert-height"
          >
            {solution.solutionText}
          </Alert>
          <Alert
            variant="danger"
            className="text-center display-4 size-big width"
          >
            You rated this Challenge {solution.rating}/10
          </Alert>
        </Card.Body>
        <Card.Footer className="text-muted">
          <DifficultyDisplay difficulty={solution.challenge.difficulty}>
            {solution.challenge.difficulty}
          </DifficultyDisplay>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CompletedChallengeCard;
