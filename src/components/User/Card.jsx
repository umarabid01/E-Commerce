import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate=useNavigate()
  return (
    <div className="card" style={{ border:"2px solid yellow",width: "13rem",cursor:"pointer"}}
    >
      <img src={props.imgsrc} className="card-img-top" alt="img now found" 
      style={{height:"170px",objectFit:"contain"}} onClick={() => navigate("/detail")}/>
      <div className="card-body">
        <h5 className="card-title" onClick={() => navigate("/detail")}>{props.title} </h5>
        <p className="card-text">{props.text}</p>
        <h5 className="card-price">{props.price}</h5>
        <button class="btn btn-warning "
        onClick={() => navigate("/cart")}>add to cart</button>
      </div>
    </div>
  );
}

export default Card;
