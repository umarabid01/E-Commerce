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
            <li className="list-group-item">1. hill James id-2131253325</li>
            <li className="list-group-item">2. hhJames id-25325131</li>
            <li className="list-group-item">3. shamess James id-2135353531</li>
          </ul>
          <button className="btn btn-dark m-3" onClick={()=>navigate("/auser")}>View more</button>
        </div>
        <div className="card my-3 mx-5" style={{ width: "25rem" }}>
          <div className="card-header">Order</div>
          <ul className="list-group ">
            <li className="list-group-item">1. laptop id-2131</li>
            <li className="list-group-item">2. gaming mouse id-2131</li>
            <li className="list-group-item">3. hardisk id-2131</li>
          </ul>
          <button className="btn btn-dark m-3"onClick={()=>navigate("/aorder")}>View more</button>
        </div>
        <div className="card my-3 mx-5" style={{ width: "25rem" }}>
          <div className="card-header">See Products</div>
          <ul className="list-group ">
            <li className="list-group-item">1. Laptop</li>
            <li className="list-group-item">2. Mouse</li>
            <li className="list-group-item">3. Keyboard</li>
          </ul>
          <button className="btn btn-dark m-3" onClick={()=>navigate("/aallproduct")}>View more</button>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-warning mx-2"onClick={()=> navigate("/aproduct")}>ADD product</button>
        <button className="btn btn-warning mx-2"onClick={()=> navigate("/aproduct")}>Edit product</button>
        <button className="btn btn-warning mx-2" onClick={()=> navigate("/aproduct")}>Delete product</button>
        <button className="btn btn-warning mx-2"  onClick={()=> navigate("/asales")}>See Analytics</button>
      </div>
    </div>
  );
}

export default Acard1;