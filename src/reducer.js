const init = {
  isLoggedIn: false,
  user: null,
};

const reducer = (state = init, action) => {
  if (action.type === "LOG_IN") {
    return {
      isLoggedIn: action.auth,
      user: action.user,
    };
  } else {
    return state;
  }
};

export default reducer;
