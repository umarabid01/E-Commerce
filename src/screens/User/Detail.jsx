import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const { state } = useLocation(); 

  const addToCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pd_id: state.pd_id,           
          quantity: 1,
          totalprice: state.numericPrice        
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Item added to cart!");
        navigate("/cart");
      } else {
        alert(data.message || "Failed to add to cart");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div
      className="card height-20px my-5 mx-5"
      style={{ border: "2px solid yellow", height: "400px" }}
    >
      <div className="row">
        <div className="col-3">
          <img 
            src={state.imgsrc} 
            className="img-fluid rounded-start" 
            alt="Product image" 
            style={{ objectFit: "contain", border: "2px solid black", height: "395px" }}
          />
        </div>
        <div className="col-9">
          <div className="card-body">
            <h3 className="card-title">{state.title}</h3>
            <hr />
            <p className="card-text">Description: {state.text}</p>
            <h5 className="card-price">{state.price}</h5>
            <h6 className="card-colors">Colors: {state.colors}</h6>
            <button 
              className="btn btn-warning mx-1"
              onClick={addToCart} 
            >
              Add to Cart
            </button>
            <button 
              className="btn btn-warning mx-1"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;