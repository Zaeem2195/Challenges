import React, { useState, useRef } from "react";
import {
  Form,
  Container,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import Axios from "axios";

const SolutionForm = ({ challengeID, userRed, submitSolution }) => {
  const [solution, setSolution] = useState("");
  const [submittedPhoto, setSubmittedPhoto] = useState("");
  const [rating, setRating] = useState("");
  const fileUpload = useRef();

  let isDisabled = true;
  if (solution.length > 0 && submittedPhoto && rating) {
    isDisabled = false;
  }

  const ratingInputHandler = (e) => {
    setRating(parseInt(e.target.value));
    e.preventDefault();
  };

  const inputHandler = (e) => {
    setSolution(e.target.value);
  };

  const photoUploader = (e) => {
    setSubmittedPhoto(e.target.files[0]);
  };

  const submitHandler = (e) => {
    const form = new FormData();
    form.append("photo", submittedPhoto);
    form.append("solutionText", solution);
    form.append("challenge", challengeID);
    form.append("user", userRed._id);
    form.append("rating", rating);

    const config = {
      headers: {
        "content-type": `multipart/form-data; boundary=${form._boundary}`,
      },
    };

    Axios.post("http://localhost:4000/api/solutions", form, config).then(
      (res) => {
        submitSolution(res.data.isSubmitted);
      }
    );
    e.preventDefault();
  };

  return (
    <Container>
      <Form className="mt-5" onSubmit={submitHandler}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="size text-muted display-4 sizey">
            Enter your Solution
          </Form.Label>
          <Form.Control as="textarea" rows="3" onChange={inputHandler} />
        </Form.Group>

        <input
          type="file"
          onChange={photoUploader}
          style={{ display: "none" }}
          ref={fileUpload}
        />
        <div className="d-flex justify-content-between">
          <Button
            variant="outline-primary"
            onClick={() => fileUpload.current.click()}
          >
            Upload
          </Button>

          <Dropdown as={ButtonGroup}>
            {!rating ? (
              <Button disabled>Rate Challenge</Button>
            ) : (
              <Button disabled>{rating}</Button>
            )}

            <Dropdown.Toggle
              split
              variant="primary"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item
                as="button"
                onClick={ratingInputHandler}
                className="text-center"
              >
                0
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="1"
                onClick={ratingInputHandler}
                className="text-center"
              >
                1
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="2"
                onClick={ratingInputHandler}
                className="text-center"
              >
                2
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="3"
                onClick={ratingInputHandler}
                className="text-center"
              >
                3
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="4"
                onClick={ratingInputHandler}
                className="text-center"
              >
                4
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="5"
                onClick={ratingInputHandler}
                className="text-center"
              >
                5
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="6"
                onClick={ratingInputHandler}
                className="text-center"
              >
                6
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="7"
                onClick={ratingInputHandler}
                className="text-center"
              >
                7
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="8"
                onClick={ratingInputHandler}
                className="text-center"
              >
                8
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="9"
                onClick={ratingInputHandler}
                className="text-center"
              >
                9
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                value="10"
                onClick={ratingInputHandler}
                className="text-center"
              >
                10
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button type="submit" disabled={isDisabled} className="mb-5 shadow">
            submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

const MapStateToProps = (state) => {
  return {
    userRed: state.user,
  };
};

export default connect(MapStateToProps)(SolutionForm);
