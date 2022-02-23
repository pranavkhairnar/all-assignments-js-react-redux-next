export const addToCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: id,
    });
  };
};
export const fetchData = (json_data) => {
  return (dispatch) => {
    dispatch({
      type: "fetch",
      payload: json_data,
    });
  };
};
