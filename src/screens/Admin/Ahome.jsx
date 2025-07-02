import React from 'react'
import Aheader from '../../components/Admin/Aheader'
import Afooter from '../../components/Admin/Afooter'
import Acard1 from '../../components/Admin/Acard1'

function Ahome() {
  return (
    <div class="text-white d-flex flex-column min-vh-100">
        <main class="flex-grow-1">
        <Aheader/>
        <Acard1/>
      
        
        </main>
        <Afooter/>
    </div>
  )
}

export default Ahome