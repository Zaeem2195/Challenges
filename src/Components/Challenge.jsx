import React, { useState } from "react";
import SolutionForm from "./SolutionForm";
import SubmissionAlert from "./SubmissionAlert";
import SolutionDisplay from "./SolutionDisplay";

const Challenge = ({ data }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitSolution = (isSubmitted) => {
    setIsSubmitted(isSubmitted);
  };
  return (
    <div>
      {isSubmitted ? (
        <SubmissionAlert />
      ) : (
        <div>
          <SolutionDisplay data={data} />
          <SolutionForm
            challengeID={data._id}
            submitSolution={submitSolution}
          />
        </div>
      )}
    </div>
  );
};

export default Challenge;
