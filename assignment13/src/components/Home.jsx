import React from "react";

function Home(props) {
  let items = props.items;

  return (
    <>
  <br></br>
  <br></br>
  <br></br>
  <div className="row row-cols-1 row-cols-md-6">
      {items.map((item) => (
    
    
    <div className="card" > 
    <img src={item.imgurl} className="card-img-top" alt="hi"></img>
    <div className="card-body">
    <h5 className="card-title">{item.item}</h5>
    <p className="card-text">Price: ₹{item.price}</p>
    <button onClick={() => props.addToCart(item.id)} className="btn btn-dark">Add to cart</button>
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
