import React, { useEffect, useState } from "react";
import Card from "../../components/User/Card";

function Home() {
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/");
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.products);
      } else {
        console.error("Failed to load products");
      }
     
    } catch (err) {
      console.error("Error fetching products:", err);
  
    }
  };

 

  return (
    <div className="bg-white">
      <div className="container-fluid my-5 bg-dark">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.pd_id} className="col mx-4 mb-4">
                <Card 
                  pd_id={parseInt(product.pd_id)}
                  title={product.name} 
                  text={product.description} 
                  price={`Price: Rs.${product.price}`}
                  numericPrice={parseInt(product.price)}
                  imgsrc={product.imageurl} 
                />
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-white">
              <h3>No products found</h3>
              <p>Please add some products to the database</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;