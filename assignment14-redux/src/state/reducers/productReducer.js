// initial state
const initialState={
  items : []
  
}

const productReducer = (state=initialState, action) => {

  if (action.type === "fetch") {

      return {
        ...state,
        items:action.payload
    }


    

  //   if (state.length === items.length) {
  //     return state;
  //   }
  //   console.log(state);
  //   items.map((item) => (state = [...state, item]));
  //   console.log(state);
  //   return state;
  // } else {
  //   return state;
  }
  else {
    return state;
  }
};

export default productReducer;
