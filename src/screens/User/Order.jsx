import React from 'react'
import {useState,useEffect} from 'react'
import Card4 from '../../components/User/Card4'

function Order(){

  const [order,setorder]= useState([])

  useEffect(()=> {fetch_order()},[])

 const fetch_order=async()=>{
  try{
    const response=await fetch(`${process.env.REACT_APP_API_URL}/api/order`)
    const data= await response.json()
if(data.success){
  setorder(data.order)
}
else{
  console.error("error occured")
}
  }
  catch(err){
    console.error(err)

  }
 }

  return(
    <div>
      <h2 className="text-white mx-4">Showing Order</h2>
      {order.length>0?
      (order.map((
        item,index)=>(
        <Card4
        key={item.o_id}
        {...item}
        status="confirmed"

        />
      ))

      ):(
        <h2 className="text-white">No Order </h2>
      )}
    </div>
  )

}
export default Order