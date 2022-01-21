const initialState = {
  allNews: [],
  newsDetail: [],
  title: "",
  newsDetail: [],
  isError: false,
  isLoading: false,
};

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_NEWS":
      return {
        ...state,
        allNews: action.payload,
        isLoading: false,
      };
    case "GET_ALL_NEWS":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_TITLE":
      return {
        ...state,
        isLoading: true,
        title: action.payload,
      };
    case "SET_NEWS_DETAIL":
      return {
        ...state,
        newsDetail: action.payload,
        isLoading: false,
      };
    case "GET_NEWS_DETAIL":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
