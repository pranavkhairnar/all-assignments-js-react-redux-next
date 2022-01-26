import React from "react";

function Cart(props) {
  let total = 0;

  props.ID.map((id) => (total = total + parseInt(props.items[id - 1].price)));
  return (
    <>
      <h1>Cart🛒</h1>
        <br></br>
      <div className="center" >
        <table  style={{border: "1px solid black"}}>
          <col width="200px" />
          <col width="175px" />
          <col width="150px" />
          <tr style={{border: "1px solid black"}, {textAlign: "center"}}>
            <th style={{border: "1px solid black"}}> Product image </th>
            <th style={{border: "1px solid black"}}> Product name</th>
            <th style={{border: "1px solid black"}}> Cost</th>
          </tr>
          {props.ID.map((id) => (
            <tr style={{border: "1px solid black"}, {textAlign: "center"}}>
              <th style={{border: "1px solid black"}}>
                <img
                  src={props.items[id - 1].imgurl}
                  alt="hi"
                  width="100px"
                  height="100px"
                ></img>
              </th>

              <th style={{border: "1px solid black"}}>{props.items[id - 1].item}</th>

              <th style={{border: "1px solid black"}}>₹{props.items[id - 1].price}/-</th>
              
            </tr>
          ))}
          
          <tr style={{border: "1px solid black"}, {textAlign: "center"}}>
          <th>Number of products = {props.ID.length}</th>
            <th style={{border: "1px solid black"}}> Total cost:</th>
            <th style={{border: "1px solid black"}}>₹{total}/-</th>
          </tr>
        </table>
      
      <br></br>
      <h4>Enter delivery address: </h4>
            
            <textarea rows="4" cols="50"></textarea>
            <br></br>
            <button type="button" class="btn btn-dark">Confirm</button>
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
