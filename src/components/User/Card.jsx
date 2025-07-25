import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  const godetail=()=> {
    navigate('/detail',{state:props});
  };

  const addtocart = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pd_id: props.pd_id,
          quantity:1,
          totalprice: props.numericPrice
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Item added to cart!");
      } else {
        alert(data.message || "Failed to add to cart");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  
  return (
    <div className="card" style={{ border: "3px solid yellow", width: "13rem", cursor: "pointer" }}>
      <img 
        src={props.imgsrc} 
        className="card-img-top" 
        alt="Product" 
        style={{ height: "170px", objectFit: "contain" }} 
        onClick={godetail}
      />
      <div className="card-body">
        <h5 className="card-title" onClick={godetail}>{props.title}</h5>
        <p className="card-text">{props.text.slice(0,20)}</p>
        <h5 className="card-price">{props.price}</h5>
        <button 
          className="btn btn-warning"
          onClick={addtocart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;