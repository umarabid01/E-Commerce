import React, { useState } from "react";

function Card2(props) {
  const [quantity, setQuantity] = useState(props.quantity || 1);
  
  const increment = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cart/increment`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          pd_id: props.pd_id, 
          price: parseInt(props.price) 
        }),
      });
      
      if (response.ok) {
        setQuantity(quantity + 1);
        if (props.onUpdate) props.onUpdate(); // Refresh cart
      }
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  };
  
  const decrement = async () => {
    if (quantity > 1) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cart/decrement`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            pd_id: props.pd_id, 
            price: parseInt(props.price) 
          }),
        });
        
        if (response.ok) {
          setQuantity(quantity - 1);
          if (props.onUpdate) props.onUpdate(); // Refresh cart
        }
      } catch (err) {
        console.error("Error updating cart:", err);
      }
    }
  };

const handleRemove=async() => {
  try{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cart/remove`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        pd_id: parseInt(props.pd_id)
      }),
    });
    const data = await response.json();
    if (data.success) {
      alert("Item removed from cart!");
      if (props.onUpdate) props.onUpdate();
    } else {
      alert(data.message || "Failed to remove item");
    }
  } catch (err) {
    alert("Error: " + err.message);
  }
};

  const calculateTotal = () => {
    return quantity * parseInt(props.price);
  };

  return (
    <div className="card mb-4 mx-5" style={{ border: "2px solid yellow" }}>
      <div className="row">
        <div className="col-3">
          <img
            src={props.imgsrc}
            className="img-fluid rounded-start"
            alt="Product"
            style={{ objectFit: "cover", height: "200px" }}
          />
        </div>
        <div className="col-6">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Description: {props.text}</p>
            <p className="card-price">Unit Price: Rs.{props.price}</p>
          </div>
        </div>
        <div className="col-3">
          <h5>Quantity:</h5>
          <div className="row">
            <div className="col-2">
              <button className="btn btn-danger" onClick={decrement}>-</button>
            </div>
            <div className="col-6">
              <p className="border rounded py-1 text-center">{quantity}</p>
            </div>
            <div className="col-2">
              <button className="btn btn-danger" onClick={increment}>+</button>
            </div>
          </div>
          <hr />
          <h5>Total Price: Rs.{calculateTotal()}</h5>
          <div className="row">
            <div className="col-12">
              <button 
                className="btn btn-danger" 
                onClick={handleRemove}  // Use local handleRemove function
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;