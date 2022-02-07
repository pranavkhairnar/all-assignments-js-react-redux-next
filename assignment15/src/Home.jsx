import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useSelector } from "react-redux";
import productCarousel from "./productCarousel";

function Home() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  const allItems = useSelector((state) => state.allItems);

  return (
    <>
    
      <br></br>
      <br></br>
      <br></br>
      <productCarousel></productCarousel>

      <div
        className="mx-auto row row-cols-1 row-cols-md-6"
        style={{ width: "95%" }}
      >
        {allItems.map((item) => (
          <div className="card">
            <img src={item.imgurl} className="card-img-top" alt="hi"></img>
            <div className="card-body">
              <h5 className="card-title">{item.item}</h5>
              <p className="card-text">Price: ₹{item.price}</p>

              <button
                onClick={() => {
                  actions.addToCart(item.id);
                }}
                className="btn btn-dark"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Home;
