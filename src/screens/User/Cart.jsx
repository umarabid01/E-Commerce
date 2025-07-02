import React from 'react'
import Card2 from '../../components/User/Card2'
import { useNavigate } from 'react-router-dom'

function Cart(){
    const navigate=useNavigate()
    return(
        <div class="text-white">
            <h2>-Showing  cart</h2>
        <Card2 title="laptop" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea esse, reiciendis minima, dicta veniam alias eius voluptates molestiae consequatur ut impedit aperiam? Sit eligendi sunt ab at beatae fugit optio!" price="1000RS" imgsrc="img\laptop.jpeg"/>
        <Card2 title="laptop" text="this is laptop" price="1000RS" imgsrc="img\laptop.jpeg"/>
        
        <h5>SubTotal: </h5>
        <button class="btn btn-info mx-5" onClick={()=> navigate("/billing")}>Checkout</button>
        </div>        
    )
}

export default Cart

