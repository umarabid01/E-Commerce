import React from 'react'
import { useNavigate } from 'react-router-dom';

function Aheader() {
  const navigate = useNavigate();
  return (
    <div>
      <header  className="bg-warning text-black  py-1">
        <div class="container-fluid my-2">
          <div class="row">
            <div className="col-4">
              <h2 onClick={() => navigate("/")} 
              style={{ cursor: "pointer" }}>
                Shop me
              </h2>
            </div>
            <div class="col-6">
              <h2 onClick={()=> navigate("/ahome")} style={{cursor:"pointer"}} >Admin Dashboard</h2>
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Aheader