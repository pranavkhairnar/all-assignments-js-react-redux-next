export const addToCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: id,
    });
  };
};
export const fetchData = (url) => {
  return (dispatch) => {
    dispatch({
      type: "fetch",
      payload: url,
    });
  };
};
