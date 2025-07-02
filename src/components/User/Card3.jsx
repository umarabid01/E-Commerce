import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card3(props){
    const navigate=useNavigate()
    return(
        <div
      class="card mb-4 mx-5 "
      style={{ border: "2px solid yellow" }}>

      <div class="row ">
        <div class="col-3">
          <img src={props.imgsrc} class="img-fluid rounded-start" alt="img not found" style={{ objectFit: "cover" }}
          ></img>
        </div>
        <div class="col-9">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">Description:{props.text}</p>
            <h5 class="card-price">Price:{props.price}</h5>
            <h6 class="card-colors">Colors:{props.colors}</h6>
            <button class="btn btn-warning mx-1"
        onClick={() => navigate("/cart")}>Add to Cart</button>
            
          </div>
        </div>
        </div>
        </div>
    
    )
}

export default Card3