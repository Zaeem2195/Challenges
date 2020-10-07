import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setalert] = useState(false);

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    const user = {
      fullName,
      userName,
      password,
      email,
    };
    axios
      .post("http://localhost:4000/api/users", user)
      .then((res) => {
        setMessage(res.data.message);
        setalert(true);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setalert(true);
      });
    e.preventDefault();
  };

  return (
    <div className=" sign-up-wrapper">
      <Form className="sign-up-form p-5 shadow-lg" onSubmit={handleSubmit}>
        <h4 className=" style italic ">Sign Up</h4>
        <hr />
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            onChange={handleFullName}
          />
        </Form.Group>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>User Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            onChange={handleUserName}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address (Optional)</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit" className="mt-1 btn mr-4">
            Submit
          </Button>
          <div>
            {alert && (
              <Alert variant="info" className="mt-1">
                {message}
              </Alert>
            )}
          </div>
        </div>

        <hr />
        <span className="account-tag mr-3">Already have an Account?</span>
        <Link className="account-tag italic" to="./">
          Log In
        </Link>
      </Form>
    </div>
  );
};

export default SignUp;
