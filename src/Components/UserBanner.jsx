import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

const UserBanner = ({ userRed, loginRed }) => {
  return (
    <div>
      <Card className="text-center shadow-lg">
        <Card.Body>
          <Card.Title className="text-muted">{userRed.fullName}</Card.Title>
          <p className="text-muted">( {userRed.userName} )</p>
          <hr />
          {userRed.email ? (
            <Card.Text className="display-3 size-big">
              {userRed.email}
            </Card.Text>
          ) : (
            <Card.Text className="display-3 size">No e-mail Provided</Card.Text>
          )}

          <Button variant="primary" onClick={() => loginRed(false)}>
            Log out
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Online</Card.Footer>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userRed: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginRed: (auth) => dispatch({ type: "LOG_IN", auth, user: null }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBanner);
