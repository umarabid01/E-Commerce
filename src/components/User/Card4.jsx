import React from 'react'

function Card4(props) {
  return (
     <div
      class="card mb-1 mx-5  "
      style={{ border: "2px solid yellow" }}
    >
      <div class="row ">
        <div class="col-3">
          <img
            src={props.imgsrc}
            class="img-fluid rounded-start"
            alt="img not found"
            style={{ height:"10rem", objectFit: "cover" }}
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
            <h5>order id: 1241553</h5>
            <h5>status : shipped</h5>
            <p>items: 4</p>
            <p>Estimated time: 2 days</p>

        </div>
        
        </div>
          </div>
  )
}

export default Card4