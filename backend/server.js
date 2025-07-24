require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const db = new Client({
 host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl:{rejectUnauthorized:false }
});

db.connect().then(()=>console.log("DB connected")).catch(console.error);

app.post("/api/signup", async (req, res) => {
  const { first_name, last_name, email, password, address, city } = req.body;
  try {
    await db.query(
      "INSERT INTO profiles (first_name, last_name, email, password, address, city) VALUES ($1, $2, $3, $4, $5, $6)",
      [first_name, last_name, email, password, address, city]
    );
    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query(
      "SELECT * FROM profiles WHERE email = $1 AND password = $2",
      [email, password]
    );
    if(result.rows.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch(err) {
    res.status(500).json({ success: false, message: "Database error" });
  }
});

app.post("/api/alogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query(
      "SELECT * FROM admin WHERE email = $1 AND password = $2",
      [email, password]
    );
    if(result.rows.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch(err) {
    res.status(500).json({ success: false, message: "Database error" });
  }
});

app.post("/api/aproduct", async (req, res) => {
  const { id, name, price, description, stock, category, image } = req.body;
  try {
    await db.query(
      "INSERT INTO products (pd_id,name, price, description,stock,category,imageurl) VALUES ($1, $2, $3, $4, $5,$6,$7)",
      [id, name, price, description,stock,category,image]
    );
    res.json({ success: true, message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.put("/api/aproduct", async (req, res) => {
  const { e_id, e_name, e_price, e_description, e_stock, e_category, e_image } = req.body;
  try {
   const editresult= await db.query(
      "UPDATE products SET name = $1, price = $2, description = $3, stock = $4, category = $5, imageurl = $6 WHERE pd_id = $7",
      [e_name, e_price, e_description,e_stock,e_category,e_image,e_id]
    );
     if (editresult.rowCount > 0) {
      res.json({ success: true, message: "Product deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});
app.delete("/api/aproduct", async (req, res) => {
  const { d_id } = req.body;
  try {
    const result = await db.query(
      "DELETE FROM products WHERE pd_id = $1",
      [d_id]
    );
    
    if (result.rowCount > 0) {
      res.json({ success: true, message: "Product deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.get("/api/aallproducts", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.json({ success: true, products: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.get("/api/auser", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM profiles");
    res.json({ success: true, users: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.get("/api/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products ORDER BY pd_id");
    res.json({ success: true, products: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.post("/api/cart", async (req, res)=>{
  const { pd_id, quantity = 1, totalprice } = req.body;
  try{
    const existingItem = await db.query(
      "SELECT * FROM cart WHERE pd_id = $1",
      [pd_id]
    );
    if (existingItem.rows.length > 0){
      await db.query(
        "UPDATE cart SET quantity = quantity + $1, total_price = total_price + $2 WHERE pd_id = $3",
        [quantity, totalprice, pd_id]
      );
    } else {
      await db.query(
        "INSERT INTO cart (pd_id, quantity, total_price) VALUES ($1, $2, $3)",
        [pd_id, quantity, totalprice]
      );
    }
    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.get("/api/cart", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT c.*, p.name, p.description, p.imageurl, p.price
      FROM cart c JOIN products p 
      ON c.pd_id = p.pd_id ORDER BY c.c_id
    `);
    res.json({ success: true, cartItems: result.rows });
  }
  catch(err)
  {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.put("/api/cart/increment", async (req, res) => {
  const { pd_id, price } = req.body;
  try {
    const result = await db.query(
      "UPDATE cart SET quantity = quantity + 1, total_price = total_price + $1 WHERE pd_id = $2",
      [price, pd_id]
    );
    
    if (result.rowCount > 0) {
      res.json({ success: true, message: "Cart updated" });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.put("/api/cart/decrement", async (req, res) => {
  const { pd_id, price } = req.body;
  try {
    const result = await db.query(
      "UPDATE cart SET quantity = quantity - 1, total_price = total_price - $1 WHERE pd_id = $2 AND quantity > 1",
      [price, pd_id]
    );
    
    if (result.rowCount > 0) {
      res.json({ success: true, message: "Cart updated" });
    } else {
      res.status(404).json({ success: false, message: "Cannot decrease quantity" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});

app.delete("/api/cart/remove", async (req, res) => {
  const { pd_id } = req.body;
  try {
    const result = await db.query("DELETE FROM cart WHERE pd_id = $1", [pd_id]);
    
    if (result.rowCount > 0) {
      res.json({ success: true, message: "Item removed from cart" });
    } else {
      res.status(404).json({ success: false, message: "Item not found in cart" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Database error: " + err.message });
  }
});


app.post("/api/billing", async (req, res) => {
  const { orderItems, totalAmount, totalQuantity, paymentMethod } = req.body;
  try {
    const order = await db.query(
      "insert into orders(total_quantity, total_price, payment_method) VALUES ($1, $2, $3) returning *",
      [totalQuantity, totalAmount, paymentMethod]
    )
    const id=order.rows[0].o_id    
    for(const item of orderItems){
      await db.query(
        "insert into order_details (o_id,pd_id,quantity,total_price,payment_method) VALUES ($1,$2,$3,$4,$5)",
        [id,item.pd_id,item.quantity,item.total_price,paymentMethod]
      )}
    await db.query("delete from cart")
    res.json({ success: true, message: "Billing processed successfully", order: order.rows[0] 
    });
  } catch (err) {
    console.error("Billing error:", err);
    res.status(500).json({ success: false,  message: "Database error: " + err.message });
  }});

  app.get("/api/order",async(req,res)=>{
    try{
       const result = await db.query(`
      SELECT od.*, p.*
      FROM order_details od 
      JOIN products p ON od.pd_id = p.pd_id 
      ORDER BY od.o_id DESC
    `);
         res.json({
          success:true,
          order:result.rows
         })
    } catch(err) {
    console.error("Order fetch error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Database error: " + err.message 
    });
  }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));