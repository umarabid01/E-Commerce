import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Acard2() {
  const navigate=useNavigate();

  const[id,setid]=useState("")
  const[name,setname]=useState("")
  const[price,setprice]=useState("")
  const[description,setdescription]=useState("")
  const[stock,setstock]=useState("")
  const[category,setcategory]=useState("")
  const[image,setimage]=useState("")

   const[e_id,sete_id]=useState("")
  const[e_name,sete_name]=useState("")
  const[e_price,sete_price]=useState("")
  const[e_description,sete_description]=useState("")
  const[e_stock,sete_stock]=useState("")
  const[e_category,sete_category]=useState("")
  const[e_image,sete_image]=useState("")

  const[d_id,setd_id]=useState()


   const handleadd = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/aproduct`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id,name,price,description,stock,category,image }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Added successful!");
        navigate("/ahome");
      } else {
        alert(data.message || "added failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

   const handleedit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/aproduct`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({e_id,e_name,e_price,e_description,e_stock,e_category,e_image }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Edited successful!");
        navigate("/ahome");
      } else {
        alert(data.message || "Edit failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };


  const handledelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/aproduct`, {
        method:"DELETE",
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({d_id}),
      });
      const data = await response.json();
      if (data.success) {
        alert("deleted successful!");
        navigate("/ahome");
      } else {
        alert(data.message || "delete fail");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };


  return (
    <div className="container  text-white my-5">
      <h3>Add Product</h3>
<form onSubmit={handleadd}>
  <input className="form-control my-2" name="Id" placeholder="Product ID"
    value={id} onChange={(e) => setid(e.target.value)} />
  <input className="form-control my-2" name="name" placeholder="Product Name"
    value={name} onChange={(e) => setname(e.target.value)} />
  <input className="form-control my-2" name="price" placeholder="Price"
    value={price} onChange={(e) => setprice(e.target.value)} />
  <textarea className="form-control my-2" name="description" placeholder="Description"
    value={description} onChange={(e) => setdescription(e.target.value)} />
  <input className="form-control my-2" name="stock" placeholder="Stock"
    value={stock} onChange={(e) => setstock(e.target.value)} />
  <input className="form-control my-2" name="category" placeholder="Category"
    value={category} onChange={(e) => setcategory(e.target.value)} />
  <input className="form-control my-2" name="image" placeholder="Image URL"
    value={image} onChange={(e) => setimage(e.target.value)} />
  <button type="submit" className="btn btn-warning mt-2">Add Product</button>
</form>

      <br></br>
      <h3 >Edit Product</h3>
      <form onSubmit={handleedit}>
        <input className="form-control my-2" name="Id" placeholder="Product ID"
    value={e_id} onChange={(e) => sete_id(e.target.value)} />
  <input className="form-control my-2" name="name" placeholder="Product Name"
    value={e_name} onChange={(e) => sete_name(e.target.value)} />
  <input className="form-control my-2" name="price" placeholder="Price"
    value={e_price} onChange={(e) => sete_price(e.target.value)} />
  <textarea className="form-control my-2" name="description" placeholder="Description"
    value={e_description} onChange={(e) => sete_description(e.target.value)} />
  <input className="form-control my-2" name="stock" placeholder="Stock"
    value={e_stock} onChange={(e) => sete_stock(e.target.value)} />
  <input className="form-control my-2" name="category" placeholder="Category"
    value={e_category} onChange={(e) => sete_category(e.target.value)} />
  <input className="form-control my-2" name="image" placeholder="Image URL"
    value={e_image} onChange={(e) => sete_image(e.target.value)} />
  <button type="submit" className="btn btn-warning mt-2">Edit Product</button>
      </form>
      <br></br>

      <h3 >Delete Product</h3>
      <form onSubmit={handledelete}>
        <input className="form-control my-2" name="Id" placeholder="Product id" 
        value={d_id} onChange={(e)=> setd_id(e.target.value)}/>
        <button className="btn btn-danger mt-2">Delete Product</button>
      </form>
      
    </div>
  )
}

export default Acard2