import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'

function Alogin() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const res = await fetch("http://localhost:5000/api/alogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (data.success) {
        alert("Login successful!");
        navigate("/ahome");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="text-white d-flex flex-column min-vh-100 ">
      <Aheader/>
    <main className="flex-grow-1 my-4">
        
        
        <form onSubmit={handleSubmit}>
          <div className="row mb-3 mx-5">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3 mx-5">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-4">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mx-5">
            Admin Sign in
          </button>
        </form>
        
      </main>
      <Afooter/>
    </div>
  );
}

export default Alogin;