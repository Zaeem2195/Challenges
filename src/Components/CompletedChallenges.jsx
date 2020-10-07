import React, { useEffect, useState } from "react";
import List from "./List";
import Axios from "axios";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

const CompletedChallenges = ({ userRed }) => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isNone, setIsNone] = useState(false);

  useEffect(() => {
    const obj = {
      user: userRed._id,
    };

    Axios.post("http://localhost:4000/api/solutions/query", obj).then((res) => {
      if (res.data.solution.length !== 0) {
        setData(res.data.solution);
      } else {
        setIsNone(true);
      }
      setIsLoading(false);
    });
  }, [userRed._id]);

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
      ) : isNone ? (
        <h2 className="text-center text-muted my-3 italic">
          No Completed Challenges
        </h2>
      ) : (
        <List data={data} />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userRed: state.user,
  };
};

export default connect(mapStateToProps)(CompletedChallenges);
