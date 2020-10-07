import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Spinner } from "react-bootstrap";
import Challenge from "./Challenge";

const ChallengeDetails = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const id = match.params.challenge_id;
    Axios.get(`http://localhost:4000/api/challenges/${id}`).then((res) => {
      setData(res.data.challenge);
      setIsLoading(false);
    });
  }, [match.params.challenge_id]);

  return (
    <div>
      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          variant="danger"
          className="m-3"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Challenge data={data} />
      )}
    </div>
  );
};

export default ChallengeDetails;
