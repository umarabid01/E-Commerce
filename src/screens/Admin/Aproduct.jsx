import React from 'react'
import Acard2 from '../../components/Admin/Acard2'
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'

function Aproduct() {
  return (
    <div class="text-white d-flex flex-column min-vh-100">
        <main class="flex-grow-1">
        <Aheader/>
        <Acard2/>
            
        </main>
        <Afooter/>
    </div>
      
  )
}

export default Aproduct