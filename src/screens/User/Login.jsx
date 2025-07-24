import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
  const navigate=useNavigate();

  const[email,setEmail]= useState("");
  const[password,setPassword] = useState("");


  const handleSubmit =async(e) => {
    e.preventDefault(); 
    console.log("Email:", email);
    console.log("Password:", password);

    try
    {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), });

  const data = await res.json();
    console.log("Server response:", data);

      if(data.success)
        {
        alert("Login successful!");
        navigate("/");
      }
      else
  {
        alert("Invalid credentials");}}
    catch(error)
    {
     console.error("Login error:", error);
    }
  };

  return (
    <div className="text-white py-5">
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
          Sign in
        </button>
        <button
          type="button"
          className="btn btn-primary mx-5"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
        <button
          type="button"
          className="btn btn-primary mx-5"
          onClick={() => navigate("/Alogin")}
        >
          Admin Login
        </button>
      </form>
    </div>
  );
}

export default Login;
