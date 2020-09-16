const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed",
      };
    case "SIGNOUT_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default authReducer;
