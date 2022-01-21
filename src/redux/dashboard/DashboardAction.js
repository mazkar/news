export const getAllNews = (payload) => {
  return {
    type: "GET_ALL_NEWS",
    payload,
  };
};

export const setAllNews = (payload) => {
  return {
    type: "SET_ALL_NEWS",
    payload,
  };
};

export const setTitle = (payload) => {
  return {
    type: "SET_TITLE",
    payload,
  };
};

export const setNewsDetail = (payload) => {
  return {
    type: "SET_NEWS_DETAIL",
    payload,
  };
};
export const getNewsDetail = (payload) => {
  return {
    type: "GET_NEWS_DETAIL",
    payload,
  };
};
