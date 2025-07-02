import React from 'react'

function Acard4() {
  return (
    <div className="container  text-white my-5">
      <h3>Add Product</h3>
      <form>
        <input className="form-control my-2" name="Id" placeholder="Product id"  />
        <input className="form-control my-2" name="name" placeholder="Product Name"  />
        <input className="form-control my-2" name="price" placeholder="Price"  />
        <textarea className="form-control my-2" name="description" placeholder="Description" />
        <input className="form-control my-2" name="image" placeholder="Image " />
        <button className="btn btn-warning mt-2">Add Product</button>
      </form>
      <br></br>
      <h3 >Edit Product</h3>
      <form>
        <input className="form-control my-2" name="Id" placeholder="Product id"  />
        <input className="form-control my-2" name="name" placeholder="Product Name"  />
        <input className="form-control my-2" name="price" placeholder="Price"  />
        <textarea className="form-control my-2" name="description" placeholder="Description" />
        <input className="form-control my-2" name="image" placeholder="Image " />
        <button className="btn btn-warning mt-2">Update Product</button>
      </form>
      <br></br>
      <h3 >Delete Product</h3>
      <form>
        <input className="form-control my-2" name="Id" pl aceholder="Product id"  />

        <button className="btn btn-danger mt-2">Delete Product</button>
      </form>
      
    </div>
  )
}

export default Acard4