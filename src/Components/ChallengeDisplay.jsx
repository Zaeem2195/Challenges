import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import CompletedChallenges from "./CompletedChallenges";
import { connect } from "react-redux";

const ChallengeDisplay = ({ isLoggedInRed }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filterData, setfilterData] = useState(null);
  const [isCompletedChallenges, setIsCompletedChallenges] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:4000/api/challenges").then((res) => {
      setData(res.data.challenge);
      setfilterData(res.data.challenge);
    });
  }, []);

  useEffect(() => {
    if (filterData === null) {
      return;
    } else {
      setIsLoading(false);
    }
  }, [filterData]);

  const handleFilter = (e) => {
    const filteredData = data.filter((challenge) =>
      challenge.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilterData(filteredData);
  };

  const handleEasy = () => {
    const filter = data.filter((challenge) =>
      challenge.difficulty.toLowerCase().includes("easy")
    );
    setfilterData(filter);
    setIsCompletedChallenges(false);
  };
  const handleMedium = () => {
    const filter = data.filter((challenge) =>
      challenge.difficulty.toLowerCase().includes("medium")
    );
    setfilterData(filter);
    setIsCompletedChallenges(false);
  };
  const handleHard = () => {
    const filter = data.filter((challenge) =>
      challenge.difficulty.toLowerCase().includes("hard")
    );
    setfilterData(filter);
    setIsCompletedChallenges(false);
  };
  const handleAll = () => {
    const filter = data.map((challenge) => challenge);
    setfilterData(filter);
    setIsCompletedChallenges(false);
  };
  return (
    <div>
      <div className="wrapper-search shadow d-flex justify-content-between align-items-center">
        <input
          className="form-control search-field"
          type="seach"
          placeholder="Search..."
          onChange={handleFilter}
          disabled={isLoading}
        ></input>
        <DropdownButton
          id="dropdown-item-button"
          title="Sort By"
          className="ml-4"
          disabled={isLoading}
        >
          <Dropdown.Item as="button" onClick={handleEasy}>
            Easy
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={handleMedium}>
            Medium
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={handleHard}>
            Hard
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as="button" onClick={handleAll}>
            All Challenges
          </Dropdown.Item>
          <Dropdown.Divider />
          {isLoggedInRed && (
            <Dropdown.Item
              as="button"
              onClick={() => setIsCompletedChallenges(true)}
            >
              Completed Challenges
            </Dropdown.Item>
          )}
        </DropdownButton>
      </div>
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
        ) : isCompletedChallenges & isLoggedInRed ? (
          <CompletedChallenges />
        ) : filterData.length === 0 ? (
          <h2 className="text-muted text-center italic mt-4">
            No Result Found
          </h2>
        ) : (
          <CardDisplay data={filterData} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedInRed: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(ChallengeDisplay);
