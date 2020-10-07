import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Axios from "axios";
import { connect } from "react-redux";

const LoginBox = ({ logInRed }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = {
        userName,
        password,
      };
      const res = await Axios.post(
        "http://localhost:4000/api/users/login",
        user
      );
      if (!res.data.auth) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      } else {
        logInRed(res.data.auth, res.data.user[0]);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div>
      <div className="login-box p-3 m-auto  pb-4 shadow-lg">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicUserName">
            <Form.Control
              type="text"
              placeholder=" User Name"
              onChange={handleUserName}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder=" Password"
              onChange={handlePassword}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit" className="btn-custom">
              Log In
            </Button>
          </div>
        </Form>
      </div>
      {alert && (
        <Alert variant="danger" className="mt-3">
          Incorrect Username or Password!
        </Alert>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logInRed: (auth, user) => dispatch({ type: "LOG_IN", auth, user }),
  };
};
export default connect(null, mapDispatchToProps)(LoginBox);
