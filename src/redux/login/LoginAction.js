export const setLogin = (payload) => {
  return {
    type: "SET_LOG_IN",
    payload,
  };
};
export const setLogout = (payload) => {
  return {
    type: "SET_LOG_OUT",
    payload,
  };
};
