import React from 'react';
import { useNavigate } from 'react-router-dom';


function Acard1() {
  const navigate=useNavigate()
  return (
    
    <div className="d-flex flex-column">
      <div className="d-flex w-100 justify-content-center">
        <div className="card my-3 mx-5" style={{ width: "25rem" }}>
          <div className="card-header">User</div>
          <ul className="list-group ">
            <li className="list-group-item">User 1</li>
            <li className="list-group-item">User 2</li>
            <li className="list-group-item">User 3</li>
          </ul>
          <button className="btn btn-dark m-3" onClick={()=>navigate("/auser")}>View more</button>
        </div>
        <div className="card my-3 mx-5" style={{ width: "25rem" }}>
          <div className="card-header">Order</div>
          <ul className="list-group ">
            <li className="list-group-item">order 1</li>
            <li className="list-group-item">order 2</li>
            <li className="list-group-item">order 3</li>
          </ul>
          <button className="btn btn-dark m-3"onClick={()=>navigate("/aorder")}>View more</button>
        </div>
        <div className="card my-3 mx-5" style={{ width: "25rem" }}>
          <div className="card-header">See Products</div>
          <ul className="list-group ">
            <li className="list-group-item">product 1</li>
            <li className="list-group-item">product 2</li>
            <li className="list-group-item">product 3</li>
          </ul>
          <button className="btn btn-dark m-3" onClick={()=>navigate("/aallproduct")}>View more</button>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-warning mx-2"onClick={()=> navigate("/aproduct")}>ADD product</button>
        <button className="btn btn-warning mx-2"onClick={()=> navigate("/aproduct")}>Edit product</button>
        <button className="btn btn-warning mx-2" onClick={()=> navigate("/aproduct")}>Delete product</button>
        <button className="btn btn-warning mx-2"  onClick={()=> navigate("/asales")}>See Analytics</button>
        <button className="btn btn-success mx-2"  onClick={()=> navigate("/salesdata")}>📊 Sales Data</button>
      </div>
    </div>
  );
}

export default Acard1;