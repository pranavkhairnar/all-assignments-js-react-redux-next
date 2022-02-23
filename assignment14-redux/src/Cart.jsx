import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  let total = 0;
  const addedItems = useSelector((state) => state.addedItems);
  const allItems = useSelector((state) => state.allItems.items);
  addedItems.map((id) => (total = total + parseInt(allItems[id - 1].price)));
  return (
    <>
      <h1>Cart🛒 </h1>

      <br></br>
      <div className="center">
        <table style={{ border: "1px solid black" }}>
          <col width="200px" />
          <col width="175px" />
          <col width="150px" />
          <tr style={({ border: "1px solid black" }, { textAlign: "center" })}>
            <th style={{ border: "1px solid black" }}> Product image </th>
            <th style={{ border: "1px solid black" }}> Product name</th>
            <th style={{ border: "1px solid black" }}> Cost</th>
          </tr>
          {addedItems.map((id) => (
            <tr
              style={({ border: "1px solid black" }, { textAlign: "center" })}
            >
              <th style={{ border: "1px solid black" }}>
                <img
                  src={allItems[id - 1].imgurl}
                  alt="hi"
                  width="100px"
                  height="100px"
                ></img>
              </th>

              <th style={{ border: "1px solid black" }}>
                {allItems[id - 1].item}
              </th>

              <th style={{ border: "1px solid black" }}>
                ₹{allItems[id - 1].price}/-
              </th>
            </tr>
          ))}

          <tr style={({ border: "1px solid black" }, { textAlign: "center" })}>
            <th>Number of products = {addedItems.length}</th>
            <th style={{ border: "1px solid black" }}> Total cost:</th>
            <th style={{ border: "1px solid black" }}>₹{total}/-</th>
          </tr>
        </table>

        <br></br>
        <h4>Enter delivery address: </h4>

        <textarea rows="4" cols="50"></textarea>
        <br></br>
        <button type="button" class="btn btn-dark">
          Confirm
        </button>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Cart;
