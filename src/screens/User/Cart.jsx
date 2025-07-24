import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card2 from '../../components/User/Card2';

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("https://e-commerce-nine-gamma-70.vercel.app/api/cart");
      const data = await response.json();
      
      if (data.success) {
        setCartItems(data.cartItems);
      } else {
        console.error("Failed to load cart items");
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setLoading(false);
    }
  };

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + (item.total_price || 0), 0);
  };

   const handleCheckout = () => {
    const subtotal = calculateSubTotal();
    
    navigate("/billing", { 
      state: { 
        cartItems: cartItems,
        subtotal: subtotal
      }
    });
  };
  

  if (loading) {
    return <div className="text-white">Loading cart...</div>;
  }

  return (
    <div className="text-white">
      <h2 className="mb-4">Shopping Cart</h2>
      
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <Card2 
              key={item.c_id}
              pd_id={item.pd_id} 
              cartId={item.c_id}
              title={item.name} 
              text={item.description}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.total_price}
              imgsrc={item.imageurl}
              onUpdate={() => fetchCartItems()}
            />
          ))}
          <div className="card mx-5 mt-4 p-3" style={{ backgroundColor: '#2c2c2c', border: '1px solid #ffc107' }}>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-warning mb-0">SubTotal: Rs.{calculateSubTotal()}</h4>
              <button 
                className="btn btn-warning btn-lg px-4" 
                onClick={handleCheckout}
              >
                Checkout 
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Cart;