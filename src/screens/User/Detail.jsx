import React from 'react'
import Card3 from '../../components/User/Card3'

function Detail(){
    return(
        <div>
            <h2 class="text-white">This is Detailed page </h2>
        
        <Card3 title="powerbank" 
        text="details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus 
        nemo temporibus provident sed dolor asperiores magni, rem aut voluptatum optio veritatis 
        nostrum quis fuga est beatae officia. Quod, quibusdam!Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maxime ducimus nemo temporibus provident sed dolor asperiores magni, 
        rem aut voluptatum optio veritatis nostrum quis fuga est beatae officia. Quod, quibusdam!
        \details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus 
        nemo temporibus provident sed dolor asperiores magni, rem aut voluptatum optio veritatis 
        nostrum quis fuga est beatae officia. Quod, quibusdam!Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Maxime ducimus nemo temporibus provident sed dolor asperiores magni, 
        rem aut voluptatum optio veritatis nostrum quis fuga est beatae officia. Quod, quibusdam!" 
        price="Price:1000RS" imgsrc="img\powerbank.jpeg" colors="RED,GREEN,BLUE"/>
        
       </div>
    )
}


export default Detail