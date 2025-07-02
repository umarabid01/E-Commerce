import React from "react";
import { useState } from "react";


function Card2(props) {
  const [quantity, setquantity] = useState(1);
  const increment= () =>setquantity(quantity+1)
  const decrement= () =>setquantity(quantity-1)
  return (
    <div
      class="card mb-4 mx-5 "
      style={{ border: "2px solid yellow" }}
    >
      <div class="row ">
        <div class="col-3">
          <img
            src={props.imgsrc}
            class="img-fluid rounded-start"
            alt="img not found"
            style={{ objectFit: "cover" }}
          ></img>
        </div>
        <div class="col-6">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">Description:{props.text}</p>
            <p class="card-price">Price:{props.price}</p>
            
          </div>
        </div>
        

        <div class="col-3">
          <h5>Quantity:</h5>
          <div class="row">
            <div class="col-2">
              <button class="btn btn-danger " onClick={decrement}>-</button>
            </div>
            <div class="col-6">
            <p className="border rounded  py-1 text-center ">{quantity}</p>
            </div>

            <div class="col-2">
            <button class="btn btn-danger"onClick={increment}>+</button>
            </div>
            
            <hr></hr>
            <h5>Total Price:  Rs.{quantity*parseInt(props.price)}</h5>
            <div class="row">

            <div class="col-3">
            <button class="btn btn-danger ">Remove </button>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
