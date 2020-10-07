import React from "react";
import { Card, Alert } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const DifficultyDisplay = styled.div`
  border: ${(props) => {
    if (props.difficulty.toLowerCase().includes("easy") & !props.loggedIn) {
      return "rgb(52, 206, 14) 2px solid";
    } else if (
      props.difficulty.toLowerCase().includes("medium") & !props.loggedIn
    ) {
      return " rgb(250, 184, 4) 2px solid";
    } else if (
      props.difficulty.toLowerCase().includes("hard") & !props.loggedIn
    ) {
      return "red 2px solid";
    }
  }};
  background-color: ${(props) => {
    if (props.difficulty.toLowerCase().includes("easy") & props.loggedIn) {
      return "rgb(52, 206, 14) ";
    } else if (
      props.difficulty.toLowerCase().includes("medium") & props.loggedIn
    ) {
      return " rgb(250, 184, 4)";
    } else if (
      props.difficulty.toLowerCase().includes("hard") & props.loggedIn
    ) {
      return "red ";
    }
  }};
  color: ${(props) => {
    if (props.loggedIn) {
      return "white";
    }
    if (props.difficulty.toLowerCase().includes("easy") & !props.loggedIn) {
      return "rgb(52, 206, 14) ";
    } else if (
      props.difficulty.toLowerCase().includes("medium") & !props.loggedIn
    ) {
      return " rgb(250, 184, 4)";
    } else if (
      props.difficulty.toLowerCase().includes("hard") & !props.loggedIn
    )
      return "red ";
  }}};
  padding: ${(props) => {
    if (props.loggedIn) {
      return "3px 0px";
    }
  }}};

  border-radius: 10px;
`;

const ChallengeCard = ({ challenge, isLoggedInRed }) => {
  return (
    <Card className={`mt-5 ${isLoggedInRed && "shadow-lg"} p-3`}>
      <h3 className="display-4 style size-huge italic  text-center">
        {challenge.title}
      </h3>
      <hr />
      <div className="wrapper-difficulty ">
        <DifficultyDisplay
          difficulty={challenge.difficulty}
          loggedIn={isLoggedInRed}
          className="shadow"
        >
          <p className="text-center text-size pt-2  ">{challenge.difficulty}</p>
        </DifficultyDisplay>
      </div>

      <hr />
      {!challenge.attemptS ? (
        <Alert variant="danger" className="text-center">
          No Attempts Yet!
        </Alert>
      ) : (
        <Alert variant="success" className="text-center">
          User Attempts:
          <span className="display-4 size-lg"> {challenge.attemptS}</span>
        </Alert>
      )}
      {!challenge.avgRating ? (
        <Alert variant="danger" className="text-center">
          No Ratings Yet!
        </Alert>
      ) : (
        <Alert variant="success" className="text-center">
          Average User Rating: {""}
          <span className="display-4 size-lg">
            {challenge.avgRating.toFixed(1)}
          </span>
        </Alert>
      )}
      <hr />
      {isLoggedInRed ? (
        <Link
          to={`/${challenge._id}`}
          className=" card-link shadow mb-2"
          type="submit"
        >
          ATTEMPT
        </Link>
      ) : (
        <div className="text-muted size italic text-center mb-4 mt-1">
          Log In to Attempt
        </div>
      )}
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedInRed: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(ChallengeCard);
