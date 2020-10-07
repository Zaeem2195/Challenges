import React, { useEffect, useState } from "react";
import Axios from "axios";
import ChallengeDetails from "./ChallengeDetails";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import AlreadySubmitted from "./AlreadySubmitted";

const QueryAlreadySubmitted = ({ match, userRed }) => {
  const [isloading, setIsLoading] = useState(true);
  const [alert, setalert] = useState(false);

  useEffect(() => {
    const queryObj = {
      user: userRed._id,
      challenge: match.params.challenge_id,
    };

    Axios.post("http://localhost:4000/api/solutions/query", queryObj).then(
      (res) => {
        if (res.data.solution.length === 1) {
          setalert(true);
        }
        setIsLoading(false);
      }
    );
  }, [userRed._id, match.params.challenge_id]);

  return (
    <div>
      {isloading ? (
        <Spinner
          animation="border"
          role="status"
          variant="danger"
          className="m-3"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : alert ? (
        <AlreadySubmitted />
      ) : (
        <ChallengeDetails match={match} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userRed: state.user,
  };
};

export default connect(mapStateToProps)(QueryAlreadySubmitted);
