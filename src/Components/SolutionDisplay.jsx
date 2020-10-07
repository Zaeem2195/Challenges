import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const DifficultyDisplay = styled.div`
  background-color: ${(props) => {
    if (props.difficulty.toLowerCase().includes("easy")) {
      return "rgb(52, 206, 14)";
    } else if (props.difficulty.toLowerCase().includes("medium")) {
      return "rgb(250, 184, 4)";
    } else {
      return "red";
    }
  }};

  border-radius: 10px;
  color: white;
  padding: 22px 0px;
  font-size: 20px;
`;

const SolutionDisplay = ({ data }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={11}>
            <div className="ml-5">
              <h1 className="ml-5 mt-4 display-4 style italic text-center p-2 pb-3">
                {data.title}
              </h1>
              <hr />
              <h4 className="ml-5 mt-5 text-muted italic ">Instructions:</h4>
              <h6 className="ml-5 mt-3 text-muted display-4 size-big">
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                veniam.
              </h6>
              <h6 className="ml-5 mt-3 text-muted display-4 size-big">
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                veniam.
              </h6>
              <h6 className="ml-5 mt-3 text-muted display-4 size-big">
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                veniam.
              </h6>
            </div>
          </Col>
          <Col sm={1}>
            <DifficultyDisplay
              difficulty={data.difficulty}
              className="text-center mt-4 shadow-lg"
            >
              <h6>{data.difficulty}</h6>
            </DifficultyDisplay>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SolutionDisplay;
