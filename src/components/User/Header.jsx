import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header  className="bg-warning text-black  py-1">
        <div class="container-fluid my-2">
          <div class="row">
            <div className="col-2">
              <h2 onClick={() => navigate("/")} 
              style={{ cursor: "pointer" }}>
                Shop me
              </h2>
            </div>
            <div class="col-5">
              <div class="input-group mb-3 ">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="search"
                ></input>
              </div>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger ">
                search
              </button>
            </div>

            <div class="col-3 ">
              <div class="row">
                <div class="col">
                  <button
                    onClick={() => navigate("/cart")}
                    type="button"
                    class="btn btn-dark border-white "
                  >
                    cart
                  </button>
                </div>
                <div class="col">
                  <button
                    onClick={() => navigate("/order")}
                    type="button"
                    class="btn btn-dark border-white"
                  >
                    order
                  </button>
                </div>
                <div class="col">
                  <button
                    onClick={() => navigate("/login")}
                    type="button"
                    class="btn btn-dark border-white"
                  >
                    login
                  </button>
                </div>
                <div class="col">
                  <button
                    onClick={() => navigate("/profile")}
                    type="button"
                    class="btn btn-dark rounded-circle border-white" 
                  >
                    P
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
