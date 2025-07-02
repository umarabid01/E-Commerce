import React from 'react'
import { useNavigate } from 'react-router-dom';
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'
import Footer from '../../components/User/Footer'

function Alogin() {
  const navigate=useNavigate()
  return (
    <div class="text-white d-flex flex-column min-vh-100">
        <main class="flex-grow-1">
      <Aheader/>
              
      <form>
        <div class="row my-5 mb-3 mx-5">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-4">
            <input type="email" class="form-control" id="inputEmail3"></input>
          </div>
        </div>
        <div class="row mb-3 mx-5">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-4">
            <input
              type="password" 
              class="form-control"
              id="inputPassword3"
            ></input>
          </div>
        </div>

        <button type="submit" class="btn btn-primary mx-5" onClick={()=> navigate('/ahome')}>
          Sign in
        </button>
    
      </form>
      
      </main>
      <Afooter/>
    </div>
  );
}

export default Alogin