const initialState = {
  email: "",
  password: "",
  isLogged: false,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOG_IN":
      return {
        ...state,
        email: action.payload,
        password: action.payload,
        isLogged: true,
      };
    case "SET_LOG_OUT":
      return {
        ...state,
        email: "",
        password: "",
        isLogged: false,
      };

    default:
      return state;
  }
};
