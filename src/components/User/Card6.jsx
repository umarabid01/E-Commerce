import React from 'react'

function Card6() {
  return (
    <div class="text-white">
        <h3>Card payment only</h3>
        <br></br>
        <div class="row">
        <div class="col-4">
        <label className="block text-sm font-medium mx-2">Card No</label>
            <input 
              type="text"
              placeholder="Card Number"
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
            </div>
            
            <div class="col-8">
            <label className="block text-sm font-medium mx-2 ">CVC</label>
            <input 

              type="text"
              placeholder="CVC Number"
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
            </div>
            </div>
            <label className="block text-sm font-medium py-5 mx-2 ">Expiry</label>
            <input 

              type="text"
              placeholder="MM/DD"
              className="mt-1 block w-full border border-gray-300 p-2 rounded"
            />
            <h4 class="mx-2 py-2">Total Amount:123134</h4>
            <button class="btn btn-danger mx-2">PAY now</button>
            
    </div>
  )
}

export default Card6