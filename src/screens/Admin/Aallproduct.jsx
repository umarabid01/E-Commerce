import React from 'react'
import Acard5 from '../../components/Admin/Acard5'
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'

function Aallproduct() {
  return (
   <div class="text-white d-flex flex-column min-vh-100">
        <main class="flex-grow-1">
        <Aheader/>
        <Acard5/>
            
        </main>
        <Afooter/>
    </div>
  )
}

export default Aallproduct